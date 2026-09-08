import {
  NavItem,
  PipelineStage,
  EthosStep,
  ExperienceItem,
  TechCategory,
  CertificationItem,
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 'data',
    number: '01',
    name: 'DATA',
    subtitle: 'Raw Vector Stream',
    detail: 'Continuous ingestion of raw sensor telemetry, image matrices, and multi-modal stream packets.',
    dim: '512 DIM',
    latency: '2.4ms',
    status: 'OPTIMAL',
  },
  {
    id: 'algorithms',
    number: '02',
    name: 'ALGORITHMS',
    subtitle: 'Feature Extraction',
    detail: 'Dimensionality reduction, spatial convolution, and geometric invariance normalization.',
    dim: '256 EMB',
    latency: '4.8ms',
    status: 'ACTIVE',
  },
  {
    id: 'intelligence',
    number: '03',
    name: 'INTELLIGENCE',
    subtitle: 'Neural Synthesis',
    detail: 'Latent space indexing, cosine similarity scoring, and deep decision transformer inferences.',
    dim: '128 EMB',
    latency: '5.2ms',
    status: 'SYNCHRONIZED',
  },
  {
    id: 'applications',
    number: '04',
    name: 'APPLICATIONS',
    subtitle: 'Field & Web Action',
    detail: 'Sub-millisecond dispatch to physical edge copilots, price tracking webhooks, and automated UI surfaces.',
    dim: 'OUT JSON',
    latency: '1.2ms',
    status: 'DISPATCHED',
  },
];

export const EXPLORING_SKILLS = [
  'Python',
  'Data Structures',
  'Machine Learning',
  'Data Science',
  'SQL',
  'Full-Stack Development',
];

export const ETHOS_STEPS: EthosStep[] = [
  {
    step: '01',
    title: 'UNDERSTAND',
    description: 'Core primitives first principles',
    details: 'Drilling down to hardware limitations, mathematical equations, and raw memory layout before writing a single line of logic.',
  },
  {
    step: '02',
    title: 'BREAK IT DOWN',
    description: 'Isolate sub-problems and mechanics',
    details: 'Decoupling monolithic challenges into deterministic modular sub-routines with clear boundaries and interfaces.',
  },
  {
    step: '03',
    title: 'BUILD',
    description: 'Synthesize working software & pipelines',
    details: 'Architecting robust, maintainable codebases with clean types, rigorous data flow, and reliable error recovery.',
  },
  {
    step: '04',
    title: 'TEST',
    description: 'Validate against dynamic edge cases',
    details: 'Stress-testing against adverse distributions, unexpected user interactions, and corner scenarios.',
  },
  {
    step: '05',
    title: 'ITERATE',
    description: 'Refine performance, clean & elevate',
    details: 'Profiling latency, optimizing algorithmic complexity, and polishing usability to production standards.',
  },
];

export const EDUCATION_LIST = [
  {
    id: 'reva',
    institution: 'REVA UNIVERSITY',
    period: 'Sep 2025 – Jul 2029',
    degree: 'Bachelor of Technology — Artificial Intelligence and Data Science',
    description:
      'Pursuing deep curriculum spanning computational mathematics, data structures, machine learning fundamentals, algorithm optimization, and applied artificial intelligence architectures.',
    status: 'In Progress',
    highlights: [
      'Computational Mathematics',
      'Algorithms & Data Structures',
      'Applied Neural Systems',
      'System Programming in C & Python',
    ],
  },
  {
    id: 'rtnagar',
    institution: 'RT Nagar Pre University College',
    period: 'Apr 2024 – May 2025',
    degree: 'Pre-University — PCMC (Physics, Chemistry, Mathematics, Computer Science)',
    description:
      'Pre-engineering concentration in analytical computing, advanced calculus, and programmatic problem solving foundational to data science.',
    status: 'Completed',
    highlights: [
      'Advanced Mathematics & Calculus',
      'Physics & Computational Logic',
      'Foundational Computer Science',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    type: 'HACKATHON // 2026',
    year: '2026',
    title: 'Kaya AI India Hackathon 2026',
    tagline: 'Team // Kaya Sentinel',
    organizerOrTeammate: 'Bushra Fathima',
    problem:
      '“Construction is one of the world\'s largest industries, yet workers on site often lack real-time AI support, while critical information remains buried in documents.”',
    solution:
      'Kaya Sentinel is a Physical AI co-pilot designed to sit directly on the job site rather than inside a dashboard.',
    description:
      'Engineered a multi-agent ecosystem spanning: Vision & Safety, Procurement, Logistics, and Fabrication workflows.',
    tags: ['Edge Intelligence', 'Multi-Agent Co-Pilot', 'Real-Time Processing'],
  },
  {
    type: 'HACKATHON // REVA',
    year: '2025',
    title: 'HACK.ALGO',
    tagline: 'Hack2Skill',
    organizerOrTeammate:
      'GDG on Campus REVA University in association with Algorand Blockchain Club',
    impact:
      'Participated in HACK.ALGO, gaining experience in collaborating under a deadline, adapting quickly, and learning things that usually aren\'t covered in a classroom.',
    tags: ['Collaboration', 'Fast Adaptation', 'Problem Solving under Pressure'],
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: 'LANGUAGES',
    icon: 'terminal',
    items: [
      { name: 'Python', tag: 'Applied / ML' },
      { name: 'C', tag: 'Low-Level' },
    ],
  },
  {
    category: 'DATA & CORE',
    icon: 'database',
    items: [
      { name: 'SQL', tag: 'Relational' },
      { name: 'Data Structures', tag: 'Foundations' },
      { name: 'Problem Solving', tag: 'Logic' },
    ],
  },
  {
    category: 'WEB',
    icon: 'web',
    items: [
      { name: 'HTML', tag: 'Semantic' },
      { name: 'CSS', tag: 'Layout & Styling' },
    ],
  },
  {
    category: 'TOOLS',
    icon: 'build',
    items: [
      { name: 'Git', tag: 'VCS' },
      { name: 'GitHub', tag: 'Collaboration' },
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    module: 'MODULE // 01',
    title: 'Data Analysis with Python',
    status: 'Verification Completed',
    issuer: 'IBM SkillsBuild',
  },
  {
    module: 'MODULE // 02',
    title: 'Data Visualization with Python',
    status: 'Verification Completed',
    issuer: 'IBM SkillsBuild',
  },
  {
    module: 'MODULE // 03',
    title: 'Python 101 for Data Science',
    status: 'Verification Completed',
    issuer: 'IBM SkillsBuild',
  },
];
