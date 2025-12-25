import { icons } from '@/constant';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-8">
      <div className="flex gap-3">
        <Image
          src="/images/zana-profile.JPG"
          width={200}
          height={200}
          className="w-28 h-fit rounded-lg"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-gray-900">Zana Amanallhy</h1>
          <h2 className="text-lg text-gray-600 mb-4">Front-End Developer</h2>
          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <Link
                href="mailto:zana80.dev@gmail.com"
                className="flex items-center gap-1.5 hover:text-blue-600"
              >
                <Icon icon={icons.email} className="w-4 h-4 text-blue-600" />
                <span>zana80.dev@gmail.com</span>
              </Link>
              <Link
                href="https://linkedin.com/in/thisiszana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600"
              >
                <Icon icon={icons.linkedin} className="w-4 h-4 text-blue-600" />
                <span>linkedin.com</span>
              </Link>
              <Link
                href="https://t.me/zana80"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600"
              >
                <Icon icon={icons.telegram} className="w-4 h-4 text-blue-600" />
                <span>Telegram</span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-default">
                <Icon icon={icons.phone} className="w-4 h-4 text-blue-600" />
                <span>+98 918 985 8531</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-default">
                <Icon icon={icons.location} className="w-4 h-4 text-blue-600" />
                <span>Tehran / Sanandaj</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
