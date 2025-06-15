
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
import StyleFeed from "./pages/StyleFeed";
import Donate from "./pages/Donate";
import TailorPortal from "./pages/TailorPortal";
import NGOPartners from "./pages/NGOPartners";
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
          <Route path="/stylefeed" element={<StyleFeed />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/tailor-portal" element={<TailorPortal />} />
          <Route path="/ngo-partners" element={<NGOPartners />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
