"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Community", href: "/community" },
  { name: "Events", href: "/events" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div
        className={`
          transition-all duration-500 ease-out
          ${
            isScrolled
              ? "w-full max-w-4xl rounded-full px-6 py-3 bg-white/20 dark:bg-black/20 backdrop-blur-2xl border border-white/30 dark:border-white/20 shadow-2xl shadow-black/25"
              : "w-full max-w-6xl rounded-2xl px-8 py-4 bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl shadow-black/20"
          }
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Prysm Club logo"
              width={isScrolled ? 28 : 32}
              height={isScrolled ? 28 : 32}
              className="rounded-full transition-all duration-300"
            />
            <span className={`font-bold transition-all duration-300 ${isScrolled ? "text-base" : "text-lg"}`}>
              SOA Prysm Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className={`flex items-center transition-all duration-300 ${isScrolled ? "space-x-4" : "space-x-6"}`}>
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                    isScrolled ? "text-xs" : "text-sm"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="Open menu"
                  className="hover:bg-white/20 dark:hover:bg-black/20"
                >
                  <Menu className={`transition-all duration-300 ${isScrolled ? "h-4 w-4" : "h-5 w-5"}`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/10 dark:bg-black/10 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/20">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  {/* Mobile Logo */}
                  <Link
                    href="/"
                    className="flex items-center space-x-2 pb-4 border-b border-white/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src="/logo.svg"
                      alt="Prysm Club logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="font-bold text-lg">Prysm Club</span>
                  </Link>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-primary py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
