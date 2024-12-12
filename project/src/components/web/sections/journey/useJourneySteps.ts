import { useMemo } from 'react';
import { MessageSquare, Briefcase, Clock } from 'lucide-react';
import type { ProjectFormData } from '../../../../types/web';

export function useJourneySteps() {
  return useMemo(() => [
    {
      id: 'intro',
      icon: MessageSquare,
      title: "Let's Get to Know You",
      fields: ['name', 'email', 'company'] as const
    },
    {
      id: 'project',
      icon: Briefcase,
      title: 'Tell Us About Your Project',
      fields: ['description'] as const
    },
    {
      id: 'timeline',
      icon: Clock,
      title: 'Project Timeline',
      fields: ['timeline'] as const
    }
  ], []);
}