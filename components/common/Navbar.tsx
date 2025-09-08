"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="w-full   text-white shadow-md">
      {/* 🔹 Top strip with looping text */}
      <div className="bg-secondary/60 text-black py-1 overflow-hidden relative">
        <div className="whitespace-nowrap animate-marquee font-medium">
          ⚡ Welcome to Himalayan Titans! | Join our Squad Today! | Stay tuned
          for updates ⚡
        </div>
      </div>

      {/* 🔹 Navbar */}
      <nav
        style={{ fontFamily: "Bebas Neue" }}
        className="flex bg-primary/60 absolute z-20 w-full uppercase items-center justify-center px-6 py-1"
      >
        {/* Left Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="hover:text-secondary">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/squad" className="hover:text-cyan-400">
                Squad
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/gallery"
                className="hover:text-cyan-400"
              >
                Gallery
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Center Logo */}
        <div className="flex-shrink-0 md:mx-12">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Himalayan Titans"
              width={60}
              height={60}
              className="w-12 h-12 md:w-20 md:h-20"
            />
          </Link>
        </div>

        {/* Right Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="/blog" className="hover:text-cyan-400">
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="hover:text-cyan-400">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="hover:text-cyan-400"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
