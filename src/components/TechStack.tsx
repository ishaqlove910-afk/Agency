import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tools = [
  { name: "Ahrefs", logo: "/logos/ahrefs.png", description: "Advanced backlink analysis and competitor research" },
  { name: "SEMrush", logo: "/logos/semrush.png", description: "Comprehensive SEO toolkit and keyword research" },
  { name: "Google Analytics", logo: "/logos/google-analytics.png", description: "Website traffic analysis and user behavior insights" },
  { name: "Google Search Console", logo: "/logos/google-search-console.png", description: "Monitor and optimize search performance" },
  { name: "Screaming Frog", logo: "/logos/screaming-frog.png", description: "Technical SEO auditing and site crawling" },
  { name: "Moz", logo: "/logos/moz.png", description: "Domain authority and SEO metrics" },
];

export default function TechStack() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-3"
          >
            Our Arsenal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Enterprise-Grade
            <br />
            <span className="text-gradient">SEO Tools</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto"
          >
            We wield the same cutting-edge tools used by Fortune 500 companies and elite SEO agencies worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative"
            >
              <div className="aspect-square rounded-2xl bg-card border border-border p-6 flex items-center justify-center hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="hidden text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-primary text-sm">{tool.name[0]}</span>
                  </div>
                  <p className="text-xs font-medium">{tool.name}</p>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-popover text-popover-foreground text-xs rounded-lg px-3 py-2 shadow-lg whitespace-nowrap z-10">
                {tool.description}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-popover"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}