interface EmailTemplate {
  subject: string;
  html: string;
  text?: string;
}

interface ContactNotificationData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  message: string;
}

interface WelcomeEmailData {
  firstName?: string;
  email: string;
  interests?: string[];
}

export const emailTemplates = {
  contactNotification: (data: ContactNotificationData): EmailTemplate => ({
    subject: `🚀 New Project Inquiry: ${data.projectType} - ${data.name}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #12A4ED 0%, #47A7EF 100%); padding: 30px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 800;">KDVLab</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">New Project Inquiry</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px 20px;">
          <!-- Priority Alert for Urgent Projects -->
          ${
            data.timeline === 'urgent'
              ? `
            <div style="background: #fee2e2; border: 1px solid #fecaca; border-radius: 6px; padding: 15px; margin-bottom: 20px;">
              <p style="color: #dc2626; font-weight: 600; margin: 0;">
                🚨 URGENT PROJECT - Respond within 2 hours
              </p>
            </div>
          `
              : ''
          }

          <!-- Contact Information -->
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #1e293b; font-size: 18px;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 5px 0; color: #64748b; font-weight: 600; width: 100px;">Name:</td>
                <td style="padding: 5px 0; color: #1e293b;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; color: #64748b; font-weight: 600;">Email:</td>
                <td style="padding: 5px 0;"><a href="mailto:${data.email}" style="color: #12A4ED; text-decoration: none;">${data.email}</a></td>
              </tr>
              ${
                data.company
                  ? `
                <tr>
                  <td style="padding: 5px 0; color: #64748b; font-weight: 600;">Company:</td>
                  <td style="padding: 5px 0; color: #1e293b;">${data.company}</td>
                </tr>
              `
                  : ''
              }
            </table>
          </div>

          <!-- Project Details -->
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #0369a1; font-size: 18px;">Project Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 5px 0; color: #0369a1; font-weight: 600; width: 100px;">Type:</td>
                <td style="padding: 5px 0; color: #1e293b;">${data.projectType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
              </tr>
              ${
                data.budget
                  ? `
                <tr>
                  <td style="padding: 5px 0; color: #0369a1; font-weight: 600;">Budget:</td>
                  <td style="padding: 5px 0; color: #1e293b;">${data.budget.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                </tr>
              `
                  : ''
              }
              ${
                data.timeline
                  ? `
                <tr>
                  <td style="padding: 5px 0; color: #0369a1; font-weight: 600;">Timeline:</td>
                  <td style="padding: 5px 0; color: #1e293b;">${data.timeline.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                </tr>
              `
                  : ''
              }
            </table>
          </div>

          <!-- Message -->
          <div style="background: #fefce8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #a16207; font-size: 18px;">Project Message</h3>
            <div style="color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
          </div>

          <!-- Action Items -->
          <div style="background: #ecfdf5; border: 1px solid #d1fae5; border-radius: 8px; padding: 20px;">
            <h3 style="margin: 0 0 10px 0; color: #065f46; font-size: 16px;">Next Steps</h3>
            <ul style="color: #065f46; margin: 0; padding-left: 20px;">
              <li>Respond within ${data.timeline === 'urgent' ? '2 hours' : '24 hours'}</li>
              <li>Review project requirements and ask clarifying questions</li>
              <li>${data.projectType === 'consultation' ? 'Schedule a consultation call' : 'Prepare initial proposal or quote'}</li>
              <li>Add to CRM/project tracking system</li>
            </ul>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8fafc; padding: 20px; text-align: center; color: #64748b; font-size: 12px;">
          <p style="margin: 0;">This email was sent from the KDVLab contact form</p>
          <p style="margin: 5px 0 0 0;">
            <a href="https://kdvlab.com" style="color: #12A4ED; text-decoration: none;">kdvlab.com</a>
          </p>
        </div>
      </div>
    `,
  }),

  clientConfirmation: (data: ContactNotificationData): EmailTemplate => ({
    subject: "Thank you for contacting KDVLab - We'll be in touch soon",
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #12A4ED 0%, #47A7EF 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 800;">Thank You!</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">We've received your project inquiry</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px 20px;">
          <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">Hi ${data.name},</p>
          
          <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">
            Thank you for reaching out to KDVLab! We're excited about the possibility of working on your 
            <strong>${data.projectType.replace('-', ' ')}</strong> project.
          </p>
          
          <!-- What's Next -->
          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin: 25px 0;">
            <h3 style="margin: 0 0 15px 0; color: #1e293b; font-size: 20px;">What happens next?</h3>
            <div style="space-y: 10px;">
              <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                <div style="background: #12A4ED; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; margin-right: 12px; flex-shrink: 0;">1</div>
                <div>
                  <div style="font-weight: 600; color: #1e293b; margin-bottom: 2px;">Within 24 hours</div>
                  <div style="color: #64748b; font-size: 14px;">We'll review your requirements and send a detailed response</div>
                </div>
              </div>
              <div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                <div style="background: #12A4ED; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; margin-right: 12px; flex-shrink: 0;">2</div>
                <div>
                  <div style="font-weight: 600; color: #1e293b; margin-bottom: 2px;">Initial consultation</div>
                  <div style="color: #64748b; font-size: 14px;">We'll schedule a call to discuss your project in detail</div>
                </div>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <div style="background: #12A4ED; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; margin-right: 12px; flex-shrink: 0;">3</div>
                <div>
                  <div style="font-weight: 600; color: #1e293b; margin-bottom: 2px;">Custom proposal</div>
                  <div style="color: #64748b; font-size: 14px;">You'll receive a detailed proposal with timeline and pricing</div>
                </div>
              </div>
            </div>
          </div>

          <!-- In the meantime -->
          <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
            In the meantime, feel free to:
          </p>
          <ul style="color: #64748b; line-height: 1.6; margin-bottom: 25px;">
            <li style="margin-bottom: 5px;">Check out our <a href="https://kdvlab.com/work" style="color: #12A4ED; text-decoration: none;">recent work</a></li>
            <li style="margin-bottom: 5px;">Read about our <a href="https://kdvlab.com/process" style="color: #12A4ED; text-decoration: none;">development process</a></li>
            <li style="margin-bottom: 5px;">Email us directly at <a href="mailto:info@kdvlab.com" style="color: #12A4ED; text-decoration: none;">info@kdvlab.com</a></li>
          </ul>

          <!-- Urgent project notice -->
          ${
            data.timeline === 'urgent'
              ? `
            <div style="background: #fee2e2; border: 1px solid #fecaca; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <p style="color: #dc2626; font-weight: 600; margin: 0; font-size: 16px;">
                🚨 <strong>Urgent project noted!</strong> We'll prioritize your inquiry and respond within 2 hours.
              </p>
            </div>
          `
              : `
            <div style="background: #ecfdf5; border: 1px solid #d1fae5; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <p style="color: #065f46; margin: 0; font-size: 16px;">
                <strong>Need urgent help?</strong> Call us at +1 (555) 123-4567 or reply to this email with "URGENT" in the subject line.
              </p>
            </div>
          `
          }

          <!-- Signature -->
          <div style="margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
              Best regards,<br>
              <strong>The KDVLab Team</strong><br>
              <a href="https://kdvlab.com" style="color: #12A4ED; text-decoration: none;">kdvlab.com</a> | 
              <a href="mailto:info@kdvlab.com" style="color: #12A4ED; text-decoration: none;">info@kdvlab.com</a>
            </p>
          </div>
        </div>
      </div>
    `,
  }),

  welcomeNewsletter: (data: WelcomeEmailData): EmailTemplate => ({
    subject: '🎉 Welcome to KDVLab Updates!',
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #12A4ED 0%, #47A7EF 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 36px; font-weight: 800;">Welcome to KDVLab! 🚀</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 15px 0 0 0; font-size: 18px;">Thanks for joining our community</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px 20px;">
          ${data.firstName ? `<p style="color: #1e293b; font-size: 16px;">Hi ${data.firstName},</p>` : '<p style="color: #1e293b; font-size: 16px;">Hi there,</p>'}
          
          <p style="color: #1e293b; font-size: 16px; line-height: 1.6;">
            Welcome to the KDVLab newsletter! We're thrilled to have you on board and can't wait to share valuable insights with you.
          </p>
          
          <!-- What to expect -->
          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin: 25px 0;">
            <h3 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px;">What to expect:</h3>
            <div style="space-y: 15px;">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="background: #12A4ED; border-radius: 50%; width: 8px; height: 8px; margin-right: 15px; flex-shrink: 0;"></div>
                <div>
                  <strong style="color: #1e293b;">Monthly insights</strong>
                  <span style="color: #64748b;"> on web development trends and best practices</span>
                </div>
              </div>
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="background: #12A4ED; border-radius: 50%; width: 8px; height: 8px; margin-right: 15px; flex-shrink: 0;"></div>
                <div>
                  <strong style="color: #1e293b;">Behind-the-scenes</strong>
                  <span style="color: #64748b;"> case studies from our latest projects</span>
                </div>
              </div>
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="background: #12A4ED; border-radius: 50%; width: 8px; height: 8px; margin-right: 15px; flex-shrink: 0;"></div>
                <div>
                  <strong style="color: #1e293b;">Performance tips</strong>
                  <span style="color: #64748b;"> to improve your website's speed and SEO</span>
                </div>
              </div>
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="background: #12A4ED; border-radius: 50%; width: 8px; height: 8px; margin-right: 15px; flex-shrink: 0;"></div>
                <div>
                  <strong style="color: #1e293b;">Industry news</strong>
                  <span style="color: #64748b;"> that actually matters to your business</span>
                </div>
              </div>
              <div style="display: flex; align-items: center;">
                <div style="background: #12A4ED; border-radius: 50%; width: 8px; height: 8px; margin-right: 15px; flex-shrink: 0;"></div>
                <div>
                  <strong style="color: #1e293b;">Exclusive offers</strong>
                  <span style="color: #64748b;"> and early access to new services</span>
                </div>
              </div>
            </div>
          </div>

          ${
            data.interests && data.interests.length > 0
              ? `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4 style="margin: 0 0 10px 0; color: #0369a1;">Your interests:</h4>
              <p style="margin: 0; color: #1e293b;">${data.interests.map(interest => interest.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())).join(', ')}</p>
              <p style="margin: 10px 0 0 0; color: #64748b; font-size: 14px;">We'll make sure to include content that matches your interests!</p>
            </div>
          `
              : ''
          }

          <!-- CTA -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://kdvlab.com/work" 
               style="display: inline-block; background: #12A4ED; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
              Check Out Our Latest Work
            </a>
          </div>

          <!-- Get in touch -->
          <div style="background: #ecfdf5; border: 1px solid #d1fae5; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h4 style="margin: 0 0 10px 0; color: #065f46;">Have a project in mind?</h4>
            <p style="margin: 0 0 15px 0; color: #065f46;">
              As a newsletter subscriber, you get priority response to project inquiries.
            </p>
            <a href="https://kdvlab.com/contact" style="color: #059669; text-decoration: none; font-weight: 600;">
              Start your project →
            </a>
          </div>

          <!-- Footer -->
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 14px; color: #64748b;">
            <p style="margin: 0 0 10px 0;">
              You're receiving this because you subscribed to KDVLab updates at 
              <a href="https://kdvlab.com" style="color: #12A4ED; text-decoration: none;">kdvlab.com</a>
            </p>
            <p style="margin: 0;">
              You can <a href="#" style="color: #12A4ED; text-decoration: none;">unsubscribe</a> at any time, or 
              <a href="mailto:newsletter@kdvlab.com" style="color: #12A4ED; text-decoration: none;">contact us</a> 
              with questions.
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};
