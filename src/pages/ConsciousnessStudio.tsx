
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Waves, Upload, Activity } from "lucide-react";

const ConsciousnessStudio = () => {
  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-8 md:py-12 px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 glow">
              Consciousness Studio
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-4xl">
              Integrate EEG/RNG inputs, coordinate meditation events, and visualize
              correlations. Explore the frontiers of consciousness research with
              cutting-edge tools and global collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-card/50 backdrop-blur p-4 md:p-6 rounded-lg border border-border">
              <Brain className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Mind-Matter Interactions</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Explore experiments on consciousness affecting physical systems using
                random number generators and other quantum devices.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-4 md:p-6 rounded-lg border border-border">
              <Waves className="w-8 h-8 md:w-10 md:h-10 text-secondary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Global Meditation Events</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Join synchronized meditation sessions with researchers worldwide to
                study collective consciousness effects.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-4 md:p-6 rounded-lg border border-border">
              <Activity className="w-8 h-8 md:w-10 md:h-10 text-accent mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Data Visualization</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Transform complex consciousness data into meaningful visual patterns
                and identify correlations across experiments.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <div className="bg-card/50 backdrop-blur rounded-lg border border-border overflow-hidden">
              <div className="p-4 md:p-6 border-b border-border">
                <h2 className="text-xl md:text-2xl font-bold">Upcoming Global Meditation Event</h2>
                <p className="text-muted-foreground mt-2">Join researchers worldwide for a coordinated consciousness experiment</p>
              </div>
              <div className="p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Event Date</h3>
                    <p className="text-lg font-semibold">June 21, 2025 • 12:00 UTC</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Participants</h3>
                    <p className="text-lg font-semibold">842 registered</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Focus</h3>
                    <p className="text-lg font-semibold">Quantum coherence</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Preparation progress</span>
                    <span>75% complete</span>
                  </div>
                  <Progress value={75} />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="w-full sm:w-auto">Register for Event</Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">Learn More</Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Connect Your Equipment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>EEG Devices</CardTitle>
                  <CardDescription>
                    Connect your EEG headset to contribute brainwave data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-md bg-muted/50">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Supported Devices</h4>
                      <p className="text-sm text-muted-foreground">
                        Muse, Emotiv, OpenBCI, Neurosity
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Connect Device
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Random Number Generators</CardTitle>
                  <CardDescription>
                    Link hardware or quantum RNGs for mind-matter experiments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-md bg-muted/50">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <Activity className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Supported Systems</h4>
                      <p className="text-sm text-muted-foreground">
                        Psyleron REG, Quantum RNG, MicroRNG
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Connect Generator
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ConsciousnessStudio;
