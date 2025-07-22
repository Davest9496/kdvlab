import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration matching your actual Zoho setup
const EMAIL_CONFIG = {
  business: {
    info: 'info@kdvlab.com', // Primary business email
    accounts: 'accounts@kdvlab.com', // Billing and financial
    newsletter: 'newsletter@kdvlab.com', // Marketing and newsletter
  },
} as const;

// Updated schema without budget option
const contactSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  projectType: z.enum([
    'web-development',
    'mobile-app',
    'e-commerce',
    'web-design',
    'consulting',
    'maintenance',
    'other',
  ]),
  timeline: z
    .enum(['urgent', '1-month', '2-3-months', '3-6-months', 'flexible'])
    .optional(),
  message: z.string().min(10).max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Determine which Zoho email to send to
    const recipientEmail = determineRecipient(data);

    // Send notification to appropriate KDVLab Zoho email
    await sendBusinessNotification(data, recipientEmail);

    // Send auto-response to client
    await sendClientConfirmation(data);

    // Log successful submission for monitoring
    console.log('Contact form submission successful:', {
      fullName: data.fullName,
      email: data.email,
      projectType: data.projectType,
      timeline: data.timeline,
      recipient: recipientEmail,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We'll respond within 24 hours.",
    });
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Please check your form data and try again.',
          details: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error:
          'Failed to send message. Please try again or email us directly at info@kdvlab.com',
      },
      { status: 500 }
    );
  }
}

function determineRecipient(data: ContactFormData): string {
  const messageContent = data.message.toLowerCase();

  // Route billing/payment inquiries to accounts@kdvlab.com
  if (
    data.projectType === 'consulting' ||
    messageContent.includes('invoice') ||
    messageContent.includes('payment') ||
    messageContent.includes('billing') ||
    messageContent.includes('accounting') ||
    messageContent.includes('refund')
  ) {
    return EMAIL_CONFIG.business.accounts;
  }

  // Route newsletter/marketing inquiries to newsletter@kdvlab.com
  if (
    messageContent.includes('newsletter') ||
    messageContent.includes('marketing') ||
    messageContent.includes('subscribe') ||
    messageContent.includes('unsubscribe')
  ) {
    return EMAIL_CONFIG.business.newsletter;
  }

  // Default to main business email for projects
  return EMAIL_CONFIG.business.info;
}

