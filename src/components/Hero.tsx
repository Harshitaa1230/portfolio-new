"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  { id: "product-designer", label: "Product Designer", percent: 18 },
  { id: "design-engineer", label: "Design Engineer", percent: 50 },
  { id: "uiux-designer", label: "UI/UX Designer", percent: 82 },
];

export default function Hero() {
  const [activeService, setActiveService] = useState(0); // default first service
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showScreenshotMode, setShowScreenshotMode] = useState(false);
  const [heartCursor, setHeartCursor] = useState<{ x: number; y: number } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleSliderClick = (index: number) => {
    setActiveService(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setActiveService((prev) => Math.min(prev + 1, services.length - 1));
    } else if (e.key === "ArrowLeft") {
      setActiveService((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction Hero"
      className="relative flex min-h-[calc(100svh-var(--header-height,70px))] flex-col justify-between pt-20 md:pt-24 pb-3 md:pb-5 select-none"
    >
      {/* Middle Hero Section: Headline + Interactive Slider + Video Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start flex-1">
        {/* Left Column: Heading & White Services Slider */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between h-full pt-0 pb-2">
          <h1 className="font-sans text-[clamp(2.1rem,3.8vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-foreground text-balance">
            I design and build clear<br />
            user-friendly interfaces for SaaS<br />
            web and mobile products<br />
            <span
              className="relative inline-block"
              onMouseEnter={(e) => setHeartCursor({ x: e.clientX, y: e.clientY })}
              onMouseMove={(e) => setHeartCursor({ x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setHeartCursor(null)}
            >
              दिल से.
            </span>
          </h1>

          {heartCursor && (
            <span
              aria-hidden
              style={{ left: heartCursor.x + 18, top: heartCursor.y }}
              className="pointer-events-none fixed z-[60] hidden -translate-y-1/2 animate-in fade-in whitespace-nowrap rounded-full border border-white/15 bg-black/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white shadow-xl backdrop-blur-md duration-200 md:block md:text-[11px]"
            >
              With Heart <span className="text-rose-400">♥</span>
            </span>
          )}

          {/* Interactive White Services Slider Bar */}
          <div className="mt-6 lg:mt-10 pt-4 w-full">
            <div
              role="slider"
              tabIndex={0}
              aria-label="Creative discipline selector"
              aria-valuemin={0}
              aria-valuemax={services.length - 1}
              aria-valuenow={activeService}
              aria-valuetext={services[activeService].label}
              onKeyDown={handleKeyDown}
              className="relative -ml-4 sm:-ml-[4vw] lg:-ml-[5vw] xl:-ml-[6vw] w-screen h-8 md:h-9 bg-white text-black flex items-center shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              {/* Slider Track Labels */}
              <div className="w-full grid grid-cols-3 px-8 sm:px-[calc(4vw+2rem)] lg:px-[calc(5vw+3rem)] xl:px-[calc(6vw+3rem)] text-[12px] md:text-[13px] font-sans font-semibold tracking-[-0.01em]">
                {services.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSliderClick(index)}
                    className={`relative z-10 py-1 transition-opacity duration-200 cursor-pointer opacity-100 font-bold ${
                      index === 0 ? "justify-self-start" : index === 1 ? "justify-self-center" : "justify-self-end"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Slider Knob / Thumb */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-20 hidden"
                animate={{ left: `${services[activeService].percent}%` }}
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              >
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.5)] flex items-center justify-center">
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Column: Dark Rounded Video Card */}
        <div className="lg:col-span-5 xl:col-span-5 w-full flex justify-end -mr-4 sm:-mr-[4vw] lg:-mr-[5vw] xl:-mr-[6vw] lg:-mt-2">
          <div className="relative w-full aspect-[16/9] rounded-l-2xl md:rounded-l-3xl rounded-r-none bg-[#18181b] border border-white/10 border-r-0 overflow-hidden shadow-2xl flex flex-col items-center justify-center group">
            {/* Template Fallback View (Matching Screenshot Exact Look) */}
            {showScreenshotMode ? (
              <div className="flex flex-col items-center justify-center p-8 text-center select-none animate-in fade-in duration-300">
                <span className="text-[22px] md:text-[24px] font-semibold text-white tracking-tight">
                  Sorry
                </span>
                <span className="text-[14px] md:text-[15px] text-neutral-400 mt-1 font-normal">
                  This video does not exist.
                </span>
              </div>
            ) : (
              /* Live Showreel Video */
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="/mockups/MacBook%20Air%20-%2061.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover object-center"
                />

                {/* Video Overlay Badge */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] md:text-[11px] font-mono uppercase tracking-wider text-neutral-200">
                    {services[activeService].label}
                  </span>
                </div>

                {/* Video Play/Pause & Sound Controls */}
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-neutral-200 hover:text-white hover:bg-black/80 transition-colors"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? "PAUSE" : "PLAY"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-neutral-200 hover:text-white hover:bg-black/80 transition-colors"
                    aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                  >
                    {isMuted ? "MUTE" : "AUDIO"}
                  </button>
                </div>
              </div>
            )}

            {/* Toggle between Showreel Video and Screenshot View */}
            <button
              type="button"
              onClick={() => setShowScreenshotMode(!showScreenshotMode)}
              className="hidden"
              title="Toggle preview mode"
            >
              {showScreenshotMode ? "Live Reel" : "Original View"}
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div aria-hidden className="w-full h-px bg-white/15 my-4 md:my-5" />

      {/* Monumental Typography */}
      <div className="w-full overflow-visible select-none py-2 md:py-3">
        <div className="flex items-center justify-center w-full font-sans font-bold leading-none tracking-[-0.045em] text-foreground">
          <span className="inline-block whitespace-nowrap text-[clamp(2rem,12vw,12rem)]">
            Harshita Upadhyay
          </span>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div aria-hidden className="w-full h-px bg-white/15 my-2 md:my-3" />

      {/* Bottom Metadata Status Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] md:text-[12px] font-mono tracking-[0.04em] text-neutral-400 pt-1 pb-1">
        {/* Left: Interface Version */}
        <div className="flex items-center gap-2">
          <span>© 2026 / harshi.designs</span>
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
          <span>PRODUCT DESIGNER</span>
        </div>
      </div>
    </section>
  );
}
