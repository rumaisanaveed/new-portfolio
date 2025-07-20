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
          I'm a Software Engineer with a primary focus in frontend development
          and expertise in React.js, Next.js and React Native. I've interest in
          both mobile and web application development.And, I'm passionate about
          building scalable and user-friendly web applications, solving complex
          problems, and delivering impactful results. Highly adaptable and quick
          to learn, I thrive in collaborative environments where I can
          contribute meaningfully while growing both personally and
          professionally. In my free time, I write articles to share my tech
          learnings and insights from my personal and professional journey.
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
