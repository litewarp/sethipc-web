import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function useThemeToggle() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(targetTheme);
  };

  return { isMounted, toggleTheme, resolvedTheme };
}
