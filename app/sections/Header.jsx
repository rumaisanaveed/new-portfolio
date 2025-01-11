import React from "react";
import { ThemeToggleButton } from "../components/ThemeToggleButton";
import Image from "next/image";
import Profile from "../../public/images/profile.jpeg";

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="rounded-full h-20 w-20">
          <Image
            src={Profile}
            className="rounded-full object-contain"
            alt="profile"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-medium dark:text-darkHeading text-lightHeading">
            Rumaisa Naveed
          </h1>
          <h2 className="font-normal text-lg dark:text-darkBody text-lightBody">
            Software Engineer
          </h2>
        </div>
      </div>
      <ThemeToggleButton />
    </div>
  );
};
