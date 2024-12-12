import { Github, Mail, MessageSquare } from 'lucide-react';

export const FOOTER_SECTIONS = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'Project Dashboard', href: '#dashboard' },
      { label: 'Support', href: '#support' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Terms of Service', href: '/terms' }
    ]
  },
  {
    title: 'Contact',
    links: [
      { label: 'Email: contact@tamsir.fr', href: 'mailto:contact@tamsir.fr' },
      { label: 'Hours: Anytime', href: '#hours' },
      { label: 'Location: Metaverse', href: '#location' }
    ]
  }
];

export const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Mail, href: 'mailto:contact@tamsir.fr', label: 'Email' },
  { icon: MessageSquare, href: 'mailto:support@tamsir.fr', label: 'Support' }
];