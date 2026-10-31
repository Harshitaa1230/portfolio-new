"use client";

import { motion } from "framer-motion";

const roles = [
    {
    company: "Skedio Creative Agency",
    period: "Dec 2025 - Present",
    role: "UI/UX Lead",
    location: "Jabalpur",
    type: "Part-time",
  },
  {
    company: "Finn AI",
    period: "July 2025 — Oct 2025",
    role: "UI/UX Design",
    location: "Remote",
    type: "Internship",
  },
  {
    company: "Freelance",
    period: "5+ Projects Delivered",
  }
];

export default function Experience() {
  return (
    <section className="py-16 md:py-24 border-t border-white/10 select-none">
      {/* Meta Header */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Experience</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® — 07)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">Creative Collabs</span>
        </div>
      </div>

      {/* Section Headline */}
      <div className="pb-6 md:pb-8 border-b border-white/10 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center">
              <h2 className="whitespace-nowrap font-sans text-[clamp(2.5rem,10vw,8rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase pr-16 md:pr-28">
                Experience©
              </h2>
              <h2 className="whitespace-nowrap font-sans text-[clamp(2.5rem,10vw,8rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase pr-16 md:pr-28">
                Experience©
              </h2>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Timeline Rows */}
      <div className="divide-y divide-white/10 mt-6 md:mt-8">
        {roles.map((item, idx) => (
          <div
            key={idx}
            className="py-5 md:py-7 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6 hover:bg-white/[0.02] transition-colors group px-2 rounded-lg"
          >
            {/* Company & Role */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <span className="font-mono text-[11px] text-neutral-500 w-8">
                [0{idx + 1}]
              </span>
              <span className="font-sans text-[18px] md:text-[21px] font-semibold text-foreground group-hover:text-white transition-colors">
                {item.company}
              </span>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <span className="font-sans text-[14px] md:text-[15px] text-neutral-400">
                {item.role}
              </span>
            </div>

            {/* Location & Period */}
            <div className="flex items-center justify-between sm:justify-end gap-6 text-[12px] md:text-[13px] font-mono text-neutral-400">
              <span className="text-neutral-500">{item.location}</span>
              <span className="text-neutral-300 font-medium">{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
