import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModuleCard from '@/components/ModuleCard';
import TheoryForgeDemo from '@/components/TheoryForgeDemo';

const Index = () => {
  const modules = [
    {
      title: "Theory Forge",
      description: "Collaborate on theoretical frameworks with markdown, LaTeX, and peer review",
      link: "/theory-forge",
      color: "primary" as const,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M6 5h12l3 5-8.5 9.5a.7.7 0 0 1-1 0L3 10l3-5" />
          <path d="M10 9V5" />
          <path d="M14 9V5" />
        </svg>
      )
    },
    {
      title: "Experimental Commons",
      description: "Share lab reports, raw data, videos, and replication instructions",
      link: "/experimental-commons",
      color: "secondary" as const,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      )
    },
    {
      title: "Grant Pools",
      description: "Access DAO-style funding dashboards for voting, staking, and bounties",
      link: "/grant-pools",
      color: "accent" as const,
      soon: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 17v.01" />
          <path d="M12 7v5" />
        </svg>
      )
    },
    {
      title: "Replication Map",
      description: "Explore an interactive globe showing lab nodes and experiment status",
      link: "/replication-map",
      color: "primary" as const,
      soon: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    {
      title: "Consciousness Studio",
      description: "Integrate EEG/RNG inputs, coordinate meditation events, and visualize correlations",
      link: "/consciousness-studio",
      color: "secondary" as const,
      soon: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 0 0 1-2.5-2.5Z" />
          <path d="M10 2v20" />
        </svg>
      )
    },
    {
      title: "Paradigm Council",
      description: "Access ethics manifestos, charters, and community-chosen paradigm case studies",
      link: "/paradigm-council",
      color: "accent" as const,
      soon: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
          <path d="M3 6h18" />
          <path d="M7 12h10" />
          <path d="M10 18h4" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="fractal-pattern min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-12 md:py-24 relative overflow-hidden px-4 md:px-6">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 glow">
                  Science Reimagined, <br />
                  <span className="text-primary">Collectively Evolved</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-10 text-muted-foreground leading-relaxed">
                  A scientific metaplatform for decentralized, cross-disciplinary, 
                  and open-source research that reinvents science from the ground up.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <Link to="/join">Join the Movement</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                    <Link to="/manifesto">Read Our Manifesto</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Abstract geometric shapes */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          </section>

          {/* Modules Grid */}
          <section className="py-12 md:py-16 relative px-4 md:px-6">
            <div className="container">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Core Research Modules</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {modules.map((module, index) => (
                  <ModuleCard
                    key={index}
                    title={module.title}
                    description={module.description}
                    icon={module.icon}
                    link={module.link}
                    color={module.color}
                    soon={module.soon}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Theory Forge Demo */}
          <section className="py-12 md:py-16 relative px-4 md:px-6">
            <div className="container">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Theory Forge</h2>
              <p className="text-center mb-8 md:mb-12 text-muted-foreground max-w-2xl mx-auto">
                Document and collaborate on theoretical frameworks with an advanced 
                editor supporting markdown, LaTeX, and peer review.
              </p>
              <div className="max-w-4xl mx-auto">
                <TheoryForgeDemo />
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-12 md:py-24 relative overflow-hidden px-4 md:px-6">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Redefine Scientific Discovery?</h2>
                <p className="text-lg md:text-xl mb-6 md:mb-10 text-muted-foreground">
                  Join the growing community of researchers, scientists, and free thinkers 
                  pushing the boundaries of conventional science.
                </p>
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/join">Get Started Now</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
