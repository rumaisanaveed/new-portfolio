"use client";
import React from "react";
import LinkedInLight from "../../public/icons/linkedinLight.svg";
import LinkedInDark from "../../public/icons/linkedinDark.svg";
import GithubLight from "../../public/icons/githubLight.svg";
import GithubDark from "../../public/icons/githubDark.svg";
import Link from "next/link";
import Image from "next/image";

export const About = () => {
  return (
    <div>
      <h1>Hey! I'm Rumaisa</h1>
      <p>
        I'm a passionate Software Engineer with a focus on solving problems and
        delivering impactful results. While I currently specialize in frontend
        development, I am highly adaptable and quick to learn any field or
        technology where I’ll get to learn something new. I’m ready to work in
        collaborative environments, where being part of a great team allows me
        to contribute meaningfully while growing both personally and
        professionally
      </p>
      <div>
        <p>Find me on </p>
        <div>
          <Link href={""}>
            <Image src={LinkedInLight} alt="linkedin" />
          </Link>
          <Link href={""}>
            <Image src={GithubLight} alt="github" />
          </Link>
        </div>
      </div>
    </div>
  );
};
