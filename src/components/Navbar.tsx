"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const mono = "font-mono font-semibold uppercase tracking-[0.02em] leading-[1.2]";
const linkClass = `${mono} text-[15px] transition-opacity duration-200 hover:opacity-50`;

const primaryLinks = [
  { label: "HOME", href: "/" },
  { label: "WORKS [10]", href: "/works" },
];

const secondaryLinks = [
  { label: "CONTACT", href: "/contact" },
];

const mobileLinks = [
  { label: "HOME", href: "/" },
  { label: "WORKS [34]", href: "/works" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
    const [time, setTime] = useState("--:--:--");
  const [offset, setOffset] = useState("IST");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Kolkata",
          hour12: false,
        }),
      );
      setOffset("IST");
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.1, 1] }}
        className="flex items-start justify-between gap-6 bg-background/70 px-24 py-4 backdrop-blur-md md:px-40 md:py-6"
      >
        <div className="flex items-start gap-8 md:gap-16">
          <nav className="hidden gap-16 md:flex lg:gap-24">
            <div className="flex flex-col gap-1">
              {primaryLinks.map((item) => (
                <Link key={item.label} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              {secondaryLinks.map((item) => (
                <Link key={item.label} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="hidden flex-col items-end gap-1 md:flex">
          <span
            role="timer"
            aria-live="off"
            className={`${mono} text-[15px] tabular-nums`}
          >
            {time} {offset}
          </span>
          <span className={`${mono} text-[12px] text-muted`}>BASED IN INDIA</span>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`${linkClass} md:hidden`}
        >
          [ MENU ]
        </button>
      </motion.div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-background/80 px-24 py-4 backdrop-blur-md md:hidden"
        >
          <div className="flex items-start justify-end">
            <button type="button" onClick={() => setOpen(false)} className={linkClass}>
              [ CLOSE ]
            </button>
          </div>

          <nav className="mt-16 flex flex-col gap-4">
            {mobileLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono font-semibold text-[16px] uppercase tracking-[0.02em] leading-[1.2] transition-opacity duration-200 hover:opacity-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-1">
            <span role="timer" aria-live="off" className={`${mono} text-[15px] tabular-nums`}>
              {time} {offset}
            </span>
            <span className={`${mono} text-[12px] text-muted`}>BRATISLAVA, SLOVAKIA</span>
          </div>
        </motion.div>
      )}
    </header>
  );
}
