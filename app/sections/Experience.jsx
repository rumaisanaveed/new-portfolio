import React from "react";
import { experience } from "../constants";

export const Experience = () => {
  return (
    <>
      <h1>Experience</h1>
      <div>
        {experience.map((exp, index) => (
          <div key={index}>
            <h1>{exp.duration}</h1>
            <div>
              <h2>{exp.title}</h2>
              <ul>
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div>
                {exp.tech.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
