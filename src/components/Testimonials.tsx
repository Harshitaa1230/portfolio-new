"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Akihiko has an incredible eye for detail and a rare ability to translate complex ideas into clean, elegant interfaces. Working with him was seamless from start to finish — he not only delivered beyond expectations but also brought thoughtful ideas that elevated the entire project.",
    author: "Rohan Mehta",
    username: "@rohanmehta",
    role: "Founder",
    company: "Orbit Labs",
    date: "Mar 2024",
  },
  {
    quote:
      "What sets Akihiko apart is his blend of strategy and craft. He thinks like a product designer but executes with the precision of a developer. The result was a website that felt modern, fast, and effortlessly intuitive for our users.",
    author: "Sofia Navarro",
    username: "@sofianavarro",
    role: "Product Lead",
    company: "Framehaus",
    date: "Jun 2024",
  },
  {
    quote:
      "His ability to merge storytelling with clean interaction design is unmatched. Akihiko understands not just how things should look, but why they should look that way — and that insight came through in every part of the work.",
    author: "Mei Tanaka",
    username: "@meitanaka",
    role: "UX Designer",
    company: "Nuro",
    date: "Sep 2024",
  },
  {
    quote:
      "Working with Akihiko was more than just hiring a designer — it felt like bringing on a creative partner who truly understood our goals. He took our raw ideas, added clarity, and transformed them into something that not only looked stunning.",
    author: "Julian Pierce",
    username: "@julianpierce",
    role: "Director",
    company: "Vektor Inc.",
    date: "Nov 2024",
  },
  {
    quote:
      "Akihiko brings a rare balance of creativity and discipline. He’s incredibly fast without ever sacrificing attention to detail. From early ideation to the final product, his process is intentional, his communication is clear.",
    author: "Hana Samoto",
    username: "@hanasamoto",
    role: "CEO",
    company: "Willow Studio",
    date: "Jan 2025",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-white">
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.232c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.02-2.147 3.6 0 1.435.738 2.695 1.862 3.408-.018.264-.052.52-.052.787 0 2.21 1.71 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.305 1.926 2.22 3.437 2.22 1.512 0 2.818-.915 3.437-2.22.415.165.865.25 1.336.25 2.11 0 3.818-1.79 3.818-4 0-.266-.034-.52-.052-.778 1.125-.713 1.862-1.974 1.862-3.41zM10.09 15.75 7.5 13.16l1.41-1.41 1.18 1.17 4.41-4.42 1.41 1.42z" />
    </svg>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [pairIndex, setPairIndex] = useState(-1);
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setPinned(false);
      setPairIndex(testimonials.length - 1);
      return;
    }

    const handleScroll = () => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      if (!section || !heading) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      const headingCenter = sectionTop + heading.offsetTop + heading.offsetHeight / 2;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (viewportCenter >= headingCenter - 40 && viewportCenter < sectionBottom - window.innerHeight * 0.6) {
        setPinned(true);
        const progress = Math.min(
          1,
          Math.max(0, (viewportCenter - (headingCenter - 40)) / (window.innerHeight * 1.6))
        );
        const maxPairs = Math.ceil(testimonials.length / 2);
        const idx = Math.floor(progress * maxPairs);
        setPairIndex(Math.min(maxPairs - 1, Math.max(-1, idx)));
      } else if (viewportCenter >= sectionBottom - window.innerHeight * 0.6) {
        setPinned(false);
        setPairIndex(Math.ceil(testimonials.length / 2) - 1);
      } else {
        setPinned(false);
        setPairIndex(-1);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [reduceMotion]);

  const pairs: Array<[typeof testimonials[0], typeof testimonials[0] | null]> = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    pairs.push([testimonials[i], testimonials[i + 1] || null]);
  }

  return (
    <section ref={sectionRef} className="border-t border-white/10 select-none relative">
      {/* Meta Header */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 pt-16 md:pt-24 mb-8 md:mb-12">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Testimonials</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® — 08)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">Reviews</span>
        </div>
      </div>

      {/* Headline */}
      <div ref={headingRef} className="pb-6 md:pb-8 border-b border-white/10 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center">
              <h2 className="whitespace-nowrap font-sans text-[clamp(2.5rem,10vw,8rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase pr-16 md:pr-28">
                TESTIMONIAL ©
              </h2>
              <h2 className="whitespace-nowrap font-sans text-[clamp(2.5rem,10vw,8rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase pr-16 md:pr-28">
                TESTIMONIAL ©
              </h2>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll space for pinning */}
      <div className={pinned || reduceMotion ? "h-[250vh] md:h-[320vh]" : "h-[40vh] md:h-[60vh]"}>
        <div className={pinned ? "sticky top-0 h-screen flex items-center overflow-hidden" : "relative h-full flex items-center"}>
          <div className="w-full px-4 sm:px-[4vw] lg:px-[5vw] xl:px-[6vw]">
            <div className="relative z-10">
              {isMobile ? (
                <div className="flex flex-col gap-4">
                  {testimonials.map((item, idx) => (
                    <article
                      key={idx}
                      className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] p-5 flex flex-col gap-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/15 text-[11px] font-semibold tracking-widest text-white">
                            {getInitials(item.author)}
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                              <span className="font-sans text-[14px] font-medium text-white leading-tight">{item.author}</span>
                              <VerifiedBadge />
                            </div>
                            <span className="font-sans text-[13px] text-neutral-400 leading-tight">{item.username || item.role}</span>
                          </div>
                        </div>
                        <div className="text-neutral-500">
                          <TwitterIcon />
                        </div>
                      </div>
                      <p className="font-sans text-[14px] leading-[1.7] text-white/90">{item.quote}</p>
                      {(item.date || item.company) && (
                        <div className="pt-3 border-t border-white/5">
                          <span className="font-sans text-[12px] text-neutral-500">
                            {item.date ? item.date : item.company}
                          </span>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {pairs.map((pair, pIdx) => {
                    const isActive = pinned ? pIdx <= pairIndex : true;
                    const isVisible = pinned ? pIdx === pairIndex || (pairIndex === -1 && pIdx === 0 && !pinned ? false : pIdx === pairIndex) : true;
                    if (!isActive && pinned && pairIndex >= 0) return null;
                    if (pinned && pairIndex < 0) return null;
                    if (!pinned && reduceMotion) return null;
                    if (!pinned && pairIndex === -1) return null;

                    return pair.map((item, cIdx) => {
                      if (!item) return <div key={`${pIdx}-empty`} />;
                      const delay = cIdx * 0.08;
                      return (
                        <motion.article
                          key={`${pIdx}-${cIdx}`}
                          initial={pinned ? { y: 80, opacity: 0 } : { y: 0, opacity: 1 }}
                          animate={pinned ? { y: isVisible ? 0 : 80, opacity: isVisible ? 1 : 0 } : { y: 0, opacity: 1 }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
                          className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] p-6 md:p-7 flex flex-col gap-4 shadow-none"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/15 text-[12px] font-semibold tracking-widest text-white">
                                {getInitials(item.author)}
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-sans text-[15px] font-medium text-white leading-tight">{item.author}</span>
                                  <VerifiedBadge />
                                </div>
                                <span className="font-sans text-[14px] text-neutral-400 leading-tight">{item.username || `${item.role} · ${item.company}`}</span>
                              </div>
                            </div>
                            <div className="text-neutral-500">
                              <TwitterIcon />
                            </div>
                          </div>
                          <p className="font-sans text-[15px] leading-[1.8] text-white/90">{item.quote}</p>
                          {(item.date || item.company) && (
                            <div className="pt-4 border-t border-white/5">
                              <span className="font-sans text-[12px] text-neutral-500">
                                {item.date ? item.date : item.company}
                              </span>
                            </div>
                          )}
                        </motion.article>
                      );
                    });
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reduced motion fallback */}
      {reduceMotion && !isMobile && (
        <div className="px-4 sm:px-[4vw] lg:px-[5vw] xl:px-[6vw] pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {testimonials.map((item, idx) => (
              <article
                key={idx}
                className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] p-6 md:p-7 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/15 text-[12px] font-semibold tracking-widest text-white">
                      {getInitials(item.author)}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="font-sans text-[15px] font-medium text-white leading-tight">{item.author}</span>
                        <VerifiedBadge />
                      </div>
                      <span className="font-sans text-[14px] text-neutral-400 leading-tight">{item.username || `${item.role} · ${item.company}`}</span>
                    </div>
                  </div>
                  <div className="text-neutral-500">
                    <TwitterIcon />
                  </div>
                </div>
                <p className="font-sans text-[15px] leading-[1.8] text-white/90">{item.quote}</p>
                {(item.date || item.company) && (
                  <div className="pt-4 border-t border-white/5">
                    <span className="font-sans text-[12px] text-neutral-500">
                      {item.date ? item.date : item.company}
                    </span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
