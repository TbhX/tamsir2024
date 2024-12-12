import { Service } from '../types/web';

export const singleOffer: Service = {
  id: 'complete-web-solution',
  title: 'Complete Web Development Solution',
  description: 'All-inclusive web development package with ongoing support and maintenance',
  icon: 'Code2',
  price: 1000,
  features: [
    'Custom Web Development',
    'Responsive Design',
    'Client Dashboard Access',
    'Project Management Tools',
    'Secure File Sharing',
    'Real-time Updates',
    'Post-launch Support'
  ]
};

export const workProcess = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'Discuss your requirements and project goals',
    icon: 'MessageSquare'
  },
  {
    id: 2,
    title: 'Project Planning',
    description: 'Detailed project roadmap and timeline',
    icon: 'ClipboardList'
  },
  {
    id: 3,
    title: 'Development',
    description: 'Regular updates and progress tracking',
    icon: 'Code2'
  },
  {
    id: 4,
    title: 'Testing & Launch',
    description: 'Quality assurance and deployment',
    icon: 'Rocket'
  }
];