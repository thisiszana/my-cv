import { Icon } from '@iconify/react';
import Title from './Title';

export default function AchievementsSection() {
  const achievements = [
    'Clean code & best practices',
    'Modern development workflows',
    'Intuitive user experiences',
    'Continuous learning mindset',
  ];

  return (
    <section>
      <Title>Achievements</Title>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-2">
            <Icon icon="mdi:check-circle" className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-sm text-gray-900">{achievement}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
