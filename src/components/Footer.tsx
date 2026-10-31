"use client";

import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
  { label: "Framer", href: "https://www.framer.com/" },
  { label: "Twitter", href: "https://x.com/" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-white/10 select-none">
      {/* Meta Header */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Final Section</span>
          <span className="text-neutral-500 font-sans">クロージング</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® — 13)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">Studio Wrap</span>
        </div>
      </div>

      {/* Tags row */}
      <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-8">
        <span className="px-3 py-1 rounded-full bg-neutral-900 border border-white/10">
          Independent
        </span>
        <span className="px-3 py-1 rounded-full bg-neutral-900 border border-white/10">
          Overview
        </span>
        <span className="px-3 py-1 rounded-full bg-neutral-900 border border-white/10">
          Multidisciplinary
        </span>
        <span className="px-3 py-1 rounded-full bg-neutral-900 border border-white/10">
          Focused
        </span>
      </div>

      {/* Main Statement */}
      <div className="max-w-4xl mb-12 md:mb-16">
        <p className="font-sans text-[clamp(1.5rem,3.4vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.03em] text-foreground text-balance">
          I build expressive, performance-driven websites by blending clean design and native development inside Framer to help creative teams and modern brands stand out with intention.
        </p>
      </div>

      {/* Bottom Bar: Back to Top + Socials + Copyright */}
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[12px] md:text-[13px] font-mono text-neutral-400">
        {/* Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
        >
          <span>[ BACK TO TOP ]</span>
          <span>↑</span>
        </button>

        {/* Social Networks */}
        <div className="flex items-center gap-4">
          <span className="text-neutral-500 uppercase tracking-wider text-[11px]">
            Networks:
          </span>
          <div className="flex items-center gap-3">
            {socialLinks.map((s, idx) => (
              <span key={s.label} className="inline-flex items-center gap-3">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {s.label}
                </a>
                {idx < socialLinks.length - 1 && (
                  <span className="text-neutral-600">,</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-neutral-500">
          <span>©2025 Palmer® — All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
