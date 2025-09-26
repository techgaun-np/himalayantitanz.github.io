"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative h-[40rem] md:h-[42rem] w-full flex items-center justify-center text-start text-white overflow-hidden">
      {/* 🔹 Background Image with zoom animation */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/homepage/hero-bg.jpg"
          alt="Himalayan Titanz"
          fill
          priority
          className="object-cover object-top brightness-[0.4]"
        />
      </motion.div>

      <div className="relative w-full h-full container mx-auto px-4">
        {/* 🔹 Overlay content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-[45%] left-1/2 md:left-[15%] transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 w-full px-3 md:px-0 max-w-lg md:max-w-3xl text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium"
          >
            Welcome to the Home of Himalayan Titanz!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold my-4"
          >
            HIMALAYAN TITANZ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 mb-6"
          >
            Discover our players, relive the action, and join the Titanz journey
          </motion.p>

          {/* Buttons with animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => {
                  router.push("/gallery");
                }}
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Check Highlights
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => {
                  router.push("/squad");
                }}
                size="lg"
                variant="tertiary"
                className="w-full sm:w-auto"
              >
                Meet the Squad
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* 🔹 Decorative cyan shapes */}{" "}
        <div className="absolute hidden md:flex top-[20%] -translate-y-1/2 left-[10%]">
          {" "}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 380 116"
            fill="none"
            className="w-full h-auto"
          >
            {" "}
            <motion.path
              d="M6 65.8041V6H368L292 109.5"
              stroke="#0EEFFF"
              strokeWidth="14"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />{" "}
          </motion.svg>{" "}
        </div>{" "}
        <motion.div className="absolute hidden md:flex bottom-[15%] -translate-y-1/2 left-[10%]">
          {" "}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 380 105"
            fill="none"
            className="w-full h-auto"
          >
            {" "}
            <motion.path
              d="M77.6257 6.3418L12 98.4295H374V41.2716"
              stroke="#0EEFFF"
              strokeWidth="14"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>{" "}
        </motion.div>{" "}
      </div>
    </section>
  );
}
