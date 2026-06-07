// Single source of truth for all portfolio content, extracted from the design.

export const profile = {
  name: 'Nguyen Ngoc Binh',
  title: 'Senior Mobile Solution Developer',
  tagline: 'Building Mobile Experiences with Design Thinking & AI',
  badge: 'Available for opportunities',
  email: 'nnbinh0301@gmail.com',
  monogram: 'NB',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

// Résumé/CV served from public/ (BASE_URL keeps it correct on GitHub Pages).
export const cv = {
  url: `${import.meta.env.BASE_URL}Nguyen-Ngoc-Binh-CV.pdf`,
  filename: 'Nguyen-Ngoc-Binh-CV.pdf',
  label: 'Download CV',
}

export const heroCtas = {
  primary: { label: 'View My Work', href: '#projects' },
  secondary: { label: cv.label, href: cv.url, download: cv.filename },
}

export const about = {
  title: 'About Me',
  subtitle:
    'A Senior Mobile Developer with a rare blend of design expertise and engineering excellence',
  bio: [
    'With 10+ years of experience in mobile development, I bridge the gap between design and engineering. My background in Graphic Design and UX combined with deep technical expertise in Kotlin, Swift, and cross-platform frameworks allows me to build products that are both beautiful and performant.',
    'Currently at Giao Hang Nhanh, I lead mobile initiatives that serve 20,000+ users, building scalable architectures and leveraging AI tools to accelerate development workflows.',
  ],
  stats: [
    { value: '10+', label: 'Years Experience' },
    { value: '15+', label: 'Apps Delivered' },
    { value: '6', label: 'Certifications' },
    { value: '99.9%', label: 'Crash-Free Rate' },
  ],
}

export const aiMindset = {
  title: 'AI-First Mindset',
  subtitle: 'Embracing AI as a core development partner, not just a tool',
  cards: [
    {
      icon: 'terminal',
      accent: 'var(--accent-cyan)',
      title: 'Claude Code',
      desc: 'AI-powered pair programming for architecture design, code review, and automated testing workflows',
    },
    {
      icon: 'code',
      accent: 'var(--accent-violet)',
      title: 'Cursor IDE',
      desc: 'AI-native IDE for rapid prototyping, intelligent code completion, and context-aware refactoring',
    },
    {
      icon: 'brain',
      accent: 'var(--warning)',
      title: 'Gemini & ChatGPT',
      desc: 'Multi-model approach for research, documentation, problem-solving, and development acceleration',
    },
  ],
}

export const experience = {
  title: 'Experience',
  subtitle: 'A decade of building impactful mobile solutions',
  items: [
    {
      period: 'MAY 2024 — PRESENT',
      company: 'Giao Hang Nhanh',
      role: 'Senior Mobile Solution Developer',
      bullets: [
        'Leadership & Agile: Led Scrum events, sprint planning, team alignment — improved delivery velocity by 35%',
        'System Architecture: Designed real-time messaging app for 20,000+ users and hybrid framework reducing code duplication by 40%',
        'CI/CD & DevOps: Built pipelines with GitHub Actions & GCP, slashing deployment time by 70%',
        'SDK Engineering: Delivered modular SDKs for analytics, GPS, camera, networking, navigation',
        'Performance: Optimized native camera (+65%), achieved 99.9% crash-free sessions',
        'Design Systems: Created comprehensive design token system for unified UI/UX across platforms',
        'AI Integration: Applied AI-driven tools to automate testing and accelerate workflows',
      ],
    },
    {
      period: 'AUG 2021 — FEB 2024',
      company: 'GoTyme Bank (Restaff)',
      role: 'Senior Android Developer',
      bullets: [
        'CICO Feature: Cash in/out at convenience stores using map SDK, barcode generation, Firebase remote config',
        'Bank Statement: Calendar-based statement requests with Jetpack Compose, Kotlin Multiplatform',
        'Profile Feature: Dynamic data-driven UI for account info, transaction limits, settings',
        'Automation Testing: First person to replace manual testing in releases — increased stable ratio from 65% to 90%',
        'Crashlytic Tracking: Built SDK tracking user behaviors, app state, activity/fragment lifecycle',
      ],
    },
    {
      period: 'NOV 2017 — JUN 2021',
      company: 'Cyberlogitec Vietnam',
      role: 'Senior Android Developer',
      bullets: [
        'Reefer Monitoring: Temperature monitoring for containers on vessels — Kotlin, MVVM, Hilt, Room, Coroutine',
        'Cargo Work: Daily task recording app — improved performance, refactored MVC to MVVM',
        'VITS: Vehicle inspection & quality tracking at port gates — drew prototypes, defined API contracts',
        'Logistic App: Vessel management & merchandise evaluation — defined common functions, drew workflows',
      ],
    },
    {
      period: 'MAR 2013 — NOV 2017',
      company: 'ISB Vietnam → MTI → Webtretho',
      role: 'Full Stack → Android Developer',
      bullets: [
        'ISB Vietnam (2013-2016): Intelligent Refrigerator Android app, Music websites (.NET MVC, Ruby on Rails), Docker, Elasticsearch, Selenium automation',
        'Webtretho (2017): Built Bé Yêu App independently in 3 months — MVP, Realm, RxJava, Data Binding',
        'MTI Technology (2016-2017): Luna Luna health app, Tsutaya Music Player, Healthcare app — Robolectric testing, Google Drive/Dropbox integration',
      ],
    },
  ],
}

export const skills = {
  title: 'Tech Stack',
  subtitle: 'Technologies and tools I work with daily',
  groups: [
    {
      category: 'TRENDING 2026',
      accent: 'var(--warning)',
      trending: true,
      chips: [
        { label: 'Kotlin Multiplatform', icon: 'smartphone' },
        { label: 'React Native + TypeScript', icon: 'code' },
        { label: 'SwiftUI', icon: 'monitor-smartphone' },
        { label: 'Jetpack Compose', icon: 'layers' },
        { label: 'AI/ML Integration', icon: 'brain' },
      ],
    },
    {
      category: 'MOBILE',
      accent: 'var(--accent-cyan)',
      chips: ['Kotlin', 'Java', 'Swift', 'SwiftUI', 'Jetpack Compose', 'React Native', 'KMP'].map((label) => ({ label })),
    },
    {
      category: 'ARCHITECTURE',
      accent: 'var(--accent-violet)',
      chips: ['MVVM', 'Clean Architecture', 'Hilt', 'Koin', 'Coroutines'].map((label) => ({ label })),
    },
    {
      category: 'DEVOPS & AI',
      accent: 'var(--success)',
      chips: ['GitHub Actions', 'GCP', 'Firebase', 'Claude', 'Cursor'].map((label) => ({ label })),
    },
  ],
}

export const projects = {
  title: 'Featured Projects',
  subtitle: 'Selected work showcasing impact and technical depth',
  items: [
    {
      title: 'GHN Messaging System',
      desc: 'Real-time messaging for 20,000+ users with scalable architecture and design token system',
      image: 'https://images.unsplash.com/photo-1620116474872-edca25baf513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['Micro Frontend', 'Coroutine', 'Clean Architecture', 'Koin'],
    },
    {
      title: 'GoTyme Bank',
      desc: 'Digital banking app with CICO, statements, and KMP cross-platform architecture',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['Micro Frontend', 'Coroutine', 'Clean Architecture', 'Hilt', 'KMP'],
    },
    {
      title: 'VITS Quality Tracker',
      desc: 'Vehicle inspection & tracking system for port logistics operations',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['MVVM', 'RxJava', 'Hilt'],
    },
  ],
}

export const certifications = {
  title: 'Certifications',
  subtitle: 'Continuous learning across mobile, cloud, and design',
  items: [
    { name: 'Meta iOS Developer', issuer: 'Meta / Coursera · 2024' },
    { name: 'Meta React Native', issuer: 'Meta / Coursera · 2025' },
    { name: 'GCP Developer', issuer: 'Google / Coursera · 2024' },
    { name: 'Foundation UX Design', issuer: 'Google / Coursera · 2021' },
    { name: 'Graphic Design', issuer: 'Kent International · 2019' },
    { name: 'IT - University of Science', issuer: 'HCMUS · 2010-2017' },
  ],
}

export const footer = {
  copyright: '© 2026 Nguyen Ngoc Binh. Built with passion & code.',
  socials: [
    { label: 'Email', icon: 'mail', href: 'mailto:nnbinh0301@gmail.com' },
    { label: 'GitHub', icon: 'github', href: 'https://github.com/nguyenngocbinh' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/' },
  ],
}
