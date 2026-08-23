import { Cpu, Database, Globe, Terminal } from "lucide-react";
import { MCPToolCall } from "../../types";

interface MCPTelemetryBadgeProps {
  tools: MCPToolCall[];
}

export function MCPTelemetryBadge({ tools }: MCPTelemetryBadgeProps) {
  if (!tools || tools.length === 0) return null;

  return (
    <div className="mb-2.5 p-2 rounded-xl bg-slate-950/80 border border-slate-700/60 shadow-inner flex flex-col gap-1.5 font-mono">
      <div className="flex items-center justify-between text-[10px] text-slate-400">
        <span className="flex items-center gap-1 font-semibold text-cyan-400">
          <Cpu className="w-3 h-3 text-cyan-400" />
          <span>MCP Tool Execution Telemetry</span>
        </span>
        <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-bold">
          {tools.length} {tools.length > 1 ? "tools" : "tool"} invoked
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tools.map((tc, idx) => {
          const serverLower = (tc.server || "").toLowerCase();
          const isBD = serverLower.includes("bright");
          const isSupa = serverLower.includes("supabase");

          const bgClass = isBD
            ? "bg-purple-500/20 text-purple-300 border-purple-500/40"
            : isSupa
            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
            : "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";

          const dotColor = isBD ? "bg-purple-400" : isSupa ? "bg-emerald-400" : "bg-cyan-400";
          const Icon = isBD ? Globe : isSupa ? Database : Terminal;
          const cleanName = (tc.tool || "").replace("brightdata_", "").replace("supabase_", "");

          return (
            <div
              key={idx}
              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[10px] ${bgClass}`}
              title={tc.args ? JSON.stringify(tc.args) : undefined}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse`} />
              <Icon className="w-2.5 h-2.5 opacity-80" />
              <span className="font-bold opacity-80">{tc.server}:</span>
              <span className="font-semibold">{cleanName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
