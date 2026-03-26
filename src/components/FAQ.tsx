import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly can you get my business ranking on Google?",
    a: "Most clients see measurable ranking improvements within 30-60 days, with significant results in 3-6 months. Local SEO campaigns typically show faster results — we've had clients hit the Google Maps 3-pack within 45 days. Every campaign includes monthly reporting so you can track progress in real time.",
  },
  {
    q: "What makes NEXUS different from other SEO agencies?",
    a: "We combine AI-powered optimization with hands-on strategic execution. Most agencies use outdated playbooks — we use custom automation, real-time trend capture, and data-backed strategies that adapt faster than the competition. Plus, Muhammad Tayyab personally leads every campaign.",
  },
  {
    q: "Do you guarantee #1 rankings?",
    a: "We don't make hollow promises — we deliver results. While no ethical SEO agency can guarantee a specific position (Google's algorithm is complex), our track record speaks for itself: 10+ brands ranked #1, average 67% traffic growth, and 4,700+ quality backlinks built across campaigns.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We've delivered proven results across contracting, HVAC, painting, home additions, investigations, security, and professional services. Our local SEO framework works for any service-based business that needs to dominate their geographic market.",
  },
  {
    q: "How do you report on results?",
    a: "Every client gets a custom analytics dashboard with real-time tracking of rankings, traffic, backlinks, and conversions. We send detailed monthly reports with insights, and you'll always have direct access to Tayyab for strategy discussions.",
  },
  {
    q: "What's included in the free SEO audit?",
    a: "Our audit covers your current rankings, technical site health, backlink profile, competitor analysis, and 3 high-opportunity keywords you can target immediately. It's a complete roadmap — whether you work with us or not, you'll walk away with actionable insights.",
  },
  {
    q: "Can you help with an existing website that needs improvement?",
    a: "Absolutely. Many of our best results come from optimizing existing sites. We audit performance, SEO health, accessibility, and UX, then build a prioritized roadmap. Sometimes a few strategic changes produce dramatic ranking jumps.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="section-padding bg-card border-y border-border">
      <div className="container max-w-3xl" ref={ref}>
        <div className="text-center mb-16">
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-3">
            Common Questions
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">FAQ</h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className={`space-y-3 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl px-6 data-[state=open]:bg-background transition-colors duration-300"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-base hover:no-underline hover:text-primary transition-colors py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
