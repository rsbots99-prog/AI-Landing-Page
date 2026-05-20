import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  { label: "Interested customers disappear", desc: "They were ready to buy. Then silence." },
  { label: "Conversations lose momentum", desc: "A slow reply kills the buying energy completely." },
  { label: "Hesitation goes unaddressed", desc: "The customer needed reassurance. Nobody gave it." },
  { label: "Weak communication kills intent", desc: "The wrong message at the wrong moment undoes everything." },
  { label: "Slow replies lose the sale", desc: "Customers move on before you've even responded." },
];

function ProblemCard({ label, desc, index }: { label: string; desc: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
      data-testid={`problem-card-${index}`}
    >
      <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
        <div className="w-2 h-2 rounded-full bg-red-500" />
      </div>
      <div>
        <div className="font-semibold text-white text-sm mb-1">{label}</div>
        <div className="text-muted-foreground text-sm leading-relaxed">{desc}</div>
      </div>
    </motion.div>
  );
}

export default function ProblemSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0,84%,60%,0.04),_transparent_60%)]" />
      <div className="container mx-auto max-w-5xl relative">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium uppercase tracking-widest mb-6">
            The Hidden Problem
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Where the Sales Are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Actually Lost
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            It's not your product. It's not your price. It's the conversation — the window between interest and decision where most businesses go completely silent or say the wrong thing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {problems.map((p, i) => (
            <ProblemCard key={i} {...p} index={i} />
          ))}
          <div />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative p-8 rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent text-center"
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-red-500/10 to-transparent opacity-50 blur-sm" />
          <p className="relative text-xl sm:text-2xl font-semibold text-white leading-relaxed max-w-3xl mx-auto">
            "The most dangerous sales loss is the one you don't notice{" "}
            <span className="text-red-400">while the conversation is happening.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
