"use client";

import { motion } from "framer-motion";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";
const ease = [0.2, 0.7, 0.1, 1] as const;

const projects = [
  { index: "001", name: "CHRONICAE", slug: "chronicae", height: "h-[360px]", tone: "bg-neutral-200", text: "text-muted" },
  { index: "002", name: "ARCANE STUDIO", slug: "arcane-studio", height: "h-[460px]", tone: "bg-neutral-900", text: "text-inverse-foreground" },
  { index: "003", name: "SOLARA", slug: "solara", height: "h-[300px]", tone: "bg-neutral-300", text: "text-muted" },
  { index: "004", name: "EDIFIER® MAGAZINE", slug: "edifier-magazine", height: "h-[420px]", tone: "bg-foreground", text: "text-inverse-foreground" },
  { index: "005", name: "ROWAN KEATS", slug: "rowan-keats", height: "h-[260px]", tone: "bg-neutral-100", text: "text-muted" },
  { index: "006", name: "BIG BABY TAPE® MAGAZINE", slug: "big-baby-tape-magazine", height: "h-[440px]", tone: "bg-neutral-800", text: "text-inverse-foreground" },
  { index: "007", name: "CARTES D'ATELIER", slug: "cartes-datelier", height: "h-[320px]", tone: "bg-neutral-300", text: "text-muted" },
  { index: "008", name: "PALMIRA", slug: "palmira", height: "h-[400px]", tone: "bg-neutral-200", text: "text-muted" },
  { index: "009", name: "SCENE PRO", slug: "scene-pro", height: "h-[280px]", tone: "bg-neutral-100", text: "text-muted" },
  { index: "010", name: "EXALA (A)", slug: "exala", height: "h-[360px]", tone: "bg-neutral-700", text: "text-inverse-foreground" },
];

export default function Latest() {
  return (
    <section id="latest" className="px-[11px] py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="flex items-end justify-between gap-4"
      >
        <h2 className="font-sans text-[48px] font-medium uppercase leading-[0.95] tracking-[-0.04em] md:text-[72px]">
          LATEST
          <sup className={`${mono} ml-1 text-[11px]`}>[10]</sup>
        </h2>
        <a
          href="/works"
          className={`${mono} shrink-0 transition-opacity duration-200 hover:opacity-50`}
        >
          [ VIEW ALL ]
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
        className="-mx-[11px] mt-12 cursor-grab overflow-x-auto px-[11px] active:cursor-grabbing md:mt-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <ul className="flex w-max items-end gap-2">
          {projects.map((project) => (
            <li key={project.index} className="w-60 shrink-0 md:w-[290px]">
              <a href={`/works/${project.slug}`} className="group block">
                <div
                  className={`flex w-full items-center justify-center overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-1 ${project.height} ${project.tone}`}
                >
                  <span className={`${mono} ${project.text}`}>{project.name}</span>
                </div>
                <div className={`${mono} mt-3 flex items-center justify-between`}>
                  <span>{project.index}</span>
                  <span>{project.name}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
