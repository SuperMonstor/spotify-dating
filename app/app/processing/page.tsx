import Link from "next/link";
import { processingSteps } from "@/lib/mock-data";

export default function Processing() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center">
      <div className="mx-auto max-w-lg px-6 w-full">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="h-20 w-20 bg-[#ff4d00] flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl font-black text-black">T</span>
          </div>
          <p className="text-[#ff4d00] text-xs tracking-[0.3em] uppercase mb-4">
            Analyzing
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter leading-[0.85] mb-4">
            Reading your
            <br />
            listening DNA<span className="text-[#ff4d00]">.</span>
          </h1>
          <p className="text-sm text-zinc-500 max-w-sm mx-auto">
            Scanning 847 artists, 42 genres, and 24,680 minutes of listening history.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-16 space-y-1">
          {processingSteps.map((step, i) => (
            <div
              key={step.label}
              className={`flex items-center gap-4 p-4 ${
                step.status === "active" ? "bg-zinc-900" : "bg-zinc-950"
              }`}
            >
              {/* Status indicator */}
              <div className="w-8 h-8 flex items-center justify-center shrink-0">
                {step.status === "complete" ? (
                  <div className="w-6 h-6 bg-[#ff4d00] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="square" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : step.status === "active" ? (
                  <div className="w-6 h-6 border-2 border-[#ff4d00] animate-pulse-bar" />
                ) : (
                  <div className="w-6 h-6 border border-zinc-800" />
                )}
              </div>
              <span
                className={`text-sm font-bold ${
                  step.status === "complete"
                    ? "text-zinc-400"
                    : step.status === "active"
                    ? "text-white"
                    : "text-zinc-700"
                }`}
              >
                {step.label}
              </span>
              {step.status === "active" && (
                <span className="ml-auto text-xs text-[#ff4d00] font-bold uppercase tracking-wider">
                  Processing
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-zinc-600 uppercase tracking-wider">Progress</span>
            <span className="text-xs font-black text-[#ff4d00]">58%</span>
          </div>
          <div className="h-2 w-full bg-zinc-900">
            <div className="h-full bg-[#ff4d00] transition-all duration-1000" style={{ width: "58%" }} />
          </div>
        </div>

        {/* Fun fact while waiting */}
        <div className="border-t border-zinc-900 pt-8 mb-16">
          <p className="text-xs text-zinc-600 uppercase tracking-wider mb-2">While You Wait</p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Your top artist has only 62k monthly listeners. That puts you in a
            rarefied crowd — only 3% of users match on artists this niche.
          </p>
        </div>

        {/* Skip to demo */}
        <div className="text-center">
          <Link
            href="/fingerprint"
            className="text-xs text-zinc-600 uppercase tracking-wider hover:text-[#ff4d00] transition-colors"
          >
            Skip to fingerprint &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
