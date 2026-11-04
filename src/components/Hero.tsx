import { motion } from "framer-motion";

const products = [
  { id: "chisel-ui", label: "Chisel UI" },
  { id: "cybersec-toolkit", label: "CyberSec Toolkit" },
  { id: "designers-room", label: "Designers Room" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction Hero"
      className="relative flex min-h-[calc(100svh-var(--header-height,70px))] flex-col justify-between pt-32 md:pt-44 pb-3 md:pb-5 select-none"
    >
      {/* Middle Hero Section: Headline + Video Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start flex-1">
        {/* Left Column: Heading */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between h-full pt-0 pb-2">
          <div>
            <h1 className="font-sans text-[clamp(2.1rem,3.8vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-foreground text-balance">
              Curious By Design.<br />
              Precise By Engineering.<br />
            </h1>
            <p className="mt-5 max-w-[76ch] font-sans text-[15px] md:text-[16px] leading-relaxed text-neutral-400 text-balance">
             It usually starts with an idea, a problem or just curiosity. We turn those beginnings into digital products through thoughtful design, web development and a little engineering obsession.
            </p>
          </div>

          {/* Infinite Products Marquee */}
          <div className="mt-6 lg:mt-10 pt-4 w-full">
            <div
              aria-label="Anvik Labs products"
              className="relative -ml-4 sm:-ml-[4vw] lg:-ml-[5vw] xl:-ml-[6vw] w-[calc(100%_+_1rem)] sm:w-[calc(100%_+_4vw)] lg:w-[calc(100%_+_5vw)] xl:w-[calc(100%_+_6vw)] h-12 md:h-14 bg-neutral-950/40 border-y border-white/10 flex items-center overflow-hidden"
            >
              <div
                className="flex w-full items-center"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                }}
              >
                <motion.div
                  className="flex w-max items-center whitespace-nowrap will-change-transform"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  {[0, 1].map((half) => (
                    <div
                      key={half}
                      aria-hidden={half === 1}
                      className="flex items-center"
                    >
                      {Array.from({ length: 4 }).map((_, rep) =>
                        products.map((product) => (
                          <span
                            key={`${half}-${rep}-${product.id}`}
                            className="flex items-center font-sans text-[16px] md:text-[19px] font-semibold uppercase tracking-[0.02em] text-foreground"
                          >
                            <span className="px-4 md:px-6">{product.label}</span>
                            <span className="text-neutral-500">.</span>
                          </span>
                        )),
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dark Rounded Video Card */}
        <div className="lg:col-span-5 xl:col-span-5 w-full flex justify-end -mr-4 sm:-mr-[4vw] lg:-mr-[5vw] xl:-mr-[6vw] lg:-mt-2">
          <div className="relative w-full aspect-[16/9] rounded-l-2xl md:rounded-l-3xl rounded-r-none bg-tone-1 border border-white/10 border-r-0 overflow-hidden shadow-2xl flex flex-col items-center justify-center group">
            <div className="relative w-full h-full bg-black flex items-center justify-center">
              <video
                src="/mockups/MacBook%20Air%20-%2061.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />

              {/* Video Overlay Badge */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] md:text-[11px] font-mono uppercase tracking-wider text-neutral-200">
                  Showreel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div aria-hidden className="w-full h-px bg-white/15 my-4 md:my-5" />

      {/* Monumental Typography */}
      <div className="relative w-full overflow-visible select-none py-2 md:py-3">
        <div className="relative z-10 flex items-center justify-center w-full font-sans font-bold leading-none tracking-[-0.045em] text-foreground">
          <span className="inline-block whitespace-nowrap text-[clamp(2rem,12vw,12rem)]">
            Anvik Labs
          </span>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div aria-hidden className="w-full h-px bg-white/15 my-2 md:my-3" />

      {/* Bottom Metadata Status Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] md:text-[12px] font-mono tracking-[0.04em] text-neutral-400 pt-1 pb-1">
        {/* Left: Interface Version */}
        <div className="flex items-center gap-2">
          <span>© 2026 / anviklabs</span>
        </div>

        {/* Center: Scroll Down Cue */}
        <a
          href="#works"
          className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors duration-200 group"
        >
          <span>SCROLL DOWN</span>
          <span className="inline-block text-neutral-400 group-hover:text-white transition-transform duration-200 group-hover:translate-y-0.5">
            ↓
          </span>
        </a>

        {/* Right: Role / Discipline */}
        <div className="flex items-center gap-2">
          <span>TECHNOLOGY LAB</span>
        </div>
      </div>
    </section>
  );
}
