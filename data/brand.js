// Spatialgineers Brand Guide — Official Visual System
// Sources: Brand Guide SGX.md + SGX SYSTEM: TACTICAL UI/UX & BRAND GUIDE
// Last updated: September 26, 2026

const brandData = {
  tagline: "Ingeniando Imaginación, Construyendo Realidades",
  philosophy: "Fricción Cero — interfaces operate as a tactical spatial engineering HUD. Background always tends to absolute black (#1A1A1A) so the WebGL canvas and neon accents dominate visual hierarchy.",

  logo: {
    symbol: "Gear (mechanical engineering) + Lightning bolt (digital power) unified as a master badge.",
    structure_color: "#32527B (Metallic Blue)",
    energy_color: "#FDCC0D (Metallic Yellow)",
    usage: "Never show one founder without the other in studio-level communications. Both Danelson and Ricardo are the face and engine."
  },

  colors: [
    { role: "Background/Base", name: "Metal Dark", hex: "#1A1A1A", usage: "App backgrounds, panels, negative space. Canvas for WebGL and neon accents." },
    { role: "Structure", name: "Azul Metálico", hex: "#32527B", usage: "Panel borders, architectural lines, logo structure base." },
    { role: "Primary Energy / CTA", name: "Amarillo Metálico (SGX Gold)", hex: "#FDCC0D", usage: "Buttons (hover), Call to Actions, logo lightning bolt, primary accent. THE dominant energy color." },
    { role: "Secondary Action", name: "Anaranjado Cobrizo", hex: "#B87333", usage: "Secondary buttons, high-energy zones, date badges." },
    { role: "Accent / Glow — SPARINGLY", name: "Neon Cyan", hex: "#00FFFF", usage: "Visual guides, real-time data (FPS, states). NEVER dominant. Max ~10% of frame. Never the main color in social content." },
    { role: "Accent / Glow — SPARINGLY", name: "Neon Orange", hex: "#FFAA00", usage: "Alerts, critical shader variables." },
    { role: "Text / Secondary", name: "Gris Medio", hex: "#888888", usage: "Secondary or inactive text." },
    { role: "Text / Background", name: "White/Black", hex: "#FFFFFF / #000000", usage: "Pure white for primary text on dark, pure black for inverted contexts." }
  ],

  critical_color_rule: "#FDCC0D (SGX Gold) is the dominant energy color in ALL Spatialgineers visual content. Cyan (#00FFFF) is a secondary accent ONLY — max 10% of any frame, never used as a primary or dominant color. Violating this is off-brand.",

  typography: [
    { hierarchy: "Main Titles", font: "Data 70", application: "Sci-fi headers, Tier numbers, Summit titles, major event announcements. Projects 'advanced technology'." },
    { hierarchy: "HUD / UI Core", font: "Orbitron", application: "Menus, buttons, spatial telemetry, HUD labels, dates, rank names." },
    { hierarchy: "Body / Technical", font: "Horta", application: "Descriptions, SOWs, technical texts, long-form content, maximum legibility." }
  ],

  typography_rule: "NEVER use fixed pixels for font sizes in digital interfaces. Use CSS clamp() for fluid scaling between 4K monitors and mobile screens.",

  panels: {
    style: "Glassmorphism + 45° chamfer cuts (Chamfer) via CSS clip-path. Mandatory for all panels overlaid on WebGL canvas.",
    background: "rgba(26, 26, 26, 0.6)",
    blur: "backdrop-filter: blur(10px)",
    border: "1px solid rgba(50, 82, 123, 0.5) — Metallic Blue",
    clip_path: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)"
  },

  buttons: {
    style: "Hardware Switch Vibe — inactive state is transparent with gold border, hover is solid gold (LED lights activating).",
    inactive: "background: rgba(253, 204, 13, 0.05), border: 1px solid #FDCC0D, color: #FDCC0D",
    hover: "background: #FDCC0D, color: #050505, box-shadow: 0 0 15px rgba(253, 204, 13, 0.5)",
    clip_path: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
  },

  hud_architecture: {
    z_index: {
      layer_0: "Three.js WebGL canvas — absolute base",
      layer_10_plus: "Glassmorphism overlays and UI components",
      top_left: "Project logo or 'POWERED BY SPATIALGINEERS' branding"
    },
    principle: "Center of vision must remain unobstructed — all UI elements hug the edges to keep the WebGL action free."
  },

  physical_application: {
    events: "Large-format master logo on brushed metal technical wall. Architectural neon gold lines define the venue as a futuristic playground. Tagline integrated into physical signage.",
    lighting: "All venue lighting defined by Neon Gold (#FDCC0D) glowing lines.",
    summit_day3_reference: "Panel 4 of the Brand Guide is the blueprint for Day 3 hybrid lighting and decoration at Chroma Space Studios."
  },

  business_application: {
    sales: "Embed brand guide visuals in proposals and Core Pitch Deck — demonstrates enterprise-grade brand maturity to corporate clients.",
    production: "Ricardo uses colors and textures as direct reference in Unreal/Unity for virtual world environments.",
    content: "All TikTok, Instagram, and social motion graphics must use SGX Gold as the dominant accent. Cyan as secondary maximum."
  }
};

export default brandData;
