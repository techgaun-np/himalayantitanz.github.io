"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-center text-white">
      {/* 🔹 Background Image */}
      <Image
        src="/homepage/hero-bg.jpg" // replace with your image
        alt="Himalayan Titanz"
        fill
        priority
        className="object-cover brightness-75"
      />

      {/* 🔹 Overlay content */}
      <div className="relative z-10 max-w-3xl px-4">
        <p className="text-lg md:text-xl font-light">
          Welcome to the Home of Himalayan Titanz!
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold my-4">
          HIMALAYAN TITANZ
        </h1>

        <p className="text-base md:text-lg text-gray-200 mb-6">
          Discover our players, relive the action, and join the Titanz journey
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Button className="bg-cyan-500 text-black hover:bg-cyan-400">
            Check Highlights
          </Button>
          <Button
            variant="outline"
            className="text-white border-cyan-500 hover:bg-cyan-500 hover:text-black"
          >
            Meet the Squad
          </Button>
        </div>
      </div>

      {/* 🔹 Decorative cyan shapes */}
      <div className="absolute top-20 left-10 w-12 h-12 border-t-4 border-l-4 border-cyan-500"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 border-b-4 border-r-4 border-cyan-500"></div>
    </section>
  );
}
