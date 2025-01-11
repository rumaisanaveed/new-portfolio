import React from "react";
import { projects } from "../constants";
import Image from "next/image";
import GreenLink from "../../public/icons/greenLink.svg";
import Link from "next/link";
import Heading from "../components/ui/Heading";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-5">
      <Heading title="Projects" />
      {projects.map((project, index) => (
        <Link href={project.link} target="_blank" key={index}>
          <div className="dark:bg-darkGlass bg-lightGlass rounded p-8 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold dark:text-darkHeading text-lightHeading">
                  {project.name}
                </h1>
                <Image src={GreenLink} alt="link" className="object-contain" />
              </div>
              <h2 className="text-lg font-medium text-lightBody dark:text-darkBody">
                {project.description}
              </h2>
            </div>
            <p className="text-base font-normal text-themeText">
              {project.techStack}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
