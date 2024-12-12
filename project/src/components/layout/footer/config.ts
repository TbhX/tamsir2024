import { Github, Mail, MessageSquare, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/config';
import type { FooterConfig, FooterSection, FooterSocialLink, ContactInfo } from './types';
import type { Theme } from '@/types';
import type { TranslationFunction } from '@/types/language';

export const getFooterConfig = (theme: Theme): FooterConfig => {
  switch (theme) {
    case 'musical':
      return {
        background: 'bg-gray-900',
        border: 'border-[#1DB954]/20',
        text: 'text-[#1DB954]',
        hover: 'hover:text-white',
        muted: 'text-gray-400'
      };
    case 'gaming':
      return {
        background: 'bg-gray-900',
        border: 'border-purple-500/20',
        text: 'text-purple-400',
        hover: 'hover:text-white',
        muted: 'text-gray-400'
      };
    default:
      return {
        background: 'bg-gray-900',
        border: 'border-gray-800',
        text: 'text-gray-300',
        hover: 'hover:text-white',
        muted: 'text-gray-400'
      };
  }
};

export const getFooterSections = (t: TranslationFunction, onShowTerms: () => void): FooterSection[] => [
  {
    id: 'quickLinks',
    title: t('footerWeb.quickLinks'),
    items: [
      { 
        id: 'startProject',
        label: t('footerWeb.startProject'),
        href: '#start-project'
      },
      { 
        id: 'faq',
        label: t('footerWeb.faq'),
        href: '#faq'
      },
      { 
        id: 'terms',
        label: t('footerWeb.termsOfService'),
        onClick: onShowTerms
      }
    ]
  },
  {
    id: 'contact',
    title: t('footerWeb.contact'),
    items: [
      { 
        id: 'email',
        label: `${t('footerWeb.email')}: ${COMPANY_INFO.email}`,
        href: `mailto:${COMPANY_INFO.email}`
      },
      { 
        id: 'support',
        label: `${t('footerWeb.support')}: ${COMPANY_INFO.supportEmail}`,
        href: `mailto:${COMPANY_INFO.supportEmail}`
      },
      { 
        id: 'hours',
        label: `${t('footerWeb.hours')}: ${COMPANY_INFO.hours}`,
        href: '#contact'
      }
    ]
  }
];

export const contactInfo: ContactInfo[] = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`
  },
  {
    id: 'support',
    icon: MessageSquare,
    label: 'Support',
    value: COMPANY_INFO.supportEmail,
    href: `mailto:${COMPANY_INFO.supportEmail}`
  },
  {
    id: 'location',
    icon: MapPin,
    label: 'Location',
    value: COMPANY_INFO.location
  },
  {
    id: 'hours',
    icon: Clock,
    label: 'Hours',
    value: COMPANY_INFO.hours
  }
];

export const socialLinks: FooterSocialLink[] = [
  { id: 'github', icon: Github, href: 'https://github.com/yourid', label: 'GitHub' },
  { id: 'email', icon: Mail, href: `mailto:${COMPANY_INFO.email}`, label: 'Email' },
  { id: 'support', icon: MessageSquare, href: `mailto:${COMPANY_INFO.supportEmail}`, label: 'Support' }
];