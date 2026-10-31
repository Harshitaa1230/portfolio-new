"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const disciplines = ["Product Designer", "UI/UX Designer"];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Work", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [disciplineIndex, setDisciplineIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setDisciplineIndex((current) => (current + 1) % disciplines.length);
    }, 2500);

    return () => clearInterval(id);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/85 backdrop-blur-md">
      <div className="w-full px-4 sm:px-[4vw] lg:px-[5vw] xl:px-[6vw]">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-start justify-between py-4 md:py-5 text-[13px] md:text-[14px] leading-snug"
        >
          {/* Brand Wordmark (Left) */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="font-sans font-semibold tracking-[-0.01em] text-foreground transition-opacity duration-200 hover:opacity-70 text-[15px] md:text-[16px] inline-flex items-center gap-0.5"
            >
              <span>Harshita</span>
              <span className="text-[10px] md:text-[11px] font-normal align-top leading-none -mt-1">
                ®
              </span>
            </Link>
          </div>

          {/* Quick Links (Center) */}
          <div className="hidden md:flex flex-col items-start gap-1">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.05em] text-neutral-400">
              Quick Links
            </span>
            <div className="flex items-center gap-1.5 font-sans text-neutral-300">
              {quickLinks.map((item, index) => (
                <span key={item.label} className="inline-flex items-center gap-1.5">
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-white underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </Link>
                  {index < quickLinks.length - 1 && (
                    <span className="text-neutral-500 font-normal">,</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Location & Discipline (Right) */}
          <div className="hidden md:flex flex-col items-end gap-1 text-right">
            <span className="font-sans text-[12px] md:text-[13px] text-foreground font-medium">
              Based in India <span className="font-normal text-neutral-300"></span>
            </span>
            <span className="inline-flex h-[1.35em] items-center justify-end overflow-hidden font-sans text-[12px] md:text-[13px] text-neutral-400 font-normal">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={disciplines[disciplineIndex]}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="whitespace-nowrap"
                >
                  {disciplines[disciplineIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="font-mono text-[12px] font-semibold uppercase tracking-wider text-neutral-300 transition-opacity duration-200 hover:opacity-60 md:hidden"
            aria-label="Open navigation menu"
          >
            [ MENU ]
          </button>
        </motion.div>
      </div>

      {/* Hairline Divider Rule */}
      <div aria-hidden className="w-full px-4 sm:px-[4vw] lg:px-[5vw] xl:px-[6vw]">
        <div className="h-px w-full origin-bottom scale-y-50 bg-white/15" />
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-full px-4 sm:px-[4vw] lg:px-[5vw] xl:px-[6vw] fixed inset-0 z-50 flex flex-col bg-background/95 py-5 backdrop-blur-xl md:hidden"
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-sans font-semibold tracking-[-0.01em] text-foreground text-[16px] inline-flex items-center gap-0.5"
            >
              <span>Harshita Upadhyay</span>
              <span className="text-[10px] font-normal align-top leading-none -mt-1">®</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="font-mono text-[12px] font-semibold uppercase tracking-wider text-neutral-300"
              aria-label="Close navigation menu"
            >
              [ CLOSE ]
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-5">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.05em] text-neutral-400">
              Quick Links
            </span>
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-sans text-[22px] font-medium tracking-tight text-foreground transition-opacity duration-200 hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-6 flex flex-col gap-1 text-[13px]">
            <span className="font-sans font-medium text-foreground">
              Based in India <span className="text-neutral-400">東京</span>
            </span>
            <span className="inline-flex h-[1.35em] items-center overflow-hidden font-sans text-neutral-400">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={disciplines[disciplineIndex]}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="whitespace-nowrap"
                >
                  {disciplines[disciplineIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </motion.div>
      )}
    </header>
  );
}
