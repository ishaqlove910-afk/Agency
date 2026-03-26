import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "As CEO of a $2B enterprise, I demand perfection. NEXUS delivered beyond expectations — our organic traffic increased 400% in 6 months. Worth every penny for the boardroom results.",
    name: "Marcus Vanderbilt",
    title: "CEO, Vanderbilt Enterprises",
    avatar: "MV",
    rating: 5,
  },
  {
    quote: "We were losing $50M annually to poor search visibility. Tayyab's AI-driven strategy turned that around completely. Now we're the first result for every critical keyword in our industry.",
    name: "Victoria Rothschild",
    title: "CFO, Global Tech Solutions",
    avatar: "VR",
    rating: 5,
  },
  {
    quote: "In the luxury real estate market, visibility is everything. NEXUS positioned our $10M+ properties as the top results nationwide. Our conversion rate doubled overnight.",
    name: "Alexander Du Pont",
    title: "Managing Director, Elite Properties",
    avatar: "AD",
    rating: 5,
  },
  {
    quote: "Our private equity firm invests in unicorns. NEXUS helped us rank for 'venture capital' terms that brought in $300M in new deals. They're the secret weapon no one talks about.",
    name: "Isabella Kensington",
    title: "Partner, Apex Capital",
    avatar: "IK",
    rating: 5,
  },
  {
    quote: "As a Forbes 400 member, I only work with the absolute best. NEXUS's technical SEO audit revealed issues costing us millions. Fixed in weeks, revenue flowing again.",
    name: "Jonathan Rockefeller",
    title: "Chairman, Heritage Industries",
    avatar: "JR",
    rating: 5,
  },
  {
    quote: "We dominate the Fortune 500 list. NEXUS gave us the competitive edge in organic search that our competitors still can't match. $1B market cap increase directly attributable.",
    name: "Sophia Carnegie",
    title: "President, Carnegie Global",
    avatar: "SC",
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="section-padding">
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-3">Client Results</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">They Trusted Us.</h2>
          <p className="text-muted-foreground">Here's what happened next.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="p-8 rounded-2xl bg-card border border-border backdrop-blur-sm"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic font-light">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
