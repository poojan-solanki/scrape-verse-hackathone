/**
 * Animated 3-dot typing indicator for the AI copilot chat.
 * Each dot bounces with a staggered delay for a lively effect.
 */
export function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 pl-8 py-2">
      <div className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-slate-900/80 border border-slate-800">
        <span
          className="w-1.5 h-1.5 rounded-full bg-cyan-400 typing-dot"
          style={{ animationDelay: "0ms" }}
        />
        <span
          className="w-1.5 h-1.5 rounded-full bg-cyan-400 typing-dot"
          style={{ animationDelay: "150ms" }}
        />
        <span
          className="w-1.5 h-1.5 rounded-full bg-cyan-400 typing-dot"
          style={{ animationDelay: "300ms" }}
        />
      </div>
      <span className="text-[10px] font-mono text-slate-500">
        Analyzing with MCP tools...
      </span>
    </div>
  );
}
