import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  MessageSquare,
  CheckCircle,
  Zap,
  Shield,
  Rocket,
  Users,
  Target,
  Layers,
  Database,
  Cpu,
  Paintbrush,
  FileText,
  type LucideIcon,
} from 'lucide-react';

// Icon mapping object
export const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  MessageSquare,
  CheckCircle,
  Zap,
  Shield,
  Rocket,
  Users,
  Target,
  Layers,
  Database,
  Cpu,
  Paintbrush,
  FileText,
};

// Helper function to get icon component from string
export const getIconByName = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Code2; // Default to Code2 if icon not found
};

// Type guard to check if icon exists
export const isValidIconName = (
  iconName: string
): iconName is keyof typeof iconMap => {
  return iconName in iconMap;
};
