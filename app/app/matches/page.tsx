import Link from "next/link";
import { mockMatches, mockFingerprint } from "@/lib/mock-data";

export default function Matches() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-32">
        {/* Header bar */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-[#ff4d00] flex items-center justify-center">
              <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
            </div>
            <div>
              <p className="text-sm font-black">{mockFingerprint.name}</p>
              <p className="text-[10px] text-zinc-600 uppercase tracking-wider">
                {mockFingerprint.archetype.name}
              </p>
            </div>
          </div>
          <Link
            href="/fingerprint"
            className="text-xs text-zinc-600 uppercase tracking-wider hover:text-[#ff4d00] transition-colors"
          >
            My Fingerprint
          </Link>
        </div>

        <div className="mb-12">
          <p className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-4">
            {mockMatches.length} Matches in Bangalore
          </p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-[0.85] mb-4">
            Your matches<span className="text-[#ff4d00]">.</span>
          </h1>
          <p className="text-sm text-zinc-500 max-w-md">
            Sorted by taste overlap. Every match comes with a reason —
            no blind swiping.
          </p>
        </div>

        {/* Match cards */}
        <section className="mb-16 space-y-1">
          {mockMatches.map((m, i) => (
            <Link
              key={m.id}
              href={i === 0 ? "/conversation" : "#"}
              className="block bg-zinc-950 p-8 hover:bg-zinc-900 transition-colors group"
            >
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="shrink-0 relative">
                  <div
                    className="h-20 w-20 flex items-center justify-center"
                    style={{
                      backgroundColor:
                        i === 0
                          ? "#ff4d00"
                          : i === 1
                          ? "#3b82f6"
                          : i === 2
                          ? "#8b5cf6"
                          : "#16a34a",
                    }}
                  >
                    <svg className="h-10 w-10 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                  </div>
                  {/* Overlap badge */}
                  <div className="absolute -top-2 -right-2 bg-black border-2 border-[#ff4d00] px-1.5 py-0.5">
                    <span className="text-xs font-black text-[#ff4d00]">
                      {m.overlap}%
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-xl font-black">
                      {m.name}, {m.age}
                    </h3>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-wider">
                      {m.archetype}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 mb-3">{m.bio}</p>

                  {/* Shared artists */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {m.sharedArtists.map((a) => (
                      <span
                        key={a}
                        className="border border-zinc-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400"
                      >
                        {a}
                      </span>
                    ))}
                  </div>

                  {/* Niche signal */}
                  <p className="text-xs text-[#ff4d00] font-bold">
                    {m.sharedNiche}
                  </p>
                </div>

                {/* Arrow */}
                <span className="text-zinc-700 text-xl group-hover:text-[#ff4d00] group-hover:translate-x-1 transition-all shrink-0 mt-2">
                  &rarr;
                </span>
              </div>

              {/* Why matched — expandable feel */}
              <div className="mt-6 pt-4 border-t border-zinc-900">
                <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-2">
                  Why You Matched
                </p>
                <ul className="space-y-1">
                  {m.whyMatched.map((reason, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[#ff4d00] mt-0.5 text-xs">&bull;</span>
                      <span className="text-xs text-zinc-500">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </section>

        {/* Match quality note */}
        <section className="mb-16">
          <div className="border border-zinc-800 p-6">
            <p className="text-xs text-zinc-600 uppercase tracking-wider mb-2">
              Why So Few?
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Quality over quantity. These {mockMatches.length} matches share deep,
              niche taste overlap — not surface-level genre matches. A 73% overlap
              on our scale means you share artists that 97% of people have never heard of.
            </p>
          </div>
        </section>

        {/* Bottom nav */}
        <div className="flex gap-3">
          <Link
            href="/profile"
            className="border border-zinc-700 px-6 py-3 text-sm font-bold uppercase tracking-widest text-zinc-500 inline-block"
          >
            Edit Profile
          </Link>
          <Link
            href="/fingerprint"
            className="border border-zinc-700 px-6 py-3 text-sm font-bold uppercase tracking-widest text-zinc-500 inline-block"
          >
            My Fingerprint
          </Link>
        </div>
      </div>
    </div>
  );
}
