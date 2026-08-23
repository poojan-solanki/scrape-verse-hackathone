import { memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  FileText,
  Layers,
  MapPin,
  Ship,
  Sparkles,
  X,
} from "lucide-react";
import { fetchPDFIntelligence, fetchPortSummary, fetchPortVessels } from "../../api/client";
import { useDashboardStore, DashboardTab } from "../../stores/useDashboardStore";
import { StatsBar } from "../layout/StatsBar";
import { VesselTable } from "../vessels/VesselTable";
import { OCRManifestTable } from "../vessels/OCRManifestTable";
import { AISituationReport } from "./AISituationReport";

const JNPT_TERMINALS = [
  { name: "BMCT", url: "https://www.jnport.gov.in/uploads/berthing_report/pdf/17/Berthing_Sheet_20_AUG_2026.pdf" },
  { name: "APMT Mumbai", url: "https://www.jnport.gov.in/uploads/berthing_report/pdf/16/APMT_Berthing_Report_-_20-Aug-2026.pdf" },
  { name: "NSFT Terminal", url: "https://www.jnport.gov.in/uploads/berthing_report/pdf/15/Daily_Berthing_Report_20_8_2026.pdf" },
  { name: "NSICT", url: "https://www.jnport.gov.in/uploads/berthing_report/pdf/13/BERTHING_CT.pdf" },
  { name: "NSIGT", url: "https://www.jnport.gov.in/uploads/berthing_report/pdf/14/BERTHING_GT.pdf" },
];

const TABS = [
  { id: "all" as const, label: "Live Manifest", icon: Ship },
  { id: "ocr" as const, label: "Deep PDF OCR", icon: Layers },
  { id: "summary" as const, label: "Situation Report", icon: Sparkles },
];

// Smooth content transition variants
const contentVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.15 } },
};

function PortSideSheetInner() {
  const isOpen = useDashboardStore((s) => s.isPortSheetOpen);
  const closeSheet = useDashboardStore((s) => s.closePortSheet);
  const selectedPort = useDashboardStore((s) => s.selectedPort);
  const selectedPortSlug = useDashboardStore((s) => s.selectedPortSlug);
  const activeTab = useDashboardStore((s) => s.activeTab);
  const setActiveTab = useDashboardStore((s) => s.setActiveTab);

  // 1. TanStack Query for live vessel manifest
  const vesselsQuery = useQuery({
    queryKey: ["vessels", selectedPortSlug],
    queryFn: () => fetchPortVessels(selectedPortSlug),
    refetchInterval: 30000,
  });

  // 2. TanStack Query for AI Situation Summary
  const summaryQuery = useQuery({
    queryKey: ["summary", selectedPortSlug],
    queryFn: () => fetchPortSummary(selectedPortSlug),
    refetchInterval: 45000,
  });

  // 3. TanStack Query for Deep PDF OCR manifests
  const ocrQuery = useQuery({
    queryKey: ["ocr", selectedPortSlug],
    queryFn: () => fetchPDFIntelligence(selectedPortSlug),
    refetchInterval: 60000,
  });

  const vessels = vesselsQuery.data?.vessels || [];
  const summary = summaryQuery.data?.summary || null;
  const ocrRecords = ocrQuery.data?.records || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="fixed top-16 right-0 bottom-0 z-30 w-full sm:w-[680px] md:w-[760px] lg:w-[860px] xl:w-[960px] bg-slate-950/95 border-l border-cyan-500/30 flex flex-col shadow-2xl overflow-hidden"
        >
          {/* 1. Header Banner */}
          <div className="p-3.5 md:p-4 border-b border-slate-800/80 bg-slate-950/95 shrink-0 space-y-2">
            <div className="flex items-start justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h2 className="text-base md:text-lg font-extrabold text-white font-mono flex items-center gap-2">
                    <span>{selectedPort.name}</span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold uppercase"
                    >
                      {selectedPort.unlocode}
                    </motion.span>
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-cyan-400">
                    <MapPin className="w-3 h-3" />
                    {selectedPort.state || "India"}, {selectedPort.country}
                  </span>
                  <span>•</span>
                  <span>{selectedPort.operator_type || "Port Authority"}</span>
                  {selectedPort.website_url && (
                    <>
                      <span>•</span>
                      <a
                        href={selectedPort.website_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:text-white flex items-center gap-0.5 hover:underline"
                      >
                        <span>Official Portal</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={closeSheet}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-700/60 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Terminal PDF Quick Links Bar (if JNPT) */}
            {selectedPort.unlocode === "INNSA" && (
              <div className="flex items-center gap-1.5 overflow-x-auto pt-0.5 no-scrollbar text-[10px]">
                <span className="text-slate-500 font-semibold uppercase text-[9px] shrink-0 mr-1">
                  Terminal PDFs:
                </span>
                {JNPT_TERMINALS.map((t, idx) => (
                  <motion.a
                    key={idx}
                    href={t.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/25 hover:text-white whitespace-nowrap font-mono transition-colors flex items-center gap-1 shrink-0"
                  >
                    <FileText className="w-2.5 h-2.5" />
                    <span>{t.name} ↗</span>
                  </motion.a>
                ))}
              </div>
            )}
          </div>

          {/* 2. Compact Inline Stats Telemetry Strip */}
          <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800/80 shrink-0">
            <StatsBar
              vessels={vessels}
              portName={selectedPort.name}
              isLoading={vesselsQuery.isLoading}
            />
          </div>

          {/* 3. Navigation Tabs with animated indicator */}
          <div className="px-4 pt-2.5 flex items-center gap-2 border-b border-slate-800 bg-slate-950/70 shrink-0 relative">
            {TABS.map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              const badge = t.id === "all" ? vessels.length : t.id === "ocr" ? ocrRecords.length : undefined;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id as DashboardTab)}
                  className={`pb-2 px-3 text-xs font-mono font-semibold transition-colors flex items-center gap-1.5 relative ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{t.label}</span>
                  {badge !== undefined && (
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[9px] ${
                        isActive
                          ? "bg-cyan-500/20 text-cyan-300"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {badge}
                    </span>
                  )}
                  {/* Animated sliding underline indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* 4. Spacious Scrollable Content Area with smooth transitions */}
          <div className="flex-1 overflow-hidden p-3 md:p-4 flex flex-col min-h-0">
            <AnimatePresence mode="wait">
              {activeTab === "all" && (
                <motion.div key="all" className="h-full" {...contentVariants}>
                  <VesselTable vessels={vessels} isLoading={vesselsQuery.isLoading} />
                </motion.div>
              )}

              {activeTab === "ocr" && (
                <motion.div key="ocr" className="h-full" {...contentVariants}>
                  <OCRManifestTable
                    records={ocrRecords}
                    isLoading={ocrQuery.isLoading}
                    extractedAt={ocrQuery.data?.extracted_at}
                  />
                </motion.div>
              )}

              {activeTab === "summary" && (
                <motion.div key="summary" className="overflow-y-auto h-full pr-1" {...contentVariants}>
                  <AISituationReport
                    summary={summary}
                    portName={selectedPort.name}
                    isLoading={summaryQuery.isLoading}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const PortSideSheet = memo(PortSideSheetInner);
