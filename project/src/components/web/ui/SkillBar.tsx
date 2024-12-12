import React from 'react';
import type { Skill } from '../../../types/web';

interface SkillBarProps {
  skill: Skill;
}

export function SkillBar({ skill }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-500 rounded-full"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}