"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactContent() {
  return (
    <section
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(180deg, #009099 0%, #003033 100%)",
      }}
      className="w-full text-white py-10 px-6"
    >
      {/* Title & Subtitle */}
      <div className="text-center mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          We&apos;d Love to Hear From You
        </h2>
        <p className="text-sm md:text-base text-gray-200 mt-2">
          Whether it&apos;s a cheer, a query, or a partnership — we&apos;re all
          ears.
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:mt-10 my-20 md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex flex-col gap-8 md:w-1/3">
          <div className="flex items-start gap-4">
            <div className="bg-secondary rounded-full p-3">
              <Mail className="w-6  h-6 text-[#00181A]" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Drop Message</h3>
              <p className="text-sm">info@himaliantitan.com</p>
              <p className="text-sm">info@techgaunnepal.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-secondary rounded-full p-3">
              <MapPin className="w-6 h-6 text-[#00181A]" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Where to Find Us</h3>
              <p className="text-sm">Chandragiri - 13, Ktm</p>
              <p className="text-sm">Another location if there</p>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center md:w-1/3">
          <Image
            src="/contact/contact-player.png" // 👈 replace with your cricket player image
            alt="Cricket Player"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-8 md:w-1/3">
          <div className="flex items-start gap-4">
            <div className="bg-secondary rounded-full p-3">
              <Phone className="w-6 h-6 text-[#00181A]" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Call Anytime</h3>
              <p className="text-sm">+977 9841123456</p>
              <p className="text-sm">01 4233698</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-secondary rounded-full p-3">
              <Clock className="w-6 h-6 text-[#00181A]" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Availability Hours</h3>
              <p className="text-sm">Mon - Fri (9AM - 9PM)</p>
              <p className="text-sm">Sat - Sun (9AM - 2PM)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
