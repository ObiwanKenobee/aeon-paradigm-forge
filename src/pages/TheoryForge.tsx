
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TheoryEditor from "@/components/TheoryEditor";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Users } from "lucide-react";

const TheoryForge = () => {
  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 glow">Theory Forge</h1>
              <p className="text-xl text-muted-foreground">
                Collaborate on theoretical frameworks with Markdown, LaTeX, and
                peer review. Document your hypotheses and connect with
                like-minded researchers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
                <FileText className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Document</h3>
                <p className="text-muted-foreground">
                  Write and format theories using Markdown and LaTeX syntax for
                  mathematical expressions.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
                <BookOpen className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2">Publish</h3>
                <p className="text-muted-foreground">
                  Share your theories with the community and receive constructive
                  feedback and reviews.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border">
                <Users className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Collaborate</h3>
                <p className="text-muted-foreground">
                  Connect with researchers across disciplines to refine and
                  evolve your theoretical frameworks.
                </p>
              </div>
            </div>

            <TheoryEditor />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default TheoryForge;
