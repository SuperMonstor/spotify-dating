import Link from "next/link";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-32">
        {/* Logo mark */}
        <div className="mb-20">
          <div className="h-16 w-16 bg-[#ff4d00] flex items-center justify-center mb-8">
            <span className="text-3xl font-black text-black">T</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter leading-[0.85] mb-8">
            Match with someone
            <br />
            who gets your
            <br />
            music<span className="text-[#ff4d00]">.</span>
          </h1>
          <p className="text-lg leading-relaxed text-zinc-400 max-w-lg">
            Nobody listens to 3 hours of ambient electronic at 2am to impress
            anyone. Your listening history is the most honest thing about you.
            We use it to find your person.
          </p>
        </div>

        {/* Exclusivity gate */}
        <section className="mb-20">
          <div className="border border-zinc-800 p-10 sm:p-14 text-center">
            <p className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-4">
              Entry Requirement
            </p>
            <p className="text-5xl sm:text-7xl font-black tracking-tighter text-[#ff4d00] mb-4">
              20,000+
            </p>
            <p className="text-lg font-black uppercase tracking-wider mb-4">
              Minutes Listened
            </p>
            <p className="text-sm text-zinc-500 max-w-md mx-auto leading-relaxed">
              That&rsquo;s 5.5 hours a day, every day, for a year. If you don&rsquo;t have it,
              this app isn&rsquo;t for you. If you do — you already know.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-20">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-8">
            How It Works
          </p>
          <div className="grid gap-1 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect Spotify",
                desc: "We analyze your top artists, genres, audio features, and listening patterns.",
              },
              {
                step: "02",
                title: "Get Your Fingerprint",
                desc: "A multi-dimensional map of your taste — genre constellation, obscurity score, mood landscape.",
              },
              {
                step: "03",
                title: "Meet Your Match",
                desc: "Matched by niche artist overlap, not selfies. Every match comes with a 'why you clicked.'",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-zinc-950 p-6 flex flex-col gap-3"
              >
                <span className="text-3xl font-black text-[#ff4d00]">
                  {item.step}
                </span>
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The thesis */}
        <section className="mb-20 border-t border-b border-zinc-900 py-10">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { value: "5–30", label: "Days to Get In", sub: "Your Spotify export is your application" },
              { value: "6", label: "Taste Dimensions", sub: "Genre, mood, obscurity, era, archetype, audio" },
              { value: "87%", label: "Avg Niche Overlap", sub: "Among top matches in Bangalore" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-black text-[#ff4d00]">{s.value}</p>
                <p className="text-sm font-bold mt-1">{s.label}</p>
                <p className="text-xs text-zinc-600 mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample match reason */}
        <section className="mb-20">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
            What a Match Looks Like
          </p>
          <div className="bg-zinc-950 p-8 border-l-4 border-[#ff4d00]">
            <p className="text-sm text-zinc-300 leading-relaxed italic">
              &ldquo;You&rsquo;re both in the top 2% of Bonobo listeners in Bangalore.
              You both gravitate toward melancholic, low-tempo music late at night.
              Your genre maps overlap 84% in the indie-electronic corridor.&rdquo;
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex gap-3">
          <Link
            href="/connect"
            className="bg-[#ff4d00] px-8 py-4 text-sm font-black uppercase tracking-widest text-black inline-block"
          >
            Connect Spotify
          </Link>
          <Link
            href="/fingerprint"
            className="border-2 border-white px-8 py-4 text-sm font-black uppercase tracking-widest inline-block"
          >
            See Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
