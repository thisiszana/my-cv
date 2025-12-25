import AchievementsSection from './AchievementsSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';

export default function Sidebar() {
  return (
    <div className="space-y-3">
      <AchievementsSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}

