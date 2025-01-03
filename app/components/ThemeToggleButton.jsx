"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import NightLight from "../../public/icons/nightLight.svg";
import nightDark from "../../public/icons/nightDark.svg";

export const ThemeToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {currentTheme === "dark" ? (
        <Image src={NightLight} alt="night" width={20} height={20} />
      ) : (
        <Image src={nightDark} alt="light" width={20} height={20} />
      )}
    </button>
  );
};
