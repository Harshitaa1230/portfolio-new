import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Gallery© — Palmer® Minimal Portfolio & Agency",
  description:
    "Curated visual gallery of digital form, sharp interactions, and art direction by Akihiko.",
};

const galleryItems = [
  {
    id: 1,
    title: "Editorial Form & Kinetic Typography",
    category: "Art Direction",
    src: "/palmer/wA52DtSvQDx894hqLZv4ezfKfz8.png",
    aspect: "aspect-[16/10]",
    colSpan: "col-span-12 lg:col-span-8",
  },
  {
    id: 2,
    title: "Monochrome Hardware Interface",
    category: "Industrial Web",
    src: "/palmer/IhwR33YbJAKylGnbmoCW4maBHI.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-12 lg:col-span-4",
  },
  {
    id: 3,
    title: "Spatial Atmosphere & Studio Identity",
    category: "Identity Design",
    src: "/palmer/G891sPJdh93gPfGSBboEt88Now.png",
    aspect: "aspect-[21/9]",
    colSpan: "col-span-12",
  },
  {
    id: 4,
    title: "Lucent Lab Brand Narrative",
    category: "Creative Direction",
    src: "/palmer/kSBqNFitJQuBzXuk7tl1FqlAHhs.png",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-12 lg:col-span-4",
  },
  {
    id: 5,
    title: "Atelier Nara Spatial Design Architecture",
    category: "Portfolio Site",
    src: "/palmer/svmMd86RbsKfib7KzvpKAUsHrk.png",
    aspect: "aspect-[16/10]",
    colSpan: "col-span-12 lg:col-span-8",
  },
  {
    id: 6,
    title: "Dynamic Type Geometry",
    category: "Experimental Web",
    src: "/palmer/1NojF9yywMvqzHNbp79Nt0uTs.png",
    aspect: "aspect-square",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-6",
  },
  {
    id: 7,
    title: "Tactile Minimalist Packaging",
    category: "Physical Brand",
    src: "/palmer/3E2J9orCMTWzLWz1Wycx5lBwyAo.png",
    aspect: "aspect-square",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-6",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col pt-24 md:pt-28">
        <section className="pb-16 pt-8 md:pb-24 md:pt-12 select-none">
          {/* Meta Header */}
          <div className="flex items-center justify-between text-[11px] md:text-[12px] font-mono uppercase tracking-[0.05em] text-neutral-400 mb-8 md:mb-12">
            <div className="flex items-center gap-2">
              <span className="text-neutral-500">©</span>
              <span>Visual Showcase</span>
              <span className="text-neutral-500 font-sans">ギャラリー</span>
            </div>
            <div className="flex items-center gap-2">
              <span>(WDX® — GALLERY)</span>
              <span className="hidden sm:inline text-neutral-500">·</span>
              <span className="hidden sm:inline">Selected Artifacts</span>
            </div>
          </div>

          {/* Headline & CTA */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 md:pb-16 border-b border-white/10">
            <div>
              <h1 className="font-sans text-[clamp(2.8rem,8vw,7.5rem)] font-bold tracking-[-0.04em] leading-none text-foreground uppercase">
                Gallery©
              </h1>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-sans font-semibold text-[13px] tracking-tight hover:bg-neutral-200 transition-colors shadow-lg shrink-0"
            >
              Contact Now
            </Link>
          </div>

          {/* Grid of gallery assets */}
          <div className="grid grid-cols-12 gap-6 md:gap-8 mt-10 md:mt-16">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`${item.colSpan} group block relative`}
              >
                <div
                  className={`relative w-full ${item.aspect} rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl group-hover:border-white/30 transition-all duration-500`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(min-width: 1024px) 720px, 100vw"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-wider text-neutral-200">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 text-[14px] font-sans">
                  <span className="font-medium text-foreground group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-500">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrated FAQ & Footer */}
        <Faq />
      </main>
      <Footer />
    </>
  );
}
