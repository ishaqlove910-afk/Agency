import { Brain } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function AiSeoPage() {
  return (
    <ServicePageLayout
      icon={<Brain size={16} className="text-primary" />}
      title="AI-Powered SEO"
      subtitle="Next-Generation Optimization"
      description="We leverage cutting-edge AI tools — ChatGPT, Gemini, and custom automation pipelines — to identify opportunities your competitors miss, generate high-converting content at scale, and capture trending keywords before they peak."
      results={[
        { metric: "3x", label: "Content Output" },
        { metric: "+55%", label: "Keyword Coverage" },
        { metric: "24/7", label: "Trend Monitoring" },
        { metric: "90%", label: "Time Saved" },
      ]}
      features={[
        "AI-driven keyword opportunity discovery",
        "Automated content optimization scoring",
        "Programmatic content generation & editing",
        "Real-time trend capture & rapid publishing",
        "Competitor content gap analysis via AI",
        "Automated internal linking suggestions",
        "AI-powered meta tag generation",
        "Semantic keyword clustering at scale",
        "Content freshness monitoring & auto-alerts",
        "Predictive ranking models for keyword selection",
      ]}
      benefits={[
        { title: "Outpace Competition", desc: "AI lets you find and capture keyword opportunities 10x faster than manual research." },
        { title: "Scale Content", desc: "Produce 3x more optimized content while maintaining quality and brand voice." },
        { title: "Data-Driven Decisions", desc: "Every optimization decision is backed by data, not guesswork — AI removes the uncertainty." },
      ]}
    />
  );
}
