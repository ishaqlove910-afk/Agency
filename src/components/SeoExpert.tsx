import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, TrendingUp, Brain, MapPin, Zap, Award } from "lucide-react";
import tayyabPortrait from "@/assets/tayyab-portrait.jpg";
import talhaPortrait from "@/assets/tayyab-portrait.jpg"; // Reuse existing image if talha portrait file is missing
import PowerScene from "./PowerScene";

// Expert data
const experts = [
  {
    id: "tayyab",
    name: "Muhammad Tayyab",
    title: "Local SEO & AI Growth Specialist",
    image: tayyabPortrait,
    description: "Muhammad Tayyab is a Local SEO & AI Growth Specialist who transforms local businesses from invisible to unmissable. With 3+ years of proven authority growth, he blends creative strategy, technical execution, and AI-driven optimization to deliver measurable ROI.",
    background: "From Google Maps domination to domain authority building, Tayyab has helped 10+ brands achieve #1 rankings with scalable local keyword clusters, high-intent content architecture, and data-backed SEO roadmaps.",
    expertise: [
      { icon: MapPin, label: "Local SEO & Google Maps" },
      { icon: Brain, label: "AI-Powered Optimization" },
      { icon: TrendingUp, label: "Organic Growth Strategy" },
      { icon: Shield, label: "Technical SEO Audits" },
      { icon: Zap, label: "Core Web Vitals" },
      { icon: Award, label: "Domain Authority Building" },
    ],
    achievements: [
      { metric: "+67%", label: "Avg. Traffic Growth" },
      { metric: "10+", label: "Brands Ranked #1" },
      { metric: "4.7K+", label: "Backlinks Built" },
      { metric: "3+", label: "Years Mastery" },
    ],
    badge: { title: "#1 Ranked", subtitle: "SEO Strategist" }
  },
  {
    id: "talha",
    name: "Talha Imran",
    title: "Full-Stack Web Developer & AI Automation Specialist",
    image: talhaPortrait, // Use your new pfp here
    description: "Talha Imran is a Full-Stack Web Developer & AI Automation Specialist who creates stunning websites with advanced 3D animations and builds intelligent AI agents. With 5+ years of coding expertise, he combines cutting-edge web technologies with automation solutions to deliver exceptional digital experiences.",
    background: "From crafting responsive websites with Tailwind CSS and advanced animations to developing sophisticated Discord bots with strict verification criteria in Python, Talha has built 50+ websites, created 15+ AI agents using n8n, and conducted deep research on city-specific web development.",
    expertise: [
      { icon: MapPin, label: "Full-Stack Web Development" },
      { icon: Brain, label: "AI Agent Creation" },
      { icon: TrendingUp, label: "3D Animations & UI/UX" },
      { icon: Shield, label: "Discord Bot Development" },
      { icon: Zap, label: "Automation & Integration" },
      { icon: Award, label: "Python Development" },
    ],
    achievements: [
      { metric: "50+", label: "Websites Created" },
      { metric: "15+", label: "AI Agents Built" },
      { metric: "10+", label: "Discord Bots" },
      { metric: "5+", label: "Years Coding" },
    ],
    badge: { title: "#1 Developer", subtitle: "AI & Web Expert" }
  }
];

export default function SeoExpert() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="expert" className="section-padding relative overflow-hidden">
      <PowerScene />
      <div className="container relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-3"
          >
            Meet The Experts
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            The Minds Behind
            <br />
            <span className="text-gradient">Your Success</span>
          </motion.h2>
        </div>

        {/* Experts Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {experts.map((expert, expertIndex) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: expertIndex * 0.2 }}
              className="space-y-8"
            >
              {/* Portrait */}
              <motion.div
                initial={{ opacity: 0, x: expertIndex === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden group">
                  <img
                    src={expert.image}
                    alt={`${expert.name} - ${expert.title}`}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-3xl font-bold text-primary-foreground">{expert.name}</h3>
                    <p className="font-mono text-sm text-primary-foreground/80">{expert.title}</p>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: expertIndex * 0.5 }}
                  className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-xl"
                >
                  <p className="font-mono text-xs font-bold">{expert.badge.title}</p>
                  <p className="text-xs opacity-80">{expert.badge.subtitle}</p>
                </motion.div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + expertIndex * 0.2 }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {expert.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {expert.background}
                </p>

                {/* Achievements grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {expert.achievements.map((a, i) => (
                    <motion.div
                      key={a.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 + expertIndex * 0.2 }}
                      className="text-center p-4 rounded-xl bg-card border border-border"
                    >
                      <p className="font-mono text-2xl font-bold text-primary">{a.metric}</p>
                      <p className="text-xs text-muted-foreground mt-1">{a.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-3">
                  {expert.expertise.map((e, i) => (
                    <motion.div
                      key={e.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.08 + expertIndex * 0.2 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm"
                    >
                      <e.icon size={14} className="text-primary" />
                      <span className="font-medium">{e.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
