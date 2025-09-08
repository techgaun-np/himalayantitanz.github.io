"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PlayerCard = () => {
  // Sample player data (replace with your actual image paths)
  const players = [
    {
      id: 1,
      name: "Player 1",
      title: "Forward",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/player/player1.png",
    },
    {
      id: 2,
      name: "Player 2",
      title: "Midfielder",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/player/player2.png",
    },
    {
      id: 3,
      name: "Player 3",
      title: "Defender",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/player/player3.png",
    },
    {
      id: 4,
      name: "Player 4",
      title: "Goalkeeper",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/player/player4.png",
    },
    {
      id: 5,
      name: "Player 5",
      title: "Forward",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/player/player5.png",
    },
    {
      id: 6,
      name: "Player 6",
      title: "Midfielder",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/player/player6.png",
    },
    {
      id: 7,
      name: "Player 7",
      title: "Defender",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/player/player7.png",
    },
    {
      id: 8,
      name: "Player 8",
      title: "Goalkeeper",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/player/player8.png",
    },
  ];

  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  const handlePlayerClick = (player: (typeof players)[0]) => {
    setSelectedPlayer(player);
  };

  const variants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <div className="relative overflow-hidden w-full bg-card ">
      <div className="relative flex justify-between container">
        {/* Background Design (Static) */}
        <div className="flex z-20 -translate-y-[10%] max-w-lg items-center translate-x-[10%] flex-col justify-center">
          <h1 className="text-white text-6xl font-medium uppercase">
            {selectedPlayer.title}
          </h1>
          <p className="text-[#FFFFFFCC] uppercase font-semibold text-3xl">
            {selectedPlayer.name}
          </p>
          <p className="text-primary-foreground text-lg">
            {selectedPlayer.desc}
          </p>
        </div>

        {/* Main Player Image with Animation */}
        <div className="relative  h-[650px] flex justify-center items-end z-20">
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
                className="z-10"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-0 z-0 flex gap-2">
            <div className="bg-secondary-foreground h-[650px] w-20" />
            <div className="bg-secondary-foreground h-[650px] w-20" />
            <div className="bg-secondary-foreground h-[650px] w-20" />
            <div className="bg-secondary-foreground h-[650px] w-20" />
          </div>
        </div>

        {/* Player Circles */}
        <div className=" grid h-max mt-12  grid-cols-2 gap-4">
          {players.map((player) => (
            <div
              key={player.id}
              onClick={() => handlePlayerClick(player)}
              className="cursor-pointer  border-2 border-white hover:border-yellow-300 transition w-24 h-24 rounded-full overflow-hidden"
            >
              <Image
                src={player.image}
                alt={player.name}
                width={80}
                height={80}
                className=" w-16 "
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
      <div className="absolute h-[700px] rotate-[-10deg] opacity-75 z-0 top-0 left-0 w-full overflow-hidden">
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
