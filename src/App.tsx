import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import LocalSeo from "./pages/LocalSeo.tsx";
import OnPageSeo from "./pages/OnPageSeo.tsx";
import AiSeo from "./pages/AiSeo.tsx";
import TechnicalSeo from "./pages/TechnicalSeo.tsx";
import OffPageSeo from "./pages/OffPageSeo.tsx";
import WebDev from "./pages/WebDev.tsx";
import Experts from "./pages/Experts.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/local-seo" element={<LocalSeo />} />
          <Route path="/services/on-page-seo" element={<OnPageSeo />} />
          <Route path="/services/ai-seo" element={<AiSeo />} />
          <Route path="/services/technical-seo" element={<TechnicalSeo />} />
          <Route path="/services/off-page-seo" element={<OffPageSeo />} />
          <Route path="/services/web-development" element={<WebDev />} />
          <Route path="/experts" element={<Experts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
