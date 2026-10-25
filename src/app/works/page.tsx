import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorksGrid from "@/components/WorksGrid";
import { works } from "@/data/works";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";

export const metadata: Metadata = {
  title: "Works — TITARVL",
  description:
    "Selected projects across brand identity, editorial design and the web by TITARVL.",
};

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col pt-24 md:pt-28">
        <section className="px-[11px] pb-16 pt-8 md:pb-24 md:pt-12">
          <div className={`${mono} flex items-center justify-between gap-4`}>
            <span>SELECTED WORK</span>
            <span>[{works.length}]</span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-[50%_1fr] md:items-end md:gap-8">
            <h1 className="font-sans text-[64px] font-medium uppercase leading-[0.85] tracking-[-0.05em] md:text-[120px] lg:text-[160px]">
              WORKS
            </h1>
            <p className="max-w-[44ch] font-sans text-[16px] leading-[1.4] md:pb-2">
              Ten projects spanning identity, editorial design and the web.
              Each one begins with a question about structure and ends with a
              system that can keep working after launch.
            </p>
          </div>
        </section>

        <section aria-labelledby="works-index" className="px-[11px] pb-24 md:pb-32">
          <h2 id="works-index" className="sr-only">
            Works index
          </h2>

          <WorksGrid works={works} />
        </section>

        <section className="border-t border-border px-[11px] py-16 md:py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-[34ch] font-sans text-[28px] font-medium uppercase leading-[0.95] tracking-[-0.03em] md:text-[40px]">
              HAVE A PROJECT IN MIND?
            </p>
            <Link
              href="/contact"
              className={`${mono} transition-opacity duration-200 hover:opacity-50`}
            >
              [ START A PROJECT ]
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
