import { icons } from '@/constant';
import { Icon } from '@iconify/react';

export default function ExperienceItem({ title, company, date, bullets, index }) {
  return (
    <div className="flex gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        {/* Timeline Dot */}
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg ring-4 ring-white dark:ring-gray-900"></div>
          {index === 0 && (
            <div className="absolute inset-0 w-4 h-4 rounded-full bg-indigo-400 animate-ping opacity-75"></div>
          )}
        </div>
        {/* Timeline Line */}
        <div className="w-1 h-full bg-gradient-to-b from-indigo-200 via-purple-200 to-transparent mt-2 flex-1 min-h-[3rem]"></div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-6">
        <div className="flex items-start justify-between">
          <h4 className="font-bold text-gray-900">{title}</h4>
        </div>
        <p className="text-gray-600 text-sm mb-1">{company}</p>
        <div className="flex items-center gap-1 mb-3">
          <Icon icon={icons.calendar} className="w-4 h-4" />
          <p className="text-gray-500 text-xs">{date}</p>
        </div>
        <ul className="space-y-1.5 text-xs font-bold text-gray-700">
          {bullets.map((bullet, bulletIndex) => (
            <li key={bulletIndex} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
