import { projects } from '@/constant';
import { Icon } from '@iconify/react';
import Title from './Title';
import Link from 'next/link';

export default function ProjectsSection() {
  return (
    <section>
      <Title>Projects</Title>
      <div>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex gap-3 border-b border-dashed border-gray-300 pb-3 mb-1 last:border-none"
          >
            {/* Timeline */}
            <div className="flex flex-col items-center">
              {/* Timeline Dot */}
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg ring-4 ring-white dark:ring-gray-900"></div>
                {index === 0 && (
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-indigo-400 animate-ping opacity-75"></div>
                )}
              </div>
              <div className="w-1 h-full bg-gradient-to-b from-indigo-200 via-purple-200 to-transparent mt-2 flex-1 min-h-[3rem]"></div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-gray-900">{project.name}</h4>
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Icon icon="mdi:open-in-new" className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-gray-600 text-xs font-bold">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tech.split(', ').map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="p-1 text-xs font-bold text-gray-600 bg-gray-100 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
