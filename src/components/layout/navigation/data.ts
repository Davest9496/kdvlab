import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  MessageSquare,
} from 'lucide-react';
import { NavItem, ServiceItem } from './types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'work', label: 'Our Work', href: '/work' },
  { id: 'careers', label: 'Careers', href: '/careers' },
  { id: 'blog', label: 'Blog', href: '/blog' },
];

export const serviceItems: ServiceItem[] = [
  {
    id: 'custom-software',
    label: 'Custom Software',
    href: '/services/custom-software',
    icon: Code2,
  },
  {
    id: 'web-applications',
    label: 'Web Applications',
    href: '/services/web-applications',
    icon: Globe,
  },
  {
    id: 'mobile-apps',
    label: 'Mobile Apps',
    href: '/services/mobile-apps',
    icon: Smartphone,
  },
  {
    id: 'cloud-services',
    label: 'Cloud Services',
    href: '/services/cloud-services',
    icon: Cloud,
  },
  {
    id: 'ui-ux-design',
    label: 'UI/UX Design',
    href: '/services/ui-ux-design',
    icon: Palette,
  },
  {
    id: 'consultancy',
    label: 'Consultancy',
    href: '/services/consultancy',
    icon: MessageSquare,
  },
];
