import { useState, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, FileText, Search, Ship } from "lucide-react";
import { VesselRecord } from "../../types";
import { SkeletonRow } from "../ui/SkeletonRow";

interface VesselTableProps {
  vessels: VesselRecord[];
  filterStatus?: "all" | "berth" | "anchorage" | "expected";
  isLoading?: boolean;
}

function formatMaritimeDate(rawDate?: string | null): string {
  if (!rawDate) return "—";
  try {
    const d = new Date(rawDate);
    if (isNaN(d.getTime())) return rawDate.slice(0, 16);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = d.getUTCDate().toString().padStart(2, "0");
    const month = months[d.getUTCMonth()];
    const hours = d.getUTCHours().toString().padStart(2, "0");
    const mins = d.getUTCMinutes().toString().padStart(2, "0");
    return `${day} ${month} ${hours}:${mins}`;
  } catch {
    return rawDate.slice(0, 16);
  }
}

function VesselTableInner({ vessels, filterStatus = "all", isLoading }: VesselTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>(filterStatus);
  const [selectedCommodity, setSelectedCommodity] = useState<string>("all");
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  // Collect unique commodities
  const commodities = useMemo(() => {
    const list = vessels.map((v) => v.commodity).filter(Boolean) as string[];
    return ["all", ...Array.from(new Set(list))];
  }, [vessels]);

  const filteredVessels = useMemo(() => {
    return vessels.filter((v) => {
      // 1. Search term match
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const name = (v.vessel_name || "").toLowerCase();
        const term = (v.terminal_name || "").toLowerCase();
        const berth = String(v.berth_number || "").toLowerCase();
        if (!name.includes(query) && !term.includes(query) && !berth.includes(query)) {
          return false;
        }
      }

      // 2. Status filter
      const bNum = String(v.berth_number || "").toUpperCase();
      const isAnch = bNum === "ANCHORAGE";
      const isExp = bNum === "EXPECTED";
      const isBerth = Boolean(bNum && !isAnch && !isExp && bNum !== "SAILED");

      if (statusFilter === "berth" && !isBerth) return false;
      if (statusFilter === "anchorage" && !isAnch) return false;
      if (statusFilter === "expected" && !isExp) return false;

      // 3. Commodity filter
      if (selectedCommodity !== "all" && v.commodity !== selectedCommodity) {
        return false;
      }

      return true;
    });
  }, [vessels, searchTerm, statusFilter, selectedCommodity]);

  const getStatusBadge = (berthStr?: string | null) => {
    const s = String(berthStr || "").toUpperCase();
    if (s === "ANCHORAGE") {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 w-max">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-dot-pulse" />
          ANCHORAGE
        </span>
      );
    }
    if (s === "EXPECTED") {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1 w-max">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-dot-pulse" />
          EXPECTED
        </span>
      );
    }
    if (s) {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 w-max">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-beacon" />
          BERTH: {s}
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700">
        UNKNOWN
      </span>
    );
  };

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className="flex flex-col h-full space-y-2">
      {/* 1. Filter Controls Bar (Single Compact Row) */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-xl bg-slate-950/80 border border-slate-800 shrink-0">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[180px]">
          <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search vessels by name, berth, terminal..."
            className="w-full pl-8 pr-3 py-1 bg-slate-900 border border-slate-700/70 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 font-mono transition-all"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex items-center gap-1 p-0.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono">
          {[
            { id: "all", label: "All Fleet" },
            { id: "berth", label: "At Berth" },
            { id: "anchorage", label: "Anchorage" },
            { id: "expected", label: "Expected" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-2.5 py-1 rounded-md transition-colors font-semibold ${
                statusFilter === tab.id
                  ? "bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Commodity Dropdown */}
        {commodities.length > 2 && (
          <select
            value={selectedCommodity}
            onChange={(e) => setSelectedCommodity(e.target.value)}
            className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono focus:outline-none focus:border-cyan-400"
          >
            {commodities.map((c) => (
              <option key={c} value={c}>
                {c === "all" ? "All Commodities" : c}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* 2. Vessel Count Header */}
      <div className="flex items-center justify-between text-xs font-mono px-1 shrink-0">
        <span className="text-slate-400">
          Showing <span className="text-cyan-400 font-bold">{filteredVessels.length}</span> of{" "}
          <span className="text-slate-200">{vessels.length}</span> tracked vessels
        </span>
      </div>

      {/* 3. Spacious High-Density Table with Sticky Header */}
      <div className="flex-1 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-inner">
        <table className="w-full text-left border-collapse text-xs">
          <thead className="sticky top-0 z-10 bg-slate-900/95 border-b border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
            <tr>
              <th className="py-2 px-3 w-6"></th>
              <th className="py-2 px-3">Vessel Name</th>
              <th className="py-2 px-3">Status / Berth</th>
              <th className="py-2 px-3">Terminal</th>
              <th className="py-2 px-3">Commodity</th>
              <th className="py-2 px-3">Alongside Date</th>
              <th className="py-2 px-3">ETC</th>
              <th className="py-2 px-3 text-right">PDF Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-sans">
            {isLoading ? (
              <SkeletonRow columns={8} rows={10} />
            ) : filteredVessels.length === 0 ? (
              <tr>
                <td colSpan={8}>
                  <div className="flex flex-col items-center justify-center p-16 text-slate-500 text-xs font-mono space-y-2">
                    <Ship className="w-8 h-8 opacity-40 text-cyan-400" />
                    <p>No vessels matching the current query criteria.</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredVessels.map((v, i) => {
                const rowId = v.id || String(i);
                const isExpanded = expandedRow === rowId;
                return (
                  <motion.tr
                    key={rowId}
                    initial={i < 20 ? { opacity: 0, y: 8 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.02, 0.4), duration: 0.2 }}
                    onClick={() => toggleRow(rowId)}
                    className="hover:bg-cyan-500/5 transition-colors group cursor-pointer"
                  >
                    <td className="py-2 px-3 text-slate-500">
                      {isExpanded ? (
                        <ChevronUp className="w-3 h-3 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-3 h-3 group-hover:text-cyan-400 transition-colors" />
                      )}
                    </td>
                    <td className="py-2 px-3 font-semibold text-white font-mono whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                        <span>{v.vessel_name}</span>
                      </div>
                      {/* Expanded detail row */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px] font-sans text-slate-300 space-y-1 overflow-hidden"
                          >
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                              <span className="text-slate-500">Terminal:</span>
                              <span>{v.terminal_name || "Main Terminal"}</span>
                              <span className="text-slate-500">Commodity:</span>
                              <span>{v.commodity || "—"}</span>
                              <span className="text-slate-500">Alongside:</span>
                              <span>{formatMaritimeDate(v.berthed_at)}</span>
                              <span className="text-slate-500">ETC:</span>
                              <span className="text-cyan-300">{formatMaritimeDate(v.expected_completion_at)}</span>
                              <span className="text-slate-500">LOA:</span>
                              <span>{v.loa ? `${v.loa}m` : "—"}</span>
                              <span className="text-slate-500">Draft:</span>
                              <span>{v.draft ? `${v.draft}m` : "—"}</span>
                              <span className="text-slate-500">Scraped:</span>
                              <span className="text-slate-400">{formatMaritimeDate(v.scraped_at)}</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </td>
                    <td className="py-2 px-3 whitespace-nowrap">{getStatusBadge(v.berth_number)}</td>
                    <td className="py-2 px-3 text-slate-300 font-mono text-[11px] whitespace-nowrap">
                      {v.terminal_name || "Main Terminal"}
                    </td>
                    <td className="py-2 px-3 text-slate-400 text-[11px] whitespace-nowrap">
                      {v.commodity ? (
                        <span className="px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 text-[10px]">
                          {v.commodity}
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="py-2 px-3 text-slate-400 font-mono text-[11px] whitespace-nowrap">
                      {formatMaritimeDate(v.berthed_at)}
                    </td>
                    <td className="py-2 px-3 text-slate-300 font-mono text-[11px] whitespace-nowrap">
                      {v.expected_completion_at ? (
                        <span className="text-cyan-300 font-semibold">
                          {formatMaritimeDate(v.expected_completion_at)}
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="py-2 px-3 text-right font-mono whitespace-nowrap">
                      {v.terminal_report_pdf_url ? (
                        <a
                          href={v.terminal_report_pdf_url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/25 hover:text-white text-[10px] transition-all"
                        >
                          <FileText className="w-2.5 h-2.5" />
                          <span>PDF ↗</span>
                        </a>
                      ) : (
                        <span className="text-slate-600 text-[10px]">Scraped</span>
                      )}
                    </td>
                  </motion.tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const VesselTable = memo(VesselTableInner);
