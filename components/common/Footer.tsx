"use client";

import {
  FacebookIcon,
  InstagramIcon,
  Mail,
  MapPin,
  Music2,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{ fontFamily: "Open Sans, sans-serif" }}
      className="bg-gray-900 text-white py-8 px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Logo & Description */}
        <div className="flex flex-col md:items-start items-center space-y-4 md:flex-1">
          <div className="flex items-center space-x-2">
            <Image
              width={48}
              height={48}
              src="/logo.png"
              alt="Himalaya Logo"
              className="h-20 w-20 md:h-28 md:w-28"
            />
            <div>
              <p className="text-base italic">
                Powered by{" "}
                <Link
                  href="https://www.techgaun.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Techgaun Nepal
                </Link>
              </p>
            </div>
          </div>
          <div>
            <p className="text-base text-center md:text-start">
              Cricket from the heart of Nepal.
            </p>
            <p className="text-base text-center md:text-start">
              Conquering peaks and pitches with unstoppable passion.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center w-full md:flex-1">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="grid md:grid-cols-2 grid-cols-3 place-items-center w-full gap-x-4 md:gap-x-2 gap-y-2 text-base">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/squad" className="hover:underline">
                Squad
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-center w-full md:flex-1">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
            Contact
          </h3>
          <p className="text-base">
            <a
              href="mailto:info@himalayanteam.com"
              className="hover:underline flex items-center gap-2"
            >
              <Mail size={16} /> himalayantitanz@gmail.com
            </a>
          </p>
          <p className="text-base mt-2 flex items-center gap-2">
            <Phone size={16} />
            +977 980897057
          </p>
          <a
            href="https://maps.app.goo.gl/XogaaTGSmJjAhtt48"
            className="text-base mt-2 flex items-center gap-2"
          >
            <MapPin size={16} />
            Kathmandu, Nepal
          </a>
        </div>

        {/* Socials */}
        <div className="flex md:flex-col md:items-center justify-center mx-auto gap-2 ">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-2">
            <a
              href="https://ramro.link/himalayantitanz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={20}
                height={20}
                src="/ramrolink_logo.svg"
                alt="RamroLink"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579319049820"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@himalayantitanz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Music2 size={20} />
            </a>
            <a
              href="https://www.instagram.com/himalayantitanz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm mt-8 mb-2 text-center">
        <p>Copyright 2025. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
