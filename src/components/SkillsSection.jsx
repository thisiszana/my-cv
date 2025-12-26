import { skills } from '@/constant';
import Title from './Title';

export default function SkillsSection() {
  return (
    <section>
      <Title>Skills</Title>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-bold text-gray-700 bg-gray-100 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
