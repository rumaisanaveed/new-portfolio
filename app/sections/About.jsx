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
          I'm a passionate Software Engineer with a focus on solving problems
          and delivering impactful results. While I currently specialize in
          frontend development, I am highly adaptable and quick to learn any
          field or technology where I’ll get to learn something new. I’m ready
          to work in collaborative environments, where being part of a great
          team allows me to contribute meaningfully while growing both
          personally and professionally
        </p>
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium dark:text-darkBody text-lightBody">
            Find me on
          </p>
          <div className="flex items-center gap-2">
            {aboutSocials.map((social, index) => (
              <Link href={social.link} target="blank" key={index}>
                <Image
                  src={
                    currentTheme === "dark" ? social.lightIcon : social.darkIcon
                  }
                  alt="social"
                  height={social.id === 1 ? 26 : 24}
                  width={social.id === 1 ? 26 : 24}
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