async function sendBusinessNotification(
  data: ContactFormData,
  recipient: string
) {
  const projectTypeLabels: Record<string, string> = {
    'web-development': 'Web Development',
    'mobile-app': 'Mobile App Development',
    'e-commerce': 'E-commerce Solutions',
    'web-design': 'Web Design & UI/UX',
    consulting: 'Technical Consulting',
    maintenance: 'Website Maintenance',
    other: 'Other',
  };

  const timelineLabels: Record<string, string> = {
    urgent: 'URGENT (ASAP)',
    '1-month': 'Within 1 Month',
    '2-3-months': '2-3 Months',
    '3-6-months': '3-6 Months',
    flexible: 'Flexible Timeline',
  };

  // Create priority indicator
  const priorityFlag = data.timeline === 'urgent' ? '🚨 URGENT ' : '🚀 ';
  const ccEmail =
    recipient !== EMAIL_CONFIG.business.info
      ? EMAIL_CONFIG.business.info
      : undefined;

  await resend.emails.send({
    from: EMAIL_CONFIG.business.newsletter, // Using newsletter@ as sender
    to: recipient,
    cc: ccEmail,
    subject: `${priorityFlag}New Project Inquiry: ${projectTypeLabels[data.projectType]} - ${data.fullName}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #12A4ED 0%, #47A7EF 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 800;">KDVLab</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0; font-size: 16px;">New Project Inquiry</p>
        </div>

        <div style="padding: 30px 20px; background: #ffffff;">
          <!-- Priority Alert for Urgent Projects -->
          ${
            data.timeline === 'urgent'
              ? `
            <div style="background: #fee2e2; border: 2px solid #fecaca; border-radius: 8px; padding: 20px; margin-bottom: 25px; text-align: center;">
              <p style="color: #dc2626; font-weight: 700; margin: 0; font-size: 18px;">
                🚨 URGENT PROJECT - Respond within 2 hours
              </p>
            </div>
          `
              : ''
          }

          <!-- Contact Information -->
          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #12A4ED;">
            <h3 style="margin: 0 0 15px 0; color: #1e293b; font-size: 18px; font-weight: 600;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${data.email}" style="color: #12A4ED; text-decoration: none; font-weight: 500;">${data.email}</a>
                </td>
              </tr>
              ${
                data.phone
                  ? `
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone:</td>
                  <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${data.phone}</td>
                </tr>
              `
                  : ''
              }
            </table>
          </div>

          <!-- Project Details -->
          <div style="background: #f0f9ff; padding: 25px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #0369a1;">
            <h3 style="margin: 0 0 15px 0; color: #0369a1; font-size: 18px; font-weight: 600;">Project Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #0369a1; font-weight: 600; width: 120px;">Type:</td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${projectTypeLabels[data.projectType]}</td>
              </tr>
              ${
                data.timeline
                  ? `
                <tr>
                  <td style="padding: 8px 0; color: #0369a1; font-weight: 600;">Timeline:</td>
                  <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">
                    <span style="${data.timeline === 'urgent' ? 'background: #fee2e2; color: #dc2626; padding: 4px 8px; border-radius: 4px; font-weight: 700;' : ''}">${timelineLabels[data.timeline]}</span>
                  </td>
                </tr>
              `
                  : ''
              }
            </table>
          </div>

          <!-- Message -->
          <div style="background: #fefce8; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #a16207;">
            <h3 style="margin: 0 0 15px 0; color: #a16207; font-size: 18px; font-weight: 600;">Project Message</h3>
            <div style="color: #1e293b; line-height: 1.6; white-space: pre-wrap; background: #ffffff; padding: 15px; border-radius: 4px; border: 1px solid #e5e7eb;">${data.message}</div>
          </div>

          <!-- Action Items -->
          <div style="background: #ecfdf5; border: 2px solid #d1fae5; border-radius: 8px; padding: 25px;">
            <h3 style="margin: 0 0 15px 0; color: #065f46; font-size: 18px; font-weight: 600;">Next Steps</h3>
            <ul style="color: #065f46; margin: 0; padding-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;"><strong>Response:</strong> ${data.timeline === 'urgent' ? 'Reply within 2 hours (urgent)' : 'Respond within 24 hours'}</li>
              <li style="margin-bottom: 8px;"><strong>Review:</strong> Analyze project requirements and ask clarifying questions</li>
              <li style="margin-bottom: 8px;"><strong>Action:</strong> ${data.projectType === 'consulting' ? 'Schedule a consultation call' : 'Prepare initial proposal or quote'}</li>
              <li><strong>Follow-up:</strong> Add to CRM and set up project tracking</li>
            </ul>
          </div>

          <!-- Quick Actions -->
          <div style="margin-top: 25px; text-align: center;">
            <a href="mailto:${data.email}?subject=Re: Your ${projectTypeLabels[data.projectType]} Project Inquiry" 
               style="display: inline-block; background: #12A4ED; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-right: 10px;">
              Reply to Client
            </a>
            <a href="https://calendly.com/kdvlab/consultation" 
               style="display: inline-block; background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
              Schedule Call
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8fafc; padding: 20px; text-align: center; color: #64748b; font-size: 12px; border-radius: 0 0 8px 8px;">
          <p style="margin: 0;">This email was sent from the KDVLab contact form at ${new Date().toLocaleString()}</p>
          <p style="margin: 5px 0 0 0;">
            <a href="https://kdvlab.com" style="color: #12A4ED; text-decoration: none;">kdvlab.com</a> | 
            Routed to: ${recipient}
          </p>
        </div>
      </div>
    `,
  });
}

