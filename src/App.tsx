
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TheoryForge from "./pages/TheoryForge";
import ExperimentalCommons from "./pages/ExperimentalCommons";
import GrantPools from "./pages/GrantPools";
import ReplicationMap from "./pages/ReplicationMap";
import ConsciousnessStudio from "./pages/ConsciousnessStudio";
import ParadigmCouncil from "./pages/ParadigmCouncil";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Manifesto from "./pages/Manifesto";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import { AuthProvider } from "./contexts/AuthContext";
import { GeoAwareProvider } from "./contexts/GeoAwareContext";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Properly structure App as a function component
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <GeoAwareProvider>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Index />} />
                <Route path="/theory-forge" element={<TheoryForge />} />
                <Route path="/experimental-commons" element={<ExperimentalCommons />} />
                <Route path="/grant-pools" element={<GrantPools />} />
                <Route path="/replication-map" element={<ReplicationMap />} />
                <Route path="/consciousness-studio" element={<ConsciousnessStudio />} />
                <Route path="/paradigm-council" element={<ParadigmCouncil />} />
                <Route path="/manifesto" element={<Manifesto />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Protected routes */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/onboarding" element={<Onboarding />} />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </GeoAwareProvider>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
