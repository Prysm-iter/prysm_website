import { NewsletterSection } from "@/components/newsletter-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* <div style={{ width: "100%", height: "1000px", position: "absolute" }} className="-top-1/3">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
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
                  className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                    <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 p-16 rounded-3xl border border-primary/20 backdrop-blur-xl bg-white/5 dark:bg-black/5 shadow-2xl shadow-black/20">
                      <div className="text-center space-y-6">
                        <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl">
                          <Image
                            src={"logo.svg"}
                            alt="Prysm Club Logo"
                            width={128}
                            height={128}
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

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card
                className="text-center overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src="/cybersecurity-training.svg"
                    alt="Cybersecurity Training"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Cybersecurity Training</CardTitle>
                  <CardDescription>
                    Learn both offensive and defensive security techniques
                    through hands-on workshops and real-world scenarios
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                className="text-center overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src="/app-development.svg"
                    alt="App Development"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>App Development</CardTitle>
                  <CardDescription>
                    Build production-ready websites and mobile applications from
                    scratch with modern frameworks and tools
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                className="text-center overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src="/peer-feedback.svg"
                    alt="Peer Feedback"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Peer Feedback</CardTitle>
                  <CardDescription>
                    Get real-world feedback on your projects from experienced
                    club members and industry mentors
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                className="text-center overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src="/hands-on-projects.svg"
                    alt="Hands-on Projects"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Hands-on Projects</CardTitle>
                  <CardDescription>
                    Work on real projects that combine security principles with
                    modern development practices
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-muted/50 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm"></div>
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
