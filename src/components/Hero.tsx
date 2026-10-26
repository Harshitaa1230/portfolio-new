"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  { id: "art-direction", label: "Art Direction", percent: 18 },
  { id: "branding", label: "Branding", percent: 50 },
  { id: "strategy", label: "Strategy", percent: 82 },
];

export default function Hero() {
  const [activeService, setActiveService] = useState(1); // default "Branding" with knob in center
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showScreenshotMode, setShowScreenshotMode] = useState(false);
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center flex-1">
        {/* Left Column: Heading & White Services Slider */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between h-full py-2">
          <h1 className="font-sans text-[clamp(2.1rem,3.8vw,3.6rem)] font-medium leading-[1.08] tracking-[-0.035em] text-foreground text-balance">
            Pattern Dimensions<br />
            and Moments that<br />
            Connect and Leave a<br />
            Bold イメージ.
          </h1>

          {/* Interactive White Services Slider Bar */}
          <div className="mt-8 lg:mt-auto pt-4 w-full">
            <div
              role="slider"
              tabIndex={0}
              aria-label="Creative discipline selector"
              aria-valuemin={0}
              aria-valuemax={services.length - 1}
              aria-valuenow={activeService}
              aria-valuetext={services[activeService].label}
              onKeyDown={handleKeyDown}
              className="relative w-full h-8 md:h-9 bg-white text-black flex items-center shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              {/* Slider Track Labels */}
              <div className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 text-[12px] md:text-[13px] font-sans font-semibold tracking-[-0.01em]">
                {services.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSliderClick(index)}
                    className={`relative z-10 py-1 transition-opacity duration-200 cursor-pointer ${
                      activeService === index ? "opacity-100 font-bold" : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Slider Knob / Thumb */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-20 flex items-center justify-center"
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
        <div className="lg:col-span-5 xl:col-span-4 w-full flex justify-end">
          <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl md:rounded-3xl bg-[#18181b] border border-white/10 overflow-hidden shadow-2xl flex flex-col items-center justify-center group">
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
              className="absolute top-3 right-3 z-30 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[9px] font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
              title="Toggle preview mode"
            >
              {showScreenshotMode ? "Live Reel" : "Original View"}
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div aria-hidden className="w-full h-px bg-white/15 my-4 md:my-5" />

      {/* Monumental Typography: Akihiko™ */}
      <div className="w-full overflow-hidden select-none py-1 md:py-2">
        <div className="flex items-start justify-between w-full font-sans font-bold leading-[0.82] tracking-[-0.045em] text-foreground">
          <span className="text-[clamp(3.8rem,14.5vw,13.5rem)] inline-block">
            Akihiko
          </span>
          <span className="text-[clamp(1.2rem,4vw,3.6rem)] font-bold tracking-normal align-top leading-none mt-1 sm:mt-2 md:mt-3">
            ™
          </span>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <div aria-hidden className="w-full h-px bg-white/15 my-3 md:my-4" />

      {/* Bottom Metadata Status Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] md:text-[12px] font-mono uppercase tracking-[0.04em] text-neutral-400 pt-1 pb-1">
        {/* Left: Interface Version */}
        <div className="flex items-center gap-2">
          <span>© 2024 / INTERFACE V2.1</span>
        </div>

        {/* Center: Scroll Down Cue */}
        <a
          href="#latest"
          className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors duration-200 group"
        >
          <span>SCROLL DOWN</span>
          <span className="inline-block text-neutral-400 group-hover:text-white transition-transform duration-200 group-hover:translate-y-0.5">
            ↓
          </span>
        </a>

        {/* Right: Role / Discipline */}
        <div className="flex items-center gap-2">
          <span>DIGITAL DESIGNER</span>
        </div>
      </div>
    </section>
  );
}
