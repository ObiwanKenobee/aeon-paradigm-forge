
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/theory-forge" element={<TheoryForge />} />
          <Route path="/experimental-commons" element={<ExperimentalCommons />} />
          <Route path="/grant-pools" element={<GrantPools />} />
          <Route path="/replication-map" element={<ReplicationMap />} />
          <Route path="/consciousness-studio" element={<ConsciousnessStudio />} />
          <Route path="/paradigm-council" element={<ParadigmCouncil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
