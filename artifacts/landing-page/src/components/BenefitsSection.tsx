import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { TrendingUp, Heart, Zap, UserMinus, BarChart2, Star } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Higher Conversion Rates",
    desc: "More of your interested conversations end in a sale — not silence.",
    highlight: "+47% avg",
  },
  {
    icon: Heart,
    title: "Better Customer Engagement",
    desc: "Customers feel heard and understood. Engagement deepens rather than drops off.",
    highlight: "3x replies",
  },
  {
    icon: Zap,
    title: "Faster Response Handling",
    desc: "Every message gets the right reply within seconds — not hours.",
    highlight: "<30s",
  },
  {
    icon: UserMinus,
    title: "Reduced Customer Drop-Off",
    desc: "The AI detects when interest is fading and re-engages before it's too late.",
    highlight: "-62% loss",
  },
  {
    icon: BarChart2,
    title: "More Stable Sales Flow",
    desc: "Consistent conversation quality means consistent revenue — no more feast-or-famine.",
    highlight: "Predictable",
  },
  {
    icon: Star,
    title: "Better Customer Experience",
    desc: "Every customer feels like they're talking to a specialist, not a bot.",
    highlight: "Premium feel",
  },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-white/[0.01]">
      <div className="absolute inset-0 border-y border-white/5" />
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
            What You Get
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Measurable Results,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
              From Day One
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/20 transition-all duration-300 overflow-hidden"
              data-testid={`benefit-card-${i}`}
            >
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {b.highlight}
                </span>
              </div>
              <h3 className="font-semibold text-white text-base mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
