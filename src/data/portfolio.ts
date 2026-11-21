export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "Web App" | "Capstone" | "Event Portal" | "AI & UX" | "Lifestyle";
  role: string;
  year: string;
  accent: "gold" | "orange" | "navy";
  summary: string;
  challenge: string;
  solution: string;
  highlights: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  visualTheme: "mapatunai" | "swampwatch" | "raite" | "evaluate" | "dormchef";
  liveUrl: string;
  displayUrl: string;
  githubUrl: string;
}

export const PROFILE = {
  name: "Graciella E. Pastoral",
  firstName: "Graciella",
  lastName: "Pastoral",
  role: "Front-End Web Developer & Creative Designer",
  subtitle: "4th-Year BSIT Student • University of the Assumption",
  location: "Candaba, Pampanga, Philippines",
  email: "pastoralgraciella@gmail.com",
  phone: "09053010288",
  github: "https://github.com/graeeez/",
  linkedin: "https://www.linkedin.com/in/graciella-pastoral-a7775a4155",
  summary:
    "Aspiring Front-End Web Developer and fourth-year BSIT student at the University of the Assumption, passionate about building responsive, user-friendly websites and creating engaging digital experiences. Experienced in website development, creative branding, graphic design, and multimedia projects — blending creativity with technical craftsmanship to ship innovative digital solutions.",
  languages: ["English", "Filipino", "Kapampangan"],
  interests: ["Designing", "Graphic Design", "Photography", "Digital Art"],
  softSkills: [
    "Time Management",
    "Problem-Solving",
    "Communication",
    "Creativity",
    "Teamwork",
    "Adaptability",
    "Attention to Detail",
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "dormchef",
    title: "DormChef",
    tagline: "Budget-Friendly Student Meal & Recipe Companion",
    category: "Lifestyle",
    role: "Creator, UI Designer & Front-End Developer",
    year: "2025",
    accent: "orange",
    summary:
      "A playful, practical recipe discovery web app crafted for college dormers — matching affordable pantry ingredients and limited dorm appliances to quick, delicious everyday meals.",
    challenge:
      "Students living in dorms often juggle tight budgets, busy schedules, and minimal cooking gear like a single rice cooker or electric kettle.",
    solution:
      "Designed a vibrant recipe companion with ingredient-based filtering, budget tags, prep-time badges, and visual step-by-step cooking cards.",
    highlights: [
      "Smart filtering by budget, prep time, and dorm appliance",
      "Warm, appetizing visual identity with playful micro-interactions",
      "Deployed live on Vercel with full source on GitHub",
    ],
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Figma"],
    metrics: [
      { label: "Audience", value: "Dorm Students" },
      { label: "Filter", value: "Pantry-First" },
      { label: "Deploy", value: "Vercel Live" },
    ],
    visualTheme: "dormchef",
    liveUrl: "https://dormchef-three.vercel.app",
    displayUrl: "dormchef-three.vercel.app",
    githubUrl: "https://github.com/graeeez/dormchef",
  },
  {
    id: "raite",
    title: "RAITE 2026 • Registration",
    tagline: "Event Registration Portal & Brand Media",
    category: "Event Portal",
    role: "Registration Portal Developer",
    year: "2026",
    accent: "orange",
    summary:
      "A streamlined digital registration portal engineered to simplify delegate sign-ups, participant tracking, and event onboarding — paired with creative media work across RAITE 2025 & 2026.",
    challenge:
      "Regional IT assemblies bring hundreds of students and faculty from multiple institutions, causing bottlenecks with manual registration.",
    solution:
      "Built a fast, guided registration experience with instant validation, clean form ergonomics, and clear confirmation flows.",
    highlights: [
      "Streamlined registration and delegation intake workflow",
      "Error-tolerant form UX designed for high-traffic event launches",
      "Paired with RAITE 2025 Best Editing & RAITE 2026 Infographic recognition",
    ],
    stack: ["React", "JavaScript", "HTML5", "CSS3", "Figma"],
    metrics: [
      { label: "Event", value: "RAITE 2026" },
      { label: "Role", value: "Portal Dev" },
      { label: "Award", value: "Best Editing '25" },
    ],
    visualTheme: "raite",
    liveUrl: "https://registration-olive-six.vercel.app",
    displayUrl: "registration-olive-six.vercel.app",
    githubUrl: "https://github.com/graeeez/Registration",
  },
  {
    id: "coffeeshop-ui",
    title: "CoffeeShop UI",
    tagline: "Warm Editorial Cafe Ordering & Menu Experience",
    category: "Web App",
    role: "Front-End Developer & UI Designer",
    year: "2025",
    accent: "gold",
    summary:
      "An inviting, responsive cafe web interface showcasing artisanal coffee menus, featured blends, and tactile ordering cards crafted for visual appetite appeal.",
    challenge:
      "Many local cafe websites feel cluttered or slow on mobile, making menu browsing frustrating for on-the-go customers.",
    solution:
      "Created a clean, tactile menu experience with clear typography, rich visual hierarchy, and instant responsive layouts.",
    highlights: [
      "Mobile-first cafe menu showcase with curated product cards",
      "Warm color choreography and crisp typographic spacing",
      "Live interactive demo hosted on Vercel",
    ],
    stack: ["React", "JavaScript", "CSS3", "UI/UX Design"],
    metrics: [
      { label: "Focus", value: "Brand UI" },
      { label: "Layout", value: "Responsive" },
      { label: "Deploy", value: "Vercel Live" },
    ],
    visualTheme: "evaluate",
    liveUrl: "https://coffeeshopui.vercel.app",
    displayUrl: "coffeeshopui.vercel.app",
    githubUrl: "https://github.com/graeeez/coffeeshop_ui",
  },
  {
    id: "nextjs-blog",
    title: "Next.js Editorial Blog",
    tagline: "Modern Publishing & Reading Web Application",
    category: "AI & UX",
    role: "Front-End Developer",
    year: "2025",
    accent: "gold",
    summary:
      "A sleek Next.js editorial blog and reading platform engineered for fast page transitions, clean typographic rhythm, and effortless content discovery.",
    challenge:
      "Content-heavy reading sites often sacrifice visual elegance or load speed across mobile and desktop viewports.",
    solution:
      "Built on Next.js App Router with structured article layouts, clean navigation, and responsive reading ergonomics.",
    highlights: [
      "Fast Next.js routing and clean editorial reading layouts",
      "Structured article cards and responsive typography",
      "Open-source repository on GitHub with live Vercel deployment",
    ],
    stack: ["Next.js", "React", "JavaScript", "CSS3"],
    metrics: [
      { label: "Framework", value: "Next.js" },
      { label: "Style", value: "Editorial" },
      { label: "Deploy", value: "Vercel Live" },
    ],
    visualTheme: "mapatunai",
    liveUrl: "https://next-js-blog-eta-wheat.vercel.app",
    displayUrl: "next-js-blog-eta-wheat.vercel.app",
    githubUrl: "https://github.com/graeeez/next-js.blog",
  },
  {
    id: "personalities",
    title: "Personalities Showcase",
    tagline: "Interactive Profile & Card Discovery Web App",
    category: "Capstone",
    role: "Front-End Developer & Designer",
    year: "2025",
    accent: "navy",
    summary:
      "An interactive web showcase presenting curated personality profiles with smooth card transitions, responsive grids, and engaging visual storytelling.",
    challenge:
      "Presenting multiple biographical profiles in a way that feels dynamic and browsable rather than a static text list.",
    solution:
      "Crafted interactive profile cards with clear visual focus, crisp layout geometry, and fast client-side switching.",
    highlights: [
      "Interactive profile switching with clean card hierarchy",
      "Responsive layout tailored for both desktop and mobile",
      "Deployed live on Vercel from GitHub",
    ],
    stack: ["React", "JavaScript", "CSS3", "Interactive UI"],
    metrics: [
      { label: "Type", value: "Interactive" },
      { label: "Design", value: "Card UI" },
      { label: "Deploy", value: "Vercel Live" },
    ],
    visualTheme: "swampwatch",
    liveUrl: "https://personalities-indol.vercel.app",
    displayUrl: "personalities-indol.vercel.app",
    githubUrl: "https://github.com/graeeez/personalities",
  },
];

