import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    label: "Follow us on GitHub",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    label: "Follow us on Instagram",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    label: "Connect with us on LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background z-50">
      <div className="px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Club Logo and Motto */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Prysm Club logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold text-lg">SOA Prysm Club</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Illuminating minds, fostering innovation, and building the future
              through technology and collaboration.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="font-semibold text-lg">Connect With Us</h3>
            <div className="grid gap-4 grid-cols-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    asChild
                    className="justify-start space-x-2 h-auto py-3"
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="text-xs">{social.name}</span>
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prysm Club. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
