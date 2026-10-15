"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const mono =
  "font-mono font-semibold uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const linkClass = `${mono} transition-opacity duration-200 hover:opacity-50`;

const primaryLinks = [
  { label: "HOME", href: "/" },
  { label: "WORKS [10]", href: "/#latest" },
];

const secondaryLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const mobileLinks = [
  { label: "HOME", href: "/" },
  { label: "WORKS [34]", href: "/#latest" },
  { label: "ABOUT", href: "/about" },
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
        className="grid grid-cols-2 items-start bg-background/70 px-[11px] py-4 backdrop-blur-md md:grid-cols-[1fr_auto_1fr] md:py-6"
      >
        <Link
          href="/"
          className="justify-self-start font-sans text-[24px] font-semibold uppercase leading-none tracking-[-0.04em] md:text-[28px]"
        >
          HARSHITA
        </Link>

        <nav className="hidden justify-self-center gap-16 md:flex lg:gap-24">
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

        <div className="hidden flex-col items-end gap-1 justify-self-end md:flex">
          <span
            role="timer"
            aria-live="off"
            className={`${mono} tabular-nums`}
          >
            {time} {offset}
          </span>
          <span className={`${mono} text-muted`}>BASED IN INDIA</span>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`${linkClass} justify-self-end md:hidden`}
        >
          [ MENU ]
        </button>
      </motion.div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-background/80 px-[11px] py-4 backdrop-blur-md md:hidden"
        >
          <div className="flex items-start justify-between">
            <span className="font-sans text-[24px] font-semibold uppercase leading-none tracking-[-0.04em]">
              HARSHITA
            </span>
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
            <span role="timer" aria-live="off" className={`${mono} tabular-nums`}>
              {time} {offset}
            </span>
            <span className={`${mono} text-muted`}>BRATISLAVA, SLOVAKIA</span>
          </div>
        </motion.div>
      )}
    </header>
  );
}
