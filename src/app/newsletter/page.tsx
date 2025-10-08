import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Archive, Calendar, TrendingUp, Users } from "lucide-react";

export default function NewsletterPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-8 md:pt-40">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* <Badge variant="secondary" className="mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Newsletter
          </Badge> */}
          <h1 className="text-4xl font-bold mb-4">Stay Updated</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the latest updates on our events, projects, and community
            highlights delivered straight to your inbox.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle>Subscribe to Our Newsletter</CardTitle>
            <CardDescription>
              Join 1,000+ subscribers and never miss an update from Prysm Club.
            </CardDescription>
          </CardHeader>
          <CardContent className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="name">Name (Optional)</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="w-full">
                Subscribe Now
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Newsletter Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Event Updates</h3>
              <p className="text-sm text-muted-foreground">
                Be the first to know about upcoming workshops, hackathons, and
                meetups.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Tech Insights</h3>
              <p className="text-sm text-muted-foreground">
                Curated articles and insights on the latest technology trends
                and innovations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Community Highlights</h3>
              <p className="text-sm text-muted-foreground">
                Spotlight on member achievements, projects, and success stories.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Archive */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Archive className="w-5 h-5" />
              Newsletter Archive
            </CardTitle>
            <CardDescription>
              Browse our previous newsletters and catch up on what you might
              have missed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">
                    December 2024 - Year in Review
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Celebrating our achievements and looking ahead to 2025
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Read
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">
                    November 2024 - AI Workshop Series
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Recap of our successful AI and Machine Learning workshops
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Read
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">
                    October 2024 - Hackathon Winners
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Announcing the winners of our annual innovation hackathon
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Read
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
