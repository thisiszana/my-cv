import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SummarySection from './SummarySection';
import Sidebar from './Sidebar';

export default function ResumeLayout() {
  return (
    <div className="grid lg:grid-cols-[65%_35%] gap-5 print:grid-cols-[65%_35%]">
      <div className="space-y-3">
        <SummarySection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
      <Sidebar />
    </div>
  );
}
