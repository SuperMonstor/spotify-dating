import Link from "next/link";
import { mockFingerprint } from "@/lib/mock-data";

export default function Profile() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-32">
        {/* Back */}
        <Link
          href="/neighborhoods"
          className="text-xs text-zinc-600 uppercase tracking-wider hover:text-[#ff4d00] transition-colors"
        >
          &larr; Back
        </Link>

        <div className="mt-12 mb-16">
          <p className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-4">
            Step 2 of 3
          </p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-[0.85] mb-6">
            Complete your
            <br />
            profile<span className="text-[#ff4d00]">.</span>
          </h1>
          <p className="text-base text-zinc-400 max-w-md leading-relaxed">
            Your taste fingerprint does the heavy lifting. This is just the basics
            so your matches know who they&rsquo;re talking to.
          </p>
        </div>

        {/* Profile preview card */}
        <section className="mb-16">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
            Profile Preview
          </p>
          <div className="bg-zinc-950 p-8">
            <div className="flex gap-6 items-start mb-8">
              <div className="h-24 w-24 bg-[#ff4d00] flex items-center justify-center shrink-0">
                <svg className="h-14 w-14 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
              </div>
              <div>
                <h2 className="text-3xl font-black">
                  {mockFingerprint.name}, 26
                </h2>
                <p className="text-sm text-zinc-500 mt-1">Bangalore</p>
                <div className="flex gap-2 mt-3">
                  <span className="border border-[#ff4d00] px-2 py-1 text-[10px] font-black text-[#ff4d00] uppercase tracking-wider">
                    {mockFingerprint.archetype.name}
                  </span>
                  <span className="border border-zinc-700 px-2 py-1 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                    Obscurity: {mockFingerprint.obscurityScore}
                  </span>
                </div>
              </div>
            </div>

            {/* Mini fingerprint */}
            <div className="grid gap-1 grid-cols-3 sm:grid-cols-6 mb-6">
              {mockFingerprint.topArtists.map((a) => (
                <div
                  key={a.name}
                  className="aspect-square flex flex-col items-center justify-center p-1 text-center"
                  style={{ backgroundColor: a.color }}
                >
                  <span className="text-xl font-black text-black">{a.initial}</span>
                  <span className="text-[8px] font-bold text-black/60 uppercase tracking-wider mt-0.5">
                    {a.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">
              {mockFingerprint.primaryIdentity}
            </p>
          </div>
        </section>

        {/* Form fields */}
        <section className="mb-16 space-y-8">
          {/* Photos */}
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
              Photos
            </p>
            <div className="grid grid-cols-3 gap-1 sm:grid-cols-4">
              <div className="aspect-square bg-zinc-900 flex items-center justify-center border-2 border-dashed border-zinc-700">
                <span className="text-3xl text-zinc-700">+</span>
              </div>
              <div className="aspect-square bg-zinc-900 flex items-center justify-center border-2 border-dashed border-zinc-800">
                <span className="text-3xl text-zinc-800">+</span>
              </div>
              <div className="aspect-square bg-zinc-900 flex items-center justify-center border-2 border-dashed border-zinc-800">
                <span className="text-3xl text-zinc-800">+</span>
              </div>
              <div className="aspect-square bg-zinc-900 flex items-center justify-center border-2 border-dashed border-zinc-800 hidden sm:flex">
                <span className="text-3xl text-zinc-800">+</span>
              </div>
            </div>
            <p className="text-xs text-zinc-700 mt-2">
              Photos are secondary here. Your taste does the talking.
            </p>
          </div>

          {/* Bio */}
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">Bio</p>
            <div className="bg-zinc-950 p-6">
              <textarea
                className="w-full bg-transparent text-sm text-zinc-300 leading-relaxed resize-none outline-none placeholder:text-zinc-700 h-24"
                placeholder="Write something about yourself. Or don't — your 847 artists say enough."
                defaultValue="Product designer by day, ambient music archivist by night. Looking for someone who understands why Kid A is a love album."
                readOnly
              />
              <div className="flex justify-end mt-2">
                <span className="text-[10px] text-zinc-700">124 / 200</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
              City
            </p>
            <div className="bg-zinc-950 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-[#ff4d00] flex items-center justify-center">
                  <span className="text-xs font-black text-black">BLR</span>
                </div>
                <span className="text-sm font-bold">Bangalore</span>
              </div>
              <span className="text-xs text-zinc-600">2,847 listeners</span>
            </div>
            <p className="text-xs text-zinc-700 mt-2">
              Matching is city-based. More cities coming soon.
            </p>
          </div>

          {/* Age */}
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
              Age
            </p>
            <div className="bg-zinc-950 p-4 flex items-center gap-3">
              <span className="text-3xl font-black text-[#ff4d00]">26</span>
              <span className="text-sm text-zinc-500">years old</span>
            </div>
          </div>

          {/* Preference */}
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
              Show Me
            </p>
            <div className="flex gap-1">
              {["Everyone", "Women", "Men", "Non-binary"].map((opt) => (
                <button
                  key={opt}
                  className={`px-4 py-3 text-xs font-bold uppercase tracking-wider ${
                    opt === "Everyone"
                      ? "bg-[#ff4d00] text-black"
                      : "bg-zinc-950 text-zinc-600"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* What matches see */}
        <section className="mb-16">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
            What Your Matches See
          </p>
          <div className="bg-zinc-950 p-6 space-y-3">
            {[
              "Your listening archetype and obscurity score",
              "Top artists grid (the colored tiles)",
              "Genre constellation breakdown",
              "Shared artist overlap percentage",
              "Your bio and photos",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#ff4d00] flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="square" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-zinc-400">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex gap-3">
          <Link
            href="/matches"
            className="bg-[#ff4d00] px-8 py-4 text-sm font-black uppercase tracking-widest text-black inline-block"
          >
            Find My Matches
          </Link>
        </div>
      </div>
    </div>
  );
}
