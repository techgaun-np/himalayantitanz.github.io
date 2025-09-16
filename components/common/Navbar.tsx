"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path
      ? "text-secondary font-bold underline-offset-2 md:underline-offset-[28px]"
      : "hover:text-cyan-400";

  const leftLinks = [
    { href: "/", label: "Home" },
    { href: "/squad", label: "Squad" },
    { href: "/gallery", label: "Gallery" },
  ];

  const rightLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full text-white shadow-md relative">
      {/* Top strip */}
      <div className="bg-secondary/60 text-black py-1 overflow-hidden relative">
        <div className="whitespace-nowrap animate-marquee font-medium">
          ⚡Titanz vs Mixmandu – Won by … | Next Match: Sept 15 – Titanz vs Maya
          Hetauda Royals, Royal Sports Park ⚡
        </div>
      </div>

      {/* Navbar */}
      <nav
        style={{ fontFamily: "Bebas Neue" }}
        className="flex bg-primary z-20 w-full uppercase items-center justify-between md:justify-center px-6 py-1"
      >
        {/* Left links - desktop only */}
        <div className="hidden md:flex gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {leftLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(isActive(link.href), "font-bebas")}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Center Logo */}
        <div className="flex-shrink-0 md:mx-3">
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

        {/* Right links - desktop only */}
        <div className="hidden md:flex gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {rightLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(isActive(link.href), "font-bebas")}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Drawer
            direction="right"
            open={drawerOpen}
            onOpenChange={setDrawerOpen}
          >
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </DrawerTrigger>
            <DialogTitle className="sr-only"></DialogTitle>

            <DrawerContent className=" p-6 bg-primary/90 text-white">
              <div className="flex justify-end mb-6">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDrawerOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4">
                {leftLinks.concat(rightLinks).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(isActive(link.href), "font-bebas")}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
}
