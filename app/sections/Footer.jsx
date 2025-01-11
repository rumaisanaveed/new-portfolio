"use client";
import React from "react";
import useThemeToggle from "../hooks/useThemeToggle";
import LightArrow from "../../public/icons/lightArrow.svg";
import DarkArrow from "../../public/icons/darkArrow.svg";
import Image from "next/image";

export const Footer = () => {
  const { currentTheme } = useThemeToggle();
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="text-base font-medium flex items-center justify-between mt-5 lg:mt-8 text-lightBody dark:text-darkBody text-center">
      <p>&copy; Rumaisa Naveed 2024.</p>
      <div onClick={handleScrollToTop} className="cursor-pointer">
        <Image
          src={currentTheme === "dark" ? DarkArrow : LightArrow}
          width="auto"
          height="auto"
          alt="arrow"
        />
      </div>
    </div>
  );
};
