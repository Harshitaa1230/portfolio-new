"use client";

import { useMemo, useSyncExternalStore } from "react";
import { shuffle } from "@/lib/shuffle";

const shuffledCache = new WeakMap<readonly unknown[], readonly unknown[]>();

export function useShuffled<T>(items: readonly T[]): readonly T[] {
  const store = useMemo(() => {
    const listeners = new Set<() => void>();

    return {
      subscribe(listener: () => void) {
        listeners.add(listener);
        return () => {
          listeners.delete(listener);
        };
      },
      getSnapshot(): readonly T[] {
        const cached = shuffledCache.get(items);

        if (cached) {
          return cached as readonly T[];
        }

        const next = shuffle(items);
        shuffledCache.set(items, next);

        return next;
      },
      getServerSnapshot(): readonly T[] {
        return items;
      },
    };
  }, [items]);

  return useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot,
  );
}
