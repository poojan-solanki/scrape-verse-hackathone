import { memo } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, Clock, FileCheck2, Sparkles } from "lucide-react";
import { PortSummary } from "../../types";

interface AISituationReportProps {
  summary: PortSummary | null;
  portName: string;
  isLoading?: boolean;
}

function AISituationReportInner({ summary, portName, isLoading }: AISituationReportProps) {
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-2xl glass-panel border border-cyan-500/30 flex flex-col items-center justify-center space-y-3"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-6 h-6 text-cyan-400" />
        </motion.div>
        <p className="text-xs font-mono text-slate-300">
          Synthesizing real-time situational intelligence...
        </p>
        {/* Shimmer loading blocks */}
        <div className="w-full space-y-2 mt-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="skeleton-shimmer rounded-md"
              style={{
                height: i === 0 ? "16px" : "12px",
                width: i === 3 ? "60%" : "100%",
                animationDelay: `${i * 150}ms`,
              }}
            />
          ))}
        </div>
      </motion.div>
    );
  }

  if (!summary) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 rounded-2xl glass-panel border border-slate-700/50 flex flex-col items-center justify-center space-y-2 text-center"
      >
        <Bot className="w-8 h-8 text-slate-500" />
        <h4 className="text-xs font-bold text-slate-300 font-mono">No AI Summary Generated Yet</h4>
        <p className="text-[11px] text-slate-400 max-w-sm">
          Click <span className="text-cyan-400 font-semibold">'Sync Telemetry'</span> above to ingest fresh logs and trigger the situational analyst.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-4 rounded-2xl glass-panel-glow border border-cyan-500/30 space-y-3 shadow-2xl"
    >
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <motion.div
            className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-glow-cyan"
            animate={{ boxShadow: [
              "0 0 15px -3px rgba(6, 182, 212, 0.3)",
              "0 0 25px -3px rgba(168, 85, 247, 0.4)",
              "0 0 15px -3px rgba(6, 182, 212, 0.3)",
            ]}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-bold text-white font-mono">
                {portName} • Situational Intelligence
              </h3>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase">
                AI Intelligence
              </span>
            </div>
            <p className="text-[10px] text-slate-400">
              Evaluated {summary.vessel_count} telemetry vessels & {summary.pdf_record_count} terminal PDF OCR manifests
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
          <Clock className="w-3 h-3 text-cyan-400" />
          <span>{summary.generated_at ? summary.generated_at.slice(0, 16).replace("T", " ") : "Recent"} UTC</span>
        </div>
      </div>

      {/* Structured Markdown Content — fades in with slight delay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="prose prose-invert max-w-none text-xs text-slate-200 leading-relaxed font-sans space-y-2"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {summary.summary_text}
        </ReactMarkdown>
      </motion.div>

      {/* Footer Linkage Badge */}
      <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/80">
        <span className="flex items-center gap-1">
          <FileCheck2 className="w-3 h-3 text-emerald-400" />
          Deterministic Pydantic & OCR Data Fusion Verified
        </span>
        <span className="text-cyan-400">Database Linked: port_summaries</span>
      </div>
    </motion.div>
  );
}

export const AISituationReport = memo(AISituationReportInner);
