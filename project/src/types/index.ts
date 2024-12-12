export type Theme = 'web' | 'musical' | 'gaming';

export interface ThemeConfig {
  name: string;
  icon: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType;
}