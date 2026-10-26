"use client";

import Link from "next/link";

const articles = [
  {
    id: "gregory-lalle",
    author: "Gregory Lalle",
    date: "May 21, 2024",
    title:
      "Good design is not just about structure—it’s about the emotional weight of space, rhythm, and silence.",
    category: "Web Design",
  },
  {
    id: "clive-willow",
    author: "Clive Willow",
    date: "February 5, 2024",
    title:
      "Typography today is no longer static. It breathes, scales, and adapts—blurring the lines between function and expression.",
    category: "Design",
  },
  {
    id: "raven-claw",
    author: "Raven Claw",
    date: "June 2, 2024",
    title:
      "Minimal design isn’t emptiness—it’s clarity, intention, and the reduction of noise to amplify what truly matters.",
    category: "Visual Identity",
  },
  {
    id: "clay-nicolas",
    author: "Clay Nicolas",
    date: "June 10, 2025",
    title:
      "Portfolios today must be more than archives—they need to feel alive, intentional, and editorial by design.",
    category: "Portfolio",
  },
];

export default function Articles() {
  return (
    <section className="py-16 md:py-24 border-t border-white/10 select-none">
      {/* Meta Header */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Visual Journal</span>
          <span className="text-neutral-500 font-sans">ジャーナル</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® — 11)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">Creative Notes</span>
        </div>
      </div>

      {/* Headline */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10">
        <h2 className="font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase">
          Featured Article©
        </h2>
        <span className="font-mono text-[12px] text-neutral-400 uppercase tracking-widest">
          [ EDITORIAL PERSPECTIVES ]
        </span>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-14">
        {articles.map((item) => (
          <div
            key={item.id}
            className="p-8 rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-900/30 hover:bg-neutral-900 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-4">
                <span>{item.date}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-300">
                  {item.category}
                </span>
              </div>

              <h3 className="font-sans text-[18px] md:text-[22px] font-medium leading-snug text-foreground group-hover:text-white transition-colors">
                &ldquo;{item.title}&rdquo;
              </h3>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[12px] font-mono text-neutral-400">
              <span className="text-neutral-300 font-semibold">{item.author}</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                READ ARTICLE →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
