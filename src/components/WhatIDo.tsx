"use client";

import { motion } from "framer-motion";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

const statement =
  "TITARVL IS A DIGITAL PRACTICE WORKING AT THE INTERSECTION OF BRAND IDENTITY AND WEB, DESIGNING AND BUILDING DISTINCT DIGITAL EXPERIENCES WHERE CONCEPT, TYPOGRAPHY, AND EXECUTION COME TOGETHER AS ONE";

const words = statement.split(" ");

const meta = ["TITARVL", "2026", "BRATISLAVA, SK", "視覚 文字"];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="px-[11px] py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className={`${mono} flex items-start justify-between`}
      >
        <span>WHAT I DO</span>
        <span>A SELECTED APPROACH</span>
      </motion.div>

      <p className="mt-16 max-w-none font-sans text-[32px] font-medium uppercase leading-[1.05] tracking-[-0.04em] md:mt-20 md:text-[48px] lg:text-[60px]">
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            initial={{ color: "var(--color-muted)" }}
            whileInView={{ color: "var(--color-foreground)" }}
            viewport={{ once: true, margin: "-10% 0px -15% 0px" }}
            transition={{ duration: 0.4, ease, delay: (index % 10) * 0.04 }}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="mt-16 md:mt-20"
      >
        <div className="relative flex aspect-video w-full items-center justify-center bg-neutral-900">
          <span className={`${mono} text-inverse-foreground opacity-70`}>
            SHOWREEL — LOOP / MUTED
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="mt-12 md:mt-16"
      >
        <div className={`${mono} grid grid-cols-2 gap-6 md:grid-cols-4`}>
          {meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[24ch] font-sans text-[18px] leading-[1.2]">
            Design is the silent ambassador of your brand.
          </p>
          <a
            href="/about"
            className={`${mono} transition-opacity duration-200 hover:opacity-50`}
          >
            [ ABOUT ME ]
          </a>
        </div>
      </motion.div>
    </section>
  );
}
