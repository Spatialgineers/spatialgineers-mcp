// Spatialgineers Summit 2026 — Complete Ground Truth + Run of Show
// Last updated: September 27, 2026

const summitData = {
  name: "Spatialgineers Summit 2026",
  dates: { start: "December 11, 2026 (Friday)", end: "December 13, 2026 (Sunday)", range: "December 11–13, 2026" },
  format: "3-day hybrid: Days 1–2 digital only (YouTube Live) · Day 3 hybrid (physical + digital)",
  physical_venue: "Chroma Space Studios, San Juan, Puerto Rico",
  transmission: "YouTube Live all 3 days",
  cost: "FREE — digital programming open to all. Physical Day 3 is by invitation only.",
  platform_url: "https://summit.spatialgineers.com",
  team: {
    founder_host: "Danelson Maldonado González — The Highgineer",
    cofounder_technical_director: "Ricardo Hernandez — Lightning Fingers",
    strategic_venue_partners: "Vyze & Ericson (La Base de los Élites) — Chroma Space Studios co-producers",
    drinks_coordination: "César",
    note: "Spatialgineers is NOT a solo effort. All public-facing material must represent both Danelson and Ricardo."
  },
  run_of_show: {
    day1: {
      date: "Friday, December 11", format: "Digital only — YouTube Live", hours: "10:00am–4:30pm (approx 6.5 hrs)",
      schedule: [
        { time: "10:00am", segment: "Intro / Apertura", duration: "30 min", notes: "Danelson opens. Roblox space live and accessible." },
        { time: "10:30am", segment: "Artista #1 (live inside Roblox)", duration: "15 min" },
        { time: "10:45am", segment: "Pilar 1 — Intro + 2 Use Cases", duration: "25 min" },
        { time: "11:10am", segment: "Artista #2 (live inside Roblox)", duration: "15 min" },
        { time: "11:25am", segment: "Pilar 2 — Intro + 2 Use Cases", duration: "25 min" },
        { time: "11:50am", segment: "Artista #3 (live inside Roblox)", duration: "15 min" },
        { time: "12:05pm", segment: "Pilar 3 — Intro + 2 Use Cases", duration: "25 min" },
        { time: "12:30pm", segment: "Artista #4 (live inside Roblox)", duration: "15 min" },
        { time: "12:45pm", segment: "Pilar 4 — Intro + 2 Use Cases", duration: "25 min" },
        { time: "1:10pm", segment: "Artista #5 (live inside Roblox)", duration: "15 min" },
        { time: "1:25pm", segment: "Pilar 5 — Intro + 2 Use Cases", duration: "25 min" },
        { time: "1:50pm", segment: "Artista #6 (live inside Roblox)", duration: "15 min" },
        { time: "2:05pm", segment: "Pilar 6 — Intro + 2 Use Cases", duration: "25 min" },
        { time: "2:30pm", segment: "Initiates — Portafolios Interactivos", duration: "90 min", notes: "10 Initiates × 7 min each. Virtual via YouTube Live." },
        { time: "4:00pm", segment: "Cierre del Día 1", duration: "30 min", notes: "Danelson closes. Announces 4 top performers + 2 mentions." },
        { time: "post-stream", segment: "Deliberación interna", notes: "Team selects 4 top performers + 2 mentions. Not live." }
      ]
    },
    day2: {
      date: "Saturday, December 12", format: "Digital only — YouTube Live", hours: "10:00am–4:00pm (6 hrs)",
      schedule: [
        { time: "10:00am", segment: "Intro del Día 2", duration: "30 min", notes: "Recap Day 1. Announcement of 4 top performers + 2 mentions." },
        { time: "10:30am", segment: "Conversación Pilar 1 — Speaker de industria", duration: "45 min" },
        { time: "11:15am", segment: "Intermisión", duration: "10 min" },
        { time: "11:25am", segment: "Conversación Pilar 2 — Speaker de industria", duration: "45 min" },
        { time: "12:10pm", segment: "Intermisión", duration: "10 min" },
        { time: "12:20pm", segment: "Conversación Pilar 3 — Speaker de industria", duration: "45 min" },
        { time: "1:05pm", segment: "Intermisión", duration: "10 min" },
        { time: "1:15pm", segment: "Conversación Pilar 4 — Speaker de industria", duration: "45 min" },
        { time: "2:00pm", segment: "Intermisión", duration: "10 min" },
        { time: "2:10pm", segment: "Conversación Pilar 5 — Speaker de industria", duration: "45 min" },
        { time: "2:55pm", segment: "Intermisión", duration: "10 min" },
        { time: "3:05pm", segment: "Conversación Pilar 6 — Speaker de industria", duration: "45 min" },
        { time: "3:50pm", segment: "Outro / Cierre Día 2", duration: "10 min" }
      ],
      notes: "Speakers can participate 100% remotely. Target: 1 per pillar minimum, ideally 2."
    },
    day3: {
      date: "Sunday, December 13", format: "Hybrid — Chroma Space Studios + YouTube Live", hours: "10:00am–4:00pm on-stream, physical until 5:45pm",
      schedule: [
        { time: "9:00am", segment: "Physical venue opens", notes: "Built-in AV tested, avatar rig confirmed." },
        { time: "10:00am", segment: "Physical doors open" },
        { time: "10:30am", segment: "Stream opens — pre-show holding screen", duration: "15 min" },
        { time: "10:45am", segment: "DAY 3 INTRO", duration: "15 min", notes: "Danelson and Ricardo welcome both audiences." },
        { time: "11:00am", segment: "LIVE DEMO 1 — Facial Animation + Avatar Control", duration: "30-40 min" },
        { time: "11:40am", segment: "VIITES ARTIST 1 — Live Performance", duration: "30 min", notes: "Music-reactive visualizers." },
        { time: "12:10pm", segment: "LIVE DEMO 2", duration: "30-40 min" },
        { time: "12:50pm", segment: "VIITES ARTIST 2 — Live Performance", duration: "30 min" },
        { time: "1:20pm", segment: "LIVE DEMO 3 / Extended Q&A", duration: "30 min" },
        { time: "1:50pm", segment: "OPEN PLATFORM DEMO", duration: "30 min" },
        { time: "2:20pm", segment: "MIDDAY BREAK + FOOD/PRIZE REDEMPTION", duration: "30 min" },
        { time: "2:50pm", segment: "SGX Guild FINAL PRESENTATIONS", duration: "~35 min", notes: "4 top performers + 2 honorary, 5 min each." },
        { time: "3:25pm", segment: "COMMUNITY VOTING + SPONSOR ACKNOWLEDGMENT", duration: "20 min" },
        { time: "3:45pm", segment: "CLOSING", duration: "30-40 min" },
        { time: "4:15pm", segment: "STRUCTURED NETWORKING", duration: "90 min", notes: "Stream closes 4:45pm. Physical attendees until 5:45pm." }
      ],
      notes: "Performative format: services are DEMONSTRATED live. Minimum 2 Viites artists. No external AV rental needed."
    }
  },
  gamification: {
    description: "Kahoot-style voting system running all 3 days on the Summit platform.",
    prize_tiers: [
      { tier: 1, prize: "Sponsor discount coupons" },
      { tier: 2, prize: "Free drink at physical event", quantity: "5 redemptions", coordinator: "César" },
      { tier: 3, prize: "Premium food plate", quantity: "3–4 available", note: "Food sold on-site, given as reward only" },
      { tier: 4, prize: "3-month Spatialgineers services subscription" },
      { tier: 5, prize: "Grit session with La Base de los Élites artists" },
      { tier: 6, prize: "Meta Quest (VR visualizers)" },
      { tier: 7, prize: "Top prize: Spatialgineers activates your event" }
    ]
  },
  sponsorship_tiers: [
    { tier: "Digital Visibility", price: "$50", benefits: "Brand visibility across digital programming" },
    { tier: "Gamified Rewards", price: "$500", benefits: "Brand integrated into gamification rewards system" },
    { tier: "Experience by [Brand]", price: "$1,500–$2,500", benefits: "Full named experience + 1-year platform license" }
  ],
  countdown_phases: [
    { phase: "Phase 1 — Tease & Build", dates: "Aug 28 – Sep 28" },
    { phase: "Phase 2 — Announce", dates: "Sep 29 – Oct 26", focus: "Public announcement, registration open, sponsor outreach" },
    { phase: "Phase 3 — Momentum", dates: "Oct 27 – Nov 23" },
    { phase: "Phase 4 — Final Push", dates: "Nov 24 – Dec 7" },
    { phase: "Phase 5 — Summit Week", dates: "Dec 8–13" }
  ],
  current_phase: "Phase 1 transitioning to Phase 2 — Public announcement Monday Sep 29",
  critical_path_decisions: [
    { item: "Lock 10 Initiates and notify them", deadline: "Sep 24" },
    { item: "Confirm Chroma Space Studios in writing", deadline: "Sep 24" },
    { item: "Confirm Industry Day speakers (min 6, target 12)", deadline: "Oct 26" },
    { item: "Finalize gamification: build or buy", deadline: "Oct 12" },
    { item: "Summit platform fully integrated and QA-complete", deadline: "Nov 23" },
    { item: "Confirm all artists (Chroma Space x6, Viites x2+)", deadline: "Nov 9" },
    { item: "OBS production locked and tested", deadline: "Nov 30" },
    { item: "Roblox integration built and tested", deadline: "Nov 16" },
    { item: "Physical Day 3 logistics finalized", deadline: "Nov 30" },
    { item: "All registered attendees briefed", deadline: "Dec 7" }
  ],
  internal_notes: {
    awaken_program: "INTERNAL ONLY. 10 Initiates. Top 4 earn Awakened rank + 2 honorary. Never use 'Awaken Program' publicly.",
    food_policy: "Food sold on-site. 3–4 premium plates as gamification rewards. César coordinates drink redemptions."
  }
};

export default summitData;
