export default function ExperienceItem({ title, company, date, bullets }) {
  return (
    <div>
      <div className="flex items-start justify-between mb-1">
        <h4 className="font-bold text-gray-900">{title}</h4>
      </div>
      <p className="text-gray-600 text-sm mb-1">{company}</p>
      <p className="text-gray-500 text-xs mb-3">{date}</p>
      <ul className="space-y-1.5 text-xs font-bold text-gray-700">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

