"use client";

import { motion } from "framer-motion";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;
const linkClass = "transition-opacity duration-200 hover:opacity-50";

export default function Footer() {
  return (
    <footer className="overflow-hidden px-[11px] pb-8 pt-20 md:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="grid grid-cols-1 gap-6 md:grid-cols-[50%_24%_1fr]"
      >
        <span className={`${mono} md:col-start-2`}>CONTACT</span>
        <p className={`${mono} md:col-start-3`}>
          FOR ALL ENQUIRIES PLEASE CONTACT{" "}
          <a href="mailto:info@titarvl.com" className={linkClass}>
            INFO@TITARVL.COM
          </a>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="mt-12 md:mt-16"
      >
        <svg
          viewBox="0 0 1000 360"
          className="block w-full"
          role="img"
          aria-label="TITARVL"
        >
          <text
            x="0"
            y="315"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fontSize="360"
            className="font-sans font-medium fill-current"
          >
            HARSHITA
          </text>
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="relative z-10 -mt-[6vw] flex flex-col gap-2 md:grid md:grid-cols-[50%_24%_1fr]"
      >
        <span className={mono}>TITARVL</span>
        <span className={`${mono} md:col-start-2`}>
          © 2026 / ALL RIGHTS RESERVED
        </span>
        <div className="flex justify-between gap-4 md:col-start-3">
          <span className={mono}>
            <a href="/cookies-policy" className={linkClass}>
              COOKIES POLICY
            </a>{" "}
            /{" "}
            <a href="/privacy-policy" className={linkClass}>
              PRIVACY POLICY
            </a>
          </span>
          <span className={mono}>
            <a href="#" className={linkClass}>
              INSTAGRAM
            </a>{" "}
            /{" "}
            <a href="#" className={linkClass}>
              BEHANCE
            </a>
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
