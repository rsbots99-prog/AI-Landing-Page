import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const personas = [
  {
    type: "The Speed Seeker",
    behavior: "Wants short, direct answers",
    signal: '"How much?"',
    response: "Straight to the price, then a clear next step.",
    color: "from-blue-500/20 to-transparent",
    accent: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    type: "The Reassurance Seeker",
    behavior: "Needs confidence before committing",
    signal: '"But does it really work?"',
    response: "Social proof, guarantees, and calm authority.",
    color: "from-violet-500/20 to-transparent",
    accent: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    type: "The Emotional Hesitator",
    behavior: "Hesitates due to fear of regret",
    signal: '"I\'m not sure yet..."',
    response: "Empathy first, then gentle momentum.",
    color: "from-amber-500/20 to-transparent",
    accent: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    type: "The Decision Ready",
    behavior: "Needs one final push",
    signal: '"What comes next?"',
    response: "A clear, confident call to action.",
    color: "from-primary/20 to-transparent",
    accent: "text-primary",
    border: "border-primary/20",
  },
];

export default function PsychologySection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_hsl(270,60%,30%,0.06),_transparent_55%)]" />
      <div className="container mx-auto max-w-6xl relative">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium uppercase tracking-widest mb-6">
            Adaptive Psychology
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Every Customer Thinks{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-primary">
              Differently
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            CloserAI detects the psychological profile of each customer in real time and shifts its communication style to match — not a fixed script, but a living conversation strategy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          {personas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative p-6 rounded-2xl border ${p.border} bg-gradient-to-br ${p.color} overflow-hidden`}
              data-testid={`psychology-card-${i}`}
            >
              <div className="mb-4">
                <span className={`text-xs font-bold uppercase tracking-widest ${p.accent}`}>{p.type}</span>
                <p className="text-white/70 text-sm mt-1">{p.behavior}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold text-white/40 uppercase mt-0.5 w-14 flex-shrink-0">Signal</span>
                  <div className="bg-white/5 rounded-xl px-3 py-2 text-sm text-white/80 italic flex-1">
                    {p.signal}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold text-white/40 uppercase mt-0.5 w-14 flex-shrink-0">AI Does</span>
                  <div className={`rounded-xl px-3 py-2 text-sm font-medium flex-1 ${p.accent} bg-white/[0.03]`}>
                    {p.response}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            The AI adapts dynamically during conversations — not just at the start, but as the customer's emotional state shifts in real time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
