"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with TITARVL felt effortless. The typography, the pacing, the details — everything was considered, and the result speaks for itself.",
    name: "MAYA LEE",
    role: "CREATIVE DIRECTOR",
    company: "ATELIER NOIR",
    initials: "ML",
  },
  {
    quote:
      "Precise, calm and quietly confident. The identity system has held up across every touchpoint since launch.",
    name: "JULIAN CARTER",
    role: "FOUNDER",
    company: "STUDIO ARC",
    initials: "JC",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <section
      id="testimonials"
      className="bg-inverse px-[11px] py-20 text-inverse-foreground md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className={`${mono} flex items-start justify-between`}
      >
        <span>TRUST</span>
        <span>TESTIMONIAL</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="mt-16 flex flex-col items-center text-center md:mt-24"
      >
        <h2 className="font-sans text-[40px] font-medium uppercase leading-[0.95] tracking-[-0.04em] md:text-[64px] lg:text-[72px]">
          VOICES BEHIND THE WORK
        </h2>

        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease }}
            className="flex flex-col items-center"
          >
            <blockquote className="mt-10 max-w-[440px] font-sans text-[16px] leading-[1.15] md:text-[18px]">
              &ldquo;{active.quote}&rdquo;
            </blockquote>

            <figcaption className="mt-8 flex flex-col items-center gap-3">
              <span
                aria-hidden
                className="flex h-[50px] w-[50px] items-center justify-center rounded-sm bg-neutral-700"
              >
                <span className={`${mono} text-inverse-foreground`}>
                  {active.initials}
                </span>
              </span>
              <span className={`${mono} font-medium`}>{active.name}</span>
              <span className={`${mono} text-muted`}>
                {active.role} — {active.company}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </motion.div>

      <div className="mt-12 flex justify-end">
        <button
          type="button"
          onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
          className={`${mono} transition-opacity duration-200 hover:opacity-50`}
        >
          [ NEXT ]
        </button>
      </div>
    </section>
  );
}
