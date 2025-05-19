
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Users } from "lucide-react";

const ParadigmCouncil = () => {
  const manifestos = [
    {
      title: "The Open Science Mandate",
      author: "Dr. James Wilson",
      date: "March 15, 2025",
      category: "Ethics",
      excerpt: "Scientific progress thrives on transparency, openness, and collective intelligence. We propose a new framework for truly open science..."
    },
    {
      title: "Beyond Materialism: A New Scientific Paradigm",
      author: "Prof. Elena Vasquez",
      date: "February 3, 2025",
      category: "Philosophy",
      excerpt: "The limitations of strict materialist frameworks have become increasingly apparent. This manifesto outlines a post-materialist approach that integrates consciousness..."
    },
    {
      title: "Ethical Guidelines for Consciousness Research",
      author: "Dr. Samuel Chen",
      date: "January 22, 2025",
      category: "Ethics",
      excerpt: "As we explore the frontiers of consciousness studies, we must establish ethical boundaries that respect both scientific integrity and the subjective experience..."
    }
  ];

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 glow">
              Paradigm Council
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl">
              Access ethics manifestos, charters, and community-chosen paradigm
              case studies. Shape the philosophical foundations of our scientific
              explorations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <BookOpen className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Ethics & Philosophy</h3>
              <p className="text-muted-foreground">
                Explore foundational principles and ethical frameworks for
                emerging scientific paradigms.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <FileText className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Manifestos & Charters</h3>
              <p className="text-muted-foreground">
                Read and contribute to documents that define our collective
                vision for the future of science.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <Users className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Governance</h3>
              <p className="text-muted-foreground">
                Participate in democratic decision-making processes that guide
                our scientific community.
              </p>
            </div>
          </div>

          <Tabs defaultValue="manifestos">
            <div className="mb-6 flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="manifestos">Manifestos</TabsTrigger>
                <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="governance">Governance</TabsTrigger>
              </TabsList>
              <Button>Submit Proposal</Button>
            </div>
            <TabsContent value="manifestos" className="mt-0">
              <div className="grid grid-cols-1 gap-4">
                {manifestos.map((manifesto, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{manifesto.title}</CardTitle>
                          <CardDescription>{manifesto.author} • {manifesto.date}</CardDescription>
                        </div>
                        <span className="bg-muted px-2 py-1 rounded-md text-xs">
                          {manifesto.category}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{manifesto.excerpt}</p>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button variant="outline">Read Full Document</Button>
                      <Button>Endorse</Button>
                    </CardFooter>
                  </Card>
                ))}
                <div className="mt-4 text-center">
                  <Button variant="outline">View All Manifestos</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="case-studies" className="mt-0">
              <div className="p-8 text-center text-muted-foreground">
                Paradigm case studies will be displayed here
              </div>
            </TabsContent>
            <TabsContent value="discussions" className="mt-0">
              <div className="p-8 text-center text-muted-foreground">
                Community discussions will be displayed here
              </div>
            </TabsContent>
            <TabsContent value="governance" className="mt-0">
              <div className="p-8 text-center text-muted-foreground">
                Governance proposals and voting will be displayed here
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Featured Principles</h2>
            <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="text-xl font-bold mb-2">Open Access Principle</h3>
                <p className="text-muted-foreground mb-4">
                  Scientific knowledge belongs to all of humanity. We commit to making
                  all research findings, methodologies, and data freely accessible to everyone,
                  regardless of institutional affiliation or financial resources.
                </p>
                <div className="flex items-center text-sm">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-6 h-6 rounded-full bg-primary/80"></div>
                    <div className="w-6 h-6 rounded-full bg-secondary/80"></div>
                    <div className="w-6 h-6 rounded-full bg-accent/80"></div>
                  </div>
                  <span>397 endorsements</span>
                </div>
              </div>
              
              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="text-xl font-bold mb-2">Scientific Pluralism</h3>
                <p className="text-muted-foreground mb-4">
                  Multiple valid frameworks can coexist in science. We embrace epistemological
                  diversity and recognize that different paradigms may offer complementary
                  insights into the nature of reality.
                </p>
                <div className="flex items-center text-sm">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-6 h-6 rounded-full bg-primary/80"></div>
                    <div className="w-6 h-6 rounded-full bg-secondary/80"></div>
                    <div className="w-6 h-6 rounded-full bg-accent/80"></div>
                  </div>
                  <span>286 endorsements</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Conscious Ethics</h3>
                <p className="text-muted-foreground mb-4">
                  Scientific exploration must be guided by ethical principles that respect
                  all forms of consciousness and acknowledge the potential impact of our
                  research on both human and non-human beings.
                </p>
                <div className="flex items-center text-sm">
                  <div className="flex -space-x-2 mr-3">
                    <div className="w-6 h-6 rounded-full bg-primary/80"></div>
                    <div className="w-6 h-6 rounded-full bg-secondary/80"></div>
                    <div className="w-6 h-6 rounded-full bg-accent/80"></div>
                  </div>
                  <span>324 endorsements</span>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ParadigmCouncil;