async function sendClientConfirmation(data: ContactFormData) {
  const projectTypeDisplay = data.projectType
    .replace('-', ' ')
    .replace(/\b\w/g, l => l.toUpperCase());

  await resend.emails.send({
    from: EMAIL_CONFIG.business.newsletter, // Using newsletter@ for client communications
    to: data.email,
    subject: "Thank you for contacting KDVLab - We'll be in touch soon",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #12A4ED 0%, #47A7EF 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 800;">Thank You!</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">We've received your project inquiry</p>
        </div>

        <div style="padding: 30px 20px; background: #ffffff;">
          <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Hi ${data.fullName},</p>
          
          <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
            Thank you for reaching out to KDVLab! We're excited about the possibility of working on your 
            <strong style="color: #12A4ED;">${projectTypeDisplay}</strong> project.
          </p>

          <!-- Project Summary -->
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #12A4ED;">
            <h4 style="margin: 0 0 10px 0; color: #1e293b; font-size: 16px;">Your Project Summary:</h4>
            <p style="margin: 5px 0; color: #64748b;"><strong>Type:</strong> ${projectTypeDisplay}</p>
            ${data.timeline ? `<p style="margin: 5px 0; color: #64748b;"><strong>Timeline:</strong> ${data.timeline.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>` : ''}
          </div>
          
          <!-- What's Next -->
          <div style="background: #f0f9ff; padding: 25px; border-radius: 8px; margin: 25px 0;">
            <h3 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: 600;">What happens next?</h3>
            <div style="margin-bottom: 15px;">
              <div style="display: flex; margin-bottom: 15px;">
                <div style="background: #12A4ED; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; margin-right: 15px; flex-shrink: 0; margin-top: 2px;">1</div>
                <div>
                  <div style="font-weight: 600; color: #1e293b; margin-bottom: 4px;">${data.timeline === 'urgent' ? 'Within 2 hours' : 'Within 24 hours'}</div>
                  <div style="color: #64748b; font-size: 14px; line-height: 1.5;">We'll review your requirements and send a detailed response${data.timeline === 'urgent' ? ' (prioritized as urgent)' : ''}</div>
                </div>
              </div>
              <div style="display: flex; margin-bottom: 15px;">
                <div style="background: #12A4ED; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; margin-right: 15px; flex-shrink: 0; margin-top: 2px;">2</div>
                <div>
                  <div style="font-weight: 600; color: #1e293b; margin-bottom: 4px;">Initial consultation</div>
                  <div style="color: #64748b; font-size: 14px; line-height: 1.5;">We'll schedule a call to discuss your project in detail and answer any questions</div>
                </div>
              </div>
              <div style="display: flex;">
                <div style="background: #12A4ED; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; margin-right: 15px; flex-shrink: 0; margin-top: 2px;">3</div>
                <div>
                  <div style="font-weight: 600; color: #1e293b; margin-bottom: 4px;">Custom proposal</div>
                  <div style="color: #64748b; font-size: 14px; line-height: 1.5;">You'll receive a detailed proposal with timeline, pricing, and project roadmap</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Resources -->
          <div style="margin: 25px 0;">
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              In the meantime, feel free to:
            </p>
            <ul style="color: #64748b; line-height: 1.6; margin-bottom: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Check out our <a href="https://kdvlab.com/work" style="color: #12A4ED; text-decoration: none; font-weight: 500;">recent work</a> and case studies</li>
              <li style="margin-bottom: 8px;">Read about our <a href="https://kdvlab.com/process" style="color: #12A4ED; text-decoration: none; font-weight: 500;">development process</a></li>
              <li style="margin-bottom: 8px;">Email us directly at <a href="mailto:info@kdvlab.com" style="color: #12A4ED; text-decoration: none; font-weight: 500;">info@kdvlab.com</a></li>
              <li>Browse our <a href="https://kdvlab.com/blog" style="color: #12A4ED; text-decoration: none; font-weight: 500;">blog</a> for web development insights</li>
            </ul>
          </div>

          <!-- Urgent/Standard Notice -->
          ${
            data.timeline === 'urgent'
              ? `
            <div style="background: #fee2e2; border: 2px solid #fecaca; border-radius: 8px; padding: 20px; margin: 25px 0; text-align: center;">
              <p style="color: #dc2626; font-weight: 600; margin: 0; font-size: 16px;">
                🚨 <strong>Urgent project noted!</strong> We'll prioritize your inquiry and respond within 2 hours during business hours.
              </p>
            </div>
          `
              : `
            <div style="background: #ecfdf5; border: 1px solid #d1fae5; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <p style="color: #065f46; margin: 0; font-size: 16px; text-align: center;">
                <strong>Need urgent help?</strong> Reply to this email with "URGENT" in the subject line or call us directly.
              </p>
            </div>
          `
          }

          <!-- CTA Buttons -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://calendly.com/kdvlab/consultation" 
               style="display: inline-block; background: #12A4ED; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; margin-right: 10px;">
              Schedule a Call
            </a>
            <a href="https://kdvlab.com/work" 
               style="display: inline-block; background: transparent; color: #12A4ED; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; border: 2px solid #12A4ED;">
              View Our Work
            </a>
          </div>

          <!-- Signature -->
          <div style="margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 25px;">
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
              Best regards,<br>
              <strong>The KDVLab Team</strong><br>
              <a href="https://kdvlab.com" style="color: #12A4ED; text-decoration: none;">kdvlab.com</a> | 
              <a href="mailto:info@kdvlab.com" style="color: #12A4ED; text-decoration: none;">info@kdvlab.com</a>
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8fafc; padding: 20px; text-align: center; color: #64748b; font-size: 12px; border-radius: 0 0 8px 8px;">
          <p style="margin: 0 0 5px 0;">This is an automated confirmation from KDVLab</p>
          <p style="margin: 0;">If you have any immediate questions, reply to this email or contact us at info@kdvlab.com</p>
        </div>
      </div>
    `,
  });
}
