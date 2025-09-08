"use client";

import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
}

const HeroSectionCommon: React.FC<HeroSectionProps> = ({
  imageSrc,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`relative w-full h-[500px] md:h-[600px] ${className}`}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-white/90 max-w-4xl text-base md:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroSectionCommon;
