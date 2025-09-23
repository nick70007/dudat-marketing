export const CALENDLY_30MIN = "https://calendly.com/duda-dudat/30min";

import { Share2, PenTool, TrendingUp, Layout, Mail, Users } from 'lucide-react';

export const services = [
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'We create strategic content calendars, post consistently, and manage engagement to grow your brand\'s online presence.',
    features: ['Content Calendar Creation', 'Daily Posting & Scheduling', 'Community Engagement', 'Brand Growth Strategy'],
    gradient: 'from-yellow-400 to-yellow-300'
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    description: 'Professional videos, photos, and edits that capture attention and connect with your audience.',
    features: ['Video Production', 'Photo Editing', 'Graphic Design', 'Creative Strategy'],
    gradient: 'from-yellow-400 to-yellow-300'
  },
  {
    icon: TrendingUp,
    title: 'Digital Ads & SEO',
    description: 'Targeted ad campaigns on Instagram, TikTok, Facebook, Google, and YouTube, combined with SEO strategies to boost visibility, attract the right audience, and drive results.',
    features: ['Multi-Platform Ads', 'SEO Optimization', 'Audience Targeting', 'Performance Analytics'],
    gradient: 'from-yellow-400 to-yellow-300'
  },
  {
    icon: Layout,
    title: 'Website Design',
    description: 'Clean, modern websites tailored for small businesses to showcase their brand and convert visitors.',
    features: ['Custom Design', 'Mobile Responsive', 'Conversion Optimization', 'Brand Integration'],
    gradient: 'from-yellow-400 to-yellow-300'
  },
  {
    icon: Mail,
    title: 'Email/Text Optimization',
    description: 'Compelling, personalized messages that improve open rates, clicks, and customer response.',
    features: ['Email Campaigns', 'SMS Marketing', 'Personalization', 'Response Optimization'],
    gradient: 'from-yellow-400 to-yellow-300'
  },
  {
    icon: Users,
    title: 'Sales Team & Training',
    description: 'We build, manage, and train teams of door-to-door or high-ticket sales reps to deliver measurable success.',
    features: ['Team Building', 'Sales Training', 'Performance Management', 'Success Tracking'],
    gradient: 'from-yellow-400 to-yellow-300'
  }
] as const;

export type ServiceTitle = typeof services[number]['title'];
export const serviceTitles: ServiceTitle[] = services.map(s => s.title);
