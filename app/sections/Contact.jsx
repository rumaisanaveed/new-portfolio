import React from "react";
import { socials } from "../constants";
import Link from "next/link";
import Image from "next/image";

export const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      {socials.map((social, index) => (
        <div key={index}>
          <Link href={social.link}>
            <Image src={social.icon} alt={social.title} />
            <p>{social.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
