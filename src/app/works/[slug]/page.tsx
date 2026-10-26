import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getNextWork, getWork, works } from "@/data/works";

const mono =
  "font-mono uppercase tracking-[0.02em] text-[12px] leading-[1.2]";

type Props = {
  params: Promise<{ slug: string }>;
};

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    return {};
  }

  return {
    title: `${work.name} — TITARVL`,
    description: work.summary,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    notFound();
  }

  const next = getNextWork(work.slug);

  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col pt-24 md:pt-28">
        <article className="flex flex-1 flex-col">
          <header className="pt-8 md:pt-12">
            <div className={`${mono} flex items-center justify-between gap-4`}>
              <Link
                href="/works"
                className="transition-opacity duration-200 hover:opacity-50"
              >
                [ &larr; ALL WORKS ]
              </Link>
              <span>[{work.index}]</span>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-[50%_1fr] md:items-end md:gap-8">
              <h1 className="font-sans text-[clamp(44px,7vw,120px)] font-medium uppercase leading-[0.85] tracking-[-0.05em]">
                {work.name}
              </h1>
              <p className="max-w-[42ch] font-sans text-[18px] leading-[1.35] md:pb-2 md:text-[20px]">
                {work.summary}
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6 border-y border-border py-6 md:mt-16 md:grid-cols-4 md:gap-8">
              <div className="flex flex-col gap-2">
                <dt className={`${mono} text-muted`}>DISCIPLINES</dt>
                <dd className={`${mono}`}>{work.services.join(" / ")}</dd>
              </div>
              <div className="flex flex-col gap-2">
                <dt className={`${mono} text-muted`}>YEAR</dt>
                <dd className={mono}>{work.year}</dd>
              </div>
              <div className="flex flex-col gap-2">
                <dt className={`${mono} text-muted`}>INDEX</dt>
                <dd className={mono}>{work.index}</dd>
              </div>
              <div className="flex flex-col gap-2">
                <dt className={`${mono} text-muted`}>FORMAT</dt>
                <dd className={mono}>{work.category}</dd>
              </div>
            </dl>
          </header>

          <figure className="mt-4">
            <div className="relative aspect-[16/9] overflow-hidden bg-light-surface">
              <Image
                src={work.hero.src}
                alt={work.hero.alt}
                fill
                sizes="100vw"
                preload
                className="object-cover"
              />
            </div>
            <figcaption
              className={`${mono} mt-3 flex items-baseline justify-between gap-4`}
            >
              <span>
                {work.name} — {work.year}
              </span>
              <span>{work.index}.01</span>
            </figcaption>
          </figure>

          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[50%_1fr]">
              <h2 className={mono}>ABOUT THE PROJECT</h2>
              <div className="max-w-[58ch]">
                <p className="font-sans text-[24px] leading-[1.15] tracking-[-0.02em] md:text-[32px]">
                  {work.intro}
                </p>
                {work.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-6 font-sans text-[16px] leading-[1.5]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section
            aria-label={`${work.name} gallery`}
            className="pb-20 md:pb-28"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {work.gallery.map((image, index) => (
                <figure
                  key={image.src}
                  className={index === 0 ? "md:col-span-2" : undefined}
                >
                  <div
                    className={`relative overflow-hidden bg-light-surface ${
                      index === 0 ? "aspect-[16/9]" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        index === 0
                          ? "100vw"
                          : "(max-width: 768px) 100vw, 50vw"
                      }
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono} mt-3 flex items-baseline justify-between gap-4`}
                  >
                    <span>
                      {work.name} — {work.index}.{String(index + 2).padStart(2, "0")}
                    </span>
                    <span>{work.year}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="border-t border-border py-16 md:py-24">
            <Link href={`/works/${next.slug}`} className="group block">
              <div
                className={`${mono} flex items-center justify-between gap-4 text-muted`}
              >
                <span>NEXT PROJECT</span>
                <span>{next.index}</span>
              </div>
              <div className="mt-6 flex items-end justify-between gap-6">
                <h2 className="font-sans text-[clamp(36px,6vw,96px)] font-medium uppercase leading-[0.9] tracking-[-0.04em] transition-opacity duration-200 group-hover:opacity-50">
                  {next.name}
                </h2>
                <span className={`${mono} shrink-0 pb-2`}>[ &rarr; ]</span>
              </div>
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
