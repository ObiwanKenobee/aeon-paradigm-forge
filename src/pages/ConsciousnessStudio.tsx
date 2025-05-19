
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlaskConical, Brain, Waves, Timer } from "lucide-react";

const ConsciousnessStudio = () => {
  const upcomingEvents = [
    {
      title: "Global Consciousness Meditation",
      date: "May 25, 2025",
      time: "20:00 UTC",
      participants: 347,
      description: "Synchronized meditation focusing on coherence and healing intentions"
    },
    {
      title: "RNG Anomaly Detection Workshop",
      date: "June 2, 2025",
      time: "18:30 UTC",
      participants: 124,
      description: "Learn how to set up and analyze random number generator data for consciousness experiments"
    },
    {
      title: "Quantum Observer Effect Study",
      date: "June 15, 2025",
      time: "16:00 UTC",
      participants: 89,
      description: "Group experiment testing observer effects on quantum random processes"
    }
  ];

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 glow">
              Consciousness Studio
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl">
              Integrate EEG/RNG inputs, coordinate meditation events, and
              visualize correlations. Explore the frontiers of consciousness
              research through collaborative experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <Brain className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Mind-Matter Experiments</h3>
              <p className="text-muted-foreground">
                Participate in experiments exploring the potential interaction
                between consciousness and physical systems.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <Waves className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
              <p className="text-muted-foreground">
                Analyze and visualize EEG data, random number generator outputs,
                and other consciousness-related measurements.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <Timer className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Synchronized Events</h3>
              <p className="text-muted-foreground">
                Join global meditation and intention experiments with precise
                timing and coordinated protocols.
              </p>
            </div>
          </div>

          <div className="mb-12 bg-card/50 backdrop-blur border border-border rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="mb-4">
                <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">Live Now</div>
                <h2 className="text-2xl font-bold">Global Coherence Project</h2>
                <p className="text-muted-foreground">Real-time visualization of consciousness field effects</p>
              </div>
              
              <div className="aspect-video bg-black/30 mb-4 rounded-md flex items-center justify-center">
                <div className="text-center p-8">
                  <FlaskConical className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Live Data Visualization</h3>
                  <p className="text-muted-foreground mb-4">
                    The live data visualization module is coming soon. It will display
                    real-time data from global RNG networks and participant EEG inputs.
                  </p>
                  <Button>Join Experiment</Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="bg-muted p-2 rounded-md">
                  <p className="text-xs text-muted-foreground mb-1">Active Participants</p>
                  <p className="font-bold">287</p>
                </div>
                <div className="bg-muted p-2 rounded-md">
                  <p className="text-xs text-muted-foreground mb-1">RNG Nodes</p>
                  <p className="font-bold">42</p>
                </div>
                <div className="bg-muted p-2 rounded-md">
                  <p className="text-xs text-muted-foreground mb-1">EEG Inputs</p>
                  <p className="font-bold">18</p>
                </div>
                <div className="bg-muted p-2 rounded-md">
                  <p className="text-xs text-muted-foreground mb-1">Z-Score</p>
                  <p className="font-bold">1.82</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur">
                  <CardHeader className="pb-2">
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      {event.date} • {event.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                    <p className="text-sm font-medium">{event.participants} participants registered</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Join Event</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Research Resources</h2>
            <Tabs defaultValue="protocols">
              <TabsList className="mb-6">
                <TabsTrigger value="protocols">Protocols</TabsTrigger>
                <TabsTrigger value="equipment">Equipment</TabsTrigger>
                <TabsTrigger value="datasets">Datasets</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="protocols">
                <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-4">Standardized Experiment Protocols</h3>
                  <ul className="space-y-4">
                    <li className="pb-4 border-b border-border">
                      <h4 className="font-bold">RNG Intention Effect Protocol</h4>
                      <p className="text-sm text-muted-foreground">Standardized method for testing conscious intention effects on random number generators</p>
                      <Button variant="outline" size="sm" className="mt-2">View Protocol</Button>
                    </li>
                    <li className="pb-4 border-b border-border">
                      <h4 className="font-bold">EEG Coherence Measurement</h4>
                      <p className="text-sm text-muted-foreground">Method for measuring and analyzing EEG coherence during meditation</p>
                      <Button variant="outline" size="sm" className="mt-2">View Protocol</Button>
                    </li>
                    <li>
                      <h4 className="font-bold">Global Consciousness Event Design</h4>
                      <p className="text-sm text-muted-foreground">Guidelines for creating and coordinating synchronized consciousness events</p>
                      <Button variant="outline" size="sm" className="mt-2">View Protocol</Button>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="equipment">
                <div className="p-8 text-center text-muted-foreground">
                  Equipment recommendations and setups will be displayed here
                </div>
              </TabsContent>
              
              <TabsContent value="datasets">
                <div className="p-8 text-center text-muted-foreground">
                  Shared consciousness research datasets will be displayed here
                </div>
              </TabsContent>
              
              <TabsContent value="publications">
                <div className="p-8 text-center text-muted-foreground">
                  Related research publications will be displayed here
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ConsciousnessStudio;
