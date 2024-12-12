import React from 'react';
import { SkillBar } from '../ui/SkillBar';
import type { Skill } from '../../../types/web';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
        <p className="text-xl text-gray-400">Technologies and tools I specialize in</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}