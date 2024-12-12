import { ThemeConfig } from '../types';

export const themeConfigs: Record<string, ThemeConfig> = {
  web: {
    name: 'Web Development',
    icon: 'Code2',
    primaryColor: 'bg-[#0A0A0A]',
    secondaryColor: 'bg-[#141414]',
    accentColor: 'bg-[#2A2A2A]',
    textColor: 'text-[#E0E0E0]'
  },
  musical: {
    name: 'Music Production',
    icon: 'Music',
    primaryColor: 'bg-[#0A0F0D]',
    secondaryColor: 'bg-[#121A17]',
    accentColor: 'bg-[#1DB954]',
    textColor: 'text-[#1DB954]'
  },
  gaming: {
    name: 'Gaming',
    icon: 'Gamepad2',
    primaryColor: 'bg-[#0A090F]',
    secondaryColor: 'bg-[#12101A]',
    accentColor: 'bg-[#6E3AFF]',
    textColor: 'text-[#B69FFF]'
  }
};