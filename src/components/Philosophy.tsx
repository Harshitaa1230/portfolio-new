"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-20 md:py-32 border-t border-white/10 select-none bg-neutral-950/40">
      {/* Meta Header */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-10 md:mb-16">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Personal Profile</span>
          <span className="text-neutral-500 font-sans">プロフィール</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® — 06)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">Visual Thinker</span>
        </div>
      </div>

      {/* Kinetic Monumental Typography Statement */}
      <div className="max-w-5xl">
        <h2 className="font-sans text-[clamp(2.3rem,5.5vw,5rem)] font-medium leading-[1.08] tracking-[-0.035em] text-foreground text-balance">
          Blending design and code with functional clarity and creative precision. Delivering thoughtful digital systems with structure, flow, and expressive interaction.
        </h2>

        {/* Sub-statement text */}
        <div className="mt-10 md:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-neutral-400">
            <span>[ PRACTICE ]</span>
            <span>·</span>
            <span>GLOBAL SCOPE</span>
          </div>
          <p className="font-sans text-[15px] md:text-[16px] text-neutral-300 max-w-xl leading-relaxed">
            We bridge creative direction with real-world execution, combining design and development into one seamless workflow to deliver digital experiences that are thoughtful, fast, and built to perform.
          </p>
        </div>
      </div>
    </section>
  );
}
