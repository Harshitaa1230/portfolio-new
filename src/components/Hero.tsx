"use client";

import { motion } from "framer-motion";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden px-[11px] pt-24 pb-6 md:pt-28"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
        className={`${mono} text-muted`}
      >
        TITARVL — CREATIVE DIRECTION
      </motion.p>

      <div className="relative flex flex-1 items-center justify-center">
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-px w-[140%] -translate-x-1/2 -translate-y-1/2 -rotate-[12deg] bg-foreground/50"
        />

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          className={`${mono} absolute left-0 top-1/2 hidden -translate-y-1/2 md:block`}
        >
          LATEST WORK
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          className={`${mono} absolute right-0 top-1/2 hidden -translate-y-1/2 md:block`}
        >
          VOL. 01
        </motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.7 }}
        className="flex justify-center"
      >
        <a
          href="#latest"
          className={`${mono} transition-opacity duration-200 hover:opacity-50`}
        >
          [ SCROLL DOWN ]
        </a>
      </motion.div>
    </section>
  );
}
