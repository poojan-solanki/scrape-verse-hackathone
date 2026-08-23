import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Bot,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { sendChatMessage } from "../../api/client";
import { ChatMessage } from "../../types";
import { useDashboardStore } from "../../stores/useDashboardStore";
import { MCPTelemetryBadge } from "./MCPTelemetryBadge";
import { QuickPromptPills } from "./QuickPromptPills";
import { TypingIndicator } from "../ui/TypingIndicator";

// Stagger variants for chat messages
const messageVariants = {
  initial: { opacity: 0, y: 12, scale: 0.97 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 25 },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
};

export function CopilotDrawer() {
  const isOpen = useDashboardStore((s) => s.isCopilotOpen);
  const setCopilotOpen = useDashboardStore((s) => s.setCopilotOpen);

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "👋 **Welcome to PortPulse Maritime AI Copilot!**\n\n" +
        "I am connected dynamically to:\n" +
        "- 🔵 **Bright Data MCP**: Real-time web search & web unlocker scraping\n" +
        "- ⚡ **Supabase MCP**: Live vessel telemetry & deep terminal PDF OCR manifests\n\n" +
        "How can I assist your maritime operations today?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputMessage.trim();
    if (!text || isLoading) return;

    setInputMessage("");
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await sendChatMessage(text, messages);
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.reply,
        tools_called: response.tools_called || [],
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: `⚠️ Error communicating with PortPulse Copilot: ${err.message || "Network error"}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 1. Floating Launcher Button (Bottom Right) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setCopilotOpen(true)}
            className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs shadow-2xl shadow-glow-purple flex items-center gap-2.5 transition-colors border border-white/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75 animate-dot-pulse" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </span>
            <Sparkles className="w-4 h-4 text-white" />
            <span className="font-mono">PortPulse AI Copilot</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Interactive Copilot Panel Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-6 right-6 z-50 w-full sm:w-[440px] h-[580px] max-h-[85vh] glass-panel-glow rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-cyan-500/30"
          >
            {/* Header */}
            <div className="p-3.5 border-b border-slate-800 bg-slate-950/90 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <motion.div
                  className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center text-white shadow-md"
                  whileHover={{ rotate: 15 }}
                >
                  <Bot className="w-4 h-4" />
                </motion.div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-white text-xs font-mono">PortPulse Maritime AI</h3>
                    <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold uppercase rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Bright Data & Supabase MCP
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-sans">
                    Autonomous LangGraph Agent • Maritime Intelligence
                  </p>
                </div>
              </div>

              <motion.button
                onClick={() => setCopilotOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="w-7 h-7 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Quick Action Prompt Pills */}
            <QuickPromptPills onSelectPrompt={(text) => handleSend(text)} />

            {/* Message History Stream */}
            <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 text-xs font-sans">
              <AnimatePresence initial={false}>
                {messages.map((msg) => {
                  const isUser = msg.role === "user";
                  return (
                    <motion.div
                      key={msg.id}
                      variants={messageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      layout
                      className={`flex items-start gap-2.5 ${
                        isUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      {!isUser && (
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center text-white text-[10px] shrink-0 mt-0.5 shadow-sm">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                      )}

                      <div
                        className={`max-w-[85%] rounded-2xl p-3 shadow-md ${
                          isUser
                            ? "bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border border-cyan-400/40 text-cyan-100 rounded-tr-sm"
                            : "bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-sm"
                        }`}
                      >
                        {/* MCP Telemetry Badges if tools were executed */}
                        {!isUser && msg.tools_called && (
                          <MCPTelemetryBadge tools={msg.tools_called} />
                        )}

                        <div className="prose prose-invert max-w-none text-xs leading-relaxed">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {msg.content}
                          </ReactMarkdown>
                        </div>
                      </div>

                      {isUser && (
                        <div className="w-6 h-6 rounded-lg bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 text-[10px] shrink-0 mt-0.5">
                          <User className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Animated Typing Indicator */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <TypingIndicator />
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-slate-800/80 bg-slate-950/80 flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask about ships, berths, TEUs, LOA, or weather..."
                className="flex-1 bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 font-sans transition-all"
              />
              <motion.button
                onClick={() => handleSend()}
                disabled={isLoading || !inputMessage.trim()}
                whileHover={{ scale: inputMessage.trim() && !isLoading ? 1.06 : 1 }}
                whileTap={{ scale: inputMessage.trim() && !isLoading ? 0.94 : 1 }}
                className={`px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md ${
                  inputMessage.trim() && !isLoading
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-slate-950 shadow-glow-cyan"
                    : "bg-slate-800 text-slate-500 cursor-not-allowed"
                }`}
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
