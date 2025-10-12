"use client";

import { NewsletterSection } from "@/components/newsletter-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const offerCards = [
    {
      image: "/cybersecurity-training.svg",
      title: "Cybersecurity Training",
      description:
        "Learn both offensive and defensive security techniques through hands-on workshops and real-world scenarios",
      delay: "100",
    },
    {
      image: "/app-development.svg",
      title: "App Development",
      description:
        "Build production-ready websites and mobile applications from scratch with modern frameworks and tools",
      delay: "200",
    },
    {
      image: "/peer-feedback.svg",
      title: "Peer Feedback",
      description:
        "Get real-world feedback on your projects from experienced club members and industry mentors",
      delay: "300",
    },
    {
      image: "/hands-on-projects.svg",
      title: "Hands-on Projects",
      description:
        "Work on real projects that combine security principles with modern development practices",
      delay: "400",
    },
  ];
  return (
    <div className="flex flex-col">
      {/* <div
        style={{ position: "absolute", width: "100%", height: "725px" }}
        className="pt-[8%]"
      >
        <DotGrid
          dotSize={2}
          gap={12}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={150}
          shockStrength={3}
          resistance={750}
          returnDuration={1.5}
        />
      </div> */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              {/* Mobile Layout - Centered */}
              <div className="flex flex-col items-center text-center space-y-8 lg:hidden">
                <Badge
                  variant="default"
                  className="px-4 py-2 dark:text-white bg-white/10 dark:bg-black/10 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-lg shadow-black/10"
                  data-aos="fade-down"
                >
                  Welcome to Innovation
                </Badge>
                <h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Illuminating Minds,
                  <span className="text-primary block">
                    Fostering Innovation
                  </span>
                </h1>
                <p
                  className="text-xl text-[#d1d1d1] max-w-2xl leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Join Prysm Club where cybersecurity meets innovation. Master
                  both offensive and defensive security techniques while
                  building production-ready applications from scratch with
                  real-world feedback from fellow members.
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Button size="lg" asChild>
                    <Link href="/about">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/events">View Events</Link>
                  </Button>
                </div>
              </div>

              {/* Desktop Layout - Banner Left, Text Right */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                {/* Left Side - Banner/Logo */}
                <div className="flex justify-center" data-aos="fade-right">
                  <div className="relative">
                    <div className="absolute inset-0 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full"></div>
                    <div className="relative dark:bg-black/10 p-16 rounded-3xl border border-primary/20 backdrop-blur-xl bg-white/5 shadow-2xl shadow-black/20">
                      <div className="text-center space-y-6">
                        <div className="h-full mx-auto rounded-full flex items-center justify-center">
                          <Image
                            src={"logo.svg"}
                            alt="Prysm Club Logo"
                            width={156}
                            height={156}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Text Content */}
                <div
                  className="space-y-8"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 w-fit bg-white/10 dark:bg-black/10 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-lg shadow-black/10"
                  >
                    Welcome to Innovation
                  </Badge>
                  <h1 className="text-5xl font-bold tracking-tighter xl:text-6xl">
                    Illuminating Minds,
                    <span className="text-primary block">
                      Fostering Innovation
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Join Prysm Club where cybersecurity meets innovation. Master
                    both offensive and defensive security techniques while
                    building production-ready applications from scratch with
                    real-world feedback from fellow members.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <Link href="/about">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/events">View Events</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="text-center space-y-4 mb-16" data-aos="fade-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What We Offer
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Master cybersecurity fundamentals and build production-ready
                applications with hands-on learning and peer feedback
              </p>
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {offerCards.map((card, index) => (
                    <div key={index} className="flex-[0_0_85%] min-w-0 px-2">
                      <Card
                        className="text-center overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:scale-105 h-full"
                        data-aos="fade-up"
                        data-aos-delay={card.delay}
                      >
                        <div className="relative h-32 w-full">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg">
                            {card.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {card.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "bg-primary scale-125"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {offerCards.map((card, index) => (
                <Card
                  key={index}
                  className="text-center overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={card.delay}
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 lg:py-20 relative">
          {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm"></div> */}
          <div className="px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-12 shadow-2xl shadow-black/20">
                <div className="text-center space-y-6" data-aos="fade-up">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Master Cybersecurity & Development?
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Join our community of security enthusiasts and developers.
                    Start building production-ready applications while learning
                    to protect them.
                  </p>
                  <div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <Button size="lg" asChild>
                      <Link href="/community">Join Community</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <div data-aos="fade-up">
          <NewsletterSection />
        </div>
      </div>
    </div>
  );
}
