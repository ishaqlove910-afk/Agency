import { Search } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function OnPageSeoPage() {
  return (
    <ServicePageLayout
      icon={<Search size={16} className="text-primary" />}
      title="On-Page SEO Mastery"
      subtitle="Content & Structure Optimization"
      description="Every page on your site should be a ranking machine. We engineer your content architecture, meta data, internal linking, and schema markup to give Google exactly what it needs to rank you #1."
      results={[
        { metric: "+40%", label: "Organic Visibility" },
        { metric: "100+", label: "Pages Optimized" },
        { metric: "#1-3", label: "Target Positions" },
        { metric: "2.5x", label: "Click-Through Rate" },
      ]}
      features={[
        "Comprehensive keyword mapping per page",
        "Title tag & meta description optimization",
        "Header hierarchy (H1-H6) restructuring",
        "Internal linking architecture design",
        "Schema markup (FAQ, HowTo, LocalBusiness, etc.)",
        "Image alt text & compression optimization",
        "Content gap analysis & topic clustering",
        "URL structure optimization",
        "Canonical tag management",
        "Featured snippet optimization strategy",
      ]}
      benefits={[
        { title: "Google Understands You", desc: "Proper on-page SEO tells Google exactly what your pages are about, making rankings predictable." },
        { title: "Higher CTR", desc: "Optimized titles and rich snippets dramatically increase your click-through rates from search results." },
        { title: "Foundation for Growth", desc: "On-page SEO is the foundation — without it, backlinks and content strategies underperform." },
      ]}
    />
  );
}
