import type { LucideIcon } from 'lucide-react';
import type { Theme } from '@/types';

export interface FooterConfig {
  text: string;
  hover: string;
  muted: string;
  background: string;
  border: string;
}

export interface FooterLink {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface FooterSection {
  id: string;
  title: string;
  items: FooterLink[];
}

export interface FooterSocialLink {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

export interface ContactInfo {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export interface BaseFooterProps {
  theme: Theme;
  config: FooterConfig;
}