"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PlayerCard = () => {
  // Sample player data (replace with your actual image paths)
  const players = [
    {
      id: 1,
      name: "BHUWAN KARKI",
      title: "All-rounder",
      desc: "A consistent performer with both bat and ball, known for his sharp fielding and team spirit.",
      image: "/player/player1.png",
    },
    {
      id: 2,
      name: "TAPENDRA BISTA",
      title: "Bowler",
      desc: "A pace bowler with the ability to swing the ball both ways and break crucial partnerships.",
      image: "/player/player2.png",
    },
    {
      id: 3,
      name: "DINESH BISTA",
      title: "All-rounder",
      desc: "A reliable middle-order batsman who can chip in with vital overs when needed.",
      image: "/player/player3.png",
    },
    {
      id: 4,
      name: "DEEPAK RAJ JOSHI",
      title: "All-rounder",
      desc: "Brings balance to the team with aggressive batting and handy off-spin bowling.",
      image: "/player/player4.png",
    },
    {
      id: 5,
      name: "HIMAL DAUL YAL",
      title: "Batsman",
      desc: "Stylish top-order batsman with a solid technique and ability to anchor the innings.",
      image: "/player/player5.png",
    },
    {
      id: 6,
      name: "LACHHU KARKI",
      title: "All-rounder",
      desc: "A powerful hitter down the order who can also contribute with medium-pace bowling.",
      image: "/player/player6.png",
    },
    {
      id: 7,
      name: "SUMAN BISHOW KARMA",
      title: "Bowler",
      desc: "Specializes in spin bowling and is known for his control and wicket-taking ability.",
      image: "/player/player7.png",
    },
    {
      id: 8,
      name: "DEEPAK BOHARA",
      title: "Batsman",
      desc: "An aggressive batsman who thrives under pressure and plays attacking shots all around the ground.",
      image: "/player/player8.png",
    },
  ];

  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  const handlePlayerClick = (player: (typeof players)[0]) => {
    setSelectedPlayer(player);
  };

  const variants = {
    initial: { y: -600 },
    animate: { y: 0 },
    exit: { y: 600 },
  };

  return (
    <div className="relative overflow-hidden w-full bg-card ">
      <div className="relative grid-cols-2 grid md:flex justify-between container">
        {/* Background Design (Static) */}
        <div className="flex z-20 md:-translate-y-[10%] md:max-w-lg items-center md:translate-x-[10%] flex-col justify-center">
          <h1 className="text-white  text-xl md:text-6xl font-medium uppercase">
            {selectedPlayer.title}
          </h1>
          <p className="text-[#FFFFFFCC] uppercase  font-semibold text-lg md:text-3xl">
            {selectedPlayer.name}
          </p>
          <p className="text-primary-foreground ml-4  text-md md:text-lg">
            {selectedPlayer.desc}
          </p>
        </div>

        {/* Main Player Image with Animation */}
        <div className="relative h-[300px] md:h-[650px] flex justify-center items-end">
          <div className="z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlayer.id}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-end h-full"
              >
                <Image
                  src={selectedPlayer.image}
                  alt={selectedPlayer.name}
                  width={300}
                  height={300}
                  className="z-10 w-[150px] md:w-[300px]"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="absolute top-0 z-0 flex gap-2">
            <div className="bg-secondary-foreground h-[300px] md:h-[650px] w-10 md:w-20" />
            <div className="bg-secondary-foreground h-[300px] md:h-[650px] w-10 md:w-20" />
            <div className="bg-secondary-foreground h-[300px] md:h-[650px] w-10 md:w-20" />
            <div className="bg-secondary-foreground h-[300px] md:h-[650px] w-10 md:w-20" />
          </div>
        </div>

        {/* Player Circles */}
        <div className=" grid h-max mt-12 z-20 col-span-2 mx-4 ml-4 grid-cols-4 md:grid-cols-2 gap-2 md:gap-4">
          {players.map((player) => (
            <div
              key={player.id}
              onClick={() => handlePlayerClick(player)}
              className="cursor-pointer flex justify-center items-center border-2 border-white hover:border-yellow-300 transition w-16 md:w-24 h-16 md:h-24 rounded-full overflow-hidden"
            >
              <Image
                src={player.image}
                alt={player.name}
                width={80}
                height={80}
                className=" w-10 md:w-16 "
              />
            </div>
          ))}
        </div>
        {/* Background big text */}
        <h1
          style={{
            fontFamily: "Allerta Stencil",
          }}
          className="absolute opacity-50 bottom-0 z-10 left-1/2 -translate-x-1/2 text-[250px] font-bold text-white/10 tracking-wide"
        >
          PLAYERS
        </h1>
      </div>
      <div className="absolute h-[700px] rotate-[-10deg] opacity-75 z-0 top-[-100px] md:top-0 left-0 w-full overflow-hidden">
        <Image
          src="/nepal-map.svg"
          alt="gradient"
          width={1200}
          height={100}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default PlayerCard;
