import { experience } from '@/constant';
import ExperienceItem from './ExperienceItem';
import Title from './Title';

export default function ExperienceSection() {
  const sortedExperience = experience.sort((a, b) => a.priority - b.priority);

  return (
    <section>
      <Title>Experience</Title>
      <div className="space-y-6">
        {sortedExperience.map((exp, index) => (
          <ExperienceItem
            key={exp.id}
            title={exp.title}
            company={exp.company}
            date={exp.date}
            bullets={exp.bullets}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
