import { useScrollAnimation, useCounter } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Elite Brands Ranked #1", desc: "Fortune 500 & Billion-Dollar Companies" },
  { value: 15, suffix: "M+", label: "Monthly Organic Traffic", decimal: false, desc: "Generated for premium clients" },
  { value: 25000, suffix: "+", label: "Enterprise Backlinks", desc: "From authoritative domains" },
  { value: 300, suffix: "%", label: "Avg. Revenue Growth", desc: "Through SEO optimization" },
];

function StatItem({ value, suffix, label, desc, decimal, isVisible, index }: {
  value: number; suffix: string; label: string; desc: string; decimal?: boolean; isVisible: boolean; index: number;
}) {
  const count = useCounter(decimal ? value * 10 : value, 2000, isVisible);
  const display = decimal ? (count / 10).toFixed(1) : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="text-center"
    >
      <p className="font-mono text-5xl md:text-6xl font-bold text-primary mb-2">
        {display}{suffix}
      </p>
      <p className="font-display font-semibold text-sm mb-1">{label}</p>
      <p className="text-muted-foreground text-xs">{desc}</p>
    </motion.div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-card border-y border-border">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
