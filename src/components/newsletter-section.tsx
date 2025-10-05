"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Send, CheckCircle, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-background/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold mb-4">
                Stay in the Loop
              </CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                Join our newsletter and be the first to know about upcoming events, 
                exclusive workshops, tech insights, and community highlights. 
                No spam, just valuable content delivered to your inbox.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Newsletter Benefits */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Latest Tech Trends</h4>
                      <p className="text-sm text-muted-foreground">
                        Curated insights on emerging technologies and industry developments
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Exclusive Events</h4>
                      <p className="text-sm text-muted-foreground">
                        Early access to workshops, hackathons, and networking events
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Community Spotlights</h4>
                      <p className="text-sm text-muted-foreground">
                        Member achievements, project showcases, and success stories
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subscription Form */}
                <div className="space-y-6">
                  {isSubscribed ? (
                    <div className="text-center p-8 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                      <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                        Successfully Subscribed!
                      </h3>
                      <p className="text-sm text-green-600 dark:text-green-300">
                        Welcome to the Prysm community. Check your inbox for a confirmation email.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="newsletter-email" className="text-base font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="newsletter-email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-2 h-12 text-base"
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-12 text-base font-semibold"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Subscribe to Newsletter
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        By subscribing, you agree to receive emails from Prysm Club. 
                        You can unsubscribe at any time.
                      </p>
                    </form>
                  )}
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Join <span className="font-semibold text-primary">1,000+</span> subscribers
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}