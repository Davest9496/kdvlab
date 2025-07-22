import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const confirmSchema = z.object({
  token: z.string().min(1),
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token, email } = confirmSchema.parse(body);

    // Here you would typically:
    // 1. Verify the token against your database
    // 2. Mark the email as confirmed
    // 3. Add to your email service (Resend, Mailchimp, etc.)

    // For now, we'll simulate success
    console.log('Confirming newsletter subscription:', { email, token });

    // TODO: Implement actual confirmation logic
    // const isValidToken = await verifyConfirmationToken(token, email);
    // if (!isValidToken) {
    //   return NextResponse.json(
    //     { error: 'Invalid or expired confirmation token' },
    //     { status: 400 }
    //   );
    // }

    // await confirmEmailSubscription(email);

    return NextResponse.json({
      success: true,
      message: 'Your newsletter subscription has been confirmed successfully!',
    });
  } catch (error) {
    console.error('Newsletter confirmation error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to confirm subscription' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Handle GET requests for email links
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  if (!token || !email) {
    return NextResponse.redirect('/newsletter?error=invalid-link');
  }

  // Redirect to the confirmation page
  return NextResponse.redirect(
    `/api/newsletter/confirm?token=${token}&email=${email}`
  );
}
