import Link from "next/link";

export default function Connect() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-32">
        {/* Back */}
        <Link
          href="/"
          className="text-xs text-zinc-600 uppercase tracking-wider hover:text-[#ff4d00] transition-colors"
        >
          &larr; Back
        </Link>

        <div className="mt-16 mb-20">
          <p className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-4">
            Step 1 of 3
          </p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-[0.85] mb-6">
            Connect your
            <br />
            Spotify<span className="text-[#ff4d00]">.</span>
          </h1>
          <p className="text-base text-zinc-400 max-w-md leading-relaxed">
            We&rsquo;ll read your top artists, tracks, audio features, and playlists.
            Nothing is stored until you say so.
          </p>
        </div>

        {/* Spotify OAuth */}
        <section className="mb-16">
          <Link
            href="/processing"
            className="group flex items-center gap-6 bg-zinc-950 p-8 hover:bg-zinc-900 transition-colors w-full"
          >
            <div className="h-16 w-16 bg-[#1DB954] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-black">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black mb-1">
                Connect with Spotify
              </h3>
              <p className="text-sm text-zinc-500">
                Instant analysis via Spotify API. Takes about 30 seconds.
              </p>
            </div>
            <span className="text-[#ff4d00] text-2xl font-black group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </section>

        {/* What we access */}
        <section className="mb-16">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-6">
            What We Access
          </p>
          <div className="grid gap-1 sm:grid-cols-2">
            {[
              { item: "Top Artists", detail: "Short, medium, and long-term" },
              { item: "Top Tracks", detail: "Your most-played across time ranges" },
              { item: "Audio Features", detail: "Energy, valence, tempo, acousticness per track" },
              { item: "Saved Library", detail: "Albums and tracks you've explicitly saved" },
              { item: "Playlists", detail: "Your created and followed playlists" },
              { item: "Recently Played", detail: "Last 50 tracks for recency signal" },
            ].map((a) => (
              <div key={a.item} className="bg-zinc-950 px-5 py-4 flex items-baseline justify-between">
                <span className="text-sm font-bold">{a.item}</span>
                <span className="text-xs text-zinc-600">{a.detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Optional: data download */}
        <section className="mb-16">
          <div className="border border-zinc-800 p-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 border-2 border-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-black text-zinc-500">+</span>
              </div>
              <div>
                <h3 className="text-base font-black mb-1">
                  Optional: Upload Your Data Download
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                  Have your Spotify data export? Upload it for a richer fingerprint
                  with complete streaming history and exact minute counts.
                </p>
                <button className="border border-zinc-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:border-[#ff4d00] hover:text-[#ff4d00] transition-colors">
                  Upload JSON
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Minutes gate */}
        <section className="mb-16">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
            Listening Threshold
          </p>
          <div className="bg-zinc-950 p-8">
            <h3 className="text-xl font-black mb-2">
              Do you have 20,000+ minutes?
            </h3>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
              This app is for heavy listeners. 20k minutes is about 5.5 hours a day,
              every day, for a year. If that sounds like you, you&rsquo;re in the right place.
            </p>
            <div className="flex gap-3">
              <button className="bg-[#ff4d00] px-6 py-3 text-sm font-black uppercase tracking-widest text-black">
                Yes, Easily
              </button>
              <button className="border border-zinc-700 px-6 py-3 text-sm font-bold uppercase tracking-widest text-zinc-500">
                Not Sure
              </button>
            </div>
          </div>
        </section>

        {/* Privacy note */}
        <div className="border-t border-zinc-900 pt-8">
          <p className="text-xs text-zinc-600 leading-relaxed max-w-md">
            We never post to your Spotify account. Your data is used solely
            for fingerprint generation and matching. You can delete your data at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
