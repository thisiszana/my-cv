import { achievements } from '@/constant';
import { Icon } from '@iconify/react';
import Title from './Title';

export default function AchievementsSection() {
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
