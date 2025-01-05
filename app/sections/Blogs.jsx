import Image from "next/image";
import Link from "next/link";
import React from "react";
import Calendar from "../../public/icons/greenCalendar.svg";
import Heading from "../components/ui/Heading";

export const Blogs = ({ articles }) => {
  console.log(articles);
  // const getArticles = async () => {
  //   const res = await fetch("https://gql.hashnode.com/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       query: `query getArticles {
  //         publication(host: "rumaisanaveed.hashnode.dev") {
  //           title
  //           posts(first: 2) {
  //             edges {
  //               node {
  //                 title
  //                 publishedAt
  //                 subtitle
  //                 url
  //               }
  //             }
  //           }
  //         }
  //       }`,
  //       variables: {},
  //     }),
  //   });

  //   if (!res.ok) {
  //     console.log("Failed to fetch articles");
  //     return;
  //   }

  //   const { data } = await res.json();
  //   console.log(data);
  //   const {
  //     publication: {
  //       posts: { edges: articles },
  //     },
  //   } = data;
  //   console.log(articles);
  // };

  // useEffect(() => {
  //   getArticles();
  // }, []);

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
  const res = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query getArticles {
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
      variables: {},
    }),
  });

  if (!res.ok) {
    console.log("Failed to fetch articles");
    return;
  }

  const { data } = await res.json();

  const {
    publication: {
      posts: { edges: articles },
    },
  } = data;
  console.log(articles);

  return {
    props: {
      articles,
    },
  };
}
