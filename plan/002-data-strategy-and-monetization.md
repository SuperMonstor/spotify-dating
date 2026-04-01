# ADR-002: Data Strategy & Monetization

**Status:** Accepted
**Date:** 2026-04-01
**Context:** Refining how we ingest Spotify data and where to place the paywall, based on API limitations discovered during prototype build.

---

## Decision

Require Spotify data export as the primary (and only) data source. Use the wait time as a feature, not a bug. Monetize after the fingerprint — dating and community access are paid.

---

## Why Not API-First?

ADR-001 proposed Spotify OAuth API as the primary source. After deeper evaluation:

| Fingerprint Dimension | API Support | Issue |
|---|---|---|
| Genre constellation | Yes | Works via top artists → genres |
| Audio personality | **No** | Spotify deprecated audio features endpoint (danceability, energy, valence, etc.) for new apps |
| Obscurity score | Yes | Artist popularity still available |
| Listening archetype | **Partial** | API gives top artists but not play counts — can't measure depth vs breadth |
| Mood landscape | **No** | Depends on deprecated audio features (valence x energy) |
| Era preference | Yes | Track release dates available |
| 20k minute threshold | **No** | API exposes no total listening time |

3 of 6 fingerprint dimensions are degraded or blocked without the export. The export gives us everything: complete streaming history with timestamps, ms_played per track, and total listening time. The API gives us a sketch; the export gives us the portrait.

## The Wait Is the Filter

Spotify's data export takes 5–30 days. ADR-001 flagged this as "fatal onboarding friction." We're now reframing it as a feature:

- **Self-selection:** Someone willing to wait 5+ days for a dating app is serious. This filters out casual signups and tire-kickers.
- **20k minute alignment:** The kind of person who has 20,000+ minutes of listening history is exactly the kind of person who'd request a data export without blinking.
- **Anticipation:** The wait builds investment. By the time the data arrives, they're primed to engage.
- **Cohort batching:** Instead of a trickle of signups with no one to match, users arrive in waves as exports complete. This helps solve the cold-start problem — each wave has a pool to match against.
- **Exclusivity signal:** "We made you wait because your data matters" positions the app as premium and intentional, not another swipe factory.

## The Funnel

```
1. Landing page          — See the concept, get hooked
2. Request data export   — We walk them through Spotify's export flow
3. Wait 5–30 days        — Filters casuals, builds anticipation
4. Upload + fingerprint  — Free. This is the "wow" moment.
5. Paywall               — Pay to unlock dating + community
6. Matching + community  — The product they're paying for
```

The fingerprint is free because it's the hook. It's shareable, it's personal, it demonstrates that we understand their taste better than any other app. Once someone sees their fingerprint, paying to find people like them is a natural next step.

## Monetization Model

**What's free:**
- Landing page and concept
- Guided Spotify data export request
- Full listening fingerprint (genre constellation, audio personality, obscurity score, archetype, mood landscape, era preference)
- Fingerprint sharing (social growth loop)

**What's paid:**
- Dating — match feed, overlap scores, "why you matched" explanations
- Community — connect with people in your music neighborhoods
- Conversation — messaging, shared ground panels, suggested openers

**Pricing (TBD):**
- Options to explore: one-time fee, monthly subscription, or annual
- One-time fee aligns with the "serious listeners only" positioning — no recurring friction
- Subscription makes sense if we add ongoing value (new match waves, refreshed fingerprints, community features)
- Decision deferred until we validate demand with the prototype

## Data Export: What We Get

Spotify's "Extended Streaming History" export includes:

- `ts` — timestamp of stream end
- `ms_played` — milliseconds played
- `master_metadata_track_name` — track name
- `master_metadata_album_artist_name` — artist name
- `master_metadata_album_album_name` — album name
- `spotify_track_uri` — track URI (can be used to fetch additional metadata via API)
- `reason_start` / `reason_end` — how the track started/ended (click, autoplay, skip, etc.)
- `shuffle` / `skipped` — listening behavior signals
- `platform` — device type
- `conn_country` — country

This is dramatically richer than the API. We can compute:
- Exact total minutes (sum of ms_played)
- Per-artist depth (total ms, session count, skip rate)
- Temporal patterns (time-of-day, day-of-week, seasonal shifts)
- Listening sessions (cluster by timestamp gaps)
- Skip behavior (what they abandon vs what they finish)
- Platform habits (phone vs desktop vs smart speaker)

## Backfilling Audio Features

Since the audio features endpoint is deprecated, we need alternatives for the audio personality and mood landscape dimensions:

| Approach | Feasibility |
|---|---|
| Build our own audio feature model using track URIs + a music analysis API | High effort, high quality |
| Use genre + artist metadata as a proxy for mood/energy | Medium effort, decent quality |
| Use a third-party music data provider (e.g., MusicBrainz, Last.fm) | Low effort, variable quality |
| Skip audio features, lean harder on the other 4 dimensions | Lowest effort, reduces fingerprint richness |

Decision deferred — will evaluate during Phase 2 build. The prototype uses mocked audio features to demonstrate the concept.

---

## Consequences

- **Higher barrier to entry = smaller but more committed user base.** By design. Quality over quantity, consistent with ADR-001's thesis.
- **5–30 day onboarding gap.** We need a strong "come back" mechanism — email/push notification when it's time to upload. Risk: some users forget or lose interest during the wait.
- **No real-time data refresh.** Users would need to request a new export to update their fingerprint. Acceptable for v1 — listening taste doesn't change week to week.
- **Revenue depends on fingerprint → paywall conversion.** The fingerprint must be compelling enough that users want to find their match. If the fingerprint is mid, the funnel breaks.
- **We're fully dependent on Spotify continuing to offer data exports.** This is a GDPR-mandated feature, so low risk of removal.
