
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CustomizeOutfit from "./pages/CustomizeOutfit";
import Shop from "./pages/Shop";
import UpcycleStudio from "./pages/UpcycleStudio";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/customize" element={<CustomizeOutfit />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/upcycle-studio" element={<UpcycleStudio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Placeholder routes for remaining pages */}
          <Route path="/donate" element={<div className="pt-24 text-center">Donate Page - Coming Soon!</div>} />
          <Route path="/tailor-portal" element={<div className="pt-24 text-center">Tailor Portal - Coming Soon!</div>} />
          <Route path="/ngo-partners" element={<div className="pt-24 text-center">NGO Partners - Coming Soon!</div>} />
          <Route path="/stylefeed" element={<div className="pt-24 text-center">StyleFeed - Coming Soon!</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
