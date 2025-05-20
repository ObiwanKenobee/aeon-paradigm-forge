
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { Twitter, Github, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 mt-12 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Aeon Labs</h3>
            <p className="text-sm text-muted-foreground">
              A scientific metaplatform for decentralized, cross-disciplinary, 
              and open-source research that reinvents science from the ground up.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Core Modules</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/theory-forge" className="hover:text-foreground">Theory Forge</Link></li>
              <li><Link to="/experimental-commons" className="hover:text-foreground">Experimental Commons</Link></li>
              <li><Link to="/grant-pools" className="hover:text-foreground">Grant Pools</Link></li>
              <li><Link to="/replication-map" className="hover:text-foreground">Replication Map</Link></li>
              <li><Link to="/consciousness-studio" className="hover:text-foreground">Consciousness Studio</Link></li>
              <li><Link to="/paradigm-council" className="hover:text-foreground">Paradigm Council</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/manifesto" className="hover:text-foreground">Manifesto</Link></li>
              <li><Link to="/join" className="hover:text-foreground">Join the Community</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://twitter.com/aeonlabs" className="hover:text-foreground flex items-center gap-2">
                  <Twitter size={16} />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://discord.gg/aeonlabs" className="hover:text-foreground flex items-center gap-2">
                  <MessageSquare size={16} />
                  <span>Discord</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/aeon-labs" className="hover:text-foreground flex items-center gap-2">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-foreground flex items-center gap-2">
                  <Mail size={16} />
                  <span>Newsletter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 Aeon Labs. Open Science, Open Access.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/ethics" className="hover:text-foreground">Ethics Framework</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
