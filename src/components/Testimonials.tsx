"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import testimonialsData from "@/data/testimonials.json";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

type Testimonial = {
  id: string;
  quote: string;
  person: string;
  role: string;
  side: string;
};

const testimonials: Testimonial[] = testimonialsData;
const ROTATE_MS = 5000;

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-inverse py-20 text-inverse-foreground md:py-28"
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
                className="flex h-[50px] w-[50px] items-center justify-center rounded-sm bg-inverse-foreground/15"
              >
                <span className={`${mono} text-inverse-foreground`}>
                  {getInitials(active.person)}
                </span>
              </span>
              <span className={`${mono} font-medium`}>{active.person}</span>
              <span className={`${mono} text-inverse-muted`}>{active.role}</span>
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
