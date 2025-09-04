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
    <header className="w-full bg-[#0a1a1a] text-white shadow-md">
      {/* 🔹 Top strip with looping text */}
      <div className="bg-cyan-500 text-black py-1 overflow-hidden relative">
        <div className="whitespace-nowrap animate-marquee font-medium">
          ⚡ Welcome to Himalayan Titans! | Join our Squad Today! | Stay tuned
          for updates ⚡
        </div>
      </div>

      {/* 🔹 Navbar */}
      <nav className="flex items-center justify-between px-6 py-3">
        {/* Left Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <NavigationMenuLink className="hover:text-cyan-400">
                  Home
                </NavigationMenuLink>
              </Link>
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
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Himalayan Titans"
              width={60}
              height={60}
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
