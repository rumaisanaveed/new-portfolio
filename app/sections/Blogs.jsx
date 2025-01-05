import Image from "next/image";
import Link from "next/link";
import React from "react";
import Calendar from "../../public/icons/greenCalendar.svg";
import Heading from "../components/ui/Heading";

export const Blogs = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col gap-5">
      <Heading title="Blogs" />
      <article className="flex flex-col gap-5 lg:gap-3 justify-between">
        {Array.from({ length: 2 }, (_, index) => (
          <Link
            href="https://rumaisanaveed.hashnode.dev/how-to-prepare-for-technical-interviews-a-detailed-guide-for-big-companies-and-startups"
            target="blank"
            key={index}
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
              <div className="w-full">
                <div className="flex items-center gap-3">
                  <Image src={Calendar} alt="calendar" height={23} width={23} />
                  <h1 className="text-themeText text-sm font-medium">
                    Jan 1, 2025
                  </h1>
                </div>
              </div>
              <div className="w-full text-lg flex flex-col gap-3">
                <p className="font-bold dark:text-darkHeading text-lightHeading underline">
                  How to Prepare for Technical Interviews: A Detailed Guide for
                  Big Companies and Startups
                </p>
                <p className="font-medium dark:text-darkBody text-lightBody">
                  A step-by-step guide to mastering technical interview
                  preparation for both big tech companies and small startups.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
};

export default async function getServerSideProps() {
  const res = await fetch("https://api.hashnode.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
              publication(host: "rumaisanaveed.hashnode.dev") {
              title
              posts(first: 2) {
                edges {
                  node {
                    title
                    publishedAt
                    subtitle
                    url
                  }
              }
            }
         }
     }`,
    }),
  });

  if (!res.ok) {
    console.error("Failed to fetch articles:", await res.text());
  }

  const { data } = await res.json();

  if (data) {
    const {
      publication: {
        posts: { edges: articles },
      },
    } = data;
    return {
      props: { articles },
    };
  }
}
