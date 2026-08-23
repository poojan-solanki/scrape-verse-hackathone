import { useState, useMemo, memo } from "react";
import { motion } from "framer-motion";
import { FileText, Layers, Search, Sparkles } from "lucide-react";
import { PDFVesselRecord } from "../../types";
import { SkeletonRow } from "../ui/SkeletonRow";

interface OCRManifestTableProps {
  records: PDFVesselRecord[];
  isLoading?: boolean;
  extractedAt?: string;
}

function OCRManifestTableInner({ records, isLoading, extractedAt }: OCRManifestTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTerminal, setSelectedTerminal] = useState("all");

  const terminals = useMemo(() => {
    const list = records.map((r) => r.terminal_name).filter(Boolean);
    return ["all", ...Array.from(new Set(list))];
  }, [records]);

  const filteredRecords = useMemo(() => {
    return records.filter((r) => {
      if (searchTerm) {
        const q = searchTerm.toLowerCase();
        const vName = (r.vessel_name || "").toLowerCase();
        const term = (r.terminal_name || "").toLowerCase();
        const berth = (r.berth_number || "").toLowerCase();
        if (!vName.includes(q) && !term.includes(q) && !berth.includes(q)) return false;
      }
      if (selectedTerminal !== "all" && r.terminal_name !== selectedTerminal) return false;
      return true;
    });
  }, [records, searchTerm, selectedTerminal]);

  return (
    <div className="flex flex-col h-full space-y-3">
      {/* 1. OCR Header & Pipeline Stage Badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-purple-950/20 border border-purple-500/30"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
              <span>Deep Terminal OCR Pipeline</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] bg-purple-500/30 text-purple-300 border border-purple-400/40 uppercase">
                Stage 1 (pdfplumber) + Stage 2 (Vision AI)
              </span>
            </h4>
            <p className="text-[10px] text-slate-400">
              Extracts metric LOA, draft depths, and TEU balances from official daily terminal PDFs
            </p>
          </div>
        </div>
        {extractedAt && (
          <span className="text-[10px] font-mono text-slate-400">
            Extracted: <span className="text-cyan-300">{extractedAt.slice(0, 16).replace("T", " ")} UTC</span>
          </span>
        )}
      </motion.div>

      {/* 2. Search & Terminal Filter Bar */}
      <div className="flex items-center justify-between gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search OCR records..."
            className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-700/70 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 font-mono transition-all"
          />
        </div>
        {terminals.length > 2 && (
          <select
            value={selectedTerminal}
            onChange={(e) => setSelectedTerminal(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono focus:outline-none focus:border-purple-400"
          >
            {terminals.map((t) => (
              <option key={t} value={t}>
                {t === "all" ? "All Terminals (BMCT, APMT, NSFT, NSICT)" : t}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* 3. Deep OCR Data Table */}
      <div className="flex-1 overflow-auto rounded-xl border border-slate-800 bg-slate-950/60 shadow-inner">
        <table className="w-full text-left border-collapse text-xs">
          <thead className="sticky top-0 z-10 bg-slate-900/95 border-b border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
            <tr>
              <th className="py-2.5 px-3">Terminal</th>
              <th className="py-2.5 px-3">Vessel Name</th>
              <th className="py-2.5 px-3">Berth</th>
              <th className="py-2.5 px-3">LOA (m)</th>
              <th className="py-2.5 px-3">Draft (m)</th>
              <th className="py-2.5 px-3">Side</th>
              <th className="py-2.5 px-3">Import TEU</th>
              <th className="py-2.5 px-3">Export TEU</th>
              <th className="py-2.5 px-3 text-right">PDF Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-mono">
            {isLoading ? (
              <SkeletonRow columns={9} rows={8} />
            ) : filteredRecords.length === 0 ? (
              <tr>
                <td colSpan={9}>
                  <div className="flex flex-col items-center justify-center p-12 text-slate-500 text-xs font-mono space-y-2">
                    <Layers className="w-8 h-8 opacity-40 text-purple-400" />
                    <p>No terminal PDF OCR records found. Click 'Sync Telemetry' to trigger deep OCR.</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredRecords.map((r, i) => (
                <motion.tr
                  key={r.id || i}
                  initial={i < 15 ? { opacity: 0, y: 6 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.025, 0.35), duration: 0.2 }}
                  className="hover:bg-purple-500/5 transition-colors"
                >
                  <td className="py-2.5 px-3 text-purple-300 font-bold">
                    <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px]">
                      {r.terminal_name}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 font-semibold text-white font-sans">{r.vessel_name}</td>
                  <td className="py-2.5 px-3 text-cyan-400">{r.berth_number || "—"}</td>
                  <td className="py-2.5 px-3 text-slate-300">{r.loa ? `${r.loa}m` : "—"}</td>
                  <td className="py-2.5 px-3 text-slate-300">{r.max_draft ? `${r.max_draft}m` : "—"}</td>
                  <td className="py-2.5 px-3 text-slate-400">{r.berthing_side || "STBD"}</td>
                  <td className="py-2.5 px-3 text-emerald-400 font-semibold">{r.imp_bal ?? "—"}</td>
                  <td className="py-2.5 px-3 text-blue-400 font-semibold">{r.exp_bal ?? "—"}</td>
                  <td className="py-2.5 px-3 text-right">
                    {r.pdf_url ? (
                      <a
                        href={r.pdf_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30 hover:bg-purple-500/25 hover:text-white text-[10px] transition-all"
                      >
                        <FileText className="w-2.5 h-2.5" />
                        <span>Source ↗</span>
                      </a>
                    ) : (
                      <span className="text-slate-600 text-[10px]">OCR Log</span>
                    )}
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const OCRManifestTable = memo(OCRManifestTableInner);
