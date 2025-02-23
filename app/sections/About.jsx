"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { aboutSocials } from "../constants";
import useThemeToggle from "../hooks/useThemeToggle";
import Heading from "../components/ui/Heading";

export const About = () => {
  const { currentTheme } = useThemeToggle();
  return (
    <div className="flex flex-col gap-5">
      <Heading title="Hey! I'm Rumaisa" />
      <div className="flex flex-col gap-4">
        <p className="text-lg font-medium dark:text-darkBody text-lightBody">
          I am a passionate Software Developer and Tester focused on solving
          problems and delivering impactful results. I specialize in developing
          and testing web and app development. My adaptability allows me to
          quickly learn new technologies and testing methodologies. I thrive in
          collaborative environments, contributing to both development and
          quality assurance processes. Skilled in bug tracking, test case
          design, and debugging, I help enhance software reliability. In my free
          time, I write articles to share my tech learnings and insights with
          the community.
        </p>
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium dark:text-darkBody text-lightBody">
            Find me on
          </p>
          <div className="flex items-center gap-2">
            {aboutSocials.map((social, index) => (
              <Link href={social.link} target="_blank" key={index}>
                <Image
                  src={
                    currentTheme === "dark" ? social.lightIcon : social.darkIcon
                  }
                  alt="social"
                  height={social.id === 1 || social.id === 3 ? 26 : 24}
                  width={social.id === 1 || social.id === 3 ? 26 : 24}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
