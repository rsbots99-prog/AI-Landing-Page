import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "31687963541";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20CloserAI.%20Can%20we%20talk%3F`;

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Deep glow bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_hsl(142,69%,49%,0.12),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_hsl(142,69%,49%,0.08),_transparent_50%)]" />

      <div className="container mx-auto max-w-4xl relative text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-widest mb-8">
            Ready When You Are
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Stop Losing Interested{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-primary">
              Customers During Conversations.
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            Turn WhatsApp conversations into a more intelligent and stable sales channel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-base h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-[0_0_60px_-8px_hsl(142,69%,49%)] hover:shadow-[0_0_80px_-8px_hsl(142,69%,49%)] transition-all hover:scale-105"
              data-testid="cta-contact-button"
              onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            >
              Contact Us Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base h-14 px-10 rounded-full border-white/10 hover:bg-white/5 font-medium"
              data-testid="cta-demo-button"
            >
              Book a Demo
            </Button>
          </div>

          {/* WhatsApp contact */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors group"
            data-testid="cta-whatsapp-link"
          >
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-xs text-muted-foreground">WhatsApp</div>
              <div className="text-white font-semibold text-sm">+31 6 87963541</div>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto max-w-5xl relative mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-semibold text-white">CloserAI</div>
        <div>Intelligent WhatsApp Sales Communication</div>
        <div>+31 6 87963541</div>
      </div>
    </section>
  );
}
