import Link from "next/link";
import { mockNeighborhoods, mockFingerprint } from "@/lib/mock-data";

export default function Neighborhoods() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-32">
        {/* Back */}
        <Link
          href="/fingerprint"
          className="text-xs text-zinc-600 uppercase tracking-wider hover:text-[#ff4d00] transition-colors"
        >
          &larr; Back to Fingerprint
        </Link>

        <div className="mt-12 mb-16">
          <p className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-4">
            Taste Geography
          </p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-[0.85] mb-6">
            Your music
            <br />
            neighborhoods<span className="text-[#ff4d00]">.</span>
          </h1>
          <p className="text-base text-zinc-400 max-w-md leading-relaxed">
            Your listening clusters into {mockNeighborhoods.length} distinct neighborhoods.
            These are the sonic territories you inhabit — and where we&rsquo;ll look for your matches.
          </p>
        </div>

        {/* Neighborhood map — visual size blocks */}
        <section className="mb-16">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
            Territory Map
          </p>
          <div className="grid grid-cols-2 gap-1 h-64 sm:h-80">
            {mockNeighborhoods.map((n, i) => (
              <div
                key={n.name}
                className={`flex flex-col justify-end p-4 ${
                  i === 0 ? "col-span-2 sm:col-span-1 sm:row-span-2" : ""
                }`}
                style={{ backgroundColor: n.color }}
              >
                <span className="text-4xl font-black text-black/80">
                  {(n.size * 100).toFixed(0)}%
                </span>
                <span className="text-xs font-bold text-black/60 uppercase tracking-wider mt-1">
                  {n.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Neighborhood details */}
        <section className="mb-16 space-y-1">
          {mockNeighborhoods.map((n) => (
            <div key={n.name} className="bg-zinc-950 p-8">
              <div className="flex items-start gap-6">
                <div
                  className="h-14 w-14 shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: n.color }}
                >
                  <span className="text-2xl font-black text-black">
                    {(n.size * 100).toFixed(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black mb-1">{n.name}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    {n.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {n.artists.map((a) => (
                      <span
                        key={a}
                        className="border px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
                        style={{ borderColor: n.color, color: n.color }}
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Cross-neighborhood insight */}
        <section className="mb-16">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
            Cross-Neighborhood Insight
          </p>
          <div className="bg-zinc-950 p-8 border-l-4 border-[#ff4d00]">
            <p className="text-sm text-zinc-300 leading-relaxed italic">
              &ldquo;Your strongest overlap zone is where Late Night Electronics
              meets Jazz-Hop Crate — artists like Four Tet and Floating Points
              who sample jazz over electronic beds. This intersection is where
              your most resonant matches will come from.&rdquo;
            </p>
          </div>
        </section>

        {/* Matching potential */}
        <section className="mb-16 border-t border-b border-zinc-900 py-6">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
            Matching Potential in Bangalore
          </p>
          <div className="flex flex-wrap justify-between gap-4">
            {[
              { label: "Active Listeners", value: "2,847" },
              { label: "Your Neighborhood", value: "312" },
              { label: "High Overlap (>70%)", value: "47" },
              { label: "Rare Match (>85%)", value: "8" },
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
            href="/profile"
            className="bg-[#ff4d00] px-6 py-3 text-sm font-black uppercase tracking-widest text-black inline-block"
          >
            Set Up Profile
          </Link>
          <Link
            href="/matches"
            className="border-2 border-white px-6 py-3 text-sm font-black uppercase tracking-widest inline-block"
          >
            See Matches
          </Link>
        </div>
      </div>
    </div>
  );
}
