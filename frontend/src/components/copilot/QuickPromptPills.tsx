import { Globe, Anchor, Layers, Sparkles } from "lucide-react";

interface QuickPromptPillsProps {
  onSelectPrompt: (text: string) => void;
}

export function QuickPromptPills({ onSelectPrompt }: QuickPromptPillsProps) {
  const prompts = [
    {
      label: "Bright Data SERP",
      query: "Search live maritime news and weather advisory for JNPT using Bright Data search engine",
      icon: Globe,
      color: "text-purple-300 bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20",
    },
    {
      label: "Supabase Anchorage",
      query: "Query Supabase for vessels currently holding at anchorage queue",
      icon: Anchor,
      color: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20",
    },
    {
      label: "Deep PDF OCR",
      query: "Show me container import/export TEU balances and metric LOA from terminal PDF OCR reports",
      icon: Layers,
      color: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20",
    },
    {
      label: "Executive Summary",
      query: "Give me a full executive situation summary for JNPT port operations",
      icon: Sparkles,
      color: "text-blue-300 bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20",
    },
  ];

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto p-2 bg-slate-950/60 border-b border-slate-800/60 text-[10px] font-mono no-scrollbar">
      {prompts.map((p, i) => {
        const Icon = p.icon;
        return (
          <button
            key={i}
            onClick={() => onSelectPrompt(p.query)}
            className={`px-2.5 py-1 rounded-full border whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${p.color}`}
          >
            <Icon className="w-3 h-3" />
            <span>{p.label}</span>
          </button>
        );
      })}
    </div>
  );
}
