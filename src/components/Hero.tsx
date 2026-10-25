import type { CSSProperties } from "react";
import CursorImages from "@/components/CursorImages";
import { getMockupImages } from "@/lib/mockups";

const NAME = "HARSHITA";
const letters = [...NAME];
const DESIGNERS_ROOM_URL = "https://example.com";

export default function Hero() {
  const mockupImages = getMockupImages();

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden px-[11px] pt-24 pb-6 md:pt-28"
    >
      <div className="relative z-30 flex flex-1 flex-col items-center justify-center gap-6">
        <h1
          aria-label={NAME}
          className="text-center font-mileast text-[clamp(56px,15vw,220px)] font-normal uppercase leading-[0.8] tracking-[-0.02em]"
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              aria-hidden
              className="hero-letter-mask"
              style={
                {
                  "--i": index,
                  "--spread": `${(index - (letters.length - 1) / 2) * 0.06}em`,
                } as CSSProperties
              }
            >
              <span className="hero-letter">{letter}</span>
            </span>
          ))}
        </h1>

        <div aria-hidden className="hero-rule h-px w-[min(70vw,640px)]" />
      </div>

      <CursorImages images={mockupImages} />

      <div className="absolute right-6 bottom-6 z-30 flex flex-col items-end gap-2 text-right md:right-10 md:bottom-8">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.02em] text-muted">
          BUILDING
        </span>
        <a
          href={DESIGNERS_ROOM_URL}
          target="_blank"
          rel="noreferrer"
          className="font-sans text-[16px] leading-none underline decoration-border underline-offset-[6px] transition-opacity duration-200 hover:opacity-50"
        >
          Designer&apos;s Room
        </a>
      </div>
    </section>
  );
}
