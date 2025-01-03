"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import NightLight from "../../public/icons/nightLight.svg";
import nightDark from "../../public/icons/nightDark.svg";
import useThemeToggle from "../hooks/useThemeToggle";

export const ThemeToggleButton = () => {
  const { currentTheme, toggleTheme } = useThemeToggle();

  return (
    <button onClick={() => toggleTheme()}>
      {currentTheme === "dark" ? (
        <Image src={NightLight} alt="night" width={20} height={20} />
      ) : (
        <Image src={nightDark} alt="light" width={20} height={20} />
      )}
    </button>
  );
};
