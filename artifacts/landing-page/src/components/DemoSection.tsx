import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Play, Pause, Maximize2 } from "lucide-react";
import demoVideo from "@assets/WhatsApp_Video_2026-05-21_at_4.24.01_PM_1779373701414.mp4";

export default function DemoSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [playing, setPlaying] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    // Don't toggle play when clicking fullscreen button
    if ((e.target as HTMLElement).closest("[data-fullscreen]")) return;
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const openFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if ((el as HTMLVideoElement & { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen) {
      (el as HTMLVideoElement & { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen!();
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
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
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-black cursor-pointer group shadow-[0_0_80px_-20px_hsl(142,69%,49%,0.3)]"
          onClick={togglePlay}
          data-testid="demo-video-player"
        >
          <video
            ref={videoRef}
            src={demoVideo}
            className="w-full h-full object-contain"
            playsInline
            onEnded={() => setPlaying(false)}
          />

          {/* Play/Pause overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
          >
            <div className="absolute inset-0 bg-black/30" />
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-20 h-20 rounded-full bg-primary shadow-[0_0_60px_-10px_hsl(142,69%,49%)] flex items-center justify-center"
            >
              {playing ? (
                <Pause className="w-8 h-8 text-black fill-black" />
              ) : (
                <Play className="w-8 h-8 text-black fill-black ml-1" />
              )}
            </motion.div>
          </div>

          {/* Fullscreen button — always visible on hover */}
          <div
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            data-fullscreen
          >
            <button
              onClick={openFullscreen}
              data-testid="demo-fullscreen-button"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/60 hover:bg-black/80 border border-white/10 text-white text-xs font-medium backdrop-blur-sm transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
              Fullscreen
            </button>
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
