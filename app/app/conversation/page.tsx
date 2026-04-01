import Link from "next/link";
import { mockConversation } from "@/lib/mock-data";

export default function Conversation() {
  const { match, sharedGround, suggestedOpeners, messages } = mockConversation;

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-32">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/matches"
            className="text-xs text-zinc-600 uppercase tracking-wider hover:text-[#ff4d00] transition-colors"
          >
            &larr; Matches
          </Link>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm font-black text-right">{match.name}, {match.age}</p>
              <p className="text-[10px] text-zinc-600 uppercase tracking-wider text-right">
                {match.overlap}% overlap
              </p>
            </div>
            <div className="h-10 w-10 bg-[#ff4d00] flex items-center justify-center">
              <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
            </div>
          </div>
        </div>

        {/* Shared Ground panel */}
        <section className="mb-12">
          <p className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-4">
            Shared Ground
          </p>
          <div className="bg-zinc-950 p-8">
            {/* Shared artists */}
            <div className="mb-8">
              <p className="text-xs text-zinc-600 uppercase tracking-wider mb-3">
                Shared Artists
              </p>
              <div className="space-y-1">
                {sharedGround.artists.map((a) => (
                  <div
                    key={a.name}
                    className="flex items-center justify-between bg-zinc-900 px-4 py-3"
                  >
                    <span className="text-sm font-bold">{a.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] text-zinc-600">
                        You: #{a.yourRank} &middot; Them: #{a.theirRank}
                      </span>
                      <span className="border border-[#ff4d00] px-2 py-0.5 text-[10px] font-black text-[#ff4d00] uppercase">
                        {a.rarity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-2xl font-black text-[#ff4d00]">
                  {(sharedGround.moodOverlap * 100).toFixed(0)}%
                </p>
                <p className="text-[10px] text-zinc-600 uppercase tracking-wider">
                  Mood Overlap
                </p>
              </div>
              <div>
                <p className="text-2xl font-black">{sharedGround.obscurityGap}</p>
                <p className="text-[10px] text-zinc-600 uppercase tracking-wider">
                  Obscurity Gap
                </p>
              </div>
              <div>
                <p className="text-2xl font-black">
                  {sharedGround.genres.length}
                </p>
                <p className="text-[10px] text-zinc-600 uppercase tracking-wider">
                  Shared Genres
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Suggested openers */}
        <section className="mb-12">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
            Conversation Starters
          </p>
          <div className="space-y-1">
            {suggestedOpeners.map((opener, i) => (
              <button
                key={i}
                className="w-full text-left bg-zinc-950 px-5 py-4 text-sm text-zinc-300 hover:bg-zinc-900 hover:text-[#ff4d00] transition-colors flex items-center gap-3 group"
              >
                <span className="text-[#ff4d00] text-xs font-black shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{opener}</span>
                <span className="text-zinc-800 group-hover:text-[#ff4d00] transition-colors">
                  &rarr;
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Chat */}
        <section className="mb-12">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
            Messages
          </p>
          <div className="space-y-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "you" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] px-5 py-4 ${
                    msg.from === "you"
                      ? "bg-[#ff4d00] text-black"
                      : "bg-zinc-900 text-white"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p
                    className={`text-[10px] mt-1 ${
                      msg.from === "you" ? "text-black/50" : "text-zinc-600"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="mt-1 flex gap-1">
            <div className="flex-1 bg-zinc-950 px-5 py-4">
              <p className="text-sm text-zinc-700">Type a message...</p>
            </div>
            <button className="bg-[#ff4d00] px-6 flex items-center justify-center">
              <span className="text-xl font-black text-black">&uarr;</span>
            </button>
          </div>
        </section>

        {/* Match context footer */}
        <section className="border-t border-zinc-900 pt-8">
          <div className="flex items-start gap-6">
            <div className="h-14 w-14 bg-[#ff4d00] flex items-center justify-center shrink-0">
              <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
            </div>
            <div>
              <h3 className="text-lg font-black mb-1">
                {match.name}, {match.age}
              </h3>
              <p className="text-xs text-zinc-600 uppercase tracking-wider mb-2">
                {match.archetype} &middot; {match.city} &middot; Obscurity{" "}
                {match.obscurityScore}
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">{match.bio}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {match.topGenres.map((g) => (
                  <span
                    key={g}
                    className="border border-zinc-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
