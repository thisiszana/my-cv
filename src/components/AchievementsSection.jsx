import { Icon } from '@iconify/react';
import Title from './Title';
import { icons } from '@/constant';

export default function AchievementsSection() {
  const achievements = [
    { id: 1, achievement: 'Clean code & best practices', icon: icons.star },
    { id: 2, achievement: 'Modern development workflows', icon: icons.code },
    { id: 3, achievement: 'Intuitive user experiences', icon: icons.experience },
    { id: 4, achievement: 'Continuous learning mindset', icon: icons.learning },
  ];

  return (
    <section>
      <Title>Achievements</Title>
      <div className="space-y-4">
        {achievements.map(ach => (
          <div key={ach.id} className="flex items-start gap-2">
            <Icon icon={ach.icon} className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-sm text-gray-900">{ach.achievement}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
