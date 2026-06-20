export const siteConfig = {
  name: 'Bryan Salamone',
  role: 'Desarrollador',
  location: 'Montevideo, Uruguay',
  email: 'bryan-salamone2016@hotmail.com',
  social: {
    github: 'https://github.com/IngBryan',
    linkedin: 'https://www.linkedin.com/in/bryan-salamone-ab65401b3/',
  },
} as const;

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  description: string;
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: 'Presente',
    role: 'Software Developer – Data Integrations',
    company: 'Hinweiss',
    companyUrl: 'https://www.hinweiss.com/landing/index.html',
    logo: '/hinweiss_logo.jfif',
    description:
      'Trabajo con una plataforma de BI enfocada en retail y consumo masivo. Desarrollo de integraciones de datos, mantenimiento y mejoras orientadas al negocio.',
    technologies: ['Java', 'Big Query', 'AWS', 'SQL Server', 'PostgreSQL', 'MySQL'],
  },
  {
    period: '2025-2026',
    role: 'Desarrollador GeneXus',
    company: 'Montevideo COMM',
    companyUrl: 'https://www.montevideocomm.uy',
    logo: '/LogoMontevideoCOMM.jpg',
    description:
      'Trabajo con GeneXus 17 y 9 en un sistema CRM y de gestión comercial. Desarrollo de funcionalidades, mantenimiento y mejoras orientadas al negocio.',
    technologies: ['GeneXus', 'SQL Server', 'CRM'],
  },
];

export interface ProjectData {
  id: string;
  mainRoutes: { route: string; type: 'image' | 'video' }[];
  title1: string;
  title2: string;
  body: string;
  tags: string[];
  imageTechnology: { src: string; alt: string; tooltip: string }[];
  imageLeft: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectData[] = [
  {
    id: 'Portfolio',
    mainRoutes: [{ route: '/portfolio.PNG', type: 'image' }],
    title1: 'Proyecto Destacado',
    title2: 'Mi Portafolio',
    body: `Este portafolio fue desarrollado con React, TypeScript, CSS, HTML y Bootstrap.
Cada sección tiene un objetivo específico: presentarme, mostrar mis proyectos, listar mis conocimientos y ofrecer una forma de contactarme fácilmente.`,
    tags: ['React', 'TypeScript', 'CSS', 'Bootstrap'],
    imageTechnology: [
      { src: '/react48.png', alt: 'React', tooltip: 'React' },
      { src: '/typescript48.png', alt: 'TypeScript', tooltip: 'TypeScript' },
      { src: '/html48.png', alt: 'HTML', tooltip: 'HTML' },
      { src: '/css48.png', alt: 'CSS', tooltip: 'CSS' },
      { src: '/bootstrap48.png', alt: 'Bootstrap', tooltip: 'Bootstrap' },
    ],
    imageLeft: false,
    githubUrl: 'https://github.com/IngBryan/portfolio',
  },
  {
    id: 'Antel',
    mainRoutes: [
      { route: '/Antel1.PNG', type: 'image' },
      { route: '/AntelChallenge2025.mp4', type: 'video' },
    ],
    title1: 'Proyecto Destacado',
    title2: 'Antel Challenge',
    body: `Proyecto realizado para Antel Tech Challenge 2025 - Desafío Accesa.

Automatizamos un reporte SLA usando Python, Google Cloud (Vertex AI y Buckets) y desplegamos la app en la nube con Gunicorn.`,
    tags: ['Python', 'Vertex AI', 'Google Cloud', 'Gunicorn'],
    imageTechnology: [
      { src: '/python.png', alt: 'Python', tooltip: 'Python' },
      { src: '/VetexIA.png', alt: 'Vertex AI', tooltip: 'Vertex AI' },
      { src: '/google-cloud.png', alt: 'Google Cloud', tooltip: 'Google Cloud' },
      { src: '/html48.png', alt: 'HTML', tooltip: 'HTML' },
      { src: '/bootstrap48.png', alt: 'Bootstrap', tooltip: 'Bootstrap' },
    ],
    imageLeft: true,
    githubUrl: 'https://github.com/IngBryan/Antel-Tech-Challenge-2025',
  },
];

export interface TechCategory {
  name: string;
  items: { name: string; src: string; alt: string }[];
  featured?: boolean;
}

export const techCategories: TechCategory[] = [
  {
    name: 'Front-End',
    featured: true,
    items: [
      { name: 'React', src: '/react.png', alt: 'React' },
      { name: 'JavaScript', src: '/javascript.png', alt: 'JavaScript' },
      { name: 'TypeScript', src: '/typescript.png', alt: 'TypeScript' },
      { name: 'Bootstrap', src: '/bootstrap.png', alt: 'Bootstrap' },
      { name: 'HTML', src: '/html.png', alt: 'HTML' },
      { name: 'CSS', src: '/css.png', alt: 'CSS' },
    ],
  },
  {
    name: 'Back-End',
    items: [
      { name: 'Spring', src: '/spring.png', alt: 'Spring' },
      { name: 'Java', src: '/java.png', alt: 'Java' },
      { name: 'C#', src: '/csharp.png', alt: 'C#' },
      { name: 'C++', src: '/c++.png', alt: 'C++' },
      { name: 'Python', src: '/python.png', alt: 'Python' },
    ],
  },
  {
    name: 'Bases de Datos',
    items: [
      { name: 'SQL Server', src: '/sqlserver.png', alt: 'SQL Server' },
      { name: 'PostgreSQL', src: '/postgresql.png', alt: 'PostgreSQL' },
      { name: 'MySQL', src: '/mysql.png', alt: 'MySQL' },
    ],
  },
  {
    name: 'Nube',
    items: [{ name: 'Google Cloud', src: '/google-cloud.png', alt: 'Google Cloud' }],
  },
];
