"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { blogData } from "@/static/blog";
import { BlogItem } from "@/types/blog";
import DetailHero from "./DetailHero";
import DetailContent from "./DetailContent";

const BlogDeatails = () => {
  const params = useParams(); // get id from URL
  const [post, setPost] = useState<BlogItem | null>(null);

  useEffect(() => {
    if (params?.id) {
      const found = blogData.find((b) => b.id.toString() === params.id);
      setPost(found || null);
    }
  }, [params?.id]);

  if (!post) return <div>Loading or blog not found...</div>;

  return (
    <div className="flex flex-col">
      <DetailHero
        imageSrc={post.image}
        title={post.title}
        authorName={post.author.name}
        authorAvatar={post.author.avatar}
        date={post.author.date}
        readTime={post.author.readTime}
      />
      <DetailContent content={post.content} />
    </div>
  );
};

export default BlogDeatails;
