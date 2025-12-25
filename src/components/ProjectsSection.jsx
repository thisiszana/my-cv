import { projects } from '@/constant';
import { Icon } from '@iconify/react';
import Title from './Title';
import Link from 'next/link';

export default function ProjectsSection() {
  return (
    <section>
      <Title>Projects</Title>
      <div className="space-y-3">
        {projects.map(project => (
          <div key={project.id} className="flex flex-col gap-1">
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
            <p className="text-gray-600 text-xs">{project.description}</p>
            <div className="flex flex-wrap gap-1">
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

