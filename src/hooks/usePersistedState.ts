import { Dispatch, SetStateAction, useCallback, useSyncExternalStore } from "react";

export function usePersistedState(
  key: string,
  defaultValue: string,
): readonly [string, Dispatch<SetStateAction<string>>] {
  const storageKey = "persistedState." + key;

  const subscribe = useCallback((onStoreChange: () => void) => {
    window.addEventListener("storage", onStoreChange);
    return () => window.removeEventListener("storage", onStoreChange);
  }, []);

  // Read localStorage as an external store: no setState-in-effect, and the
  // server snapshot keeps SSR/hydration consistent.
  const value = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(storageKey) ?? defaultValue,
    () => defaultValue,
  );

  const setValue = useCallback<Dispatch<SetStateAction<string>>>(
    (next) => {
      const resolved =
        typeof next === "function"
          ? next(localStorage.getItem(storageKey) ?? defaultValue)
          : next;
      localStorage.setItem(storageKey, resolved);
      // Notify subscribers in the current tab (the native `storage` event
      // only fires in other tabs).
      window.dispatchEvent(new StorageEvent("storage"));
    },
    [storageKey, defaultValue],
  );

  return [value, setValue] as const;
}
