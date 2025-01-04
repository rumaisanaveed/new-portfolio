"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Calendar from "../../public/icons/greenCalendar.svg";
import Heading from "../components/ui/Heading";

export const Blogs = () => {
  return (
    <div className="flex flex-col gap-5">
      <Heading title="Blogs" />
      <article className="flex flex-col gap-3 justify-between">
        {Array.from({ length: 2 }, (_, index) => (
          <Link
            href="https://rumaisanaveed.hashnode.dev/how-to-prepare-for-technical-interviews-a-detailed-guide-for-big-companies-and-startups"
            target="blank"
          >
            <div key={index} className="flex justify-between">
              <div className="w-full">
                <div className="flex gap-3">
                  <Image src={Calendar} alt="calendar" />
                  <h1 className="text-themeText text-sm font-medium">
                    Jan 1, 2025
                  </h1>
                </div>
              </div>
              <div className="w-full text-lg">
                <p className="font-bold dark:text-darkHeading text-lightHeading underline">
                  How to Prepare for Technical Interviews: A Detailed Guide for
                  Big Companies and Startups
                </p>
                <p className="font-medium dark:text-darkBody text-lightBody">
                  A step-by-step guide to mastering technical interview
                  preparation for both big tech companies and small startups.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
};
