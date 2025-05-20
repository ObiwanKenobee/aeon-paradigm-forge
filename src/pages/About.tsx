
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Users, GraduationCap, Globe, FlaskConical, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-8 md:py-12 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 glow">About Aeon Labs</h1>
            <p className="text-base md:text-xl text-muted-foreground mb-8">
              Reimagining scientific discovery through decentralized, cross-disciplinary collaboration.
            </p>

            <Card className="bg-card/50 backdrop-blur mb-8">
              <CardContent className="pt-6">
                <div className="prose prose-invert max-w-none">
                  <p>
                    Aeon Labs is a scientific metaplatform that challenges the status quo of how research is conducted, funded, and shared. We believe that the future of science lies in open collaboration, decentralized funding mechanisms, and breaking down the artificial barriers between disciplines.
                  </p>
                  
                  <p>
                    Our mission is to create an ecosystem where researchers, scientists, and free thinkers from all backgrounds can contribute to human knowledge without the traditional constraints of academic gatekeeping, funding politics, or disciplinary silos.
                  </p>
                  
                  <h2 className="text-xl font-bold mt-6">Our Vision</h2>
                  <p>
                    We envision a world where scientific discovery is accessible to all, where breakthrough ideas are evaluated on merit rather than credentials, and where the collective intelligence of humanity can be harnessed to solve the most pressing challenges of our time.
                  </p>
                  
                  <h2 className="text-xl font-bold mt-6">Core Principles</h2>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start">
                      <Book className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Open Access:</strong> All research conducted on our platform is freely available to everyone.</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Collaborative Evolution:</strong> Ideas evolve through collective input and iterative improvement.</span>
                    </li>
                    <li className="flex items-start">
                      <GraduationCap className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Merit-Based Recognition:</strong> Contributions are valued based on quality, not credentials.</span>
                    </li>
                    <li className="flex items-start">
                      <Globe className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Global Participation:</strong> Science should be accessible to and benefit from diverse perspectives worldwide.</span>
                    </li>
                    <li className="flex items-start">
                      <FlaskConical className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Transparency in Methods:</strong> Full disclosure of experimental setups, raw data, and analysis techniques.</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Cross-Disciplinary Innovation:</strong> Breaking down barriers between fields to spark new insights.</span>
                    </li>
                  </ul>
                  
                  <h2 className="text-xl font-bold mt-6">Our Story</h2>
                  <p>
                    Founded in 2025 by a collective of disillusioned academics, independent researchers, and visionary technologists, Aeon Labs emerged from a shared frustration with the limitations of traditional scientific institutions. What began as a digital manifesto quickly evolved into a movement, attracting thousands of forward-thinking scientists and supporters worldwide.
                  </p>
                  
                  <p>
                    Today, Aeon Labs hosts a growing ecosystem of interconnected modules—from theoretical frameworks to experimental protocols, funding mechanisms to replication initiatives—all designed to reinvent how science is practiced in the 21st century and beyond.
                  </p>
                  
                  <p>
                    Join us in redefining the boundaries of scientific discovery and creating a more collaborative, open, and innovative future for research.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
