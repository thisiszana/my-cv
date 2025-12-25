import { twMerge } from 'tailwind-merge';

export default function Title({ children, titleClassName }) {
  return (
    <h3
      className={twMerge(
        'text-lg font-black text-gray-900 pb-1 border-b-4 border-black',
        titleClassName,
      )}
    >
      {children}
    </h3>
  );
}
