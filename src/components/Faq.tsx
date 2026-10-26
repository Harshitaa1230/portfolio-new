"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

type FaqItem = {
  index: string;
  question: string;
  tag: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    index: "01",
    question: "What services do you offer?",
    tag: "SERVICES",
    answer:
      "Web design and development, graphic design, brand identity and full brand guidelines — delivered individually or as a complete system.",
  },
  {
    index: "02",
    question: "What is your typical turnaround time?",
    tag: "TIMELINE",
    answer:
      "Most projects run four to eight weeks depending on scope; a clear schedule is agreed before any work begins.",
  },
  {
    index: "03",
    question: "Do you only work in Framer?",
    tag: "TOOLS",
    answer:
      "No. Framer is one option — the work is also designed and built with code and other tools whenever the project calls for it.",
  },
  {
    index: "04",
    question: "Can you handle both design and development?",
    tag: "WORKFLOW",
    answer:
      "Yes — concept, typography, design and production front-end are handled end to end.",
  },
  {
    index: "05",
    question: "Do you offer brand strategy as well?",
    tag: "SCOPE",
    answer:
      "Yes, positioning and strategy can sit alongside identity and web work when the full picture is needed.",
  },
  {
    index: "06",
    question: "What does your process look like?",
    tag: "PROCESS",
    answer:
      "Discovery, direction, design, build and launch — with clear checkpoints and one open line of communication throughout.",
  },
];

function FaqRow({
  item,
  open,
  onToggle,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease }}
      className="border-b border-foreground"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`faq-panel-${item.index}`}
        onClick={onToggle}
        className="grid w-full grid-cols-[auto_1fr] items-center gap-4 py-5 text-left md:min-h-[60px] md:grid-cols-[50%_1fr] md:py-0"
      >
        <span className={mono}>[{item.index}]</span>
        <div className="flex items-center justify-between gap-4">
          <span className={`${mono} font-medium`}>{item.question}</span>
          <span className="flex items-center gap-4">
            <span className={`${mono} hidden text-muted md:inline`}>
              {item.tag}
            </span>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3, ease }}
              className={`${mono} leading-none`}
              aria-hidden
            >
              ▼
            </motion.span>
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${item.index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <div className="pb-6 md:grid md:grid-cols-[50%_1fr]">
              <p className="max-w-[52ch] font-sans text-[16px] leading-[1.4] md:col-start-2">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="md:grid md:grid-cols-2 md:gap-8"
      >
        <span className={mono}>FREQUENTLY ASKED QUESTIONS</span>
        <div className="mt-6 flex flex-col gap-4 md:mt-0 md:flex-row md:items-start md:justify-between">
          <h2 className="font-sans text-[32px] font-medium uppercase leading-[0.95] tracking-[-0.04em] md:text-[48px] lg:text-[56px]">
            CLARITY
            <br />
            BUILDS THE IMAGE
          </h2>
          <span className={mono}>CLARITY</span>
        </div>
      </motion.div>

      <div className="mt-12 md:mt-16">
        {faqs.map((item, index) => (
          <FaqRow
            key={item.index}
            item={item}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
