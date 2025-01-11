"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navigation = [
  { name: "Android", href: "/android" },
  { name: "iOS", href: "/iOS" },
  { name: "PC", href: "/pc" },
  { name: "Features", href: "/#features" },
  { name: "Requirements", href: "/#requirements" },
  { name: "How to Download", href: "/#download" },
  { name: "S9 Lottery", href: "/#lottery" },
  { name: "Benefits", href: "/#benefits" },
  { name: "Games List", href: "/#games" },
  { name: "Support", href: "/#support" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="px-4 md:px-12 lg:px-24 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* <span className="font-bold">S9 Game</span> */}
            <Image
              src={require("@/public/S9 Game Header Logo.png")}
              alt="S9 Game"
              width={200}
              height={200}
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/60 hover:bg-background hover:text-foreground/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
