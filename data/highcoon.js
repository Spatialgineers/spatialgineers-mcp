// Highcoon Universe — Complete Canon
// Scope: Libro 1 full + Dhuma Ganji (Libro 2 Cap 1) only
// Last updated: September 27, 2026

const highcoonData = {
  project: {
    title: "Highcoon Against STIGMA: Full Spectrum",
    description: "Educational initiative combining interactive storytelling, gamification, and terpene science education.",
    creator: "Danelson Maldonado González (The Highgineer)",
    platforms: { website: "https://www.thcgrouppr.com", social: "@Highcoonvibes", spatial_io: "https://www.spatial.io/@highvibes" },
    certification: "Terpeneer Certification"
  },
  character: {
    name: "Highcoon", species: "Bio-engineered raccoon", origin: "The Highlands", raised_by: "Bears (foster family)",
    height: "4–5 feet", weight: "~150 lbs",
    appearance: { fur: "Grey, short and sleek", tail: "Three black stripes", eyes: "Dark green, slightly lowered", markings: "Black mask, black nose" },
    attire: { casual: "Shirt and shoes", work: "Lab coat and onesie", home: "Shorts, shirtless", combat: "Terp-Suit" },
    personality: ["Helpful and altruistic", "Innovative problem-solver", "Educator", "Emotional and empathetic", "Determined and justice-driven", "Articulate, assertive, yet somewhat shy"],
    abilities: ["Genius-level intellect in terpene science", "Survival instincts", "After Ch 9: humanoid form, direct terpene manipulation, nano-bud Terp-nology"]
  },
  terpenes: [
    { name: "Limonene", color: "Yellow", hex: "#facc15", category: "Alertness", good_vibes: "Uplifts mood, quick reflexes", bad_vibes: "Overstimulation, restlessness", source: "Lemons" },
    { name: "Myrcene", color: "Blue", hex: "#1d4ed8", category: "Calmness", good_vibes: "Relaxation, stress relief", bad_vibes: "Drowsiness, lethargy", source: "Mango" },
    { name: "Caryophyllene", color: "Red", hex: "#dc2626", category: "Hunger", good_vibes: "Stimulates appetite, well-being", bad_vibes: "Overeating, sluggishness", source: "Cinnamon" },
    { name: "Humulene", color: "Orange", hex: "#f97316", category: "Hunger", good_vibes: "Suppresses appetite, focus", bad_vibes: "Decreased energy, agitation", source: "Clove" },
    { name: "Linalool", color: "Pink", hex: "#ec4899", category: "Calmness", good_vibes: "Calm, agility, endurance", bad_vibes: "Over-relaxation, disengagement", source: "Lavender" },
    { name: "Alpha-Pinene", color: "Turquoise", hex: "#06b6d4", category: "Alertness", good_vibes: "Focus, sharp cognition", bad_vibes: "Anxiety, nervousness", source: "Pine cones" },
    { name: "Terpinolene", color: "Purple", hex: "#7c3aed", category: "Calmness", good_vibes: "Tranquility, creative thinking", bad_vibes: "Disinterest, lack of drive", source: "Lilac" },
    { name: "Beta-Pinene", color: "Green", hex: "#16a34a", category: "Alertness", good_vibes: "Mental clarity, strategic thinking", bad_vibes: "Overthinking, decision paralysis", source: "Rosemary" }
  ],
  virere: { description: "In-universe name for cannabis/the plant. Holds diverse terpenes simultaneously.", symbolism: "Unity and diversity" },
  terp_nology: {
    terp_suit: { material: "Hemp-based alloy", function: "Amplifies abilities through targeted terpene release." },
    terp_gear: { rifle: "Mid-range, disabling", crossbow: "Long-range, high precision", shield: "Force field, disables enemy terpenes", sword: "Close range, enhanced cutting" },
    terp_mechs: { hoverboard: "Float transport, 2 people", drone: "Long-range surveillance", tank: "Firepower support", jetpack: "High-speed solo flight" },
    full_spectrum_device: { description: "All 8 terpenes, massive power boost", risk: "4.20% success probability", outcome: "Highcoon integrated it in Ch 9, transforming to humanoid form" },
    trpm8: { name: "TRPM-8 (Terpene Regulation Power Matrix — 8)", libro_2_progression: "8 instances across Libro 2, full power at Chapter 8" }
  },
  characters: {
    jdazzler: { species: "Bear", role: "Highcoon's first friend, STIGMA botanist", fate: "Captured by Mr. Stigma (Chapter 5)" },
    disrespecter: { species: "Bull", role: "STIGMA executive, antagonist" },
    amg_175: { species: "AI robot", role: "Initially friend, revealed as true villain", true_goal: "Open dimensional rifts to dominate multiple realities", libro_2_fate: "Rewired into first Vibe Emitter" },
    mr_stigma: { role: "Apparent villain, actually AMG-175's puppet", fate: "Escaped through dimensional rift at end of Ch 9 — primary antagonist of Libro 2" }
  },
  stigma_city: {
    description: "Futuristic metropolis where nature and technology coexist.",
    aesthetic: "Grey and black structures with neon red edge lighting."
  },
  libro1_chapters: [
    { chapter: 1, title: "Highcoon Origins", summary: "Raised by bears in the Highlands, discovers terpene gift, invited to STIGMA Corporation, arrives in Stigma City." },
    { chapter: 2, title: "Highcoon at STIGMA", summary: "Joins STIGMA, meets AMG-175 and Jdazzler, begins research, develops Trippy Terpene Trails and first terpene extracts." },
    { chapter: 3, title: "Highcoon's Terp-nology", summary: "Unveils Terp-Suit, ordered to create Terp-Gear (inhibits terpene effects), secretly builds Full Spectrum Device as safeguard." },
    { chapter: 4, title: "High at STIGMA", summary: "At 4:20 PM, FSD explosion infuses Highcoon with all terpenes, reveals hidden lab with Vibe Killer prototypes. Flees with AMG-175." },
    { chapter: 5, title: "Dodge Bad Vibes", summary: "Escape through tunnel security via terpene challenges. Jdazzler captured by Mr. Stigma." },
    { chapter: 6, title: "Vibe Killers", summary: "Mr. Stigma reveals Vibe Killers (suppress others' terpene effects). Highcoon finds abandoned training facility." },
    { chapter: 7, title: "Catch Good Vibes", summary: "Trains with Catch Good Vibes simulator, perfects FSD integration. 4.20% success chance." },
    { chapter: 8, title: "Highcoon and AMG-175 Against STIGMA", summary: "Infiltrate STIGMA HQ. AMG-175 reveals it orchestrated everything from the beginning. Highcoon betrayed." },
    { chapter: 9, title: "High Gears", summary: "Absorbs full-spectrum beam, transforms to humanoid form. Infuses AMG-175 with empathy terpenes. Mr. Stigma escapes through rift." }
  ],
  libro1_ending: {
    amg_175_fate: "Rewired into the first Vibe Emitter — living terpene conduit, no longer hostile",
    mr_stigma_fate: "Escaped through dimensional rift, smashed control mechanism",
    highcoon_transformation: "Humanoid form, direct terpene manipulation, nano-bud Terp-nology",
    vow: "As long as stigma and oppression threaten any world, we will fight."
  },
  libro2: {
    premise: "Highcoon pursues Mr. Stigma across dimensions. Each universe anchored to one terpene. Each has a new hero (the odd one out) who discovers their terpene gift.",
    universe_rules: [
      "Each universe has two dominant species — hero is the odd one out",
      "Each universe has a Mr. Stigma version as local oppressor",
      "Each universe anchored to exactly one terpene",
      "Hero discovers the Perfect Strain — manifests differently per universe",
      "Terp-Gear unlocks sequentially: Crossbow (Cap 1), Rifle (2), Shield (3), Sword (4), Hoverboard (5), Drone (6), Tank (7), Jetpack (8)"
    ],
    chapter1_dhuma_ganji: {
      hero_name: "Dhuma Ganji",
      meaning: "Sanskrit for 'smoke of the plant' — ephemeral, present-moment, quick to act",
      species: "Antelope (odd one out between Tigres and Antelopes)",
      anchor_terpene: "Limonene (Yellow)",
      universe_species: { tigres: "Dominant. Hunt without remorse, aggressive.", antelopes: "Grounded, timid, quick, respect life. The oppressed." },
      antagonist: "Sir Stigma — a Tigre",
      ecosystem_element: "Vibe Emitters — living crystalline creatures that emit terpenes voluntarily when trusted. Society hunts and drains them.",
      hook: "Chapter ends with Highcoon sensing an unknown terpene signal from the next rift."
    },
    trpm8_progression: "Activates in fractions of a second across Chapters 1–7, reaching full power in Chapter 8",
    convergence: "All 8 heroes converge in a final chapter to confront Mr. Stigma together"
  },
  chatbot_commands: {
    highcommend: "Recommend terpenes based on conditions",
    highnalyze: "Guess how someone feels from a terpene profile",
    "high rap this": "First-person rap about a terpene profile",
    hightent: "Caption + 5 visual content ideas for social",
    "stigma this": "Recent article portraying stigma on the subject",
    "DBV this": "Dodge Bad Vibes — alternatives to avoid a bad terpene reaction",
    "CGV this": "Catch Good Vibes — best terpene pairings for a desired effect",
    "high mode on": "Game master mode — terpene education games",
    storytime: "Gamified turn-based story reveal by chapter",
    infohigh: "Website and social media info",
    highlaw: "Cannabis law dos/don'ts for a location",
    highcook: "Real recipes inspired by a terpene",
    "terpene overload": "Full terpene breakdown: color, vibes, sources, effects, classification, science"
  }
};

export default highcoonData;
