import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="px-4 py-16 md:px-6 md:py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="px-4 py-2">
            About Us
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            About Prysm Club
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are a community of passionate technologists, innovators, and
            dreamers working together to shape the future through technology and
            collaboration.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                To foster innovation and technological excellence by providing a
                platform for students to collaborate, learn, and create
                impactful solutions that address real-world challenges.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>
                To be the leading college technology club that bridges the gap
                between academic learning and industry innovation, empowering
                the next generation of tech leaders.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* What We Do */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our activities span across various domains of technology and
              innovation
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technical Workshops</CardTitle>
                <CardDescription>
                  Regular hands-on sessions covering cutting-edge technologies,
                  programming languages, and development frameworks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Innovation Projects</CardTitle>
                <CardDescription>
                  Collaborative projects that tackle real-world problems and
                  push the boundaries of what&apos;s possible with technology.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hackathons</CardTitle>
                <CardDescription>
                  Intensive coding competitions that challenge participants to
                  build innovative solutions within tight deadlines.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tech Talks</CardTitle>
                <CardDescription>
                  Guest speakers from industry and academia sharing insights on
                  emerging technologies and career opportunities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mentorship</CardTitle>
                <CardDescription>
                  Peer-to-peer learning and guidance from senior members and
                  industry professionals to accelerate growth.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Building</CardTitle>
                <CardDescription>
                  Creating lasting connections and professional networks that
                  extend beyond college years.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
