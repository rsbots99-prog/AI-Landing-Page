import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "customer" | "ai";
  delay: number;
}

const conversation: Message[] = [
  { id: 1, sender: "customer", text: "Hi, I saw your product online. How much does it cost?", delay: 0 },
  { id: 2, sender: "ai", text: "Great question! Before I give you pricing, can I ask — what's the main challenge you're trying to solve right now?", delay: 1800 },
  { id: 3, sender: "customer", text: "We're losing too many leads. People ask questions but never buy.", delay: 3600 },
  { id: 4, sender: "ai", text: "That's exactly what we solve. Most of those leads are actually still interested — they just needed the right response at the right moment. Our system handles that automatically.", delay: 5400 },
  { id: 5, sender: "customer", text: "Interesting. So how does it actually work?", delay: 7200 },
  { id: 6, sender: "ai", text: "It reads the intent behind each message and adapts — short answers when they want speed, reassurance when they're hesitant, direct recommendations when they're ready. It closes like a trained salesperson.", delay: 9000 },
  { id: 7, sender: "customer", text: "Ok I want to try this. How do we get started?", delay: 11200 },
];

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-2">
      <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
        AI
      </div>
      <div className="bg-[#1f2c34] rounded-2xl rounded-bl-sm px-4 py-3">
        <div className="flex gap-1 items-center h-4">
          {[0, 0.2, 0.4].map((d) => (
            <motion.div
              key={d}
              className="w-1.5 h-1.5 rounded-full bg-zinc-400"
              animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 0.9, delay: d }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhatsAppSimulation() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const runConversation = () => {
      setVisibleMessages([]);
      setIsTyping(false);
      setPhase(0);

      conversation.forEach((msg, idx) => {
        if (msg.sender === "ai" && idx > 0) {
          const prevDelay = conversation[idx - 1].delay;
          const showTypingAt = prevDelay + 400;
          const showMsgAt = msg.delay;

          timeouts.push(
            setTimeout(() => setIsTyping(true), showTypingAt),
            setTimeout(() => {
              setIsTyping(false);
              setVisibleMessages((prev) => [...prev, msg]);
              setPhase(idx + 1);
            }, showMsgAt)
          );
        } else {
          timeouts.push(
            setTimeout(() => {
              setVisibleMessages((prev) => [...prev, msg]);
              setPhase(idx + 1);
            }, msg.delay)
          );
        }
      });

      timeouts.push(
        setTimeout(() => {
          runConversation();
        }, 14000)
      );
    };

    runConversation();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0b1215]">
      {/* Header */}
      <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-700 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
          AI
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-white text-sm">CloserAI Sales Assistant</div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            Online — AI Active
          </div>
        </div>
        <div className="flex gap-2 text-zinc-400">
          <div className="w-4 h-4 flex flex-col justify-between py-0.5">
            {[0,1,2].map(i => <div key={i} className="h-px bg-zinc-500 rounded" />)}
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="bg-[#0b1215] px-3 py-4 min-h-[420px] max-h-[420px] overflow-y-auto flex flex-col justify-end gap-1 relative">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="flex flex-col gap-1.5 relative">
          <AnimatePresence>
            {visibleMessages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-end gap-2 ${msg.sender === "ai" ? "justify-start" : "justify-end"}`}
              >
                {msg.sender === "ai" && (
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0 mb-1">
                    AI
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-3.5 py-2.5 text-xs leading-relaxed rounded-2xl ${
                    msg.sender === "ai"
                      ? "bg-[#1f2c34] text-zinc-100 rounded-bl-sm"
                      : "bg-primary text-black font-medium rounded-br-sm"
                  }`}
                >
                  {msg.text}
                  {msg.sender === "customer" && (
                    <div className="flex justify-end mt-1 gap-0.5">
                      <Check className="w-3 h-3 text-black/60" />
                      <Check className="w-3 h-3 -ml-1 text-black/60" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TypingIndicator />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Input bar */}
      <div className="bg-[#1f2c34] px-3 py-2.5 flex items-center gap-2">
        <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-xs text-zinc-500">
          Message
        </div>
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
