import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Github,
  Heart,
  MessageCircle,
  Trophy,
  Users,
} from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-8 md:pt-40">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Community
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with cybersecurity enthusiasts and developers, collaborate on secure applications, and be part of a community dedicated to mastering both offensive and defensive security techniques.
          </p>
        </div>

        {/* Community Platforms */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card data-aos="fade-right" data-aos-delay="100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Discord Server
              </CardTitle>
              <CardDescription>
                Join our Discord community for cybersecurity discussions, code reviews, and collaborative security projects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Join Discord</Button>
            </CardContent>
          </Card>

          <Card data-aos="fade-left" data-aos-delay="200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub Organization
              </CardTitle>
              <CardDescription>
                Contribute to security tools, share secure coding practices, and collaborate on production-ready applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View GitHub
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center" data-aos="fade-up" data-aos-delay="100">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </CardContent>
          </Card>

          <Card className="text-center" data-aos="fade-up" data-aos-delay="200">
            <CardContent className="pt-6">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Events</div>
            </CardContent>
          </Card>

          <Card className="text-center" data-aos="fade-up" data-aos-delay="300">
            <CardContent className="pt-6">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </CardContent>
          </Card>

          <Card className="text-center" data-aos="fade-up" data-aos-delay="400">
            <CardContent className="pt-6">
              <Heart className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Passion</div>
            </CardContent>
          </Card>
        </div>

        {/* Community Guidelines */}
        <Card data-aos="fade-up" data-aos-delay="300">
          <CardHeader>
            <CardTitle>Community Guidelines</CardTitle>
            <CardDescription>
              Help us maintain a secure, ethical, and collaborative learning environment for all members.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div data-aos="fade-up" data-aos-delay="400">
                <h4 className="font-semibold mb-2">Be Respectful</h4>
                <p className="text-sm text-muted-foreground">
                  Treat all community members with respect and kindness.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="500">
                <h4 className="font-semibold mb-2">Ethical Security</h4>
                <p className="text-sm text-muted-foreground">
                  Practice responsible disclosure and ethical hacking principles in all security activities.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <h4 className="font-semibold mb-2">Code Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Focus on secure coding practices and production-ready application development.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="700">
                <h4 className="font-semibold mb-2">Constructive Feedback</h4>
                <p className="text-sm text-muted-foreground">
                  Provide meaningful, actionable feedback on projects to help members improve their skills.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
