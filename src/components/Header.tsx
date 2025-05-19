
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-10 py-4 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-primary animate-pulse-glow"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight glow">
            Aeon <span className="text-primary">Labs</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" asChild>
            <Link to="/theory-forge">Theory Forge</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/experimental-commons">Experimental Commons</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/grant-pools">Grant Pools</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/replication-map">Replication Map</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/consciousness-studio">Consciousness Studio</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/paradigm-council">Paradigm Council</Link>
          </Button>
        </nav>
        
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/join">Join Research</Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-b border-border z-50">
          <div className="container py-4 flex flex-col space-y-2">
            <Button variant="ghost" asChild className="justify-start">
              <Link to="/theory-forge" onClick={() => setMobileMenuOpen(false)}>Theory Forge</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link to="/experimental-commons" onClick={() => setMobileMenuOpen(false)}>Experimental Commons</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link to="/grant-pools" onClick={() => setMobileMenuOpen(false)}>Grant Pools</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link to="/replication-map" onClick={() => setMobileMenuOpen(false)}>Replication Map</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link to="/consciousness-studio" onClick={() => setMobileMenuOpen(false)}>Consciousness Studio</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link to="/paradigm-council" onClick={() => setMobileMenuOpen(false)}>Paradigm Council</Link>
            </Button>
            <div className="flex space-x-2 pt-2 border-t border-border">
              <Button variant="outline" size="sm" asChild className="flex-1">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
              </Button>
              <Button size="sm" asChild className="flex-1">
                <Link to="/join" onClick={() => setMobileMenuOpen(false)}>Join Research</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
