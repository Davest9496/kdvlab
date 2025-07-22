import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Types for our database
export interface NewsletterSubscriber {
  id: string;
  email: string;
  first_name?: string;
  interests?: string[];
  source?: string;
  status: 'pending' | 'confirmed' | 'unsubscribed' | 'bounced';
  confirmation_token: string;
  subscribed_at: string;
  confirmed_at?: string;
  unsubscribed_at?: string;
  last_email_sent?: string;
  email_count: number;
  metadata?: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface EmailCampaign {
  id: string;
  name: string;
  subject: string;
  content?: string;
  status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'cancelled';
  scheduled_at?: string;
  sent_at?: string;
  recipients_count: number;
  delivered_count: number;
  opened_count: number;
  clicked_count: number;
  bounced_count: number;
  created_at: string;
  updated_at: string;
}

export interface EmailLog {
  id: string;
  subscriber_id: string;
  campaign_id: string;
  email: string;
  status:
    | 'sent'
    | 'delivered'
    | 'opened'
    | 'clicked'
    | 'bounced'
    | 'complained';
  sent_at: string;
  delivered_at?: string;
  opened_at?: string;
  clicked_at?: string;
  bounced_at?: string;
  metadata?: Record<string, any>;
}
