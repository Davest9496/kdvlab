import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { EMAIL_CONFIG } from '@/lib/email-config';

const resend = new Resend(process.env.RESEND_API_KEY);

const newsletterSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1).max(50).optional(),
  interests: z
    .array(
      z.enum([
        'web-development',
        'design-trends',
        'performance-tips',
        'case-studies',
        'business-growth',
      ])
    )
    .optional(),
  source: z.string().optional(), // Track where they signed up
});

export async function POST(request: NextRequest) {
  try {
    const data = newsletterSchema.parse(await request.json());

    // Add to Mailchimp or your preferred service
    await addToNewsletterService(data);

    // Send welcome email
    await sendWelcomeEmail(data);

    // Notify newsletter manager
    await notifyNewsletterTeam(data);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed! Check your email for confirmation.',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Subscription failed. Please try again.' },
      { status: 500 }
    );
  }
}

async function addToNewsletterService(data: any) {
  // Option 1: Mailchimp integration
  if (process.env.MAILCHIMP_API_KEY) {
    const response = await fetch(
      `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_API_KEY}`).toString('base64')}`,
        },
        body: JSON.stringify({
          email_address: data.email,
          status: 'pending', // Double opt-in
          merge_fields: {
            FNAME: data.firstName || '',
            INTERESTS: data.interests?.join(',') || '',
            SOURCE: data.source || 'website',
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Mailchimp error:', error);
      throw new Error('Failed to add to newsletter');
    }
  }

  // Option 2: Store in database for manual management
  // This would require a database setup
}

async function sendWelcomeEmail(data: any) {
  await resend.emails.send({
    from: EMAIL_CONFIG.business.newsletter,
    to: data.email,
    subject: '🎉 Welcome to KDVLab Updates!',
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, #12A4ED 0%, #47A7EF 100%); color: white; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 32px;">Welcome to KDVLab! 🚀</h1>
          <p style="margin: 15px 0 0 0; font-size: 18px; opacity: 0.9;">Thanks for joining our community</p>
        </div>
        
        <div style="padding: 30px 20px; background: white; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          ${data.firstName ? `<p>Hi ${data.firstName},</p>` : '<p>Hi there,</p>'}
          
          <p>Welcome to the KDVLab newsletter! We're thrilled to have you on board.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 6px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">What to expect:</h3>
            <ul style="color: #475569; line-height: 1.6; margin-bottom: 0;">
              <li><strong>Monthly insights</strong> on web development trends</li>
              <li><strong>Behind-the-scenes</strong> case studies from our projects</li>
              <li><strong>Performance tips</strong> to improve your website</li>
              <li><strong>Industry news</strong> that actually matters</li>
              <li><strong>Exclusive offers</strong> for subscribers</li>
            </ul>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://kdvlab.com/work" 
               style="display: inline-block; background: #12A4ED; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: 600;">
              Check Out Our Work
            </a>
          </div>

          <p style="font-size: 14px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
            You can unsubscribe at any time by clicking the link in our emails. 
            For questions, reply to this email or contact us at 
            <a href="mailto:newsletter@kdvlab.com" style="color: #12A4ED;">newsletter@kdvlab.com</a>
          </p>
        </div>
      </div>
    `,
  });
}

async function notifyNewsletterTeam(data: any) {
  await resend.emails.send({
    from: EMAIL_CONFIG.business.newsletter,
    to: EMAIL_CONFIG.business.newsletter,
    subject: `📧 New Newsletter Subscription: ${data.email}`,
    html: `
      <h2>New Newsletter Subscription</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.firstName ? `<p><strong>Name:</strong> ${data.firstName}</p>` : ''}
      ${data.interests ? `<p><strong>Interests:</strong> ${data.interests.join(', ')}</p>` : ''}
      <p><strong>Source:</strong> ${data.source || 'Website'}</p>
      <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
    `,
  });
}
