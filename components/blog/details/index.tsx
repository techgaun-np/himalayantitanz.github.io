import { BlogItem } from "@/types/blog";
import React from "react";
import DetailHero from "./DetailHero";
import DetailContent from "./DetailContent";

const BlogDeatails = ({ image, title, content, author }: BlogItem) => {
  return (
    <div className="flex flex-col">
      <DetailHero
        imageSrc={image}
        title={title}
        authorName={author.name}
        authorAvatar={author.avatar}
        date={author.date}
        readTime={author.readTime}
        className=""
      />

      <DetailContent content={content} />
    </div>
  );
};

export default BlogDeatails;
