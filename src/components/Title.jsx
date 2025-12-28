import { twMerge } from 'tailwind-merge';

export default function Title({ children, titleClassName }) {
  return (
    <h2
      className={twMerge(
        'text-base font-black text-gray-900 pb-1 border-b-2 border-black mb-3',
        titleClassName,
      )}
    >
      {children}
    </h2>
  );
}
