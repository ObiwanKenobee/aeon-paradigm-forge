
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, FlaskConical, Share2 } from "lucide-react";

const ExperimentalCommons = () => {
  const experiments = [
    {
      title: "Quantum Coherence in Bacterial Photosynthesis",
      author: "Dr. Elisabeth Chen",
      date: "2025-04-12",
      tags: ["quantum-biology", "photosynthesis", "coherence"],
      status: "Replication in progress",
    },
    {
      title: "Anomalous Heat Generation in Nickel-Hydrogen Systems",
      author: "Prof. Marco Rossi",
      date: "2025-03-28",
      tags: ["lenr", "energy", "hydrogen-loading"],
      status: "Seeking replication",
    },
    {
      title: "Non-local Consciousness Effects on Random Number Generation",
      author: "Dr. Amanda Williams",
      date: "2025-02-15",
      tags: ["consciousness", "psi", "quantum-randomness"],
      status: "Multiple replications",
    },
  ];

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 glow">
              Experimental Commons
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl">
              Share lab reports, raw data, videos, and replication instructions.
              Build upon the work of others and contribute to open scientific
              discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <FlaskConical className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Upload Experiments</h3>
              <p className="text-muted-foreground">
                Share your experimental data, methodologies, and results with the
                scientific community.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <FileText className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Document Methods</h3>
              <p className="text-muted-foreground">
                Create detailed step-by-step guides for others to replicate your
                experimental procedures.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <Share2 className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Track Replications</h3>
              <p className="text-muted-foreground">
                Monitor who is replicating your experiments and the results they
                are achieving.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recent Experiments</h2>
            <div className="flex gap-3">
              <Input 
                className="w-64" 
                placeholder="Search experiments..." 
              />
              <Button>Upload New</Button>
            </div>
          </div>

          <Tabs defaultValue="all">
            <div className="mb-6">
              <TabsList>
                <TabsTrigger value="all">All Experiments</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="replicated">Most Replicated</TabsTrigger>
                <TabsTrigger value="seeking">Seeking Replication</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 gap-4">
                {experiments.map((experiment, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle>{experiment.title}</CardTitle>
                        <span className="text-sm bg-primary/20 text-primary-foreground px-3 py-1 rounded-full">
                          {experiment.status}
                        </span>
                      </div>
                      <CardDescription>By {experiment.author} • {experiment.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 my-2">
                        {experiment.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-1 rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button size="sm">Replicate</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="featured" className="mt-0">
              <div className="p-8 text-center text-muted-foreground">
                Featured experiments will be displayed here
              </div>
            </TabsContent>
            <TabsContent value="replicated" className="mt-0">
              <div className="p-8 text-center text-muted-foreground">
                Most replicated experiments will be displayed here
              </div>
            </TabsContent>
            <TabsContent value="seeking" className="mt-0">
              <div className="p-8 text-center text-muted-foreground">
                Experiments seeking replication will be displayed here
              </div>
            </TabsContent>
          </Tabs>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ExperimentalCommons;
