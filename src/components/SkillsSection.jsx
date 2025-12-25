import { skills } from '@/constant';

export default function SkillsSection() {
  return (
    <section>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
        Skills
      </h3>
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

