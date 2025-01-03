"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProviderWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent rendering on the server to avoid hydration mismatch
    return null;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
