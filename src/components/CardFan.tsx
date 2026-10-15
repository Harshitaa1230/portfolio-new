"use client";

import { useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

type Card = {
  id: number;
  color: string;
  image: string | null;
};

const cards: Card[] = [
  { id: 1, color: "#C9C6BE", image: null },
  { id: 2, color: "#C9C6BE", image: null },
  { id: 3, color: "#C9C6BE", image: null },
  { id: 4, color: "#C9C6BE", image: null },
  { id: 5, color: "#C9C6BE", image: null },
  { id: 6, color: "#C9C6BE", image: null },
  { id: 7, color: "#C9C6BE", image: null },
  { id: 8, color: "#C9C6BE", image: null },
  { id: 9, color: "#C9C6BE", image: null },
  { id: 10, color: "#C9C6BE", image: null },
];

const CARD_COUNT = cards.length;

const TOUCH_QUERY = "(hover: none), (pointer: coarse)";

function subscribeTouch(callback: () => void) {
  const query = window.matchMedia(TOUCH_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getTouchSnapshot() {
  return window.matchMedia(TOUCH_QUERY).matches;
}

function useIsTouch() {
  return useSyncExternalStore(subscribeTouch, getTouchSnapshot, () => false);
}

export default function CardFan() {
  const prefersReducedMotion = useReducedMotion();
  const isTouch = useIsTouch();
  const interactive = !isTouch && !prefersReducedMotion;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const rotateYOffset = useTransform(springX, [-1, 1], [-25, 25]);
  const rotateXOffset = useTransform(springY, [-1, 1], [15, -15]);

  useEffect(() => {
    if (!interactive) return;

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set((event.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((event.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [interactive, mouseX, mouseY]);

  return (
    <div
      aria-hidden
      className="h-[320px] w-[320px] md:h-[520px] md:w-[520px]"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{
          transformStyle: "preserve-3d",
          rotateX: rotateXOffset,
          rotateY: rotateYOffset,
          willChange: "transform",
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          animate={interactive ? { rotateY: 360 } : { rotateY: 0 }}
          transition={
            interactive
              ? { duration: 40, ease: "linear", repeat: Infinity }
              : { duration: 0.6, ease: "easeOut" }
          }
        >
          {cards.map((card, index) => {
            const angle = (index * 360) / CARD_COUNT;
            const alt = index % 2 === 0 ? 1 : -1;
            const rotateZ = alt * 8;
            const rotateX = alt * 10;

            return (
              <div
                key={card.id}
                className="absolute left-1/2 top-1/2 aspect-[4/3] w-[45%] overflow-hidden rounded-[6px]"
                style={{
                  backfaceVisibility: "visible",
                  border: "1px solid var(--color-border)",
                  backgroundColor: card.color,
                  boxShadow: "0 12px 30px rgba(16, 16, 15, 0.15)",
                  transform: `translate(-50%, -50%) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) rotateY(${angle}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {card.image ? (
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