export const TECHNICAL_SKILLS = [
  {
    category: "Coding & Web",
    accent: "navy" as const,
    items: [
      { name: "HTML5 & Semantic Web", level: 95 },
      { name: "CSS3 & Responsive Design", level: 92 },
      { name: "React & Next.js", level: 88 },
      { name: "Interactive Motion & Three.js", level: 82 },
    ],
  },
  {
    category: "Graphic Design Tools",
    accent: "gold" as const,
    items: [
      { name: "Figma (UI/UX & Prototyping)", level: 94 },
      { name: "Canva (Brand & Social)", level: 96 },
      { name: "Adobe Photoshop", level: 86 },
      { name: "Ibis Paint (Digital Art)", level: 88 },
    ],
  },
  {
    category: "Multimedia & Creative",
    accent: "orange" as const,
    items: [
      { name: "CapCut (Video Editing)", level: 93 },
      { name: "Creative Branding", level: 90 },
      { name: "Photography & Composition", level: 85 },
      { name: "Infographic Storytelling", level: 91 },
    ],
  },
];

export const CERTIFICATES = [
  {
    title: "IT Specialist — Cybersecurity",
    issuer: "Certiport / IT Specialist",
    tag: "Security",
  },
  {
    title: "IT Specialist — Databases",
    issuer: "Certiport / IT Specialist",
    tag: "Data",
  },
  {
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services",
    tag: "Cloud",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    tag: "Networking",
  },
  {
    title: "Hardware and Upgrade Support",
    issuer: "Technical Certification",
    tag: "Systems",
  },
  {
    title: "IT Customer Support Basics",
    issuer: "Technical Certification",
    tag: "Support",
  },
];

