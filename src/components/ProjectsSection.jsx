import { projects } from '@/constant';
import { Icon } from '@iconify/react';

export default function ProjectsSection() {
  return (
    <section>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
        Projects
      </h3>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex items-start justify-between mb-1">
              <h4 className="font-bold text-gray-900">{project.name}</h4>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                <Icon icon="mdi:open-in-new" className="w-4 h-4" />
              </a>
            </div>
            <p className="text-gray-600 text-sm mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.split(', ').map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-0.5 text-xs text-gray-600 bg-gray-50 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

