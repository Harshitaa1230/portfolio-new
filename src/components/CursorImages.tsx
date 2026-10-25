"use client";

import { useEffect, useRef } from "react";

type MockupImage = {
  optimizedSrc: string;
};

const VARIANTS = [
  { width: "clamp(210px, 18vw, 300px)", aspect: "16 / 9", position: "50% 50%" },
  { width: "clamp(220px, 19vw, 315px)", aspect: "16 / 10", position: "50% 55%" },
  { width: "clamp(200px, 17.5vw, 290px)", aspect: "3 / 2", position: "50% 50%" },
  { width: "clamp(215px, 18.5vw, 305px)", aspect: "16 / 9", position: "55% 50%" },
  { width: "clamp(205px, 18vw, 295px)", aspect: "16 / 10", position: "45% 50%" },
  { width: "clamp(225px, 19.5vw, 320px)", aspect: "3 / 2", position: "50% 60%" },
];

const POOL_SIZE = 6;
const SPAWN_DISTANCE = 80;
const SPAWN_COOLDOWN = 280;
const ENTER_DURATION = 260;
const HOLD_DURATION = 1050;
const FADE_DURATION = 600;
const LIFETIME = HOLD_DURATION + FADE_DURATION;
const EDGE_PADDING = 14;

type Slot = {
  el: HTMLDivElement | null;
  inner: HTMLDivElement | null;
  active: boolean;
  born: number;
  x: number;
  y: number;
  distance: number;
  angleJitter: number;
  fallbackAngle: number;
  width: number;
  height: number;
  speed: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

function createSlots(): Slot[] {
  return Array.from({ length: POOL_SIZE }, (_, index) => ({
    el: null,
    inner: null,
    active: false,
    born: 0,
    x: 0,
    y: 0,
    distance: 0,
    angleJitter: 0,
    fallbackAngle: 0,
    width: 0,
    height: 0,
    speed: 4.8 + (index % 4) * 0.8,
  }));
}

export default function CursorImages({ images }: { images: MockupImage[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const slotsRef = useRef<Slot[]>(createSlots());
  const cursorRef = useRef({ x: 0, y: 0 });
  const directionRef = useRef({ x: 0, y: 0 });
  const previousRef = useRef({ x: 0, y: 0 });
  const lastSpawnRef = useRef({ x: 0, y: 0, time: 0 });
  const boundsRef = useRef({ width: 0, height: 0 });
  const imageRef = useRef(0);
  const variantRef = useRef(0);
  const frameRef = useRef(0);
  const lastFrameRef = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    const section = root?.parentElement;
    if (!root || !section || images.length === 0) return;

    imageRef.current = Math.floor(Math.random() * images.length);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const slots = slotsRef.current;
    let enabled = !motionQuery.matches;
    let idleHandle: number | undefined;

    const measure = () => {
      boundsRef.current = {
        width: root.clientWidth,
        height: root.clientHeight,
      };
    };

    const targetPosition = (slot: Slot) => {
      const direction = directionRef.current;
      const baseAngle =
        direction.x || direction.y
          ? Math.atan2(-direction.y, -direction.x)
          : slot.fallbackAngle;
      const angle = baseAngle + slot.angleJitter;
      const bounds = boundsRef.current;

      return {
        x: clamp(
          cursorRef.current.x +
            Math.cos(angle) * slot.distance -
            slot.width / 2,
          EDGE_PADDING,
          Math.max(EDGE_PADDING, bounds.width - slot.width - EDGE_PADDING),
        ),
        y: clamp(
          cursorRef.current.y +
            Math.sin(angle) * slot.distance -
            slot.height / 2,
          EDGE_PADDING,
          Math.max(EDGE_PADDING, bounds.height - slot.height - EDGE_PADDING),
        ),
      };
    };

    const stop = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
      lastFrameRef.current = 0;
      for (const slot of slots) {
        slot.active = false;
        if (slot.el) slot.el.style.opacity = "0";
      }
    };

    const tick = (time: number) => {
      const delta = lastFrameRef.current
        ? Math.min(time - lastFrameRef.current, 48)
        : 16.7;
      lastFrameRef.current = time;

      const now = performance.now();
      const bounds = boundsRef.current;
      let alive = false;

      for (const slot of slots) {
        const el = slot.el;
        if (!slot.active || !el) continue;

        const age = now - slot.born;
        if (age >= LIFETIME) {
          slot.active = false;
          el.style.opacity = "0";
          continue;
        }

        alive = true;

        const target = targetPosition(slot);
        const damping = 1 - Math.exp((-slot.speed * delta) / 1000);
        slot.x += (target.x - slot.x) * damping;
        slot.y += (target.y - slot.y) * damping;

        const direction = directionRef.current;
        if (direction.x || direction.y) {
          const along =
            (slot.x + slot.width / 2 - cursorRef.current.x) * direction.x +
            (slot.y + slot.height / 2 - cursorRef.current.y) * direction.y;
          const minBehind =
            Math.hypot(slot.width, slot.height) / 2 + 12;

          if (along > -minBehind) {
            const shift = along + minBehind;
            slot.x -= direction.x * shift;
            slot.y -= direction.y * shift;
            slot.x = clamp(
              slot.x,
              EDGE_PADDING,
              Math.max(EDGE_PADDING, bounds.width - slot.width - EDGE_PADDING),
            );
            slot.y = clamp(
              slot.y,
              EDGE_PADDING,
              Math.max(EDGE_PADDING, bounds.height - slot.height - EDGE_PADDING),
            );
          }
        }

        const enter = easeOutCubic(Math.min(age / ENTER_DURATION, 1));
        const exit =
          age > HOLD_DURATION
            ? Math.min((age - HOLD_DURATION) / FADE_DURATION, 1)
            : 0;
        const opacity = enter * (1 - exit) * 0.92;
        const scale = 0.94 + enter * 0.06 - exit * 0.03;

        el.style.opacity = opacity.toFixed(3);
        el.style.transform = `translate3d(${slot.x.toFixed(2)}px, ${slot.y.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
      }

      if (alive) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        frameRef.current = 0;
        lastFrameRef.current = 0;
      }
    };

    const startLoop = () => {
      if (!frameRef.current) {
        lastFrameRef.current = 0;
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    const revealAt = (x: number, y: number) => {
      const bounds = boundsRef.current;
      if (!bounds.width || !bounds.height) return;

      const slot =
        slots.find((candidate) => !candidate.active) ??
        slots.reduce((oldest, candidate) =>
          candidate.born < oldest.born ? candidate : oldest,
        );

      if (!slot.el || !slot.inner) return;

      const variant = VARIANTS[variantRef.current % VARIANTS.length];
      const image = images[imageRef.current % images.length];
      variantRef.current += 1;
      imageRef.current += 1;

      slot.inner.style.width = variant.width;
      slot.inner.style.aspectRatio = variant.aspect;
      slot.inner.style.backgroundImage = `url("${image.optimizedSrc}")`;
      slot.inner.style.backgroundPosition = variant.position;

      slot.width = slot.inner.offsetWidth;
      slot.height = slot.inner.offsetHeight;
      slot.speed = 4.4 + Math.random() * 2.6;
      slot.distance =
        Math.hypot(slot.width, slot.height) / 2 + 20 + Math.random() * 34;
      slot.angleJitter = (Math.random() - 0.5) * 0.8;
      slot.fallbackAngle = Math.random() * Math.PI * 2;

      const target = targetPosition(slot);
      slot.x = target.x;
      slot.y = target.y;

      const now = performance.now();
      slot.born = now;
      slot.active = true;
      slot.el.style.zIndex = String(10 + Math.floor(Math.random() * 3));
      slot.el.style.opacity = "0";
      slot.el.style.transform = `translate3d(${slot.x.toFixed(2)}px, ${slot.y.toFixed(2)}px, 0) scale(0.94)`;

      lastSpawnRef.current = { x, y, time: now };
      startLoop();
    };

    const maybeReveal = (x: number, y: number, force = false) => {
      if (!enabled) return;

      const now = performance.now();
      const last = lastSpawnRef.current;
      const moved = Math.hypot(x - last.x, y - last.y);

      if (!force && (moved < SPAWN_DISTANCE || now - last.time < SPAWN_COOLDOWN)) {
        return;
      }

      revealAt(x, y);
    };

    const localPoint = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const handleEnter = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const point = localPoint(event);
      cursorRef.current = point;
      previousRef.current = point;
      directionRef.current = { x: 0, y: 0 };
      lastSpawnRef.current = { x: point.x, y: point.y, time: 0 };
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const point = localPoint(event);
      const previous = previousRef.current;
      const dx = point.x - previous.x;
      const dy = point.y - previous.y;
      const moved = Math.hypot(dx, dy);

      if (moved > 2) {
        const nx = dx / moved;
        const ny = dy / moved;
        const current = directionRef.current;

        if (!current.x && !current.y) {
          directionRef.current = { x: nx, y: ny };
        } else {
          const currentAngle = Math.atan2(current.y, current.x);
          let turn = Math.atan2(ny, nx) - currentAngle;
          turn = Math.atan2(Math.sin(turn), Math.cos(turn));
          const angle = currentAngle + turn * 0.35;
          directionRef.current = { x: Math.cos(angle), y: Math.sin(angle) };
        }
      }

      previousRef.current = point;
      cursorRef.current = point;
      maybeReveal(point.x, point.y);
    };

    const handleDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return;
      const point = localPoint(event);
      cursorRef.current = point;
      previousRef.current = point;
      directionRef.current = { x: 0, y: 0 };
      maybeReveal(point.x, point.y, true);
    };

    const handleMotionPreference = () => {
      enabled = !motionQuery.matches;
      if (!enabled) stop();
    };

    const preload = () => {
      for (const image of images) {
        const element = new window.Image();
        element.src = image.optimizedSrc;
      }
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(root);

    section.addEventListener("pointerenter", handleEnter);
    section.addEventListener("pointermove", handleMove);
    section.addEventListener("pointerdown", handleDown);
    motionQuery.addEventListener("change", handleMotionPreference);

    if (enabled) {
      if (typeof window.requestIdleCallback === "function") {
        idleHandle = window.requestIdleCallback(preload, { timeout: 1800 });
      } else {
        idleHandle = window.setTimeout(preload, 1200);
      }
    }

    return () => {
      resizeObserver.disconnect();
      section.removeEventListener("pointerenter", handleEnter);
      section.removeEventListener("pointermove", handleMove);
      section.removeEventListener("pointerdown", handleDown);
      motionQuery.removeEventListener("change", handleMotionPreference);

      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (idleHandle !== undefined) {
        if (typeof window.cancelIdleCallback === "function") {
          window.cancelIdleCallback(idleHandle);
        } else {
          window.clearTimeout(idleHandle);
        }
      }
    };
  }, [images]);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    >
      {Array.from({ length: POOL_SIZE }).map((_, index) => (
        <div
          key={index}
          ref={(element) => {
            slotsRef.current[index].el = element;
          }}
          className="absolute left-0 top-0 opacity-0 will-change-transform"
        >
          <div
            ref={(element) => {
              slotsRef.current[index].inner = element;
            }}
            className="bg-light-surface bg-cover bg-center bg-no-repeat"
          />
        </div>
      ))}
    </div>
  );
}
