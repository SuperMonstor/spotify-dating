import Link from "next/link";
import { mockFingerprint } from "@/lib/mock-data";

export default function Fingerprint() {
  const p = mockFingerprint;

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-32">
        {/* Back */}
        <Link
          href="/processing"
          className="text-xs text-zinc-600 uppercase tracking-wider hover:text-[#ff4d00] transition-colors"
        >
          &larr; Back
        </Link>

        {/* Header — avatar + name + identity */}
        <div className="mt-12 mb-16 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
          <div className="shrink-0">
            <div className="h-36 w-36 bg-[#ff4d00] flex items-center justify-center">
              <svg className="h-20 w-20 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-2">
              Listening Fingerprint
            </p>
            <h1 className="text-6xl font-black tracking-tighter leading-[0.85] mb-4">
              {p.name}<span className="text-[#ff4d00]">.</span>
            </h1>
            <p className="text-base leading-relaxed text-zinc-400 max-w-md">
              {p.primaryIdentity}
            </p>
          </div>
        </div>

        {/* Archetype badge */}
        <section className="mb-16">
          <div className="bg-zinc-950 p-8 border-l-4 border-[#ff4d00]">
            <p className="text-xs text-[#ff4d00] uppercase tracking-wider mb-2">
              Your Archetype
            </p>
            <h2 className="text-3xl font-black mb-2">{p.archetype.name}</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {p.archetype.description}
            </p>
          </div>
        </section>

        {/* Top Artists grid */}
        <section className="mb-16">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
            Top Artists
          </p>
          <div className="grid grid-cols-3 gap-1 sm:grid-cols-6">
            {p.topArtists.map((a) => (
              <div
                key={a.name}
                className="aspect-square relative overflow-hidden group"
              >
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider leading-tight block">
                    {a.name}
                  </span>
                  <span className="text-xs font-black text-[#ff4d00]">
                    {a.popularity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Genre Constellation */}
        <section className="mb-16">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
            Genre Constellation
          </p>
          <div className="space-y-4">
            {p.genreConstellation.map((g) => (
              <div key={g.genre}>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-sm text-zinc-300">{g.genre}</span>
                  <span className="text-xl font-black" style={{ color: g.color }}>
                    {(g.score * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="h-3 w-full bg-zinc-900">
                  <div
                    className="h-full"
                    style={{ width: `${g.score * 100}%`, backgroundColor: g.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Audio Personality + Obscurity — side by side */}
        <section className="mb-16 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
              Audio Personality
            </p>
            <div className="space-y-3">
              {p.audioPersonality.map((a) => (
                <div key={a.label}>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-sm text-zinc-400">{a.label}</span>
                    <span className="text-base font-black text-[#ff4d00]">
                      {(a.value * 100).toFixed(0)}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-zinc-900">
                    <div
                      className="h-full bg-[#ff4d00]"
                      style={{ width: `${a.value * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
              Obscurity Score
            </p>
            <div className="flex items-end gap-4 mb-4">
              <span className="text-7xl font-black text-[#ff4d00]">
                {p.obscurityScore}
              </span>
              <span className="text-sm text-zinc-600 mb-2">/100</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              Deep-crate digger. Your average artist has fewer monthly listeners
              than most people&rsquo;s top pick.
            </p>
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-wider mb-2">
                Mood Landscape
              </p>
              <span className="border border-[#ff4d00] px-4 py-2 text-sm font-black text-[#ff4d00] uppercase tracking-wider inline-block">
                {p.moodLandscape}
              </span>
            </div>
          </div>
        </section>

        {/* Era Breakdown */}
        <section className="mb-16">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
            Era Preference
          </p>
          <div className="flex gap-1 h-16">
            {p.eraBreakdown.map((e) => (
              <div
                key={e.era}
                className="bg-zinc-900 flex flex-col items-center justify-end pb-1 relative group"
                style={{ flex: e.pct }}
              >
                <div
                  className="w-full bg-[#ff4d00] absolute bottom-0"
                  style={{ height: `${e.pct * 200}%` }}
                />
                <span className="text-[10px] font-bold text-black relative z-10">
                  {e.era}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Niche Signals + Pattern Breaker */}
        <section className="mb-16 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
              Niche Signals
            </p>
            <div className="flex flex-wrap gap-2">
              {p.nicheSignals.map((s) => (
                <span
                  key={s}
                  className="border border-zinc-700 px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-[#ff4d00] uppercase tracking-wider mb-4">
              Pattern Breaker
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {p.patternBreaker}
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="mb-16 border-t border-b border-zinc-900 py-6">
          <div className="flex flex-wrap justify-between gap-4">
            {[
              { label: "Minutes", value: p.stats.minutesListened.toLocaleString() },
              { label: "Artists", value: p.stats.uniqueArtists.toString() },
              { label: "Genres", value: p.stats.uniqueGenres.toString() },
              { label: "Daily Avg", value: `${p.stats.avgDailyMinutes}m` },
              { label: "Night Owl", value: `${(p.stats.lateNightPercent * 100).toFixed(0)}%` },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-black">{s.value}</p>
                <p className="text-[10px] text-zinc-600 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <div className="flex gap-3">
          <Link
            href="/neighborhoods"
            className="bg-[#ff4d00] px-6 py-3 text-sm font-black uppercase tracking-widest text-black inline-block"
          >
            See Neighborhoods
          </Link>
          <Link
            href="/matches"
            className="border-2 border-white px-6 py-3 text-sm font-black uppercase tracking-widest inline-block"
          >
            Find Matches
          </Link>
        </div>
      </div>
    </div>
  );
}
