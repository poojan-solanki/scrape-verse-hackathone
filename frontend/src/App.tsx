import { useEffect, useMemo, useCallback } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { fetchPorts, fetchPortVessels } from "./api/client";
import { useDashboardStore } from "./stores/useDashboardStore";
import { Header } from "./components/layout/Header";
import { MaritimeGlobe } from "./components/globe/MaritimeGlobe";
import { PortSideSheet } from "./components/port/PortSideSheet";
import { CopilotDrawer } from "./components/copilot/CopilotDrawer";
import { AnimatedCounter } from "./components/ui/AnimatedCounter";
import { Globe2, Ship } from "lucide-react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30, // 30s cache
      refetchOnWindowFocus: false,
    },
  },
});

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

function DashboardContent() {
  const setPorts = useDashboardStore((s) => s.setPorts);
  const ports = useDashboardStore((s) => s.ports);
  const selectedPort = useDashboardStore((s) => s.selectedPort);
  const selectPort = useDashboardStore((s) => s.selectPort);
  const openPortSheet = useDashboardStore((s) => s.openPortSheet);
  const isPortSheetOpen = useDashboardStore((s) => s.isPortSheetOpen);
  const closePortSheet = useDashboardStore((s) => s.closePortSheet);
  const isCopilotOpen = useDashboardStore((s) => s.isCopilotOpen);
  const setCopilotOpen = useDashboardStore((s) => s.setCopilotOpen);

  // Global keyboard handlers
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isCopilotOpen) {
          setCopilotOpen(false);
        } else if (isPortSheetOpen) {
          closePortSheet();
        }
      }
    },
    [isCopilotOpen, isPortSheetOpen, closePortSheet, setCopilotOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Fetch initial port registry
  const portsQuery = useQuery({
    queryKey: ["ports"],
    queryFn: fetchPorts,
  });

  useEffect(() => {
    if (portsQuery.data) {
      setPorts(portsQuery.data);
    }
  }, [portsQuery.data, setPorts]);

  // Fetch telemetry vessels for selected port
  const vesselsQuery = useQuery({
    queryKey: ["vessels", selectedPort.unlocode],
    queryFn: () =>
      fetchPortVessels(
        selectedPort.unlocode === "INNSA" ? "jnpt" : selectedPort.unlocode === "INMUN" ? "mundra" : "jnpt"
      ),
    refetchInterval: 30000,
  });

  const vessels = vesselsQuery.data?.vessels || [];
  const { atBerth, atAnchorage } = useMemo(() => {
    let berth = 0;
    let anch = 0;
    for (const v of vessels) {
      const b = String(v.berth_number || "").toUpperCase();
      if (b === "ANCHORAGE") anch++;
      else if (b && b !== "EXPECTED" && b !== "SAILED") berth++;
    }
    return { atBerth: berth, atAnchorage: anch };
  }, [vessels]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      {/* 1. Fixed Top Header */}
      <Header />

      {/* 2. Full-Screen 3D Maritime Globe Canvas */}
      <main className="absolute inset-0 pt-16">
        <MaritimeGlobe />
      </main>

      {/* Backdrop overlay when sheet is open */}
      <AnimatePresence>
        {isPortSheetOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-25 backdrop-overlay"
            onClick={closePortSheet}
          />
        )}
      </AnimatePresence>

      {/* 3. Floating Left Quick Port Selection Card — staggered entry */}
      <motion.div
        className="absolute top-20 left-4 z-20 hidden md:flex flex-col gap-2 max-w-xs"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="p-3 rounded-2xl glass-panel-glow border border-cyan-500/30 shadow-2xl space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
              Major Commercial Ports
            </span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono font-bold">
              {ports.length} Connected
            </span>
          </div>

          <div className="space-y-1">
            {ports.map((port, index) => {
              const isSelected = selectedPort.unlocode === port.unlocode;
              return (
                <motion.button
                  key={port.id}
                  variants={itemVariants}
                  onClick={() => selectPort(port)}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full p-2.5 rounded-xl text-left transition-colors flex items-center justify-between font-mono text-xs border ${
                    isSelected
                      ? "bg-cyan-500/20 text-cyan-200 border-cyan-400/60 shadow-glow-cyan"
                      : "bg-slate-900/60 text-slate-300 border-slate-800/80 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? "bg-cyan-400 animate-dot-pulse" : "bg-emerald-400 animate-beacon"
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="font-bold truncate">{port.name}</p>
                      <p className="text-[10px] text-slate-400 font-sans truncate">
                        {port.state || "India"} • {port.unlocode}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-bold ml-2 shrink-0">
                    Open ↗
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Quick Selected Port Telemetry Summary Box */}
        <motion.div
          variants={itemVariants}
          onClick={openPortSheet}
          whileHover={{ scale: 1.02, borderColor: "rgba(6, 182, 212, 0.5)" }}
          whileTap={{ scale: 0.98 }}
          className="p-3 rounded-2xl glass-card border border-slate-700/60 shadow-xl cursor-pointer transition-colors group"
        >
          <div className="flex items-center justify-between text-xs font-mono mb-1.5">
            <span className="text-slate-400 flex items-center gap-1 font-bold">
              <Ship className="w-3.5 h-3.5 text-cyan-400" />
              {selectedPort.name}
            </span>
            <span className="text-[10px] text-cyan-400 group-hover:underline">
              Inspect Manifest ➔
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 font-mono text-center">
            <div className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800">
              <p className="text-[9px] text-slate-400">FLEET</p>
              <AnimatedCounter value={vessels.length} className="text-sm font-bold text-white" />
            </div>
            <div className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800">
              <p className="text-[9px] text-emerald-400">BERTH</p>
              <AnimatedCounter value={atBerth} className="text-sm font-bold text-emerald-300" />
            </div>
            <div className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800">
              <p className="text-[9px] text-amber-400">ANCH.</p>
              <AnimatedCounter value={atAnchorage} className="text-sm font-bold text-amber-300" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 4. Slide-Over Port Operations Sheet */}
      <PortSideSheet />

      {/* 5. Floating AI Copilot Command Drawer */}
      <CopilotDrawer />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardContent />
    </QueryClientProvider>
  );
}
