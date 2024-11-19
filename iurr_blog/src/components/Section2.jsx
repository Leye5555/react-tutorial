import React from "react";
import CardLarge from "./Cards/CardLarge";
import siteData from "../constants/site_data";

const Section2 = () => {
  const { posts } = siteData;
  const twoPosts = posts.slice(1, 3);
  return (
    <section className="flex gap-4 px-10">
      {twoPosts.map((item, index) => (
        <React.Fragment key={index + 1}>
          <CardLarge post={item} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Section2;
