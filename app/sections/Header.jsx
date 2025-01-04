"use client";
import React from "react";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
import useThemeToggle from "../hooks/useThemeToggle";

export const Header = () => {
  const { currentTheme } = useThemeToggle();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="rounded-full bg-[#D9D9D9] h-20 w-20" />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium dark:text-darkHeading text-lightHeading">
            Rumaisa Naveed
          </h1>
          <h2 className="font-normal text-lg dark:text-darkBody text-lightBody">
            Software Engineer
          </h2>
        </div>
      </div>
      <ThemeToggleButton />
    </div>
  );
};
