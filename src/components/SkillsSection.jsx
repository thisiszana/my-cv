import { skills } from '@/constant';
import Title from './Title';
import { Icon } from '@iconify/react';

export default function SkillsSection() {
  return (
    <section>
      <Title>Skills</Title>
      <div className="flex flex-wrap gap-1">
        {skills.map(skill => (
          <div
            key={skill.id}
            className="flex items-center gap-1 p-1 text-xs print:text-[10px] font-bold text-gray-700 bg-gray-100 print:bg-gray-100 rounded"
          >
            <Icon icon={skill.icon} className="h-3 w-3" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
