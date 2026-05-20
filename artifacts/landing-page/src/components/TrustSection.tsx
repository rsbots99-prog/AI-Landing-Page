import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ShieldCheck, MessageCircle, RefreshCw } from "lucide-react";

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-white/[0.01]">
      <div className="absolute inset-0 border-y border-white/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_hsl(142,69%,49%,0.04),_transparent_60%)]" />
      <div className="container mx-auto max-w-5xl relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
            Proven & Protected
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Built on Trust,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
              Backed by Results
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Trust stat */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-full md:col-span-1 p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent text-center"
            data-testid="trust-stat"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
              <MessageCircle className="w-7 h-7 text-primary" />
            </div>
            <div className="text-5xl font-bold text-white mb-2">200+</div>
            <div className="text-primary font-semibold mb-2">Simulated Conversations</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tested through 200+ simulated customer conversations across industries before launch — refined until the closing rate was reliable.
            </p>
          </motion.div>

          <div className="col-span-full md:col-span-2 grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: ShieldCheck,
                title: "7-Day Full Refund Guarantee",
                desc: "If the system does not perform well for your business, or you notice weak conversation quality, you can request a full refund — no questions asked.",
                accent: "text-primary",
                bg: "bg-primary/10",
                border: "border-primary/20",
              },
              {
                icon: RefreshCw,
                title: "Continuous Improvement",
                desc: "CloserAI learns from every conversation to get sharper over time. The system that closes today will be even stronger next month.",
                accent: "text-violet-400",
                bg: "bg-violet-500/10",
                border: "border-violet-500/20",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-4"
                data-testid={`trust-feature-${i}`}
              >
                <div className={`w-11 h-11 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center`}>
                  <item.icon className={`w-5 h-5 ${item.accent}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Guarantee badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-full p-5 rounded-2xl border border-primary/20 bg-primary/5 flex items-center gap-4"
              data-testid="guarantee-badge"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-semibold text-white text-sm">Zero risk.</span>{" "}
                <span className="text-muted-foreground text-sm">
                  If CloserAI doesn't improve your conversation-to-sale rate within 7 days, you get every cent back.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
