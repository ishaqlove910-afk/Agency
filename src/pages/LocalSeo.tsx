import { MapPin } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function LocalSeoPage() {
  return (
    <ServicePageLayout
      icon={<MapPin size={16} className="text-primary" />}
      title="Local SEO Domination"
      subtitle="Google Maps & Local Pack"
      description="We don't just improve your local rankings — we make you the undisputed #1 choice in your market. From Google Business Profile optimization to hyper-local keyword clusters, we build a fortress around your territory."
      results={[
        { metric: "+67%", label: "Avg. Traffic Growth" },
        { metric: "#1", label: "Map Pack Position" },
        { metric: "473", label: "Ref Domains Built" },
        { metric: "10+", label: "Brands Ranked #1" },
      ]}
      features={[
        "Google Business Profile optimization & management",
        "Local keyword cluster research & mapping",
        "Citation building & NAP consistency audit",
        "Local link building & community partnerships",
        "Review management & reputation strategy",
        "Geo-targeted content creation",
        "Local schema markup implementation",
        "Competitor gap analysis & positioning",
        "Google Maps ranking tracking & reporting",
        "Voice search optimization for local queries",
      ]}
      benefits={[
        { title: "Own Your Territory", desc: "Appear in the Google Maps 3-pack for every high-intent local search in your service area." },
        { title: "Higher Intent = More Revenue", desc: "Local searches have 80% higher conversion rates than generic searches. We capture that intent." },
        { title: "Compound Growth", desc: "Every citation, review, and backlink compounds over time, building an unbeatable moat around your business." },
      ]}
    />
  );
}
