"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";

const categories = [
  "All",
  "Branding",
  "Web Design",
  "Creative Direction",
  "Identity Design",
  "Portfolio Site",
];

const allProjects = [
  {
    id: "sonder-goods",
    number: "(01)",
    title: "Sonder Goods",
    category: "Branding",
    year: "2024",
    image: "/palmer/wA52DtSvQDx894hqLZv4ezfKfz8.png",
    aspect: "aspect-[16/10]",
    desc: "A timeless brand identity and packaging system for an artisanal everyday goods brand.",
  },
  {
    id: "halo-wear",
    number: "(02)",
    title: "Halo Wear",
    category: "Web Design",
    year: "2024",
    image: "/palmer/IhwR33YbJAKylGnbmoCW4maBHI.png",
    aspect: "aspect-[16/10]",
    desc: "High-performance digital flagship store with seamless transitions and 3D micro-interactions.",
  },
  {
    id: "lucent-lab",
    number: "(03)",
    title: "Lucent Lab",
    category: "Creative Direction",
    year: "2023",
    image: "/palmer/G891sPJdh93gPfGSBboEt88Now.png",
    aspect: "aspect-[16/10]",
    desc: "Spatial atmosphere, kinetic typography and visual narrative for an audio-visual laboratory.",
  },
  {
    id: "arc-bloom",
    number: "(04)",
    title: "Arc & Bloom",
    category: "Identity Design",
    year: "2023",
    image: "/palmer/kSBqNFitJQuBzXuk7tl1FqlAHhs.png",
    aspect: "aspect-[16/10]",
    desc: "Generative organic identity system rooted in architectural proportion and natural form.",
  },
  {
    id: "atelier-nara",
    number: "(05)",
    title: "Atelier Nara",
    category: "Portfolio Site",
    year: "2023",
    image: "/palmer/svmMd86RbsKfib7KzvpKAUsHrk.png",
    aspect: "aspect-[16/10]",
    desc: "Minimalist portfolio experience for a Tokyo-based interior architecture practice.",
  },
];

export default function WorksPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col pt-24 md:pt-28">
        <section className="pb-16 pt-8 md:pb-24 md:pt-12 select-none">
          {/* Meta Header */}
          <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
            <div className="flex items-center gap-2">
              <span className="text-neutral-500">©</span>
              <span>All Works</span>
              <span className="text-neutral-500 font-sans">アーカイブ</span>
            </div>
            <div className="flex items-center gap-2">
              <span>(WDX® — ARCHIVE)</span>
              <span className="hidden sm:inline text-neutral-500">·</span>
              <span className="hidden sm:inline">[{allProjects.length} Projects]</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-12 md:pb-16 border-b border-white/10">
            <div>
              <h1 className="font-sans text-[clamp(2.8rem,8vw,7.5rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase">
                All Works
              </h1>
            </div>

            <p className="max-w-md font-sans text-[14px] md:text-[15px] text-neutral-400 leading-relaxed">
              Curated selection of digital products, brand identities, and editorial web experiences crafted with intention and structural discipline.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto py-6 border-b border-white/10 text-[12px] font-mono uppercase tracking-wider text-neutral-400 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full transition-all shrink-0 cursor-pointer ${
                  filter === cat
                    ? "bg-white text-black font-semibold"
                    : "border border-white/10 bg-neutral-900/60 hover:border-white/20 text-neutral-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12">
            {filtered.map((item) => (
              <div key={item.id} className="group flex flex-col justify-between">
                <div
                  className={`relative w-full ${item.aspect} rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl group-hover:border-white/30 transition-all duration-500`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-wider text-neutral-200">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[16px] md:text-[18px] font-sans font-semibold">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[12px] text-neutral-500">
                        {item.number}
                      </span>
                      <span className="text-foreground group-hover:text-white transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <span className="font-mono text-[12px] text-neutral-400 font-normal">
                      {item.year}
                    </span>
                  </div>

                  <p className="font-sans text-[13px] md:text-[14px] text-neutral-400 line-clamp-2 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrated FAQ */}
        <Faq />
      </main>
      <Footer />
    </>
  );
}
