import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useCounter } from "@/hooks/useScrollAnimation";
import workPeakPrecision from "@/assets/work-peak-precision.jpg";
import workNationwide from "@/assets/work-nationwide.jpg";
import workMalikHvac from "@/assets/work-malik-hvac.jpg";
import workAdditions from "@/assets/work-additions.jpg";
import workPainting from "@/assets/work-painting.jpg";

const projects = [
  {
    title: "Vanderbilt Enterprises",
    category: "Enterprise SEO · Global Authority",
    desc: "Fortune 500 conglomerate SEO transformation achieving 400% traffic growth with 2,500+ enterprise backlinks from authoritative domains, positioning as industry leader.",
    metrics: [
      { label: "Domain Authority", value: 85 },
      { label: "Monthly Traffic", value: 500000, suffix: "" },
      { label: "Enterprise Links", value: 2500 },
      { label: "Revenue Impact", value: 200, suffix: "M+" },
    ],
    growth: "+400%",
    image: workPeakPrecision,
  },
  {
    title: "Rothschild Global Tech",
    category: "AI-Powered SEO · Technical Audit",
    desc: "Tech giant technical SEO overhaul eliminating $50M annual revenue loss through advanced crawling fixes and AI-driven content optimization across 50+ markets.",
    metrics: [
      { label: "Domain Authority", value: 92 },
      { label: "Monthly Traffic", value: 2000000, suffix: "" },
      { label: "Revenue Recovered", value: 50, suffix: "M" },
      { label: "Global Rankings", value: 500, suffix: "+" },
    ],
    growth: "+300%",
    image: workNationwide,
  },
  {
    title: "Du Pont Luxury Properties",
    category: "Luxury Real Estate SEO · Local Domination",
    desc: "$10B+ real estate portfolio SEO strategy achieving nationwide #1 rankings for premium property terms, doubling conversion rates for high-value transactions.",
    metrics: [
      { label: "Domain Authority", value: 78 },
      { label: "Property Inquiries", value: 5000, suffix: "+" },
      { label: "Conversion Rate", value: 12, suffix: "%" },
      { label: "Avg Deal Value", value: 5, suffix: "M" },
    ],
    growth: "+250%",
    image: workMalikHvac,
  },
  {
    title: "Apex Capital Partners",
    category: "Venture Capital SEO · Brand Authority",
    desc: "Private equity firm SEO campaign securing $300M in new deals through strategic ranking for 'venture capital' and 'private equity' terms across global markets.",
    metrics: [
      { label: "Domain Authority", value: 88 },
      { label: "New Deals Secured", value: 300, suffix: "M" },
      { label: "Brand Mentions", value: 10000, suffix: "+" },
      { label: "Media Coverage", value: 500, suffix: "+" },
    ],
    growth: "+600%",
    image: workAdditions,
  },
  {
    title: "Carnegie Global Industries",
    category: "Corporate SEO · Market Leadership",
    desc: "Fortune 500 industrial conglomerate SEO strategy driving $1B market cap increase through organic search dominance and enterprise-level backlink acquisition.",
    metrics: [
      { label: "Domain Authority", value: 95 },
      { label: "Market Cap Growth", value: 1, suffix: "B" },
      { label: "Enterprise Links", value: 5000, suffix: "+" },
      { label: "Industry Rankings", value: 1000, suffix: "+" },
    ],
    growth: "+180%",
    image: workPainting,
  },
];

function MetricCounter({ value, suffix, isVisible }: { value: number; suffix?: string; isVisible: boolean }) {
  const count = useCounter(value, 1500, isVisible);
  return <span>{count}{suffix || ""}</span>;
}

export default function Portfolio() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="section-padding">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-3">Proven Results</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Work Speaks</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real clients. Real rankings. Real revenue growth. Every project is backed by data — here's the proof.
          </p>
        </div>

        {/* Featured large project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="group relative overflow-hidden rounded-3xl bg-card border border-border hover-lift cursor-pointer mb-8"
        >
          <div className="grid lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto overflow-hidden relative">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-xs text-primary">{projects[0].category}</p>
                <span className="font-mono text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{projects[0].growth}</span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">{projects[0].title}</h3>
              <p className="text-muted-foreground mb-6">{projects[0].desc}</p>
              <div className="grid grid-cols-4 gap-3">
                {projects[0].metrics.map((m) => (
                  <div key={m.label} className="text-center p-3 rounded-xl bg-background border border-border">
                    <p className="font-mono text-lg font-bold text-primary">
                      <MetricCounter value={m.value} suffix={m.suffix} isVisible={isVisible} />
                    </p>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover-lift cursor-pointer"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="absolute top-4 right-4 font-mono text-sm font-bold text-primary-foreground bg-primary px-3 py-1 rounded-full">
                  {project.growth}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-mono text-xs text-primary mb-1">{project.category}</p>
                    <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  </div>
                  <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
                <div className="grid grid-cols-4 gap-2">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="font-mono text-sm font-bold text-primary">
                        <MetricCounter value={m.value} suffix={m.suffix} isVisible={isVisible} />
                      </p>
                      <p className="text-[10px] text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
