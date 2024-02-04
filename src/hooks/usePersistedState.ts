import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function usePersistedState(
  key: string,
  defaultValue: string,
): readonly [string, Dispatch<SetStateAction<string>>] {
  const storageKey = "persistedState." + key;

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(storageKey);
    if (storedValue !== null) {
      setValue(storedValue);
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, value);
  }, [storageKey, value]);

  return [value, setValue] as const;
}
