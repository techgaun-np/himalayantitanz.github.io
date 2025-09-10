"use client";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogDeatails from "@/components/blog/details";
import { blogData } from "@/static/blog";
import { BlogItem } from "@/types/blog";

const page = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<BlogItem | null>(null);

  useEffect(() => {
    if (params.id) {
      const foundPost = blogData.find((item) => item.id === params.id);
      setPost(foundPost || null);
      setIsLoading(false);
    }
  }, [params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    notFound();
  }

  return (
    <div>
      <BlogDeatails
        id={post.id}
        image={post.image}
        title={post.title}
        description={post.description}
        content={post.content}
        author={post.author}
      />
    </div>
  );
};

export default page;
