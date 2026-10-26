"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

type ServiceImage = { wide?: boolean; tone: string; text: string };

type Service = {
  index: string;
  title: string;
  sublabel: string;
  description: string;
  images: ServiceImage[];
};

const services: Service[] = [
  {
    index: "01",
    title: "WEB DESIGN & DEVELOPMENT",
    sublabel: "SITE STRUCTURE",
    description:
      "Design and build of fast, accessible sites — from information architecture and typography systems through to production front-end.",
    images: [
      { tone: "bg-tone-2", text: "text-muted" },
      { wide: true, tone: "bg-foreground", text: "text-on-light" },
      { tone: "bg-tone-3", text: "text-muted" },
      { tone: "bg-tone-8", text: "text-on-light" },
    ],
  },
  {
    index: "02",
    title: "GRAPHIC DESIGN",
    sublabel: "VISUAL ASSETS",
    description:
      "Editorial layouts, campaign artwork and print collateral shaped by a strict, flexible typographic system.",
    images: [
      { tone: "bg-tone-1", text: "text-muted" },
      { wide: true, tone: "bg-tone-3", text: "text-muted" },
      { tone: "bg-tone-9", text: "text-on-light" },
      { tone: "bg-tone-2", text: "text-muted" },
    ],
  },
  {
    index: "03",
    title: "BRAND IDENTITY",
    sublabel: "VISUAL SYSTEM",
    description:
      "Logotypes, marks and a considered visual language that scales across every touchpoint.",
    images: [
      { tone: "bg-tone-8", text: "text-on-light" },
      { wide: true, tone: "bg-tone-2", text: "text-muted" },
      { tone: "bg-foreground", text: "text-on-light" },
      { tone: "bg-tone-1", text: "text-muted" },
    ],
  },
  {
    index: "04",
    title: "BRAND GUIDELINES",
    sublabel: "IDENTITY SYSTEM",
    description:
      "Clear rules for type, colour, spacing and tone so the identity stays consistent as it grows.",
    images: [
      { tone: "bg-tone-3", text: "text-muted" },
      { wide: true, tone: "bg-tone-9", text: "text-on-light" },
      { tone: "bg-tone-2", text: "text-muted" },
      { tone: "bg-tone-8", text: "text-on-light" },
    ],
  },
];

function ServiceRow({ service }: { service: Service }) {
  const [mode, setMode] = useState<"images" | "description">("images");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease }}
      className="grid grid-cols-1 gap-6 border-b border-foreground py-6 md:grid-cols-2 md:gap-0 md:py-0"
    >
      <div className="flex flex-col justify-between gap-8 md:min-h-[224px] md:py-8 md:pr-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-6">
          <span className={mono}>[{service.index}]</span>
          <h3 className="font-sans text-[28px] font-medium uppercase leading-[0.95] tracking-[-0.03em] md:text-[40px]">
            {service.title}
          </h3>
        </div>

        <div className="flex items-end justify-between gap-4">
          <span className={`${mono} text-muted`}>{service.sublabel}</span>
          <div className={`${mono} flex items-center gap-3`}>
            <button
              type="button"
              aria-pressed={mode === "images"}
              onClick={() => setMode("images")}
              className={`transition-opacity duration-200 ${
                mode === "images" ? "text-foreground" : "text-muted hover:opacity-70"
              }`}
            >
              IMAGES
            </button>
            <span className="text-muted">/</span>
            <button
              type="button"
              aria-pressed={mode === "description"}
              onClick={() => setMode("description")}
              className={`transition-opacity duration-200 ${
                mode === "description"
                  ? "text-foreground"
                  : "text-muted hover:opacity-70"
              }`}
            >
              DESCRIPTION
            </button>
          </div>
        </div>
      </div>

      <div className="-mr-[11px] overflow-x-auto md:overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {mode === "images" ? (
          <div className="flex w-max items-center gap-2">
            {service.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className={`flex h-[200px] shrink-0 items-center justify-center ${image.wide ? "w-[320px]" : "w-40"} ${image.tone}`}
              >
                <span className={`${mono} ${image.text} opacity-60`}>
                  {service.index}.{imageIndex + 1}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="max-w-[42ch] font-sans text-[16px] leading-[1.4] md:py-8">
            {service.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="px-[11px] py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="flex items-end justify-between gap-4"
      >
        <h2 className="font-sans text-[48px] font-medium uppercase leading-[0.95] tracking-[-0.04em] md:text-[72px]">
          SERVICE(S)
        </h2>
        <a
          href="/about#services"
          className={`${mono} shrink-0 transition-opacity duration-200 hover:opacity-50`}
        >
          [ VIEW ALL ]
        </a>
      </motion.div>

      <div className="mt-12 md:mt-16">
        {services.map((service) => (
          <ServiceRow key={service.index} service={service} />
        ))}
      </div>
    </section>
  );
}
