import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ServicePageProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  results: { metric: string; label: string }[];
}

export default function ServicePageLayout({
  icon,
  title,
  subtitle,
  description,
  features,
  benefits,
  results,
}: ServicePageProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border py-4">
        <div className="container flex items-center justify-between">
          <Link to="/" className="font-mono text-xl font-bold tracking-widest">NEXUS</Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              {icon}
              <span className="font-mono text-xs uppercase tracking-wider text-primary">{subtitle}</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="/#contact">Get Started</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="/#portfolio">See Results</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-mono text-4xl font-bold text-primary">{r.metric}</p>
                <p className="text-sm text-muted-foreground mt-1">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding" ref={ref}>
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Why This Matters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-background border border-border"
              >
                <h3 className="font-display font-bold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient">Dominate?</span>
          </h2>
          <p className="text-muted-foreground mb-8">Get a free audit and discover exactly how we can grow your business.</p>
          <Button variant="hero" size="xl" asChild>
            <a href="/#contact">Book Your Free Audit</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center">
          <Link to="/" className="font-mono text-sm font-bold tracking-widest">NEXUS</Link>
          <p className="text-xs text-muted-foreground mt-2">© {new Date().getFullYear()} NEXUS Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
