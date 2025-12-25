import { experience } from '@/constant';
import ExperienceItem from './ExperienceItem';
import Title from './Title';

export default function ExperienceSection() {
  return (
    <section>
      <Title>Experience</Title>
      <div className="space-y-6">
        {experience
          .sort((a, b) => a.priority - b.priority)
          .map(exp => (
            <ExperienceItem
              title={exp.title}
              company={exp.company}
              date={exp.date}
              bullets={exp.bullets}
            />
          ))}
      </div>
    </section>
  );
}
