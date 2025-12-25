import AchievementsSection from './AchievementsSection';
import SkillsSection from './SkillsSection';

export default function Sidebar() {
  return (
    <div className="space-y-3">
      <AchievementsSection />
      <SkillsSection />
    </div>
  );
}

