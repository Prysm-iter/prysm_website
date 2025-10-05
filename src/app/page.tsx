import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NewsletterSection } from "@/components/newsletter-section";
import { ArrowRight, Calendar, Code, Lightbulb, Users } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted/20">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2">
              Welcome to Innovation
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Illuminating Minds,
              <span className="text-primary block">Fostering Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Join Prysm Club where technology meets creativity. We&apos;re building
              the future through collaborative projects, cutting-edge workshops,
              and a community of passionate innovators.
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
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What We Offer
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the opportunities that await you in our vibrant tech
              community
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Coding Workshops</CardTitle>
                <CardDescription>
                  Hands-on sessions covering the latest technologies and
                  programming languages
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Innovation Projects</CardTitle>
                <CardDescription>
                  Collaborative projects that solve real-world problems and push
                  boundaries
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Connect with like-minded peers and build lasting professional
                  relationships
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Regular Events</CardTitle>
                <CardDescription>
                  Tech talks, hackathons, and networking events throughout the
                  academic year
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Join the Innovation?
            </h2>
            <p className="text-muted-foreground text-lg">
              Be part of a community that&apos;s shaping the future of technology.
              Connect, learn, and build amazing things together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
