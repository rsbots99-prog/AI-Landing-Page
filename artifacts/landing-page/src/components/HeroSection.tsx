import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import WhatsAppSimulation from "./WhatsAppSimulation";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_hsl(142,69%,49%,0.15),_transparent_50%)] z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Intelligent Sales Automation
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight text-white mb-6">
              <span className="block opacity-90">You're Not Losing Customers Because of Your Product.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300 mt-2">You're Losing Them During The Conversation.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Most businesses think lost sales happen because of pricing or competition. But many customers disappear while already interested and actively chatting. The problem is often not the product itself -- but how the conversation is handled before the buying decision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-[0_0_40px_-10px_hsl(142,69%,49%)] transition-all hover:scale-105"
                data-testid="hero-cta-book-demo"
              >
                Book a Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base h-14 px-8 rounded-full border-white/10 hover:bg-white/5 font-medium transition-all"
                data-testid="hero-cta-watch-demo"
              >
                <PlayCircle className="mr-2 h-5 w-5 text-primary" />
                Watch AI Conversation
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-background flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800" />
                  </div>
                ))}
              </div>
              <span>Trusted by 500+ high-ticket closers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl opacity-50" />
            <div className="relative w-full max-w-[360px] mx-auto z-10 transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
              <WhatsAppSimulation />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
