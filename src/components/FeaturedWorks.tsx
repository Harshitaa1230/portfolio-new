"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: "sonder-goods",
    number: "(01)",
    title: "Sonder Goods",
    category: "Branding",
    image: "/palmer/wA52DtSvQDx894hqLZv4ezfKfz8.png",
    aspect: "aspect-[16/10]",
    span: "lg:col-span-7",
  },
  {
    id: "halo-wear",
    number: "(02)",
    title: "Halo Wear",
    category: "Web Design",
    image: "/palmer/IhwR33YbJAKylGnbmoCW4maBHI.png",
    aspect: "aspect-[4/3]",
    span: "lg:col-span-5",
  },
  {
    id: "wayfarer",
    number: "(03)",
    title: "Wayfarer",
    category: "Web Design",
    image: "/mockups/Wayfarer%20Website%20on%20a%20Cozy%20Blue%20Sofa.png",
    aspect: "aspect-[21/9]",
    span: "lg:col-span-12",
  },
  {
    id: "arc-bloom",
    number: "(04)",
    title: "Arc & Bloom",
    category: "Identity Design",
    image: "/palmer/kSBqNFitJQuBzXuk7tl1FqlAHhs.png",
    aspect: "aspect-[4/3]",
    span: "lg:col-span-5",
  },
  {
    id: "atelier-nara",
    number: "(05)",
    title: "Atelier Nara",
    category: "Portfolio Site",
    image: "/palmer/svmMd86RbsKfib7KzvpKAUsHrk.png",
    aspect: "aspect-[16/10]",
    span: "lg:col-span-7",
  },
];

export default function FeaturedWorks() {
  return (
    <section id="works" className="py-16 md:py-24 border-t border-white/10 select-none">
      {/* Meta Header */}
      {/* <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
        <div className="flex items-center gap-2">
          <span className="text-neutral-500">©</span>
          <span>Featured Projects</span>
          <span className="text-neutral-500 font-sans">実績</span>
        </div>
        <div className="flex items-center gap-2">
          <span>(WDX® — 04)</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline">Creative Development</span>
        </div>
      </div> */}

      {/* Header Headline + Intro Statement */}
      <div className="pb-6 md:pb-8 border-b border-white/10 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center">
              <h2 className="whitespace-nowrap font-sans text-[clamp(2.5rem,10vw,8rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase pr-16 md:pr-28">
                Featured Works©
              </h2>
              <h2 className="whitespace-nowrap font-sans text-[clamp(2.5rem,10vw,8rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase pr-16 md:pr-28">
                Featured Works©
              </h2>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-6 md:mt-8">
        {projects
          .filter((item) => item.number !== "(03)")
          .map((item) => (
            <Link
              key={item.id}
              href="/works"
              className={`${item.span} group block relative`}
            >
              {/* Project Card Container */}
              <div
                className={`relative w-full ${item.aspect} rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-xl group-hover:border-white/30 transition-all duration-500`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(min-width: 1024px) 700px, 100vw"
                />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-wider text-neutral-200">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="flex items-center justify-between pt-4 pb-2 text-[14px] md:text-[16px] font-sans">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[12px] text-neutral-400 font-medium">
                    {item.number}
                  </span>
                  <span className="font-semibold text-foreground group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                </div>
                <span className="font-mono text-[12px] text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  {item.category}
                </span>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
