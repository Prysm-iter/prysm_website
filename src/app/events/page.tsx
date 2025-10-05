import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "React Workshop: Building Modern UIs",
      date: "2024-02-15",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab A",
      attendees: 25,
      maxAttendees: 30,
      description:
        "Learn the fundamentals of React and build your first interactive web application.",
      type: "Workshop",
    },
    {
      id: 2,
      title: "AI/ML Tech Talk",
      date: "2024-02-22",
      time: "6:00 PM - 7:30 PM",
      location: "Auditorium",
      attendees: 45,
      maxAttendees: 100,
      description:
        "Industry expert discusses the latest trends in artificial intelligence and machine learning.",
      type: "Tech Talk",
    },
    {
      id: 3,
      title: "48-Hour Innovation Hackathon",
      date: "2024-03-01",
      time: "Friday 6:00 PM - Sunday 6:00 PM",
      location: "Innovation Center",
      attendees: 60,
      maxAttendees: 80,
      description:
        "Build innovative solutions to real-world problems in this intensive coding competition.",
      type: "Hackathon",
    },
  ];

  const pastEvents = [
    {
      title: "Python Fundamentals Workshop",
      date: "2024-01-20",
      attendees: 28,
    },
    {
      title: "Web Development Bootcamp",
      date: "2024-01-15",
      attendees: 35,
    },
    {
      title: "Cybersecurity Awareness Session",
      date: "2024-01-10",
      attendees: 42,
    },
  ];

  return (
    <div className="px-4 py-16 md:px-6 md:py-24">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="px-4 py-2">
            Events
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Upcoming Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join us for workshops, tech talks, hackathons, and networking events
            designed to enhance your skills and expand your network.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter">
            Upcoming Events
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="outline">{event.type}</Badge>
                    <div className="text-right text-sm text-muted-foreground">
                      {event.attendees}/{event.maxAttendees} registered
                    </div>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-base">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {event.attendees} registered,{" "}
                        {event.maxAttendees - event.attendees} spots left
                      </span>
                    </div>
                  </div>
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter">Recent Events</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 py-12 bg-muted/30 rounded-lg">
          <h3 className="text-2xl font-bold">Want to Stay Updated?</h3>
          <p className="text-muted-foreground">
            Follow us on social media or join our mailing list to get notified
            about upcoming events.
          </p>
          <Button size="lg">Join Our Community</Button>
        </div>
      </div>
    </div>
  );
}
