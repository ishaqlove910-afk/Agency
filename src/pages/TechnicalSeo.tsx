import { Zap } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function TechnicalSeoPage() {
  return (
    <ServicePageLayout
      icon={<Zap size={16} className="text-primary" />}
      title="Technical SEO Engineering"
      subtitle="Speed, Crawlability & Performance"
      description="Your site's technical foundation determines your ranking ceiling. We engineer lightning-fast load times, flawless crawlability, and bulletproof structured data — because Google rewards sites that perform."
      results={[
        { metric: "<2s", label: "Load Time" },
        { metric: "95+", label: "Lighthouse Score" },
        { metric: "0", label: "Crawl Errors" },
        { metric: "100%", label: "Index Coverage" },
      ]}
      features={[
        "Core Web Vitals audit & optimization",
        "Site speed engineering (LCP, FID, CLS)",
        "Crawl budget optimization & robots.txt",
        "XML sitemap generation & management",
        "Structured data / schema implementation",
        "HTTPS, security headers & SSL audit",
        "Mobile-first responsive optimization",
        "Redirect chain & 404 error resolution",
        "JavaScript rendering & SEO compatibility",
        "Server response time optimization",
      ]}
      benefits={[
        { title: "Unlock Rankings", desc: "Technical issues are invisible ranking blockers. Fixing them often produces immediate jumps." },
        { title: "Better User Experience", desc: "Fast, accessible sites convert better — technical SEO and UX are two sides of the same coin." },
        { title: "Future-Proof", desc: "Google's algorithm increasingly rewards technical excellence. Build for tomorrow, rank today." },
      ]}
    />
  );
}
