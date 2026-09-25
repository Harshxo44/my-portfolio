export interface ProfileData {
  name: string;
  tagline: string;
  role: string;
  institution: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  resumePdf: string;
  bioIntro: string;
  personalPhilosophy: string;
  handwrittenLine: string;
  aboutStatement: string;
  aboutDetails: string;
}

export const PROFILE: ProfileData = {
  name: "HARSH SHARMA",
  tagline: "Computer Science Engineering Student & AI/ML / Full-Stack Builder",
  role: "Computer Science Engineering Student",
  institution: "Parul University / Vadodara, India",
  location: "Vadodara, India",
  email: "harshsharmag98@gmail.com",
  github: "https://github.com/Harshxo44",
  linkedin: "https://www.linkedin.com/in/harshxo44/",
  instagram: "https://www.instagram.com/harshh.ok/",
  resumePdf: "/resume/harshresume.pdf",
  bioIntro: `I'm Harsh Sharma — a Computer Science Engineering student who gets curious about almost everything I haven't tried yet. I like exploring new technologies, chasing unfamiliar problems, and turning ideas into things I can actually build.`,
  personalPhilosophy: `What keeps me moving is simple: learn something today that I couldn't do yesterday, then use it to build something better tomorrow.`,
  handwrittenLine: `— curious about what's next.`,
  aboutStatement: `I don't want to stop exploring what's next.`,
  aboutDetails: `I'm naturally curious about unfamiliar ideas, technologies and opportunities. I like trying things I haven't done before, figuring out how they work, and learning through the process — even when things don't go as planned.

What keeps me fascinated by building is progress: learning something today that I couldn't do yesterday, and using it to build something better tomorrow.`,
};

export interface CapabilityCategory {
  id: string;
  label: string;
  technologies: string[];
}

export const CAPABILITY_MAP: CapabilityCategory[] = [
  {
    id: "ai",
    label: "AI",
    technologies: ["LLMs", "AI APIs", "RAG", "AI Agents", "Prompt Engineering", "Faster-Whisper", "XTTS-v2"],
  },
  {
    id: "ml",
    label: "ML",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "Model Evaluation"],
  },
  {
    id: "fullstack",
    label: "FULL-STACK",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Spring Boot", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "systems",
    label: "SYSTEMS",
    technologies: ["REST APIs", "System Architecture", "Databases (SQL/NoSQL)", "Authentication (JWT)", "BLE Integration"],
  },
  {
    id: "automation",
    label: "AUTOMATION",
    technologies: ["APIs & Webhooks", "Workflows", "Data Pipelines", "FFmpeg Pipelines", "AI-assisted Automation"],
  },
];

export interface ProofItem {
  category: string;
  projects: { title: string; id: string }[];
}

export const PROOF_IN_PRACTICE: ProofItem[] = [
  {
    category: "AI / ML PIPELINES",
    projects: [
      { title: "DubAI Studio", id: "dubai-studio" },
      { title: "Swaas", id: "swaas" },
    ],
  },
  {
    category: "FULL-STACK & MOBILE",
    projects: [
      { title: "EstateOps (DriveLedger)", id: "estateops" },
    ],
  },
  {
    category: "SYSTEM DESIGN & AUTOMOTIVE",
    projects: [
      { title: "DriveMind (Velora)", id: "drivemind" },
      { title: "EstateOps (DriveLedger)", id: "estateops" },
    ],
  },
];

export interface TutorialItem {
  number: string;
  category: string;
  title: string;
  summary: string;
  topics: string[];
}

export const TUTORIALS: TutorialItem[] = [
  {
    number: "01",
    category: "AI / AUDIO",
    title: "Building Voice-Aware Media Pipelines",
    summary: "Understanding speech separation, transcription, zero-shot voice synthesis, and synchronized audio muxing.",
    topics: ["Whisper", "XTTS-v2", "Demucs", "FFmpeg"],
  },
  {
    number: "02",
    category: "SYSTEMS",
    title: "Designing OBD-II Diagnostic Services in Java 21",
    summary: "Connecting hardware dongles to Spring Boot backends with read-only safety boundaries.",
    topics: ["Java 21", "Spring Boot", "BLE", "OBD-II"],
  },
  {
    number: "03",
    category: "FRONTEND",
    title: "Making React Interfaces Feel Editorial & Tactile",
    summary: "Moving beyond generic templates using bold typography, custom interactions, and physics-driven motion.",
    topics: ["React", "TypeScript", "Framer Motion", "CSS Grid"],
  },
  {
    number: "04",
    category: "DATA & AUTOMATION",
    title: "Building Offline-First Mobile Architectures",
    summary: "Designing robust state sync and local database caching for low-connectivity field environments.",
    topics: ["Flutter", "Room DB", "Firestore", "SQLite"],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  pdf?: string;
}

export const CERTIFICATIONS: Certification[] = [
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services (AWS)", pdf: "/certification/awscloud.pdf" },
  { title: "AWS Academy Graduate — Cloud Foundations", issuer: "AWS Academy", pdf: "/certification/awsacadamic.pdf" },
  { title: "IBM Java Developer Professional", issuer: "IBM", pdf: "/certification/IBMSKILL.pdf" },
  { title: "IBM Deep Learning with Keras & TensorFlow", issuer: "IBM", pdf: "/certification/ibmbig.pdf" },
  { title: "Generative AI for Software Development", issuer: "Coursera / IBM", pdf: "/certification/GENAI.pdf" },
  { title: "Git & GitHub Certified", issuer: "Open Source / GitHub", pdf: "/certification/GITGAT.pdf" },
];
