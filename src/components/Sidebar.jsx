import AchievementsSection from './AchievementsSection';
import EducationSection from './EducationSection';
import LanguageSection from './LanguageSection';
import SkillsSection from './SkillsSection';

export default function Sidebar() {
  return (
    <div className="space-y-3">
      <AchievementsSection />
      <SkillsSection />
      <EducationSection />
      <LanguageSection />
    </div>
  );
}

