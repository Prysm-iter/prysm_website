// src/components/header.tsx
"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingCart } from "lucide-react";

/**
 * Floating glassmorphism header
 * - fixed, centered, pill-shaped
 * - backdrop blur (uses Tailwind utilities)
 * - responsive: desktop shows inline links, mobile uses existing Sheet
 *
 * Notes:
 * - Layout imports this named export: `Header` (keep it as a named export)
 * - The bottom spacer div prevents main content from sitting behind the fixed nav.
 */

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { name: "Home", href: "/" },
    { name: "Community", href: "/community" },
    { name: "Events", href: "/events" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* fixed wrapper that centers the pill across the page */}
      <div className="fixed inset-x-0 top-6 flex justify-center z-50 pointer-events-none">
        <nav
          className="pointer-events-auto w-[min(95%,1100px)] 
                     glass-nav backdrop-blur-md bg-slate-900/30 dark:bg-black/30
                     border border-white/6 rounded-full px-4 py-2 shadow-[0_10px_30px_rgba(2,6,23,0.6)]
                     flex items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          {/* left: logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="SOA Prysm Club" width={36} height={36} />
              <span className="hidden sm:inline font-semibold text-white">
                SOA Prysm Club
              </span>
            </Link>
          </div>

          {/* center: nav links (hidden on small screens) */}
          <div className="hidden md:flex gap-8 items-center">
            {nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-slate-200 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* right: controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* cart icon - hidden on smallest screens */}
            <ShoppingCart className="hidden sm:inline h-5 w-5 text-slate-100" />

            {/* CTA: Contact — styled as white pill like your reference */}
            <Link
              href="/contact"
              className="hidden md:inline-block rounded-full bg-white text-black px-4 py-2 text-sm font-medium shadow-sm"
            >
              Contact us
            </Link>

            {/* mobile menu trigger (Sheet) */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button
                    aria-label="Open menu"
                    className="p-2 rounded-md text-slate-100 bg-transparent"
                  >
                    <Menu />
                  </button>
                </SheetTrigger>

                <SheetContent side="right" className="w-full max-w-xs">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>

                  <nav className="flex flex-col gap-4 mt-4">
                    {nav.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>

      {/* spacer so the page content isn't covered by the fixed nav
          - height matches the nav height on desktop and mobile */}
      <div className="h-20 md:h-24" aria-hidden />
    </>
  );
}
