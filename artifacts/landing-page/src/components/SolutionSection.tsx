import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Zap, Brain, MessageSquare, TrendingUp, Shield, Users } from "lucide-react";

const features = [
  { icon: Brain, title: "Understands Customer Intent", desc: "Reads the real meaning behind every message — not just the words." },
  { icon: Zap, title: "Adapts in Real Time", desc: "Communication style shifts naturally to match each customer's energy and pace." },
  { icon: MessageSquare, title: "Keeps Engagement Alive", desc: "Maintains momentum through every stage of the conversation." },
  { icon: TrendingUp, title: "Guides Toward Purchase", desc: "Moves conversations from interest to decision without pressure." },
  { icon: Shield, title: "Reduces Hesitation", desc: "Identifies doubt signals and addresses them before they become drop-off." },
  { icon: Users, title: "Trained Sales Intelligence", desc: "Handles conversations the way a skilled closer would — not a script bot." },
];

export default function SolutionSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,_hsl(142,69%,49%,0.06),_transparent_60%)]" />
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
            The Solution
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            AI WhatsApp{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
              Closing System
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            This is not just fast replies.
          </p>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto">
            This is intelligent sales communication inside WhatsApp conversations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-300"
              data-testid={`solution-feature-${i}`}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-white text-base mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
