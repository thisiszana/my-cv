import SummarySection from './SummarySection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import Sidebar from './Sidebar';

export default function ResumeLayout() {
  return (
    <div className="grid lg:grid-cols-[65%_35%] gap-5">
      <div className="space-y-3">
        <SummarySection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
      </div>
      <Sidebar />
    </div>
  );
}

