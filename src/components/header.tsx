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
import {
  Calendar,
  Home,
  Info,
  Mail,
  Menu,
  Phone,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Community", href: "/community", icon: Users },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Newsletter", href: "/newsletter", icon: Mail },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Phone },
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
              : "w-full max-w-6xl rounded-full px-8 py-4 bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl shadow-black/20"
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
            <span
              className={`font-bold transition-all duration-300 ${
                isScrolled ? "text-base" : "text-lg"
              }`}
            >
              SOA Prysm Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav
              className={`flex items-center transition-all duration-300 ${
                isScrolled ? "space-x-4" : "space-x-6"
              }`}
            >
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
                  className="hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
                >
                  <Menu
                    className={`transition-all duration-300 ${
                      isScrolled ? "h-4 w-4" : "h-5 w-5"
                    }`}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[320px] sm:w-[380px] bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-white/20 dark:border-white/10 shadow-2xl [&>button:first-of-type]:hidden"
              >
                <SheetHeader className="border-b border-white/20 dark:border-white/10 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/logo.svg"
                        alt="Prysm Club logo"
                        width={36}
                        height={36}
                        className="rounded-full"
                      />
                      <div>
                        <SheetTitle className="text-xl font-bold text-left">
                          SOA Prysm Club
                        </SheetTitle>
                        <p className="text-sm text-muted-foreground text-left">
                          Cybersecurity & Development
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="hover:bg-white/20 dark:hover:bg-black/20 h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </SheetHeader>

                <div className="flex flex-col">
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col">
                    {navigationItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-center space-x-4 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-white/20 dark:hover:bg-black/20 hover:scale-105 active:scale-95"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <span className="group-hover:text-primary transition-colors duration-300">
                            {item.name}
                          </span>
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Footer Section */}
                  <div className="bottom-0 fixed pt-8 border-t">
                    <div className="px-4 py-3">
                      <p className="text-sm font-medium text-center">
                        Join our community of cybersecurity enthusiasts
                      </p>
                      <p className="text-xs text-muted-foreground text-center mt-1">
                        Building secure applications together
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
