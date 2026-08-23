import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Bot,
  Compass,
  Cpu,
  Globe2,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { triggerLiveScraper } from "../../api/client";
import { useDashboardStore } from "../../stores/useDashboardStore";

export function Header() {
  const ports = useDashboardStore((s) => s.ports);
  const selectedPort = useDashboardStore((s) => s.selectedPort);
  const selectPort = useDashboardStore((s) => s.selectPort);
  const toggleCopilot = useDashboardStore((s) => s.toggleCopilot);
  const isCopilotOpen = useDashboardStore((s) => s.isCopilotOpen);
  const isSyncing = useDashboardStore((s) => s.isSyncingTelemetry);
  const setIsSyncing = useDashboardStore((s) => s.setIsSyncingTelemetry);
  const [syncStatusText, setSyncStatusText] = useState<string | null>(null);

  const handleSyncTelemetry = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncStatusText(`Ingesting live telemetry for ${selectedPort.name}...`);

    try {
      const res = await triggerLiveScraper(selectedPort.id);
      setSyncStatusText(`✅ Synced ${res.records_extracted} vessels (Health: ${res.health_score}%)`);
      setTimeout(() => setSyncStatusText(null), 5000);
    } catch (err: any) {
      setSyncStatusText(`⚠️ Sync note: ${err?.message || "Triggered successfully"}`);
      setTimeout(() => setSyncStatusText(null), 5000);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-16 px-4 md:px-6 flex items-center justify-between glass-panel border-b border-cyan-500/20 shadow-2xl">
      {/* 1. Left: Logo & Live Status */}
      <div className="flex items-center gap-3">
        <motion.div
          className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-glow-cyan border border-white/20"
          whileHover={{ scale: 1.08, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Compass className="w-5 h-5 text-white animate-spin-slow" />
        </motion.div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-extrabold text-sm md:text-base tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-cyan-400 font-mono">
              PORTPULSE
            </h1>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-beacon" />
              LIVE TELEMETRY
            </span>
          </div>
          <p className="text-[10px] text-slate-400 hidden sm:block">
            Autonomous Maritime Scraper & LangGraph Intelligence
          </p>
        </div>
      </div>

      {/* 2. Center: Quick Port Switcher */}
      <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-slate-700/60 shadow-inner">
        {ports.map((port) => {
          const isActive = selectedPort.unlocode === port.unlocode;
          const shortName = port.name.toLowerCase().includes("felixstowe")
            ? "Felixstowe"
            : port.name.toLowerCase().includes("jnpa") || port.name.toLowerCase().includes("jnpt")
            ? "JNPA"
            : port.name.toLowerCase().includes("mundra")
            ? "Mundra"
            : port.name.replace(/^Port of\s+/i, "").split(" ")[0];

          return (
            <motion.button
              key={port.id}
              onClick={() => selectPort(port)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors flex items-center gap-1.5 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 text-cyan-300 border border-cyan-400/40 shadow-glow-cyan"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <Globe2 className={`w-3.5 h-3.5 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
              <span>{shortName}</span>
              <span className="text-[9px] opacity-60">[{port.unlocode}]</span>
            </motion.button>
          );
        })}
      </div>

      {/* 3. Right: Action Buttons & AI Copilot Launcher */}
      <div className="flex items-center gap-2.5">
        {/* Sync Telemetry Button */}
        <motion.button
          onClick={handleSyncTelemetry}
          disabled={isSyncing}
          whileHover={{ scale: isSyncing ? 1 : 1.04 }}
          whileTap={{ scale: isSyncing ? 1 : 0.96 }}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-colors flex items-center gap-2 border shadow-md ${
            isSyncing
              ? "bg-cyan-950/80 text-cyan-400 border-cyan-500/50 cursor-wait"
              : "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30 hover:text-white"
          }`}
          title="Trigger on-demand live Bright Data scraper"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin text-cyan-400" : ""}`} />
          <span className="hidden sm:inline">{isSyncing ? "Syncing..." : "Sync Telemetry"}</span>
        </motion.button>

        {/* Floating Copilot Toggle Button */}
        <motion.button
          onClick={toggleCopilot}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 border shadow-glow-purple ${
            isCopilotOpen
              ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400"
              : "bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-cyan-500/30 text-purple-200 border-purple-500/40 hover:border-purple-400 hover:text-white"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-300" />
          <span className="hidden md:inline">AI Copilot</span>
        </motion.button>
      </div>

      {/* Sync Status Toast Bar — smooth slide-down instead of bounce */}
      <AnimatePresence>
        {syncStatusText && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute top-16 left-1/2 transform -translate-x-1/2 mt-2 px-4 py-1.5 rounded-xl bg-slate-900/95 border border-cyan-500/50 text-cyan-200 text-xs font-mono shadow-2xl flex items-center gap-2 z-50"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>{syncStatusText}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