export const ACHIEVEMENTS = [
  {
    year: "2026",
    title: "Best Presenter — INNOTECHBIZ 2026",
    org: "George Mason University, South Korea",
    highlight: "International Recognition",
    accent: "gold" as const,
  },
  {
    year: "2026",
    title: "3rd Place — Can You HackIt? The IBPAP Challenge",
    org: "IBPAP National Challenge",
    highlight: "Hackathon Winner",
    accent: "orange" as const,
  },
  {
    year: "2026",
    title: "Registration Portal Developer & Infographic Competitor",
    org: "RAITE 2026",
    highlight: "Engineering & Design",
    accent: "gold" as const,
  },
  {
    year: "2026",
    title: "Technical Committee Member",
    org: "IRCITE 2026",
    highlight: "Leadership",
    accent: "orange" as const,
  },
  {
    year: "2025",
    title: "Best Editing — Micro Short Film",
    org: "RAITE 2025",
    highlight: "Multimedia Award",
    accent: "gold" as const,
  },
  {
    year: "2025–Present",
    title: "Public Information Officer & Director for Communications",
    org: "SSITE — University of the Assumption Chapter",
    highlight: "Student Leadership",
    accent: "orange" as const,
  },
];

export const HONORS = [
  { award: "Chairman's Lister", term: "2nd Semester • S.Y. 2025–2026" },
  { award: "Dean's Lister", term: "1st Semester • S.Y. 2025–2026" },
  { award: "Dean's Lister", term: "1st & 2nd Semester • S.Y. 2024–2025" },
  { award: "President's Lister", term: "2nd Semester • S.Y. 2023–2024" },
  { award: "Dean's Lister", term: "1st Semester • S.Y. 2023–2024" },
];

export const EDUCATION = [
  {
    period: "2023 – Present",
    degree: "Bachelor of Science in Information Technology",
    school: "University of the Assumption",
    location: "Del Pilar, Unisite Subdivision, City of San Fernando, Pampanga",
    current: true,
  },
  {
    period: "2021 – 2023",
    degree: "Senior High School (STEM Strand)",
    school: "University of the Assumption",
    location: "City of San Fernando, Pampanga",
    current: false,
  },
  {
    period: "2017 – 2021",
    degree: "Junior High School",
    school: "St. John's Wort Montessori School & St. Andrew's Archdiocesan School of Candaba, Inc.",
    location: "Candaba, Pampanga",
    current: false,
  },
  {
    period: "2011 – 2017",
    degree: "Grade School",
    school: "St. John's Wort Montessori School",
    location: "Antipolo City, Rizal",
    current: false,
  },
];

export const REFERENCES = [
  {
    name: "Dr. Joey M. Suba",
    title: "Dean, CIT, AVPAA, STS",
    org: "University of the Assumption",
  },
  {
    name: "Mr. Mark Anthony D. Madalipay",
    title: "Capstone Adviser",
    org: "University of the Assumption",
  },
];
