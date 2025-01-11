"use client";
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
        <Image
          src={NightLight}
          alt="night"
          width={30}
          height={30}
          className="object-contain"
        />
      ) : (
        <Image
          src={nightDark}
          alt="light"
          width={30}
          height={30}
          className="object-contain"
        />
      )}
    </button>
  );
};
