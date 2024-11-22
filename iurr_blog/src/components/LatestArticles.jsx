import React from "react";
import CardSmall from "./Cards/CardSmall";
import siteData from "../constants/site_data";
import { FaArrowRightLong } from "react-icons/fa6";

const LatestArticles = () => {
  const { posts } = siteData;
  return (
    <section className="mb-10 border-gray-800/20 border-b-2 pb-20">
      <div className="flex items-center justify-between mt-20 px-10">
        <h1 className="text-3xl font-bold">Latest Articles</h1>
        <button className="border-none bg-transparent text-red-500 flex gap-4 items-center">
          Show More <FaArrowRightLong />{" "}
        </button>
      </div>
      <div className="flex gap-5 mt-5 px-10 flex-wrap">
        {posts.map((post, index) => (
          <React.Fragment key={index + 1}>
            <CardSmall post={post} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
