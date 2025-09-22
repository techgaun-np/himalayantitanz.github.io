"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import { useRef } from "react";

type MediaCard = {
  id: number;
  media: string;
  type: "image" | "video";
  title: string;
  description: string;
  date: string;
};

const cards: MediaCard[] = [
  {
    id: 1,
    media: "/latestfromarena/captains.jpg",
    type: "image",
    title: "Marquee Captains together",
    description:
      "Marquee Captains together - Ishan Pandey of Mixmandu with the Captain of Himalayan Titanz",
    date: "Sept 5, 2025",
  },
  {
    id: 2,
    media: "/latestfromarena/batting-field-raw.mp4",
    type: "video",
    title: "Mixmandu - Himalayan Titanz - Encouter",
    description:
      "Exciting highlights from the recent match featuring spectacular catches and boundaries",
    date: "Sept 5, 2025",
  },
];

export default function MediaCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-card py-10">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Latest from the Arena
      </h2>

      <div className="relative">
        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          className={cn(
            "flex overflow-x-auto md:justify-center py-6 no-scrollbar space-x-10 pl-16 md:pl-24 pr-4"
          )}
          whileTap={{ cursor: "grabbing" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="w-[260px] flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-[470px] relative rounded-2xl border-none shadow-muted overflow-hidden">
                {card.type === "image" ? (
                  // Image Display
                  <>
                    <img
                      src={card.media}
                      alt={card.title}
                      className="h-full rounded-2xl absolute w-full object-cover"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(to top, #51A176 0%, transparent 40%)`,
                      }}
                    />
                  </>
                ) : (
                  // Video Display
                  <>
                    <video
                      className="h-full rounded-2xl absolute w-full object-cover cursor-pointer"
                      muted
                      loop
                      playsInline
                      autoPlay
                    >
                      <source src={card.media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(to top, #51A176 0%, transparent 40%)`,
                      }}
                    />
                  </>
                )}

                {/* Content Overlay */}
                <div className="p-4 top-[62%] absolute z-10">
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  <p className="text-sm text-white text-opacity-90">
                    {card.description}
                  </p>

                  <div
                    className={cn(
                      "flex items-center mt-1 w-full",
                      card.type === "video" ? "justify-between" : "justify-end"
                    )}
                  >
                    {card.type === "video" && (
                      <div className="flex items-center text-xs text-white text-opacity-75">
                        <Play className="w-3 h-3 mr-1" />
                        <span>Video Content</span>
                      </div>
                    )}
                    {card.date && (
                      <p className="text-[10px] text-white text-right">
                        {card.date}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Next Button */}
        <Button
          size="icon"
          variant="outline"
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
