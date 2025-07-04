import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import PortfolioCompleto from "./pages/PortfolioCompleto";
import Contato from "./pages/Contato";
import MidiasSociais from "./pages/MidiasSociais";
import MidiasSociaisDetalhes from "./pages/MidiasSociaisDetalhes";
import Showreel from "./pages/Showreel";
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
          <Route path="/portfolio-completo" element={<PortfolioCompleto />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/midias-sociais" element={<MidiasSociais />} />
          <Route path="/midias-sociais/:id" element={<MidiasSociaisDetalhes />} />
          <Route path="/showreel" element={<Showreel />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
