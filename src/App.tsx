import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { PortfolioProvider } from "@/contexts/PortfolioContext";
import GrainOverlay from "@/components/GrainOverlay";
import Navigation from "@/components/Navigation";
import CategoryToggle from "@/components/CategoryToggle";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PortfolioProvider>
            <GrainOverlay />
            <Navigation />
            <CategoryToggle />
            <ScrollToTop />
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<HomePage />} />
                <Route path="/projects" element={<HomePage />} />
                <Route path="/experience" element={<HomePage />} />
                <Route path="/skills" element={<HomePage />} />
                <Route path="/contact" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
          </PortfolioProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
