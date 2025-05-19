
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Map, Compass, Network } from "lucide-react";

const ReplicationMap = () => {
  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 glow">
              Replication Map
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl">
              Explore an interactive globe showing lab nodes and experiment
              status. Connect with researchers worldwide and track replication
              efforts across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <Map className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-muted-foreground">
                Discover research labs and independent scientists worldwide
                working on similar experiments.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <Compass className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Track Experiments</h3>
              <p className="text-muted-foreground">
                Monitor the status and progress of experiments as they are
                replicated across different locations.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <Network className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Connect & Collaborate</h3>
              <p className="text-muted-foreground">
                Find potential collaborators and establish connections with labs
                equipped for your research needs.
              </p>
            </div>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-card/50 backdrop-blur p-4 border-b border-border flex justify-between items-center">
              <h2 className="text-xl font-bold">Interactive Replication Map</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Add Your Lab</Button>
                <Button size="sm">Filter Map</Button>
              </div>
            </div>
            <div className="bg-black/30 aspect-[16/9] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 mb-4 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Map className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive Map Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  Our global replication map is under development. Soon you'll be able to
                  explore research labs and experiments around the world.
                </p>
                <Button>Register Your Lab</Button>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Featured Replication Clusters</h2>
            <Tabs defaultValue="energy">
              <TabsList className="mb-6">
                <TabsTrigger value="energy">New Energy</TabsTrigger>
                <TabsTrigger value="consciousness">Consciousness</TabsTrigger>
                <TabsTrigger value="biology">Quantum Biology</TabsTrigger>
                <TabsTrigger value="physics">Frontier Physics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="energy">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-card/50 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2">LENR Research Network</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        12 labs across Europe, North America and Japan working on low energy
                        nuclear reactions and anomalous heat effects.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">View Details</Button>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2">Zero Point Energy Experiments</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        8 labs focused on vacuum energy extraction methods and experimental
                        verification of Casimir effect applications.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">View Details</Button>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 backdrop-blur">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2">Overunity Device Testing</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        15 independent researchers documenting and testing claimed overunity
                        devices with standardized protocols.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">View Details</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="consciousness">
                <div className="p-8 text-center text-muted-foreground">
                  Consciousness research clusters will be displayed here
                </div>
              </TabsContent>
              
              <TabsContent value="biology">
                <div className="p-8 text-center text-muted-foreground">
                  Quantum biology research clusters will be displayed here
                </div>
              </TabsContent>
              
              <TabsContent value="physics">
                <div className="p-8 text-center text-muted-foreground">
                  Frontier physics research clusters will be displayed here
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

export default ReplicationMap;
