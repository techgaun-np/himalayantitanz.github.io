"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[40rem] md:h-[50rem] w-full flex items-center justify-center text-start text-white">
      {/* 🔹 Background Image */}
      <Image
        src="/homepage/hero-bg.jpg"
        alt="Himalayan Titanz"
        fill
        priority
        className="object-cover object-top brightness-[0.4]"
      />

      <div className="relative w-full h-full container mx-auto px-4">
        {/* 🔹 Overlay content */}
        <div className="absolute top-1/2 left-1/2 md:left-[15%] transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 max-w-lg md:max-w-3xl text-center md:text-left">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">
            Welcome to the Home of Himalayan Titanz!
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold my-4">
            HIMALAYAN TITANZ
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
            Discover our players, relive the action, and join the Titanz journey
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Check Highlights
            </Button>
            <Button size="lg" variant="tertiary" className="w-full sm:w-auto">
              Meet the Squad
            </Button>
          </div>
        </div>

        {/* 🔹 Decorative cyan shapes */}
        <div className="absolute hidden md:flex top-[26%] -translate-y-1/2 left-[10%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 380 116"
            fill="none"
            className="w-full h-auto"
          >
            <path
              d="M6 65.8041V6H368L292 109.5"
              stroke="#0EEFFF"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute hidden md:flex bottom-[15%] -translate-y-1/2 left-[10%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 380 105"
            fill="none"
            className="w-full h-auto"
          >
            <path
              d="M77.6257 6.3418L12 98.4295H374V41.2716"
              stroke="#0EEFFF"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
