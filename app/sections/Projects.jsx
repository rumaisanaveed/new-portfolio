import React from "react";
import { projects } from "../constants";
import Image from "next/image";
import GreenLink from "../../public/icons/greenLink.svg";
import Link from "next/link";

export const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <div>
            <h2>{project.description}</h2>
            <Link href="">
              <Image src={GreenLink} alt="link" />
            </Link>
          </div>
          <p>{project.techStack}</p>
        </div>
      ))}
    </>
  );
};
