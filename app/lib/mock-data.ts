// ─── Fingerprint ───────────────────────────────────────────

export const mockFingerprint = {
  name: "Priya",
  primaryIdentity:
    "You treat Spotify like a mood pharmacy — ambient for focus, jazz-hop for walks, post-punk for when you're feeling something you can't name.",
  archetype: {
    name: "The Midnight Curator",
    description:
      "You find artists and stay. Deep loyalty, low rotation. Your library is a museum, not a newsstand.",
    type: "monogamous" as const,
  },
  genreConstellation: [
    { genre: "Indie / Alternative", score: 0.35, color: "#ff4d00" },
    { genre: "Electronic / Ambient", score: 0.25, color: "#3b82f6" },
    { genre: "Hip-Hop / Jazz-Hop", score: 0.2, color: "#8b5cf6" },
    { genre: "Classical / Neo-Classical", score: 0.12, color: "#f59e0b" },
    { genre: "World / Fusion", score: 0.08, color: "#16a34a" },
  ],
  audioPersonality: [
    { label: "Energy", value: 0.42 },
    { label: "Valence", value: 0.38 },
    { label: "Danceability", value: 0.55 },
    { label: "Acousticness", value: 0.61 },
    { label: "Instrumentalness", value: 0.47 },
  ],
  obscurityScore: 72,
  moodLandscape: "Melancholic-Chill",
  moodQuadrant: { x: -0.3, y: -0.2 }, // low valence, low energy
  eraBreakdown: [
    { era: "2020s", pct: 0.15 },
    { era: "2010s", pct: 0.42 },
    { era: "2000s", pct: 0.25 },
    { era: "1990s", pct: 0.12 },
    { era: "Pre-90s", pct: 0.06 },
  ],
  topArtists: [
    { name: "Radiohead", popularity: 78, initial: "Rh", color: "#ff4d00", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/RadioheadO2211125_composite.jpg/330px-RadioheadO2211125_composite.jpg" },
    { name: "Bonobo", popularity: 62, initial: "Bo", color: "#3b82f6", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/RF_2806_Bonobo_Krists_Luhaers-16_%2835611151756%29.jpg/330px-RF_2806_Bonobo_Krists_Luhaers-16_%2835611151756%29.jpg" },
    { name: "Nujabes", popularity: 58, initial: "Nu", color: "#8b5cf6", image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Nujabes_performing_live.jpg" },
    { name: "Khruangbin", popularity: 68, initial: "Kh", color: "#16a34a", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Khruangbin_am_Haldern_Pop_Festival_2019_-_09_-_Foto_Alexander_Kellner.jpg/330px-Khruangbin_am_Haldern_Pop_Festival_2019_-_09_-_Foto_Alexander_Kellner.jpg" },
    { name: "Anoushka Shankar", popularity: 42, initial: "AS", color: "#f59e0b", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Anoushka_Shankar_-3623.jpg/330px-Anoushka_Shankar_-3623.jpg" },
    { name: "Burial", popularity: 51, initial: "Bu", color: "#ec4899", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Burial1.svg/330px-Burial1.svg.png" },
  ],
  nicheSignals: [
    "downtempo electronica",
    "Japanese jazz-hop",
    "Hindustani classical fusion",
    "post-rock crescendos",
    "ambient field recordings",
    "trip-hop deep cuts",
    "neo-soul instrumentals",
  ],
  patternBreaker:
    "For someone whose library is 70% brooding instrumentals, you have a suspiciously well-curated Bollywood playlist with 200+ tracks.",
  stats: {
    minutesListened: 24680,
    uniqueArtists: 847,
    uniqueGenres: 42,
    avgDailyMinutes: 68,
    lateNightPercent: 0.41,
    topGenreHours: 312,
  },
};

// ─── Neighborhoods ─────────────────────────────────────────

export const mockNeighborhoods = [
  {
    name: "Late Night Electronics",
    description: "Where beats dissolve into texture. Your 1am–4am listening in a nutshell.",
    artists: ["Burial", "Four Tet", "Floating Points", "Caribou", "Jon Hopkins"],
    color: "#3b82f6",
    size: 0.3,
  },
  {
    name: "Indie Melancholia",
    description: "The bands that make sadness feel like home. High replay, low valence.",
    artists: ["Radiohead", "Bon Iver", "Sufjan Stevens", "Elliott Smith", "Big Thief"],
    color: "#ff4d00",
    size: 0.28,
  },
  {
    name: "Jazz-Hop Crate",
    description: "Sampled jazz breaks and lo-fi philosophy. Your walking soundtrack.",
    artists: ["Nujabes", "J Dilla", "Madlib", "Robert Glasper", "BadBadNotGood"],
    color: "#8b5cf6",
    size: 0.22,
  },
  {
    name: "World Fusion Corner",
    description: "Where geography stops mattering. Instruments you can't name, rhythms you can't forget.",
    artists: ["Khruangbin", "Anoushka Shankar", "Tinariwen", "Mdou Moctar", "Nusrat Fateh Ali Khan"],
    color: "#16a34a",
    size: 0.2,
  },
];

// ─── Matches ───────────────────────────────────────────────

export const mockMatches = [
  {
    id: "arjun",
    name: "Arjun",
    age: 27,
    overlap: 87,
    initial: "A",
    archetype: "The Deep Diver",
    sharedArtists: ["Radiohead", "Bonobo", "Nujabes"],
    sharedNiche: "Both in the top 2% of Bonobo listeners in Bangalore",
    whyMatched: [
      "Genre maps overlap 84% in the indie-electronic corridor",
      "Both gravitate toward melancholic, low-tempo music after midnight",
      "12 shared niche artists with <50k monthly listeners",
    ],
    moodMatch: "melancholic-chill",
    topGenres: ["Electronic", "Indie", "Jazz-Hop"],
    bio: "Building things during the day, deconstructing Radiohead albums at night.",
    city: "Bangalore",
    obscurityScore: 68,
  },
  {
    id: "kavya",
    name: "Kavya",
    age: 25,
    overlap: 79,
    initial: "K",
    archetype: "The Explorer",
    sharedArtists: ["Khruangbin", "Four Tet"],
    sharedNiche: "Both discovered Mdou Moctar before they hit 100k listeners",
    whyMatched: [
      "High world-fusion overlap with shared taste for instrumental textures",
      "Obscurity scores within 5 points of each other",
      "Both peak listening hours between 10pm–2am",
    ],
    moodMatch: "warm-ambient",
    topGenres: ["World", "Electronic", "Folk"],
    bio: "Playlist architect. Will judge you gently by your Discover Weekly.",
    city: "Bangalore",
    obscurityScore: 75,
  },
  {
    id: "rohan",
    name: "Rohan",
    age: 29,
    overlap: 73,
    initial: "R",
    archetype: "The Midnight Curator",
    sharedArtists: ["Burial", "J Dilla", "Sufjan Stevens"],
    sharedNiche: "Both night owls — 40%+ of listening happens after midnight",
    whyMatched: [
      "Nearly identical audio profiles: low energy, low valence, high acousticness",
      "Mood landscapes overlap in the melancholic-chill quadrant",
      "8 shared artists in the <30k monthly listeners tier",
    ],
    moodMatch: "melancholic-chill",
    topGenres: ["Hip-Hop", "Electronic", "Classical"],
    bio: "Professional overthinker. Amateur crate digger. My Wrapped is a cry for help.",
    city: "Bangalore",
    obscurityScore: 81,
  },
  {
    id: "meera",
    name: "Meera",
    age: 26,
    overlap: 68,
    initial: "M",
    archetype: "The Mood Architect",
    sharedArtists: ["Bon Iver", "Floating Points"],
    sharedNiche: "Both have 200+ hours in the ambient-electronic zone",
    whyMatched: [
      "Danceability and energy profiles nearly identical",
      "Both in the top 5% for acousticness preference",
      "Complementary discovery: her deep cuts are your emerging interests",
    ],
    moodMatch: "contemplative-warm",
    topGenres: ["Ambient", "Folk", "Neo-Classical"],
    bio: "I have a playlist for every micro-emotion. Yes, 'nostalgic but specifically for a place I've never been' is a micro-emotion.",
    city: "Bangalore",
    obscurityScore: 70,
  },
];

// ─── Conversation ──────────────────────────────────────────

export const mockConversation = {
  match: mockMatches[0],
  sharedGround: {
    artists: [
      { name: "Radiohead", yourRank: 1, theirRank: 3, rarity: "top 5%" },
      { name: "Bonobo", yourRank: 4, theirRank: 2, rarity: "top 2%" },
      { name: "Nujabes", yourRank: 3, theirRank: 5, rarity: "top 1%" },
    ],
    genres: ["Indie-Electronic", "Jazz-Hop", "Ambient"],
    moodOverlap: 0.84,
    obscurityGap: 4,
  },
  suggestedOpeners: [
    "You're both in the top 1% of Nujabes listeners — favorite track?",
    "Your Bonobo overlap is unreal. Migration or Black Sands?",
    "You both listen to melancholic music past midnight. Coincidence?",
  ],
  messages: [
    { from: "them" as const, text: "okay the Nujabes overlap is actually insane. Luv(sic) pt 3 or Feather?", time: "2:34 PM" },
    { from: "you" as const, text: "Feather without hesitation. But Reflection Eternal is the real deep cut", time: "2:36 PM" },
    { from: "them" as const, text: "wait you know Reflection Eternal?? nobody knows that one", time: "2:36 PM" },
    { from: "you" as const, text: "top 0.5% of Nujabes listeners remember", time: "2:37 PM" },
    { from: "them" as const, text: "okay we need to get coffee. preferably somewhere playing Modal Soul on vinyl", time: "2:38 PM" },
  ],
};

// ─── Processing Steps ──────────────────────────────────────

export const processingSteps = [
  { label: "Connecting to Spotify", status: "complete" as const },
  { label: "Scanning your library", status: "complete" as const },
  { label: "Mapping genre constellation", status: "complete" as const },
  { label: "Calculating obscurity score", status: "active" as const },
  { label: "Building mood landscape", status: "pending" as const },
  { label: "Generating your fingerprint", status: "pending" as const },
];
