"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const serviceList = [
  {
    num: "01",
    title: "Art Direction",
    description:
      "We guide every visual decision from start to finish, ensuring clarity, emotion, and impact across every touchpoint.",
    deliverables: ["Visual Strategy", "Concept Development", "Creative Direction", "Asset Production"],
  },
  {
    num: "02",
    title: "Brand Identity",
    description:
      "From strategy to execution, we shape consistent brand systems that speak clearly and feel uniquely ownable.",
    deliverables: ["Logo Design", "Typography Systems", "Brand Guidelines", "Design Tokens"],
  },
  {
    num: "03",
    title: "Motion Direction",
    description:
      "We use motion as a design tool — adding clarity, rhythm, and energy to digital experiences with intention.",
    deliverables: ["UI Micro-interactions", "Page Transitions", "Interactive Prototypes", "Video Editing"],
  },
  {
    num: "04",
    title: "Framer Sites",
    description:
      "Design meets execution with real-time, scalable websites — all crafted natively inside Framer for speed and precision.",
    deliverables: ["Responsive Architecture", "CMS Architecture", "Custom Code Overrides", "SEO Optimization"],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-16 md:py-24 border-t border-white/10 select-none">
      {/* Meta Header */}
      <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Capabilities</span>
          <span className="text-neutral-500 font-sans">サービス内容</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® — 05)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">Digital Execution</span>
        </div>
      </div>

      {/* Headline & Tags */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-10 border-b border-white/10">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-3">
            Services (6)
          </div>
          <h2 className="font-sans text-[clamp(2.4rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase">
            Visual Language
          </h2>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-neutral-400">
          <span className="px-3 py-1 rounded-full border border-white/10 bg-neutral-900">
            Precise
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-neutral-900">
            Structured
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-neutral-900">
            Focused
          </span>
        </div>
      </div>

      {/* Interactive Service Accordions / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-12">
        {serviceList.map((service, idx) => (
          <div
            key={service.num}
            onClick={() => setActiveTab(idx)}
            className={`cursor-pointer rounded-2xl md:rounded-3xl p-6 md:p-8 border transition-all duration-300 flex flex-col justify-between ${
              activeTab === idx
                ? "bg-neutral-900 border-white/30 shadow-2xl"
                : "bg-neutral-950/60 border-white/10 hover:border-white/20"
            }`}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[12px] text-neutral-400 mb-4">
                <span>{service.num}</span>
                <span className="uppercase text-[11px] tracking-wider text-neutral-500">
                  DISCIPLINE
                </span>
              </div>
              <h3 className="font-sans text-[22px] md:text-[26px] font-semibold text-foreground tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-[14px] md:text-[15px] text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {service.deliverables.map((item) => (
                <span
                  key={item}
                  className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-neutral-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
