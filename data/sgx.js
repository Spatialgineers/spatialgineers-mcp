// SGX Framework — Guild System + Grimoire OS — COMPLETE
// Last updated: September 27, 2026

const sgxData = {
  mission: "De Espectadores Pasivos a Arquitectos de Realidades",
  description: "The SGX Guild is Spatialgineers' gamified education and talent pipeline. Completely free. 6 specialization pillars, 8 ranks, XP-based progression, La Germinadora incubation program. The Grimoire OS is the operational platform.",
  cost: "Completely free. No fees of any kind.",
  pillars: [
    { id: "SGX.Spark", focus: "Programación, Sistemas, IA, Shaders, Física y Motor de Juego" },
    { id: "SGX.Stage", focus: "Diseño de Niveles, Entornos 3D, Iluminación y ArchViz" },
    { id: "SGX.Story", focus: "Concepto 2D, Narrativa, Diseño de Personajes y Storytelling" },
    { id: "SGX.Showcase", focus: "Modelado 3D de Assets, Rigging, Texturizado y VFX" },
    { id: "SGX.System", focus: "Integración Web, Inteligencia Artificial y Lógica Backend" },
    { id: "SGX.Synthesize", focus: "Integración, Game Design, Producción y Rigor General" }
  ],
  ranks: [
    { rank: 1, name: "Recruit", alias: "Recluta", phase: "Weeks 1–5 (SGX Trials hackathon)" },
    { rank: 2, name: "Initiate", alias: "Iniciado", phase: "Weeks 6–18", xp_range: "0–499 XP", slots: "Max 10 per cohort", main_quest: "Interactive portfolio combining Affinity with Wix platform and SGX tech stack." },
    { rank: 3, name: "Awakened", alias: "Despertado", phase: "Weeks 19–31", xp_threshold: "2,500+ XP", slots: "4 active", main_quest: "Volume and Velocity — extreme training against the clock." },
    { rank: 4, name: "Specialist", alias: "Especialista", phase: "Week 32+", xp_threshold: "5,000+ XP", main_quest: "100% pillar mastery. Bounties + weekly masterclasses." },
    { rank: 5, name: "Master Specialist", alias: "Maestro Especialista", main_quest: "Multi-classing: dominate 2+ pillars." },
    { rank: 6, name: "Veteran", alias: "Veterano", main_quest: "Manage 1 real client project start-to-finish under NDA." },
    { rank: 7, name: "Pillar Captain", alias: "Capitán de Pilar", slots: "Only 5 globally", timeline: "~3 years", main_quest: "Lead entire pillar division." },
    { rank: 8, name: "Guild Master", alias: "Maestro de Gremio", description: "Highest authority in the SGX system." }
  ],
  evaluation_dimensions: {
    note: "Geometric mean scoring — a 0 on ANY dimension destroys the result.",
    dimensions: [
      { id: "engineeringRigor", name: "Rigor Ingenieril" },
      { id: "narrativeVision", name: "Visión Narrativa" },
      { id: "technicalSkill", name: "Destreza Técnica" },
      { id: "autonomia", name: "Autonomía" },
      { id: "teamPlayer", name: "Compañerismo / Team Player" }
    ],
    peer_review_metrics: ["Comunicación", "Respeto", "Confianza", "Compañerismo Individual (1–10)"]
  },
  trials_structure: {
    name: "SGX Trials",
    description: "5-week entry hackathon. Teams of 3–5. Create identity, lore, visual design, and functional interactive portfolio for a fictional creative studio.",
    schedule: [
      { week: "Week 1 — The Genesis", deliverable: "Teams formed, pillar assigned, MVP scope defined." },
      { week: "Week 2 — The Blueprint", deliverable: "Studio name, lore, storyboards." },
      { week: "Week 3 — The Build", deliverable: "3D blockouts, code bases, or animatics." },
      { week: "Week 4 — The Crucible", deliverable: "Functional prototype. Worst team eliminated. 4 teams remain.", elimination: true },
      { week: "Week 5 — Golden Master", deliverable: "Finished product + commercial pitch. Max 10 Initiates selected." }
    ]
  },
  wild_card_rule: "A new talent who reaches a rank can outshine a stagnant veteran and take their advancement slot.",
  la_germinadora: {
    name: "La Germinadora",
    description: "Incubation program for near-graduates, recent graduates, or Veterans with an original concept.",
    terms: {
      provides: "Technical infrastructure, codebase, software licenses, commercial mentorship.",
      equity: "10% retained by Spatialgineers — only if the project monetizes.",
      ip_rule: "Creator retains full authorship of art, story, and original characters.",
      filter: "Must pass SGX Trials and complete first Initiate trimester. No exceptions."
    }
  },
  grimoire_os: {
    description: "Personal command center for all guild members. Full-stack gamified platform.",
    tech_stack: "React 18 + TypeScript 5 + Vite · Firebase Auth + Firestore · Three.js + React Three Fiber · Recharts · Tailwind CSS",
    architecture: "7 interconnected portals: Landing → SGX Guild · Grimoire OS · SGX Toolkit · Directory · Apply · Admin Console · Public Profile (/u/:id)",
    modules: [
      "Creator Identity HUD: dynamic profile, XP bar, streak engine, 5-axis skill radar",
      "Quest Board — Kanban: Main, Side, and Ranked Trial missions",
      "Bounties — daily/weekly high-priority guild challenges",
      "Skill Tree Visualizer — interactive node graph of spatial computing competencies",
      "SGX Codex — technical knowledge library with lesson delivery and XP rewards",
      "Hall of Fame — leaderboard by rank (Geometric Mean or Growth metrics)",
      "Prontuario — individual academic record with graded trials and feedback",
      "Ranked Matrix — cohort-wide performance distribution and percentiles",
      "Peer Review — cross-evaluation using official rubric",
      "Digital Certificates — cryptographically verified, QR-coded, PDF-exportable",
      "Scrollytelling Book — immersive holographic grimoire reader",
      "Guild Polls — democratic governance voting",
      "Admin Console — full Guild Master control"
    ],
    admin_capabilities: [
      "Command Palette (Cmd+K): universal search, CSV/JSON export",
      "Cohort Management: dates, active seniority, phase transitions",
      "Grading Form: 5-dimension scoring, XP audit receipts",
      "Quest/Bounty Admin: create/edit missions, approve/reject submissions",
      "Codex Studio: publish technical articles, validate lesson projects",
      "Relics Admin: curate Hall of Fame with builds, GitHub repos, videos",
      "Certificate Templates: HTML/CSS diplomas per phase",
      "Email Templates + Live Ticker: announcements and polls"
    ],
    visual_design: { theme: "Cyberpunk Spatial / Digital Grimoire", background: "#05080F", gold: "#FDCC0D", cyan: "#00FFFF", blue: "#32527B", fonts: "Orbitron + Inter" }
  },
  first_cohort: {
    name: "Cohorte 1 — Verano 2026", showcase_date: "August 28, 2026", initiates: 8,
    top_3: [{ rank: 1, team: "SGX.Sparkers", medal: "Gold" }, { rank: 2, team: "SGX.Stagers", medal: "Silver" }, { rank: 3, team: "SGX.Storytellers", medal: "Bronze" }],
    certificate_emission_date: "August 7, 2026"
  }
};

export default sgxData;
