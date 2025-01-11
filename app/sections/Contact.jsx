"use client";
import React from "react";
import { socials } from "../constants";
import Link from "next/link";
import Image from "next/image";
import Heading from "../components/ui/Heading";
import useThemeToggle from "../hooks/useThemeToggle";

export const Contact = () => {
  const { currentTheme } = useThemeToggle();
  return (
    <div className="flex flex-col gap-5">
      <Heading title="Contact" />
      <div className="flex flex-col md:flex-row gap-8">
        {socials.map((social, index) => (
          <Link
            href={social.link}
            className="flex gap-1"
            key={index}
            target="blank"
          >
            <Image
              src={currentTheme === "dark" ? social.icon : social.darkIcon}
              alt={social.title}
              className="object-contain"
            />
            <p className="text-lg font-medium text-lightBody dark:text-darkBody">
              {social.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
