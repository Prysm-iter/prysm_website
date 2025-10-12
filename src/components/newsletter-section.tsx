"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  CheckCircle,
  Globe,
  Mail,
  Send,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <section className="py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" /> */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" /> */}

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <Card className="dark:bg-black/50 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl relative overflow-hidden ">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-lg blur-sm" />
            <div className="relative rounded-lg m-[1px]">
              <CardHeader className="text-center pb-8 pt-12">
                <div className="flex justify-center mb-6" data-aos="fade-up">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50" />
                    <div className="relative p-4 rounded-full bg-gradient-to-r from-primary to-secondary">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle
                  className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Stay Connected with Security & Development
                </CardTitle>
                <CardDescription
                  className="text-lg max-w-3xl mx-auto leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Join our exclusive newsletter for cybersecurity insights, secure coding practices, and production-ready development tips. Stay ahead in the world of ethical hacking and application security.
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Newsletter Benefits */}
                  <div className="space-y-8">
                    <div
                      className="text-center lg:text-left mb-8"
                      data-aos="fade-right"
                    >
                      <h3 className="text-2xl font-bold mb-2">
                        What You&apos;ll Get
                      </h3>
                      <p className="text-muted-foreground">
                        Exclusive content delivered straight to your inbox
                      </p>
                    </div>

                    <div className="grid gap-6">
                      <div
                        className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10"
                        data-aos="fade-right"
                        data-aos-delay="100"
                      >
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 mt-1">
                          <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">
                            Security Insights
                          </h4>
                          <p className="text-muted-foreground">
                            Latest cybersecurity threats, defense strategies, and ethical hacking techniques from industry experts
                          </p>
                        </div>
                      </div>

                      <div
                        className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-secondary/5 to-transparent border border-secondary/10"
                        data-aos="fade-right"
                        data-aos-delay="200"
                      >
                        <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 mt-1">
                          <Sparkles className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">
                            Security Workshops
                          </h4>
                          <p className="text-muted-foreground">
                            Early access to cybersecurity training sessions, CTF competitions, and hands-on security labs
                          </p>
                        </div>
                      </div>

                      <div
                        className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10"
                        data-aos="fade-right"
                        data-aos-delay="300"
                      >
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 mt-1">
                          <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">
                            Project Showcases
                          </h4>
                          <p className="text-muted-foreground">
                            Member security projects, app development success stories, and production deployment highlights
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subscription Form */}
                  <div className="space-y-8" data-aos="fade-left">
                    {isSubscribed ? (
                      <div
                        className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-800 relative overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10" />
                        <div className="relative z-10">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                            Welcome to the Community!
                          </h3>
                          <p className="text-green-700 dark:text-green-300">
                            Thank you for subscribing! Check your email for a
                            confirmation message.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div
                          className="text-center lg:text-left"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <h3 className="text-2xl font-bold mb-2">
                            Ready to Level Up?
                          </h3>
                          <p className="text-muted-foreground">
                            Enter your email below and join our cybersecurity and development community.
                          </p>
                        </div>

                        <form
                          onSubmit={handleSubmit}
                          className="space-y-4"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                              <Input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="pl-11 h-12 text-base border-2 focus:border-primary transition-colors"
                              />
                            </div>
                            <Button
                              type="submit"
                              disabled={isLoading}
                              className="h-12 px-8 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105"
                            >
                              {isLoading ? (
                                <div className="flex items-center gap-2">
                                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  Subscribing...
                                </div>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <Send className="w-4 h-4" />
                                  Subscribe
                                </div>
                              )}
                            </Button>
                          </div>
                        </form>

                        <p
                          className="text-sm text-muted-foreground text-center lg:text-left"
                          data-aos="fade-up"
                          data-aos-delay="300"
                        >
                          By subscribing, you agree to our{" "}
                          <a
                            href="/privacy"
                            className="text-primary hover:underline"
                          >
                            Privacy Policy
                          </a>{" "}
                          and consent to receive updates from Prysm Club.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
