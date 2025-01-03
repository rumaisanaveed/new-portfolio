"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Calendar from "../../public/icons/greenCalendar.svg";

export const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <article>
        <div>
          <Image src={Calendar} alt="calendar" />
          <p>Jan 1, 2025</p>
        </div>
        <div>
          <Link href="">
            How to Prepare for Technical Interviews: A Detailed Guide for Big
            Companies and Startups
          </Link>
          <p>
            A step-by-step guide to mastering technical interview preparation
            for both big tech companies and small startups.
          </p>
        </div>
      </article>
    </div>
  );
};
