import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FinancingCalculator from "./pages/FinancingCalculator";
import PersonalDataForm from "./pages/PersonalDataForm";
import ContactForm from "./pages/ContactForm";
import ContactSuccess from "./pages/ContactSuccess";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FinancingCalculator />} />
          <Route path="/personal-data" element={<PersonalDataForm />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/contact-success" element={<ContactSuccess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;
if (!(container as any)._reactRootContainer) {
  createRoot(container).render(<App />);
}
