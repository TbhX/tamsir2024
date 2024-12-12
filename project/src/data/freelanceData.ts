import { Service, Skill } from '../types/freelance';
import { Code2, Palette, Server, Smartphone } from 'lucide-react';

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Modern, responsive websites built with React and TypeScript',
    icon: 'Code2'
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that drive engagement',
    icon: 'Palette'
  },
  {
    id: '3',
    title: 'Backend Development',
    description: 'Scalable server solutions and API development',
    icon: 'Server'
  },
  {
    id: '4',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications',
    icon: 'Smartphone'
  }
];

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'UI Design', level: 75, category: 'design' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'AWS', level: 65, category: 'other' }
];