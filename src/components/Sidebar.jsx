import AchievementsSection from './AchievementsSection';
import SkillsSection from './SkillsSection';

export default function Sidebar() {
  return (
    <div className="space-y-8">
      <AchievementsSection />
      <SkillsSection />
    </div>
  );
}

