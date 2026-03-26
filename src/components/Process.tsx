import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Compass, Target, PenTool, Code2, Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Compass, title: "Discovery", desc: "Understand your goals, audience, and market landscape." },
  { icon: Target, title: "Strategy", desc: "Data-driven roadmap with competitive analysis." },
  { icon: PenTool, title: "Design", desc: "Wireframes, prototypes, and interactive mockups." },
  { icon: Code2, title: "Development", desc: "Clean, fast, accessible, production-ready code." },
  { icon: Rocket, title: "Launch", desc: "Rigorous testing, optimization, and deployment." },
  { icon: TrendingUp, title: "Growth", desc: "Analytics, monitoring, and continuous improvement." },
];

export default function Process() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="section-padding bg-card border-y border-border">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-3">How We Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Our Process</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="relative flex gap-4 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
              >
                <step.icon className="w-5 h-5 text-primary" />
              </motion.div>
              <div>
                <p className="font-mono text-xs text-primary mb-1">0{i + 1}</p>
                <h3 className="font-display text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
