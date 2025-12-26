import { languages } from '@/constant';
import Title from './Title';

export default function LanguageSection() {
  return (
    <section>
      <Title>Language</Title>
      <div className="space-y-3">
        {languages.map(language => (
          <div key={language.id} className="*:text-gray-600 *:text-xs">
            <h4 className="font-bold !text-gray-900 text-sm mb-2">{language.title}</h4>
            <div className="space-y-1 *:text-xs *:font-black *:flex *:items-center *:gap-1">
              <p>
                <span>Reading:</span>
                <span className="font-semibold">{language.reading}</span>
              </p>
              <p>
                <span>Writing:</span>
                <span className="font-semibold">{language.writing}</span>
              </p>
              <p>
                <span>Speaking:</span>
                <span className="font-semibold">{language.speaking}</span>
              </p>
              <p>
                <span>Listening:</span>
                <span className="font-semibold">{language.listening}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
