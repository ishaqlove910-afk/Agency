import { Code } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function WebDevPage() {
  return (
    <ServicePageLayout
      icon={<Code size={16} className="text-primary" />}
      title="Web Development"
      subtitle="Performance-First Engineering"
      description="We build websites that don't just look incredible — they're engineered from the ground up for speed, SEO, and conversion. React, TypeScript, and Tailwind CSS power every pixel, delivering sites that outperform the competition."
      results={[
        { metric: "95+", label: "Performance Score" },
        { metric: "<1.5s", label: "Load Time" },
        { metric: "100%", label: "Mobile Optimized" },
        { metric: "2x", label: "Conversion Lift" },
      ]}
      features={[
        "Custom React & TypeScript development",
        "Responsive mobile-first design",
        "SEO-optimized architecture & routing",
        "Animation & micro-interaction design",
        "Performance optimization & lazy loading",
        "Accessibility (WCAG AA) compliance",
        "CMS integration & content management",
        "Analytics & conversion tracking setup",
        "Progressive Web App (PWA) capabilities",
        "Ongoing maintenance & support",
      ]}
      benefits={[
        { title: "Built for Rankings", desc: "Every line of code is written with SEO in mind — semantic HTML, fast loads, clean URLs." },
        { title: "Convert Visitors", desc: "Beautiful design + fast performance = higher engagement and more conversions." },
        { title: "Scale Effortlessly", desc: "Modern architecture means your site grows with your business without technical debt." },
      ]}
    />
  );
}
