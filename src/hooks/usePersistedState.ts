import { Dispatch, SetStateAction, useEffect, useState } from "react";

function to<T>(inp: string | T): string {
  return typeof inp === "string" ? inp : JSON.stringify(inp);
}

function from<T>(inp: string | T): T {
  let output;
  try {
    output = typeof inp === "string" ? JSON.parse(inp) : inp;
  } catch (err) {
    output = inp;
  }
  return output;
}

export function usePersistedState<T>(
  key: string,
  defaultValue: T,
): readonly [T, Dispatch<SetStateAction<T>>];
export function usePersistedState<T>(
  key: string,
  defaultValue?: undefined,
): readonly [T | undefined, Dispatch<SetStateAction<T | undefined>>];
export function usePersistedState<T>(
  key: string,
  defaultValue?: T,
): readonly [
  T | undefined,
  Dispatch<SetStateAction<T>> | Dispatch<SetStateAction<T | undefined>>,
] {
  const storageKey = "persistedState." + key;

  const [value, setValue] = useState(
    from(localStorage.getItem(storageKey)) ?? defaultValue,
  );

  useEffect(() => {
    if (value) {
      localStorage.setItem(storageKey, to(value));
    } else {
      localStorage.removeItem(storageKey);
    }
  }, [value]);

  return [value ?? defaultValue, setValue] as const;
}
