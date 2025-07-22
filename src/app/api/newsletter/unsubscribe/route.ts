import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';
import { randomUUID } from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

const unsubscribeSchema = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const { email } = unsubscribeSchema.parse(await request.json());

    // Find subscriber
    const { data: subscriber } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('email', email)
      .eq('status', 'confirmed')
      .single();

    if (!subscriber) {
      return NextResponse.json(
        {
          error: 'Email not found in our newsletter list.',
        },
        { status: 404 }
      );
    }

    // Generate unsubscribe token
    const unsubscribeToken = randomUUID();

    // Update subscriber with token
    await supabase
      .from('newsletter_subscribers')
      .update({
        metadata: {
          ...subscriber.metadata,
          unsubscribe_token: unsubscribeToken,
        },
      })
      .eq('id', subscriber.id);

    // Send unsubscribe link
    const unsubscribeUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/newsletter/unsubscribe?token=${unsubscribeToken}`;

    await resend.emails.send({
      from: 'newsletter@kdvlab.com',
      to: email,
      subject: 'Unsubscribe from KDVLab Newsletter',
      html: `
        <p>Click <a href="${unsubscribeUrl}">here to unsubscribe</a> from the KDVLab newsletter.</p>
        <p>If you didn't request this, you can safely ignore this email.</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Unsubscribe link sent to your email.',
    });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
