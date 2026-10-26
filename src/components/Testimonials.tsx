"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Akihiko elevated every layer of our brand’s online presence. From motion details to structural layout, every piece felt crafted and intentional. The site not only looked beautiful but performed well too — and the entire collaboration process was smooth.",
    author: "Lisa Kuroda",
    role: "Founder",
    company: "Studio Analog",
  },
  {
    quote:
      "Akihiko approaches every project with a deep sense of purpose. His work is never just about the surface — it’s about how each element functions, connects, and flows. He brings logic, sharpness, and confidence to every decision, and his build quality.",
    author: "Daniel Reyes",
    role: "Director",
    company: "Framehaus",
  },
  {
    quote:
      "His ability to merge storytelling with clean interaction design is unmatched. Akihiko understands not just how things should look, but why they should look that way — and that insight came through in every part of the work.",
    author: "Mei Tanaka",
    role: "UX Designer",
    company: "Nuro",
  },
  {
    quote:
      "Working with Akihiko was more than just hiring a designer — it felt like bringing on a creative partner who truly understood our goals. He took our raw ideas, added clarity, and transformed them into something that not only looked stunning.",
    author: "Julian Pierce",
    role: "Director",
    company: "Vektor Inc.",
  },
  {
    quote:
      "Akihiko brings a rare balance of creativity and discipline. He’s incredibly fast without ever sacrificing attention to detail. From early ideation to the final product, his process is intentional, his communication is clear.",
    author: "Hana Samoto",
    role: "CEO",
    company: "Willow Studio",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 md:py-24 border-t border-white/10 select-none">
      {/* Meta Header */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Client Feedback</span>
          <span className="text-neutral-500 font-sans">フィードバック</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® — 08)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">Reviews</span>
        </div>
      </div>

      {/* Headline & Contact CTA */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <h2 className="font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase">
            Testimonial©
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-300 hover:text-white transition-colors"
        >
          <span>[ GET IN TOUCH ]</span>
          <span>→</span>
        </Link>
      </div>

      {/* Testimonials Carousel / Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10 md:mt-16 items-start">
        {/* Active Featured Quote (Left) */}
        <div className="lg:col-span-8 flex flex-col justify-between min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-sans text-[clamp(1.25rem,2.8vw,2.15rem)] font-normal text-foreground leading-snug tracking-[-0.02em]">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="w-8 h-px bg-white/30" />
                <span className="font-sans font-semibold text-[15px] text-white">
                  {testimonials[current].author}
                </span>
                <span className="text-neutral-500">/</span>
                <span className="font-mono text-[12px] text-neutral-400">
                  {testimonials[current].role}, {testimonials[current].company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stepper buttons */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
            <span className="font-mono text-[12px] text-neutral-500">
              0{current + 1} / 0{testimonials.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrent((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setCurrent((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Client List Selector (Right) */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          {testimonials.map((t, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                current === idx
                  ? "bg-neutral-900 border-white/30 text-white"
                  : "bg-transparent border-transparent hover:border-white/10 text-neutral-400 hover:text-neutral-200"
              }`}
            >
              <div className="font-sans font-semibold text-[14px]">
                {t.author}
              </div>
              <div className="font-mono text-[11px] text-neutral-500 mt-0.5">
                {t.company}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
