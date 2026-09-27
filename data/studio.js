// Spatialgineers Studio Info — Complete
// Last updated: September 27, 2026

const studioData = {
  name: "Spatialgineers",
  legal_name: "The High Creators Group",
  location: "Puerto Rico",
  tagline_official: "De Espectadores Pasivos a Arquitectos de Realidades",
  tagline_brand: "Ingeniando Imaginación, Construyendo Realidades",
  description: "Spatialgineers is a spatial computing studio based in Puerto Rico specializing in VR/AR/XR, immersive games, 3D design, and interactive spatial experiences. Founded by Danelson Maldonado González (The Highgineer) and Ricardo Hernandez (Lightning Fingers). Multi-vertical simultaneous execution is their deliberate strategy.",
  founders: [
    {
      name: "Danelson Maldonado González",
      alias: "The Highgineer",
      role: "Founder / Creative Director / Host",
      bio: "Founder and visionary. Leads SGX Guild, hosts Summit, develops Highverse. Leadership: Silicon Valley reality distortion + Boricua directness. Also known as The High.",
      note: "NEVER describe Spatialgineers as a solo project."
    },
    {
      name: "Ricardo Hernandez",
      alias: "Lightning Fingers",
      role: "Co-founder / Technical Director / Co-organizer",
      bio: "Technical engine. Directs production, Unreal/Unity workflows, live event infrastructure. Always co-presented with Danelson."
    }
  ],
  specialties: ["Virtual Reality (VR)","Augmented Reality (AR)","Extended Reality (XR)","Immersive game development","3D design and asset creation","WebXR experiences","Spatial computing activations for events and brands","Live virtual event production (hybrid physical + digital)","Digital twin environments","Interactive portfolio platforms","Avatar and real-time facial capture experiences","Music-reactive visualizers","Gamified engagement systems for events"],
  verticals: ["Entertainment","Health","Government","Web3 / Digital Ownership","Cultural preservation","Education","Municipalities","Musicians and artists"],
  competitive_advantage: "Ningún evento en Puerto Rico — and very few anywhere — has the full immersive spatial computing solution Spatialgineers offers. The Summit is the live product demo.",
  notable_projects: [
    { name: "Bad Bunny Land", description: "Immersive spatial activation for Bad Bunny" },
    { name: "MVFW 2025", description: "Metaverse Fashion Week 2025" },
    { name: "FITUR 2026", description: "International Tourism Trade Fair 2026" },
    { name: "Spatialgineers Summit 2026", description: "Flagship 3-day hybrid event Dec 11-13 2026" },
    { name: "Highcoon Against STIGMA: Full Spectrum", description: "Original IP terpene universe — Book 1 complete, Book 2 in development" }
  ],
  active_products: [
    { name: "SGX Guild", type: "Talent pipeline / education", description: "Free gamified training. 6 pillars, 8 ranks, Grimoire OS.", url: "https://apply.spatialgineers.com" },
    { name: "Spatialgineers Summit 2026", type: "Flagship event", url: "https://summit.spatialgineers.com" },
    { name: "Highcoon Universe", type: "Original IP / Web3", social: "@Highcoonvibes" },
    { name: "Tales, Terps & Tech (TTT)", type: "Editorial / creator brand", description: "Creator-identity protection. Front-end pipeline feeding Highverse. Prototype 001: Kael/Myrcene." },
    { name: "Entrepreneur Match", type: "App", description: "Swipe-based founder matching. Spec complete, dev handoff ready." }
  ],
  platforms: {
    main_site: "https://www.spatialgineers.com",
    summit_platform: "https://summit.spatialgineers.com",
    apply_portal: "https://apply.spatialgineers.com",
    highcoon_site: "https://www.thcgrouppr.com",
    spatial_io: "https://www.spatial.io/@highvibes"
  },
  social: { tiktok: "@spatialgineers", instagram: "@spatialgineers", highcoon: "@Highcoonvibes" },
  contact: { studio_email: "info@spatialgineers.com", general: "thcgrouppr@gmail.com" },
  github_org: "github.com/spatialgineers",
  tech_stack: {
    frontend: "React 18 + TypeScript 5 + Vite (SPA)",
    styling: "Tailwind CSS (cyberpunk/spatial theme)",
    backend: "Firebase / Firestore (real-time)",
    engines_3d: ["Three.js","React Three Fiber","Unity","Unreal Engine"],
    webxr: ["WebXR","A-Frame","Babylon.js"],
    streaming: "OBS",
    avatar: "Real-time facial capture → digital avatar pipeline"
  },
  brand: {
    logo: "Gear + lightning bolt. Structure: Azul Metálico. Energy: Amarillo Metálico.",
    visual_philosophy: "Tactical spatial engineering HUD. Absolute black canvas (#1A1A1A) + neon accents. Glassmorphism panels with 45deg chamfer cuts.",
    colors: [
      { role: "Base", name: "Metal Dark", hex: "#1A1A1A" },
      { role: "Structure", name: "Azul Metálico", hex: "#32527B" },
      { role: "Energy / Primary CTA", name: "Amarillo Metálico", hex: "#FDCC0D", note: "DOMINANT energy color" },
      { role: "Secondary Action", name: "Anaranjado Cobrizo", hex: "#B87333" },
      { role: "Accent ONLY", name: "Neon Cyan", hex: "#00FFFF", note: "ACCENT ONLY — never dominant, never primary in social" },
      { role: "Accent ONLY", name: "Neon Orange", hex: "#FFAA00" },
      { role: "Secondary Text", name: "Gris Medio", hex: "#888888" }
    ],
    typography: { titles: "Data 70", hud_ui: "Orbitron", body: "Horta" },
    critical_rules: [
      "Cyan is accent ONLY — never dominant",
      "All readable body text must be high-contrast white (#FFFFFF) or black — never yellow/gold as body text",
      "Gold (#FDCC0D) is for decorative accents, dividers, underlines only"
    ]
  },
  strategic_partners: [{ name: "Vyze & Ericson", alias: "La Base de los Élites", role: "Summit 2026 co-producers at Chroma Space Studios. Tier 4 equivalent in-kind strategic partnership." }],
  operating_principles: [
    "Multi-vertical simultaneous execution is the deliberate strategy",
    "Never advise narrowing focus or picking one niche first",
    "Studio story is always both Danelson AND Ricardo — never solo",
    "SGX Guild is completely free — charging would contradict its mission"
  ]
};

export default studioData;
