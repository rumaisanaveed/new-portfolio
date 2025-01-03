"use client";
import React from "react";
import { ThemeToggleButton } from "../components/ThemeToggleButton";

export const Header = () => {
  return (
    <div>
      <div className="flex">
        <div />
        <div>
          <h1>Rumaisa Naveed</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
      <ThemeToggleButton />
    </div>
  );
};
