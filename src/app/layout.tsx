import { AOSInit } from "@/components/aos-init";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prysm Club - Illuminating Innovation",
  description:
    "Join Prysm Club - where minds meet technology. Fostering innovation, collaboration, and building the future through cutting-edge projects and community engagement.",
  keywords: [
    "college club",
    "technology",
    "innovation",
    "programming",
    "community",
  ],
  authors: [{ name: "Prysm Club" }],
  openGraph: {
    title: "Prysm Club - Illuminating Innovation",
    description:
      "Join Prysm Club - where minds meet technology. Fostering innovation, collaboration, and building the future.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AOSInit />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
