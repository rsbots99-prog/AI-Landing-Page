import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Play } from "lucide-react";

export default function DemoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <section className="py-24 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_hsl(142,69%,49%,0.05),_transparent_50%)]" />
      <div className="container mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-6">
            Live Demo
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            See It Close a Sale{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
              in Real Time
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Watch how CloserAI turns a hesitant prospect into a confirmed buyer — no scripts, no pressure, just intelligent conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video bg-gradient-to-br from-[#0d1f17] to-[#080d0a] cursor-pointer group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          data-testid="demo-video-player"
        >
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(142,69%,49%) 1px, transparent 1px), linear-gradient(90deg, hsl(142,69%,49%) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(142,69%,49%,0.08),_transparent_70%)]" />

          {/* Center play button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <motion.div
              animate={{ scale: hovered ? 1.1 : 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-20 h-20 rounded-full bg-primary shadow-[0_0_60px_-10px_hsl(142,69%,49%)] flex items-center justify-center"
            >
              <Play className="w-8 h-8 text-black fill-black ml-1" />
            </motion.div>
            <div className="text-center">
              <div className="text-white font-semibold text-lg">Watch a Real Conversation</div>
              <div className="text-muted-foreground text-sm mt-1">3 minutes — see a full sales close from first message to payment</div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/60 to-transparent flex items-center px-5 gap-3">
            <div className="flex-1 h-1 rounded-full bg-white/10">
              <div className="w-0 h-full rounded-full bg-primary" />
            </div>
            <span className="text-xs text-zinc-500 font-mono">0:00 / 3:24</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid sm:grid-cols-3 gap-4"
        >
          {[
            { stat: "87%", label: "Conversations end with a buying decision" },
            { stat: "3x", label: "More replies from hesitant customers" },
            { stat: "<30s", label: "Average AI response time" },
          ].map((item, i) => (
            <div key={i} className="text-center p-5 rounded-2xl border border-white/5 bg-white/[0.02]" data-testid={`demo-stat-${i}`}>
              <div className="text-3xl font-bold text-primary mb-1">{item.stat}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
