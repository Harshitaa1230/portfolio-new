"use client";

import { motion } from "framer-motion";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

const steps = [
  {
    index: "01",
    title: "STRATEGY",
    text: "Positioning, research and a clear direction before any pixels are placed.",
  },
  {
    index: "02",
    title: "IDENTITY",
    text: "Logotypes, type systems and a visual language that scales with the work.",
  },
  {
    index: "03",
    title: "WEB",
    text: "Design and build of fast, accessible and considered digital experiences.",
  },
  {
    index: "04",
    title: "DELIVERY",
    text: "Guidelines, documentation and a handover that keeps everything consistent.",
  },
];

export default function AboutApproach() {
  return (
    <section id="approach" className="px-[11px] py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="md:grid md:grid-cols-2 md:gap-8"
      >
        <span className={mono}>HOW I WORK</span>
        <div className="mt-6 flex items-start justify-between gap-4 md:mt-0">
          <h2 className="font-sans text-[32px] font-medium uppercase leading-[0.95] tracking-[-0.04em] md:text-[48px] lg:text-[56px]">
            A SELECTED APPROACH
          </h2>
          <span className={mono}>PROCESS</span>
        </div>
      </motion.div>

      <div className="mt-12 md:mt-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: index * 0.05 }}
            className="grid grid-cols-1 gap-3 border-b border-foreground py-6 md:grid-cols-[50%_1fr] md:items-start md:gap-8"
          >
            <div className="flex items-start gap-4 md:gap-6">
              <span className={mono}>[{step.index}]</span>
              <h3 className="font-sans text-[24px] font-medium uppercase leading-[0.95] tracking-[-0.03em] md:text-[32px]">
                {step.title}
              </h3>
            </div>
            <p className="max-w-[52ch] font-sans text-[16px] leading-[1.4]">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
