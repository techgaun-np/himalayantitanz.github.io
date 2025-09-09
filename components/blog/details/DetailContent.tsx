import { BlogContent, BlogItem } from "@/types/blog";
import { blogData } from "@/static/blog";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  content: BlogContent;
};

const DetailContent = ({ content }: Props) => {
  const [popularList, setPopularList] = useState<BlogItem[]>([]);

  const getPopularData = () => {
    const popular = blogData.filter((item) => item.isPopular);
    setPopularList(popular);
  };

  useEffect(() => {
    getPopularData();
  }, []);

  return (
    <div className="flex flex-col md:grid md:grid-cols-8 gap-4 px-[3rem]">
      <div className="md:col-span-5 flex flex-col gap-4 py-4">
        <p>{content.description}</p>

        {content.keyPerformance && (
          <ul className="list-disc pl-5">
            {content.keyPerformance.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {content.images && content.images.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-4">
            {content.images.map((img, idx) => (
              <div key={idx} className="w-full h-40 relative">
                <Image
                  src={img}
                  alt={`content-img-${idx}`}
                  className="object-cover w-full cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}

        {content.matchHighlight && content.matchHighlight.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Match Highlights</h2>
            <ul className="list-disc pl-5">
              {content.matchHighlight.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="md:col-span-3">
        <div className="flex flex-col gap-2">
          <div className="flex w-full md:justify-between items-center text-richBlack">
            <p className="text-richBlack text-[1rem]">Most Viewed</p>
            <Button className="flex bg-transparent hover:bg-transparent shadow-none text-white">
              <p className="text-richBlack text-[0.75rem]">View all</p>
              <ArrowRight className="text-richBlack" />
            </Button>
          </div>
          <div className="flex flex-col gap-2 px-2 py-4">
            {popularList.slice(0, 3).map((list, idx) => {
              return (
                <PopularCard
                  title={list.title}
                  description={list.description}
                  imageSrc={list.image}
                  views={2456}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
