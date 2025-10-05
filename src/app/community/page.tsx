import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageCircle, Github, Calendar, Trophy, Heart } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Community
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with like-minded innovators, collaborate on projects, and be part of a vibrant community that&apos;s shaping the future of technology.
          </p>
        </div>

        {/* Community Platforms */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Discord Server
              </CardTitle>
              <CardDescription>
                Join our active Discord community for real-time discussions, project collaboration, and networking.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Join Discord</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub Organization
              </CardTitle>
              <CardDescription>
                Contribute to open-source projects, share your code, and collaborate with fellow developers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">View GitHub</Button>
            </CardContent>
          </Card>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Events</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Heart className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Passion</div>
            </CardContent>
          </Card>
        </div>

        {/* Community Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>Community Guidelines</CardTitle>
            <CardDescription>
              Help us maintain a welcoming and inclusive environment for everyone.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Be Respectful</h4>
                <p className="text-sm text-muted-foreground">
                  Treat all community members with respect and kindness.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Share Knowledge</h4>
                <p className="text-sm text-muted-foreground">
                  Help others learn and grow by sharing your expertise.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Stay On Topic</h4>
                <p className="text-sm text-muted-foreground">
                  Keep discussions relevant to technology and innovation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Collaborate</h4>
                <p className="text-sm text-muted-foreground">
                  Work together on projects and support each other&apos;s goals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}