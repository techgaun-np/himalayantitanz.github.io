"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[50rem] w-full flex items-center justify-center text-start text-white">
      {/* 🔹 Background Image */}
      <Image
        src="/homepage/hero-bg.jpg" // replace with your image
        alt="Himalayan Titanz"
        fill
        priority
        className="object-cover brightness-[0.6]"
      />
      <div className="relative w-full h-full container">
        {/* 🔹 Overlay content */}
        <div className="absolute top-[50%] left-[15%] z-10 max-w-3xl px-4 -translate-y-1/2">
          <p className="text-xl md:text-2xl lg:text-3xl font-light">
            Welcome to the Home of Himalayan Titanz!
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold my-4">
            HIMALAYAN TITANZ
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-6">
            Discover our players, relive the action, and join the Titanz journey
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-start">
            <Button size={"xl"} variant={"secondary"}>
              Check Highlights
            </Button>
            <Button size={"xl"} variant="tertiary">
              Meet the Squad
            </Button>
          </div>
        </div>

        {/* 🔹 Decorative cyan shapes */}
        <div className="absolute top-[26%] -translate-y-1/2 left-[10%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="380"
            height="116"
            viewBox="0 0 380 116"
            fill="none"
          >
            <path
              d="M6 65.8041V6H368L292 109.5"
              stroke="#0EEFFF"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute bottom-[15%] -translate-y-1/2 left-[10%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="380"
            height="105"
            viewBox="0 0 380 105"
            fill="none"
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
