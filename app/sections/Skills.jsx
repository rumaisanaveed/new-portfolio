import React from "react";
import { skills } from "../constants";
import Heading from "../components/ui/Heading";

export const Skills = () => {
  return (
    <div className="flex flex-col gap-5">
      <Heading title="Skills" />
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <p
            key={index}
            className="dark:bg-darkGlass bg-lightGlass text-themeText text-base font-normal rounded p-2"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};
