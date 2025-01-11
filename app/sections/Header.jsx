"use client";
import React from "react";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
import Image from "next/image";
import LightResume from "@/public/icons/lightResume.svg";
import DarkResume from "@/public/icons/darkResume.svg";
import useThemeToggle from "../hooks/useThemeToggle";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="rounded-full h-20 w-20">
          <Image
            src="/images/profile.jpeg"
            className="rounded-full object-contain"
            alt="profile"
            height={80}
            width={80}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium dark:text-darkHeading text-lightHeading">
            Rumaisa Naveed
          </h1>
          <h2 className="font-normal text-lg dark:text-darkBody text-lightBody">
            Software Engineer
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:items-center gap-3 md:gap-2">
        <ThemeToggleButton />
        <ResumeDownloadButton />
      </div>
    </div>
  );
};

const ResumeDownloadButton = () => {
  const { currentTheme } = useThemeToggle();
  return (
    <Link
      href="/resume.pdf"
      download="RumaisaResume - FrontendDeveloper"
      target="_blank"
    >
      <Image
        src={currentTheme === "dark" ? LightResume : DarkResume}
        alt="resume"
        height={30}
        width={30}
      />
    </Link>
  );
};
