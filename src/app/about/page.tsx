import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="px-4 py-16 md:px-6 md:py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4" data-aos="fade-up">
          <Badge variant="secondary" className="px-4 py-2">
            About Us
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            About Prysm Club
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are a community of cybersecurity enthusiasts and developers dedicated to mastering both offensive and defensive security techniques while building production-ready applications from scratch.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card data-aos="fade-right" data-aos-delay="100">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                To empower students with comprehensive cybersecurity knowledge and practical app development skills, creating a platform where members learn to build secure, production-ready applications while receiving real-world feedback from peers and mentors.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card data-aos="fade-left" data-aos-delay="200">
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>
                To be the premier cybersecurity and development club that bridges the gap between theoretical knowledge and practical application, producing skilled professionals who can both build and secure the digital future.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* What We Do */}
        <div className="space-y-8">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our activities focus on cybersecurity mastery and production-ready application development
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card data-aos="fade-up" data-aos-delay="100">
              <CardHeader>
                <CardTitle className="text-lg">Security Workshops</CardTitle>
                <CardDescription>
                  Hands-on training in both offensive and defensive cybersecurity techniques, including penetration testing, vulnerability assessment, and security hardening.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card data-aos="fade-up" data-aos-delay="200">
              <CardHeader>
                <CardTitle className="text-lg">App Development Projects</CardTitle>
                <CardDescription>
                  Build production-ready websites and mobile applications from scratch using modern frameworks, with emphasis on secure coding practices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card data-aos="fade-up" data-aos-delay="300">
              <CardHeader>
                <CardTitle className="text-lg">Security Challenges</CardTitle>
                <CardDescription>
                  Capture-the-flag competitions and security challenges that test your skills in real-world scenarios and ethical hacking techniques.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card data-aos="fade-up" data-aos-delay="400">
              <CardHeader>
                <CardTitle className="text-lg">Code Reviews</CardTitle>
                <CardDescription>
                  Peer review sessions where members provide real-world feedback on projects, focusing on security, performance, and best practices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card data-aos="fade-up" data-aos-delay="500">
              <CardHeader>
                <CardTitle className="text-lg">Industry Mentorship</CardTitle>
                <CardDescription>
                  Connect with cybersecurity professionals and senior developers who provide guidance on career paths and industry best practices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card data-aos="fade-up" data-aos-delay="600">
              <CardHeader>
                <CardTitle className="text-lg">Production Deployment</CardTitle>
                <CardDescription>
                  Learn to deploy and maintain applications in production environments with proper security configurations and monitoring.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
