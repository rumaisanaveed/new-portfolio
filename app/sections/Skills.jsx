import React from "react";
import { skills } from "../constants";
import { convertToTitleCase } from "../utils/convertToTitleCase";

export const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
      <div>
        <h2></h2>
        {Object.entries(skills).map(([key, value]) => (
          <>
            <p>{convertToTitleCase(key)}</p>
            <div>
              {value.map((skill) => (
                <p>{skill}</p>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
