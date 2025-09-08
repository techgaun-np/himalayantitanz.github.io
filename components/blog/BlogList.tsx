import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { blogData } from "@/app/static/blog";

const BlogList = () => {
  return (
    <div
      style={{
        background:
          "var(--Gradient-radial, radial-gradient(70.8% 70.8% at 50% 50%, #199AA2 0%, #194E52 100%))",
      }}
      className="min-h-[calc(100dvh-300px)] flex flex-col px-[3rem] py-[3.75rem]"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* view all buttons */}
        <div className="flex w-full justify-center md:justify-start mb-8 gap-2 items-center text-white">
          <p className="text-baby-aqua text-[1.25rem]">Latest</p>
          <Button className="flex bg-transparent hover:bg-transparent shadow-none text-white">
            <p className="text-baby-aqua text-[0.75rem]">View all</p>
            <ArrowRight />
          </Button>
        </div>

        {/* blog cards - Using grid for better control */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 sm:gap-8 md:gap-10">
          {blogData.map((card, index) => (
            <div key={index} className="w-[350px]">
              <BlogCard
                mainImage={card.mainImage}
                title={card.title}
                description={card.description}
                author={card.author}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
