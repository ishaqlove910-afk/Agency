import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, Search, Palette, Zap, ShoppingCart, BarChart3, ArrowRight, MapPin, Brain, Code } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  { icon: MapPin, title: "Local SEO", desc: "Dominate Google Maps and local pack with targeted keyword clusters and GMB optimization.", link: "/services/local-seo" },
  { icon: Search, title: "On-Page SEO", desc: "Schema markup, meta optimization, content architecture, and internal linking strategies.", link: "/services/on-page-seo" },
  { icon: Brain, title: "AI-Powered SEO", desc: "Automated content optimization, trend capture, and AI-driven keyword gap analysis.", link: "/services/ai-seo" },
  { icon: Zap, title: "Technical SEO", desc: "Core Web Vitals, crawl optimization, structured data, and site speed engineering.", link: "/services/technical-seo" },
  { icon: Globe, title: "Off-Page SEO", desc: "Strategic backlink building, domain authority growth, and digital PR campaigns.", link: "/services/off-page-seo" },
  { icon: Code, title: "Web Development", desc: "Custom React applications built for performance, conversion, and SEO excellence.", link: "/services/web-development" },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-3">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Every service is designed to move the needle — more traffic, higher rankings, and measurable ROI.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)", transition: { duration: 0.3 } }}
              className="group p-8 rounded-2xl bg-card border border-border cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="w-10 h-10 text-primary mb-5" />
              </motion.div>
              <h3 className="font-mono text-lg font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.desc}</p>
              <Link to={service.link} className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
