"use client";

import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

function notify() {
  for (const listener of listeners) listener();
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function getTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function setTheme(theme: Theme, persist = true) {
  applyTheme(theme);

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }

  notify();
}

export function syncThemeWithSystem() {
  if (typeof window === "undefined") return;

  try {
    if (localStorage.getItem(STORAGE_KEY)) return;
  } catch {
    return;
  }

  setTheme(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
    false,
  );
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useTheme() {
  return useSyncExternalStore(subscribe, getTheme, () => "light" as Theme);
}
