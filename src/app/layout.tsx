import { AOSInit } from "@/components/aos-init";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Prism from "@/components/Prism";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxygen, Oxygen_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oxygen = Oxygen({
  variable: "--font-oxygen",
  weight: "400",
  subsets: ["latin"],
});

const oxygenMono = Oxygen_Mono({
  variable: "--font-oxygen-mono",
  weight: "400",
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
        className={`${oxygen.variable} ${oxygenMono.variable} antialiased min-h-screen flex flex-col dark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AOSInit />
          <Header />
          <div
            style={{ position: "fixed", width: "100%", height: "100%" }}
            // className="pt-[8%]"
          >
            {/* <DotGrid
              dotSize={2}
              gap={12}
              baseColor="#5227FF"
              activeColor="#5227FF"
              proximity={120}
              shockRadius={150}
              shockStrength={3}
              resistance={750}
              returnDuration={1.5}
            /> */}

            <Prism
              animationType="3drotate"
              timeScale={0.5}
              height={3.5}
              baseWidth={5.5}
              scale={2.1}
              hueShift={0}
              transparent={true}
              colorFrequency={1}
              noise={0}
              glow={1}
            />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
