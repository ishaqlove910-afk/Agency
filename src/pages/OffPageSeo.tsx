import { Globe } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function OffPageSeoPage() {
  return (
    <ServicePageLayout
      icon={<Globe size={16} className="text-primary" />}
      title="Off-Page SEO & Link Building"
      subtitle="Authority & Domain Power"
      description="Domain authority is the currency of Google rankings. We build high-quality backlink profiles through strategic outreach, digital PR, and content-driven link acquisition — turning your site into an authority powerhouse."
      results={[
        { metric: "4.7K+", label: "Backlinks Built" },
        { metric: "473", label: "Max Ref Domains" },
        { metric: "15", label: "Authority Score" },
        { metric: "+120%", label: "Domain Growth" },
      ]}
      features={[
        "High-authority backlink acquisition",
        "Guest posting & editorial placements",
        "Digital PR & brand mention campaigns",
        "Broken link building strategies",
        "Competitor backlink gap analysis",
        "Toxic link audit & disavow management",
        "HARO & journalist outreach",
        "Resource page link building",
        "Local citation & directory submissions",
        "Anchor text strategy & diversification",
      ]}
      benefits={[
        { title: "Authority Compounds", desc: "Every quality backlink makes the next one easier to earn. Authority snowballs over time." },
        { title: "Trust Signals", desc: "Google uses backlinks as trust votes. More quality links = more trust = higher rankings." },
        { title: "Competitive Moat", desc: "A strong backlink profile is nearly impossible for competitors to replicate quickly." },
      ]}
    />
  );
}
