"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Anvik Labs joined as a small team and immediately operated like part of ours. They found the simplest version of a complicated product, then shipped it with a level of finish we had not seen from a larger studio.",
    role: "Founder",
    sector: "SaaS platform",
    rotation: 28,
  },
  {
    quote:
      "The work was clear from the first review. No theatre, no unnecessary layers — just a sharp read on the problem and a product our customers could understand immediately.",
    role: "Head of Product",
    sector: "Fintech",
    rotation: -34,
  },
  {
    quote:
      "They treated the brand and the build as one system. That made the handoff unusually calm, and it shows in how consistent the experience still feels months later.",
    role: "Creative Director",
    sector: "Culture & media",
    rotation: 62,
  },
];

const logoPlaceholders = Array.from({ length: 8 }, (_, index) => index);

function PlaceholderMark({ index }: { index: number }) {
  const variant = index % 4;

  if (variant === 0) {
    return (
      <span className="relative block h-4 w-4 rounded-full border border-current">
        <span className="absolute inset-1 rounded-full border border-current" />
      </span>
    );
  }

  if (variant === 1) {
    return <span className="block h-4 w-4 rotate-45 border border-current" />;
  }

  if (variant === 2) {
    return (
      <span className="flex h-4 w-4 flex-col justify-between">
        <span className="h-px w-full bg-current" />
        <span className="h-px w-full bg-current" />
        <span className="h-px w-3/4 bg-current" />
      </span>
    );
  }

  return (
    <span className="relative block h-4 w-4">
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
    </span>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={
          direction === "left"
            ? "M10.5 3.5 6 8l4.5 4.5M6 8h7"
            : "M5.5 3.5 10 8l-4.5 4.5M10 8H3"
        }
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const story = testimonials[active];
  const total = String(testimonials.length).padStart(2, "0");

  const goTo = (direction: number) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  const fade = {
    initial: reduceMotion ? false : { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 },
    transition: { duration: reduceMotion ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-t border-white/10"
    >
      <div className="container-page py-14 md:py-20">
        <h2 id="testimonials-heading" className="sr-only">
          Client stories and testimonials
        </h2>

        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 md:text-[11px]">
          <span>© Testimonials</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent" />
            <span>Placeholder content</span>
            <span className="hidden text-neutral-700 sm:inline">·</span>
            <span className="hidden sm:inline">(WDX® — 08)</span>
          </span>
        </div>

        <div className="mt-6 grid overflow-hidden border border-tone-3 bg-background md:mt-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="flex flex-col justify-between p-6 md:p-9 lg:p-11">
            <div>
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                  <span className="h-px w-6 bg-accent" />
                  <span>Client stories</span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
                  {story.sector}
                </span>
              </div>

              <div className="mt-8 min-h-[250px] md:mt-10 md:min-h-[270px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div key={active} {...fade}>
                    <blockquote>
                      <p className="max-w-[44ch] text-pretty font-sans text-[clamp(1.3rem,1.8vw,2rem)] leading-[1.5] tracking-[-0.025em] text-foreground">
                        {story.quote}
                      </p>
                    </blockquote>

                    <div className="mt-8 flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" />
                      <div>
                        <p className="font-sans text-[15px] font-medium tracking-[-0.01em] text-foreground">
                          Client name
                        </p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                          {story.role} / Company
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-tone-3 pt-4">
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
                <span className="h-1.5 w-1.5 bg-accent/70" />
                Sample story
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => goTo(-1)}
                  aria-label="Previous client story"
                  className="flex h-8 w-8 items-center justify-center border border-tone-3 text-neutral-400 transition-colors duration-200 hover:border-white/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  <ArrowIcon direction="left" />
                </button>

                <span
                  aria-live="polite"
                  className="min-w-14 text-center font-mono text-[10px] tracking-[0.16em] text-neutral-400"
                >
                  {String(active + 1).padStart(2, "0")} / {total}
                </span>

                <button
                  type="button"
                  onClick={() => goTo(1)}
                  aria-label="Next client story"
                  className="flex h-8 w-8 items-center justify-center border border-tone-3 text-neutral-400 transition-colors duration-200 hover:border-white/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden border-t border-tone-3 md:min-h-0 md:border-l md:border-t-0">
            <div className="relative flex h-full min-h-[320px] flex-col justify-between p-6 md:min-h-0 md:p-8">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
                <span>Studio signature</span>
                <span>
                  {String(active + 1).padStart(2, "0")} / {total}
                </span>
              </div>

              <div className="flex flex-1 items-center justify-center py-10">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.99 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.36,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative flex h-52 w-52 items-center justify-center md:h-60 md:w-60"
                  >
                    <div className="absolute inset-0 motion-safe:animate-[testimonial-orbit_36s_linear_infinite] [transform-origin:50%_50%] will-change-transform">
                      <div className="absolute inset-0 rounded-full border border-white/10" />
                      <div className="absolute inset-6 rounded-full border border-tone-3" />
                      <div
                        className="absolute inset-0 rounded-full border border-transparent"
                        style={{
                          borderTopColor: "var(--color-accent)",
                          transform: `rotate(${story.rotation}deg)`,
                        }}
                      />
                      <div className="absolute right-4 top-4 h-1.5 w-1.5 bg-accent" />
                    </div>
                    <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
                    <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
                    <div className="absolute left-1/2 top-1/2 flex h-20 w-[280px] -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-tone-3 bg-background lg:h-24 lg:w-[350px] lg:px-2 xl:h-28 xl:w-[430px]">
                      <img
                        src="/logo.svg"
                        alt="Anvik Labs"
                        width={1010}
                        height={118}
                        className="h-8 w-auto lg:h-10 xl:h-12"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-500">
                      Anvik / Labs
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-end justify-between gap-4 border-t border-tone-3 pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                <span>Product design / engineering</span>
                <span className="text-right">{story.sector}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
            <span>Client logo grid</span>
            <span>Placeholder positions</span>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-tone-3 md:grid-cols-4">
            {logoPlaceholders.map((index) => (
              <div
                key={index}
                className={`group flex h-24 items-center justify-center border-b border-r border-tone-3 transition-colors duration-300 md:h-28 ${
                  index % 2 === 0 ? "bg-background" : "bg-white/[0.02]"
                }`}
                title="Placeholder client logo"
              >
                <div className="flex items-center gap-2.5 text-neutral-500 transition-colors duration-300 group-hover:text-neutral-200">
                  <PlaceholderMark index={index} />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em]">
                    Client {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[68ch] font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-neutral-400">
            Development placeholder — replace the sample quote, attribution, and
            logo marks with verified client content before launch.
          </p>
          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-500">
            08 positions / 4 columns
          </span>
        </div>
      </div>
    </section>
  );
}
