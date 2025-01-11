import Image from "next/image";
import Link from "next/link";
import React from "react";
import Calendar from "../../public/icons/greenCalendar.svg";
import Heading from "../components/ui/Heading";
import { blogs } from "../constants";

export const Blogs = () => {
  return (
    <div className="flex flex-col gap-5">
      <Heading title="Blogs" />
      <article className="flex flex-col gap-5 lg:gap-3 justify-between">
        {blogs.map((blog) => (
          <Link href={blog.link} target="_blank" key={blog.id}>
            <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
              <div className="w-full">
                <div className="flex items-center gap-3">
                  <Image
                    src={Calendar}
                    alt="calendar"
                    height={23}
                    width={23}
                    className="object-contain"
                  />
                  <h1 className="text-themeText text-sm font-medium">
                    {blog.date}
                  </h1>
                </div>
              </div>
              <div className="w-full text-lg flex flex-col gap-3">
                <p className="font-bold dark:text-darkHeading text-lightHeading underline">
                  {blog.title}
                </p>
                <p className="font-medium dark:text-darkBody text-lightBody">
                  {blog.subTitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
};
