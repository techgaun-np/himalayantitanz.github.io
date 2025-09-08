import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";
import cappedPenguin from "@/public/blog/capped-penguin.svg";
import lonelyPenguin from "@/public/blog/lonely-penguin.svg";

const BlogData = [
  {
    mainImage: cappedPenguin,
    title: "Exploring the Mountains: A Journey Through Nature",
    description:
      "Discover the breathtaking views, serene landscapes, and hidden trails as we explore the mountains in this immersive travel guide.",
    author: {
      name: "Alice Johnson",
      avatar: "",
      date: "Sep 8, 2025",
      readTime: "6 min",
    },
  },
  {
    mainImage: lonelyPenguin,
    title: "The Art of Cooking: Mastering Simple Recipes",
    description:
      "Learn how to create delicious meals with easy-to-follow steps, essential tips, and creative twists for everyday cooking.",
    author: {
      name: "John Smith",
      avatar: "",
      date: "Sep 5, 2025",
      readTime: "8 min",
    },
  },
  {
    mainImage: cappedPenguin,
    title: "Tech Trends 2025: What's Next in Innovation",
    description:
      "Explore the latest in technology, from AI breakthroughs to futuristic gadgets shaping our world in the coming years.",
    author: {
      name: "Emily Davis",
      avatar: "",
      date: "Aug 28, 2025",
      readTime: "5 min",
    },
  },
  {
    mainImage: lonelyPenguin,
    title: "Exploring the Mountains: A Journey Through Nature",
    description:
      "Discover the breathtaking views, serene landscapes, and hidden trails as we explore the mountains in this immersive travel guide.",
    author: {
      name: "Alice Johnson",
      avatar: "",
      date: "Sep 8, 2025",
      readTime: "6 min",
    },
  },
  {
    mainImage: cappedPenguin,
    title: "Exploring the Mountains: A Journey Through Nature",
    description:
      "Discover the breathtaking views, serene landscapes, and hidden trails as we explore the mountains in this immersive travel guide.",
    author: {
      name: "Alice Johnson",
      avatar: "",
      date: "Sep 8, 2025",
      readTime: "6 min",
    },
  },
  {
    mainImage: lonelyPenguin,
    title: "Exploring the Mountains: A Journey Through Nature",
    description:
      "Discover the breathtaking views, serene landscapes, and hidden trails as we explore the mountains in this immersive travel guide.",
    author: {
      name: "Alice Johnson",
      avatar: "",
      date: "Sep 8, 2025",
      readTime: "6 min",
    },
  },
];

const BlogList = () => {
  return (
    <div
      style={{
        background:
          "var(--Gradient-radial, radial-gradient(70.8% 70.8% at 50% 50%, #199AA2 0%, #194E52 100%))",
      }}
      className="flex flex-col px-[3rem] py-[3.75rem]"
    >
      {/* buttons */}
      <div className="flex gap-2 items-center text-white">
        <p className="text-baby-aqua text-[1.25rem]">Latest</p>
        <Button className="flex bg-transparent hover:bg-transparent shadow-none text-white">
          <p className="text-baby-aqua text-[0.75rem]">View all</p>
          <ArrowRight />
        </Button>
      </div>

      {/* contents */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6"> */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {BlogData.map((card, index) => (
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
  );
};

export default BlogList;
