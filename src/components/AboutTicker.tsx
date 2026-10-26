"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const pills = [
  "Product Designer",
  "Web Designer",
  "Freelancer",
  "UI/UX Designer",
  "Design Engineer",
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://www.behance.net/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path d="M22.163 8.512h-5.016v1.512h5.016V8.512zM8.101 10.395c.75-.402 1.221-1.176 1.221-2.154 0-2.078-1.56-2.837-3.432-2.837H0v9.192h6.09c1.956 0 3.738-.93 3.738-3.105 0-1.281-.618-2.301-1.727-2.696zM2.67 7.755h2.06c.762 0 1.44.213 1.44 1.104 0 .84-.525 1.113-1.29 1.113H2.67V7.755zm2.28 4.902H2.67v-2.13h2.31c.9 0 1.53.318 1.53 1.13 0 .87-.66 1.1-1.56 1.1zM24 13.335c0-2.61-1.515-4.782-4.245-4.782-2.67 0-4.47 2.01-4.47 4.62 0 2.715 1.71 4.59 4.605 4.59 2.145 0 3.555-.975 4.005-3h-2.07c-.225.75-.84 1.185-1.815 1.185-1.275 0-1.995-.825-1.995-2.13h5.985v-.483zm-6.03-1.005c.06-1.095.81-1.785 1.83-1.785 1.17 0 1.77.705 1.83 1.785h-3.66z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.net/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.164.108.05.214.102.318.156 1.479.798 2.566 2.013 3.059 3.419.721 2.055.04 4.94-2.203 7.49-1.776 1.757-3.96 2.537-7.086 2.561zm1.06-11.424c-.167 0-.336.004-.506.011-1.006.058-1.63.52-1.91.93-.207.303-.268.6-.24.889.062.655.51 1.112 1.11 1.274.346.093.714.126 1.087.1.97-.063 1.71-.513 2.169-1.316.32-.558.523-1.276.607-2.144a10.72 10.72 0 0 0-1.317-.144z" />
      </svg>
    ),
  },
  {
    label: "Figma",
    href: "https://www.figma.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
      </svg>
    ),
  },
];

export default function AboutTicker() {
  return (
    <section className="py-16 md:py-24 border-t border-white/10 select-none">
      {/* Meta Header Row */}

      {/* Marquee Pill Bar */}
      <div className="w-full overflow-hidden border-y border-white/10 py-3 mb-12 md:mb-16 bg-neutral-950/40">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-8 text-[13px] md:text-[14px] font-sans font-medium uppercase tracking-wider text-neutral-300"
        >
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-8">
              {pills.map((pill) => (
                <span key={pill} className="flex items-center gap-8">
                  <span>{pill}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Grid: Portrait Image + Monumental Statement */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left: Framed Portrait */}
        <div className="lg:col-span-5 w-full">
          <div className="relative aspect-[4/5] w-full max-w-[460px] mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 group shadow-2xl">
            <Image
              src="/profile/harshita.jpeg"
              alt="Harshita Upadhyay | harshi.designs"
              fill
              className="object-cover object-center grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-[transform,filter] duration-700 ease-out"
              sizes="(min-width: 1024px) 460px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-neutral-300">
              <span>Jabalpur, India</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/40 text-neutral-300 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-black/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Statement & CTA */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
          <h2 className="font-sans text-[clamp(2.1rem,4.4vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.035em] text-foreground text-balance">
            Built reusable Figma components used by 200+ designers.
          </h2>

          <div className="mt-8 md:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
            <p className="text-[14px] md:text-[15px] font-sans text-neutral-400 max-w-md leading-relaxed">
              Right now I am bringing <span className="text-[#ff6a00]">Designer&apos;s Room</span> to life, working side by side with a developer to design and build it from the ground up.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-sans font-semibold text-[13px] tracking-tight hover:bg-neutral-200 transition-colors shadow-lg shrink-0"
            >
              Designer's Room
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
