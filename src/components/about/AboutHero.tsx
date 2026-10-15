"use client";

import { motion } from "framer-motion";

const ease = [0.2, 0.7, 0.1, 1] as const;

export default function AboutHero() {
  return (
    <section
      id="about"
      className="bg-foreground px-[11px] pb-20 pt-12 text-background md:pb-28 md:pt-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="max-w-[16ch] font-sans text-[36px] font-medium uppercase leading-[0.95] tracking-[-0.04em] md:text-[56px] lg:text-[64px]"
      >
        A DIGITAL PRACTICE WORKING ACROSS BRAND, TYPE AND WEB
      </motion.h1>
    </section>
  );
}
