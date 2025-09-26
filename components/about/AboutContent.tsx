import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const AboutContent = () => {
  return (
    <div
      style={{
        background:
          "var(--Gradient-radial, radial-gradient(70.8% 70.8% at 50% 50%, #199AA2 0%, #194E52 100%))",
      }}
      className="py-10"
    >
      <div className="container py-10 md:flex  items-center ">
        <div className="flex-1 text-white">
          <h2 className="text-3xl mb-4 md:mb-6 text-center md:text-start md:text-4xl font-bold text-white">
            Behind the Jerseys
          </h2>
          <p className="text-xl text-center md:text-start">
            Himalayan Titanz is a cricket team built on passion, discipline, and
            teamwork. We bring together players from diverse backgrounds, each
            committed to playing fearless cricket and giving their best on and
            off the field.
          </p>
          <p className="text-xl text-center md:text-start">
            Our mission goes beyond matches — we aim to grow the sport, inspire
            young players, and create a strong community of fans who share our
            love for the game. Every run, every wicket, and every victory is
            dedicated to the people who support us.
          </p>
          <p className="text-xl text-center md:text-start">
            We&apos;re here to play hard, play fair, and build a legacy worth
            cheering for. Welcome to the Titanz family.
          </p>
          <Button
            size={"xl"}
            variant="secondary"
            className="my-4 flex mx-auto md:mx-0"
          >
            Meet the Squad
          </Button>
        </div>
        <div className="md:w-[250px] flex w-full h-[300px]">
          <Image
            src="/about/circket.jpg"
            alt="About Us"
            width={320}
            height={300}
            className=" rounded-lg h-full w-full mx-8 md:mx-2 md:ml-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
