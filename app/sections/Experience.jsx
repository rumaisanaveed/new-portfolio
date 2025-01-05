import React from "react";
import { experience } from "../constants";
import Heading from "../components/ui/Heading";
import Calendar from "../../public/icons/greenCalendar.svg";
import Image from "next/image";

export const Experience = () => {
  return (
    <div className="flex flex-col gap-5">
      <Heading title="Experience" />
      {experience.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col gap-6 md:gap-3 lg:gap-0 lg:flex-row lg:justify-between"
        >
          <div className="w-full">
            <div className="flex gap-3">
              <Image src={Calendar} alt="calendar" width="auto" height="auto" />
              <h1 className="text-themeText text-sm font-medium">
                {exp.duration}
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h2 className="text-lg font-bold dark:text-darkHeading text-lightHeading">
              {exp.title}
            </h2>
            <ul className="text-lg font-medium dark:text-darkBody text-lightBody list-disc">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex items-center flex-wrap gap-3">
              {exp.tech.map((item, index) => (
                <div
                  key={index}
                  className="dark:bg-darkGlass bg-lightGlass text-themeText text-base font-normal rounded p-2"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
