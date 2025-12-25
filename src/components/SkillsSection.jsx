import { skills } from '@/constant';
import Title from './Title';

export default function SkillsSection() {
  return (
    <section>
      <Title>Skills</Title>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
