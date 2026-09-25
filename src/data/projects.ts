export interface ArchStep {
  label: string;
  sub: string;
}

export interface CaseStudy {
  problem: string;
  idea: string;
  architecture: string;
  implementation: string;
  challenges: string;
  result: string;
  learnings: string;
  keyHighlights: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  technologies: string[];
  github: string;
  live?: string;
  isAi: boolean;
  archFlow: ArchStep[];
  caseStudy: CaseStudy;
}

export const PROJECTS: Project[] = [
  {
    id: "drivemind",
    number: "01",
    title: "DriveMind (Velora)",
    category: "AI / AUTOMOTIVE / SYSTEMS",
    tagline: "Connected Automotive Intelligence Platform & Diagnostic Engine",
    summary: "A telemetry and diagnostic engine connecting OBD-II data to safety-focused driver guidance.",
    technologies: ["Java 21", "Spring Boot", "Android BLE", "ESP32 OBD-II", "STN1110/ELM327", "H2 / PostgreSQL"],
    github: "https://github.com/Harshxo44/Velora",
    isAi: true,
    archFlow: [
      { label: "1. ESP32 Dongle", sub: "OBD-II CAN Bus Ingestion" },
      { label: "2. Android BLE", sub: "Phone Gateway Client" },
      { label: "3. Spring Boot", sub: "REST & Security Backend" },
      { label: "4. AI Orchestration", sub: "DTC Diagnostic Router" },
      { label: "5. Driver Guidance", sub: "Safety Alerts & Diagnostics" },
    ],
    caseStudy: {
      problem: "Drivers and fleet operators lack practical real-time visibility into vehicle diagnostic trouble codes (DTCs) and engine telemetry without expensive proprietary scanning tools.",
      idea: "Build an aftermarket diagnostic and intelligence engine that connects standard OBD-II readers to a phone gateway and server backend for clear, human-understandable insights.",
      architecture: "ESP32-S3 / STN1110 dongle reads OBD-II CAN bus telemetry -> Android BLE gateway syncs data -> Spring Boot microservice validates JWT -> Intent router translates DTCs into actionable driver guidance.",
      implementation: "Developed using Java 21 and Spring Boot 3.5. Enforced an explicit read-only vehicle safety boundary to strictly prevent any vehicle actuation or CAN write commands.",
      challenges: "Handling intermittent Bluetooth Low Energy connections during vehicle drive cycles while ensuring read-only payload isolation.",
      result: "Successfully parsed real-time parameters (RPM, Speed, Coolant Temp, Fuel Trim) and mapped DTC codes to actionable safety steps.",
      learnings: "Hardware telemetry requires fail-safe read boundaries and resilient offline caching on phone gateways.",
      keyHighlights: [
        "Real-time OBD-II CAN bus telemetry ingestion",
        "Deterministic DTC diagnostic trouble code interpreter",
        "Strict read-only safety boundary ensuring zero vehicle actuation",
        "JWT-secured Spring Boot backend architecture"
      ],
    },
  },
  {
    id: "estateops",
    number: "02",
    title: "EstateOps (DriveLedger)",
    category: "SOFTWARE / AUTOMATION / BUSINESS SYSTEMS",
    tagline: "Fleet Expense Tracker & Operations Analytics Engine",
    summary: "Cross-platform operation management turning fragmented logs into actionable financial metrics.",
    technologies: ["Flutter", "Dart", "Firebase Firestore", "Cloud Functions", "FL Chart"],
    github: "https://github.com/Harshxo44/drive_ledgerr",
    isAi: false,
    archFlow: [
      { label: "1. Flutter Client", sub: "Driver & Admin UI" },
      { label: "2. Local Cache", sub: "Offline Support" },
      { label: "3. Cloud Fn", sub: "Audit Processing" },
      { label: "4. Firestore", sub: "Role-Based Tree" },
      { label: "5. Analytics", sub: "FL Chart Dashboard" },
    ],
    caseStudy: {
      problem: "Fleet and estate managers face fragmented logs, unmonitored maintenance expenses, and lack clear ROI visibility per vehicle/asset.",
      idea: "An offline-first operational expense tracker with role-based access, automated audit routines, and interactive financial dashboards.",
      architecture: "Flutter cross-platform client with SQLite local caching -> Firebase Cloud Firestore sync -> Node.js Cloud Functions performing audit calculations.",
      implementation: "Built using Flutter/Dart with role-based security rules separating admin, manager, and operator views.",
      challenges: "Resolving multi-device offline sync conflicts when internet connectivity is restored.",
      result: "Delivered instantaneous expense breakdowns, fuel efficiency tracking, and per-vehicle profit analysis.",
      learnings: "Designing for offline-first resilience dramatically improves user experience in low-connectivity operational environments.",
      keyHighlights: [
        "Offline-first sync policy with local database fallback",
        "Role-based security model separating admin and driver roles",
        "Real-time profit & ROI analytics per asset",
        "Interactive analytics dashboards"
      ],
    },
  },
  {
    id: "swaas",
    number: "03",
    title: "Swaas",
    category: "AI / HEALTH / PREDICTION",
    tagline: "Water Safety & Field Diagnostic Environmental Engine",
    summary: "Field water quality sample recording, safety condition scoring, and open map visualization.",
    technologies: ["Java", "Android MVVM", "Node.js", "Express", "Firebase", "Room", "OSMdroid"],
    github: "https://github.com/Harshxo44/Swaas",
    isAi: true,
    archFlow: [
      { label: "1. Field Sample", sub: "pH, TDS, Contaminants" },
      { label: "2. Android Client", sub: "OSMdroid Offline Map" },
      { label: "3. Express API", sub: "Firebase Auth" },
      { label: "4. Safety Engine", sub: "Deterministic Scoring" },
      { label: "5. Map Render", sub: "Safety Status Markers" },
    ],
    caseStudy: {
      problem: "Field water safety assessment lacks open, accessible mapping and transparent scoring algorithms for community diagnostic contributors.",
      idea: "An offline-capable diagnostic mobile app where field workers record water samples and visualize real-time safety scores on open maps.",
      architecture: "Android MVVM app with Room DB -> Express.js API gateway -> Deterministic water scoring engine -> OSMdroid map renderer.",
      implementation: "Implemented using Java for Android, Node.js/Express backend, and OSMdroid open-source mapping engine.",
      challenges: "Ensuring accurate offline spatial indexing for map markers without relying on Google Play Services.",
      result: "Enabled rapid field recording of pH, TDS, and turbidity with instant color-coded safety scoring.",
      learnings: "Community environmental tools require transparent, deterministic rule evaluation alongside offline storage.",
      keyHighlights: [
        "Interactive OSMdroid water safety map rendering",
        "Deterministic water safety scoring algorithm",
        "Offline-friendly Room database caching",
        "Role-based contributor access"
      ],
    },
  },
  {
    id: "dubai-studio",
    number: "04",
    title: "DubAI Studio",
    category: "AI / AUDIO / MULTILINGUAL",
    tagline: "Multilingual AI Video Dubbing & Voice Cloning Pipeline",
    summary: "Vocal isolation, transcription, zero-shot voice cloning, and audio-video timing synchronization.",
    technologies: ["Python", "PyTorch", "XTTS-v2", "Faster-Whisper", "Demucs v4", "FFmpeg", "Node.js"],
    github: "https://github.com/Harshxo44/DubAI_Studio",
    isAi: true,
    archFlow: [
      { label: "1. Video Input", sub: "MP4 / WAV Input" },
      { label: "2. Demucs v4", sub: "Vocal Stem Separation" },
      { label: "3. Faster-Whisper", sub: "ASR & Translation" },
      { label: "4. XTTS-v2", sub: "Zero-Shot Voice Cloning" },
      { label: "5. FFmpeg Sync", sub: "Time Stretch & Mix" },
    ],
    caseStudy: {
      problem: "Video localization is slow and expensive, while simple TTS solutions lose the original speaker's emotional tone and voice timbre.",
      idea: "An automated pipeline combining neural stem separation, timestamped transcription, voice cloning, and precise audio stretch sync.",
      architecture: "Demucs v4 splits voice from background music -> Faster-Whisper extracts timestamped transcript -> XTTS-v2 generates target language audio -> FFmpeg mixes synced audio.",
      implementation: "Python AI pipeline orchestrated with Node.js APIs and stream-based FFmpeg commands for non-pitch-altering time stretching.",
      challenges: "Aligning translated speech durations with original video lip timings without pitch distortion.",
      result: "Achieved seamless multilingual voice cloning preserving original background audio.",
      learnings: "Chaining specialized single-purpose AI models produces better results than single monolithic models.",
      keyHighlights: [
        "Background music preservation via Demucs v4",
        "Timestamp-precise speech recognition with Faster-Whisper",
        "Zero-shot voice cloning preserving speaker timbre",
        "Rubberband time-stretching audio sync pipeline"
      ],
    },
  },
];
