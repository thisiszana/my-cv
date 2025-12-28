export const icons = {
  performance: 'streamline-ultimate:performance-increase-bold',
  responsive: 'streamline-ultimate:responsive-design-bold',
  learning: 'eos-icons:machine-learning-outlined',
  tailwind: 'skill-icons:tailwindcss-dark',
  experience: 'arcticons:amex-experiences',
  typescript2: 'skill-icons:typescript',
  react_query: 'logos:react-query-icon',
  typescript: 'lineicons:typescript',
  location: 'mingcute:location-fill',
  calendar: 'stash:data-date-solid',
  nextjs: 'skill-icons:nextjs-dark',
  material_UI: 'logos:material-ui',
  star: 'solar:star-bold-duotone',
  react: 'skill-icons:typescript',
  git: 'material-icon-theme:git',
  lamp: 'cuida:lamp-on-outline',
  security: 'ic:sharp-security',
  html: 'akar-icons:html-fill',
  phone: 'mingcute:phone-fill',
  javascript: 'bi:javascript',
  redux: 'skill-icons:redux',
  css: 'akar-icons:css-fill',
  code: 'mingcute:code-fill',
  telegram: 'logos:telegram',
  github: 'ri:github-fill',
  linkedin: 'mdi:linkedin',
  api: 'eos-icons:api',
  email: 'mdi:email',
};

export const skills = [
  { name: 'HTML', icon: icons.html, id: 1 },
  { name: 'CSS', icon: icons.css, id: 2 },
  { name: 'JavaScript', icon: icons.javascript, id: 3 },
  { name: 'TypeScript', icon: icons.typescript2, id: 4 },
  { name: 'React', icon: icons.react, id: 5 },
  { name: 'Next.js', icon: icons.nextjs, id: 6 },
  { name: 'React Query', icon: icons.react_query, id: 7 },
  { name: 'Tailwind CSS', icon: icons.tailwind, id: 8 },
  { name: 'Material UI', icon: icons.material_UI, id: 9 },
  { name: 'Git', icon: icons.git, id: 10 },
  { name: 'GitHub', icon: icons.github, id: 11 },
  { name: 'REST APIs', icon: icons.api, id: 12 },
  { name: 'Redux Toolkit', icon: icons.redux, id: 13 },
  { name: 'Responsive Design', icon: icons.responsive, id: 14 },
  { name: 'Performance Optimization', icon: icons.performance, id: 15 },
  { name: 'class-validator', icon: icons.security, id: 16 },
];

export const languages = [
  {
    id: 1,
    title: 'English',
    reading: 'Good',
    writing: 'Good',
    speaking: 'Weak',
    listening: 'Relatively Good',
  },
];

export const projects = [
  {
    id: 1,
    name: 'Optisan',
    demo: 'https://optisan.ir/',
    description:
      'Design and development of a modern, advanced wholesale eyewear e-commerce platform, featuring a powerful admin dashboard that streamlines operations, improves efficiency, and reduces staffing requirements.',
    tech: 'React, Next.js, TypeScript, Redux-Toolkit, MUI, React-Query, Tailwind, Chart.js',
  },
  {
    id: 2,
    name: 'Modinast',
    demo: 'https://modinast.com/',
    description:
      'Design and development of the “Medinast” online store, specializing in apparel and personal care products, with a focus on user experience, efficient product management, and scalable online sales processes.',
    tech: 'React, Next.js, TypeScript, ZOD',
  },
  {
    id: 3,
    name: 'Zedkala Admin Panel',
    demo: 'https://zedkala-admin-panel.vercel.app/',
    description: 'Modern admin dashboard with role-based access, charts, and product management.',
    tech: 'React, Next.js, Redux, Charts',
  },
  {
    id: 4,
    name: 'Zedkala Shop',
    demo: 'https://zedkala-shop.vercel.app/',
    description: 'E-commerce shop with Next.js, authentication, and shopping cart flow.',
    tech: 'Next.js, Auth, Shopping Cart',
  },
  {
    id: 5,
    name: 'Sorme Shop',
    demo: 'https://sorme-shop.vercel.app/',
    description: 'Responsive cosmetics store with smooth UI/UX and product filtering.',
    tech: 'React, UI/UX, Filtering',
  },
  {
    id: 6,
    name: 'Fullstack Real Estate',
    demo: 'https://fullstack-real-estate-pi.vercel.app/',
    description: 'Property listing platform with search, filtering, and authentication.',
    tech: 'Fullstack, Search, Auth',
  },
  {
    id: 7,
    name: 'CRM Blue',
    demo: 'https://fullstack-crm-blue.vercel.app/',
    description: 'CRM dashboard with task management and analytics.',
    tech: 'CRM, Analytics, Dashboard',
  },
  {
    id: 8,
    name: 'Portfolio Website',
    demo: 'https://portfolio-thisiszana.vercel.app/',
    description: 'Portfolio showcasing projects and skills with modern animations.',
    tech: 'Portfolio, Animations, Modern UI',
  },
];

export const summary = {
  summaryEN:
    'Frontend Developer with 2 years of experience in JS, HTML, CSS, Tailwind, React, and Next.js. Passionate about building high-performance applications with clean code and well-designed UI/UX. Experienced in leveraging AI tools to improve project speed and quality.',
};

export const achievements = [
  { id: 1, achievement: 'Clean code & best practices', icon: icons.star },
  {
    id: 2,
    achievement:
      'Reviewed and refactored the project as a component-oriented approach, reducing potential errors and bugs, while significantly improving my ability to learn and adopt new concepts.',
    icon: icons.code,
  },
  {
    id: 3,
    achievement:
      'Leveraged TypeScript for strong type safety, enabling early detection and resolution of issues during development even with minor backend changes.',
    icon: icons.typescript,
  },
  {
    id: 4,
    achievement:
      'Significantly improved problem-solving skills through hands-on development and debugging challenges.',
    icon: icons.lamp,
  },
];

export const experience = [
  {
    id: 1,
    priority: 2,
    title: 'Front-End Developer',
    company: '',
    date: 'Sep 2023 - January 2025',
    bullets: [
      'Started learning HTML, CSS, and JavaScript in Sep 2023, developing practice projects including Todo App and Quiz App',
      'Progressed to React, building mini projects like Contact App, Crypto App, and an online clothing store',
      'Learned Next.js and Tailwind, initially building mini projects with Pure CSS and later implementing Tailwind in a store project like digikala with an admin panel',
      'Participated in Botostart Bootcamp to review concepts and strengthen skills, while also learning TypeScript',
    ],
  },
  {
    id: 2,
    priority: 1,
    title: 'Front-End Developer',
    company: 'Codenight',
    date: 'Jan 2024 - Present',
    bullets: [
      'Contributed to the large-scale Optisan wholesale eyewear platform, handling both client-side pages and a complex admin panel',
      'Built high-performance, responsive UI with React, Next.js, MUI, and Tailwind',
      'Managed complex form states using Redux Toolkit and synchronized API requests with React Query',
      'Implemented form validation and DTOs with class-validator for backend consistency',
      'Integrated charts and icons using Chart.js and Iconify/React',
      'Collaborated on another project called Modinast, focusing on the product details page',
    ],
  },
];
