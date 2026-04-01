# ADR-001: Spotify Dating App — Architecture & Strategy

**Status:** Accepted
**Date:** 2026-04-01
**Context:** Adapting the yt-algo-dating-app concept for Spotify. Matching people romantically based on deep listening taste, restricted to heavy listeners (>20,000 minutes), with location-based matching.

---

## Decision

Build a dating app that matches users based on Spotify listening taste. The app targets serious music listeners (>20k annual minutes) and uses listening data to generate a "taste fingerprint" for matching.

## Core Thesis

Spotify listening history is deeply personal and unperformable. Nobody listens to 3 hours of ambient electronic at 2am to impress anyone. Two people with high overlap in niche listening taste likely share sensibilities, mood patterns, and aesthetic values that translate to real-world compatibility — far more than swiping on photos reveals.

---

## Key Decisions

### 1. Data Ingestion: Spotify OAuth API (primary) + Data Download (optional)

**Decision:** Use Spotify Web API via OAuth as the primary data source. Optionally support Spotify data download uploads for richer profiles.

**Why not data download only?** Spotify's data download takes up to 30 days to arrive. That's a fatal onboarding friction — users will abandon. The YT app used Google Takeout (available instantly) so this wasn't an issue there, but Spotify is different.

**What the API gives us:**
- Top artists (short/medium/long term)
- Top tracks (short/medium/long term)
- Saved library (tracks, albums)
- Playlists
- Audio features per track (danceability, energy, valence, tempo, acousticness, instrumentalness, liveness, speechiness)
- Artist genres and popularity scores
- Recently played tracks

**What the data download adds (optional enrichment):**
- Complete streaming history with timestamps and ms played
- Exact total listening time (for verifying the >20k threshold)
- Search history
- Full historical breadth beyond API's time windows

**Trade-off:** API is instant but shallower. Data download is complete but slow. Lead with API, offer data download as a "deepen your profile" feature.

### 2. The >20,000 Minutes Threshold

**Decision:** Use a combination of inference and self-reporting.

The API doesn't expose total listening time. Options considered:

| Approach | Verdict |
|---|---|
| Require data download to verify | Rejected — 30-day wait kills onboarding |
| Infer from API signals (library size, followed artists, playlist count, listening breadth) | Use as a soft signal |
| Self-report with honor system | Use as primary gate |
| Spotify Wrapped screenshot upload | Fragile, seasonal, hard to validate |

**Approach:** Ask users to self-report. Heavy listeners self-select — 20k minutes is a point of pride, and casual listeners won't claim it. Supplement with API-derived engagement scoring to flag obvious mismatches. This mirrors how the YT app handles location (self-reported, trusted).

### 3. Taste Fingerprint Model

**Decision:** Build a multi-dimensional fingerprint from six signal types.

| Dimension | Data Source | What It Captures |
|---|---|---|
| **Genre constellation** | Top artists → genres | Not just "rock" but the specific intersection: "shoegaze + post-punk + dream pop" |
| **Audio personality** | Audio features API across top tracks | Aggregate energy, valence (mood), danceability, acousticness, tempo profile |
| **Obscurity score** | Artist popularity ratings (0-100) | Weighted average — mainstream listener vs deep-crate digger |
| **Listening archetype** | Artist count vs play depth | Monogamous (few artists, deep loyalty) vs Explorer (wide, constantly discovering) |
| **Mood landscape** | Valence × energy quadrant mapping | Melancholic-chill vs upbeat-intense vs dark-energetic vs bright-calm |
| **Era preference** | Track release date distribution | Vintage soul listener vs modern hyperpop vs timeless catalog |

**Output example:** *"You're 35% indie/alternative, 25% electronic/ambient, 20% hip-hop, 12% classical, 8% world. Your obscurity score is 72/100 (deep-crate digger). You're a Monogamous listener — you find artists and stay. Your mood landscape is melancholic-chill. Archetype: The Midnight Curator."*

### 4. Matching Algorithm

**Decision:** Constellation similarity with weighted niche overlap.

**Matching signals, ranked by importance:**

1. **Shared niche artists** (highest weight) — Both listening to an artist with 50k monthly listeners is orders of magnitude more meaningful than both listening to Drake. Weight inversely proportional to artist popularity.
2. **Genre constellation overlap** — Not just shared genres but shared *intersections* of genres. "You both sit at indie-folk × ambient-electronic" is a strong signal.
3. **Audio feature alignment** — Similar energy/valence/tempo preferences across libraries. People who like the same *feel* of music even if not the same artists.
4. **Listening archetype compatibility** — Two Monogamous listeners may bond over depth; a Monogamous + Explorer pairing can work if their overlap zone is strong.
5. **Mood landscape proximity** — Similar emotional patterns in music consumption.
6. **Complementary discovery** — One person's deep artist is the other's emerging interest. Creates conversation and exchange.

**Each match includes a "why":** *"You're both in the top 2% of [artist] listeners in Bangalore. You both gravitate toward melancholic, low-tempo music late at night. Your genre maps overlap 84% in the indie-electronic corridor."*

### 5. Location Model

**Decision:** Self-reported city at signup. Initial launch city: Bangalore.

Same as the YT app. No GPS tracking, no background location. Users pick their city. Matching is filtered to same-city only. Bangalore first due to dense target demographic (tech-forward, music-savvy, young professionals).

Future: expand city by city based on density thresholds.

### 6. Tech Stack

**Decision:** Next.js + Tailwind CSS + TypeScript (same as yt-algo-dating-app).

- **Frontend:** Next.js App Router, Tailwind CSS, TypeScript
- **Auth:** Spotify OAuth 2.0 (PKCE flow)
- **Backend (Phase 2):** Next.js API routes initially, extract to separate service if needed
- **Database (Phase 2):** PostgreSQL (user profiles, fingerprints, matches)
- **Matching engine (Phase 2):** Vector similarity on fingerprint embeddings

### 7. Build Phases

**Phase 1 — UI Prototype (current):**
All screens built with mocked data. No backend. Goal: let people visualize the complete flow end-to-end.

Screens:
1. **Landing** — "Match with someone who gets your music." The >20k minutes hook.
2. **Connect Spotify** — OAuth button + optional data upload
3. **Processing** — "Analyzing your listening DNA" with progress steps
4. **Listening Fingerprint** — Genre bars, audio personality, archetype, obscurity score
5. **Music Neighborhoods** — Taste clusters with representative artists
6. **Profile Setup** — Location, age, bio, photos
7. **Match Feed** — Cards sorted by taste overlap %, "why you matched" snippets
8. **Conversation** — Shared ground detail, suggested openers based on shared artists

**Phase 2 — Core Components:**
- Spotify OAuth integration
- Taste fingerprint computation engine
- Matching algorithm
- User profiles + location filtering
- Real-time match feed

**Phase 3 — Polish & Launch:**
- Messaging system
- Match quality feedback loop
- Profile refresh (re-sync Spotify data)
- Waitlist management for new cities

---

## Consequences

- **OAuth-first means we're dependent on Spotify's API terms.** If Spotify restricts API access, we fall back to data download only. Acceptable risk — Spotify's API is mature and stable.
- **Self-reported minutes threshold is gameable.** Acceptable — the fingerprint itself will reveal shallow listeners. The threshold is a positioning/marketing tool, not a hard technical gate.
- **Niche-weighted matching means smaller match pools.** By design. Quality over quantity. A user might get 5 highly resonant matches rather than 500 surface-level ones.
- **City-based location is coarse.** Intentional for privacy. Fine-grained location adds complexity and creepiness without proportional value for a dating app focused on deep compatibility.
