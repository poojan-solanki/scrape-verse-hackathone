import { memo } from "react";
import { motion } from "framer-motion";
import { Anchor, CheckCircle2, Clock, ShieldCheck, Ship } from "lucide-react";
import { VesselRecord } from "../../types";
import { AnimatedCounter } from "../ui/AnimatedCounter";

interface StatsBarProps {
  vessels: VesselRecord[];
  portName: string;
  isLoading?: boolean;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 22 },
  },
};

function StatsBarInner({ vessels, portName, isLoading }: StatsBarProps) {
  const total = vessels.length;
  const atBerth = vessels.filter(
    (v) =>
      v.berth_number &&
      !["ANCHORAGE", "EXPECTED", "SAILED"].includes(String(v.berth_number).toUpperCase())
  ).length;

  const atAnchorage = vessels.filter(
    (v) => String(v.berth_number).toUpperCase() === "ANCHORAGE"
  ).length;

  const expected = vessels.filter(
    (v) => String(v.berth_number).toUpperCase() === "EXPECTED"
  ).length;

  const statItems = [
    {
      label: "TOTAL FLEET",
      value: total,
      icon: Ship,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    },
    {
      label: "AT BERTH",
      value: atBerth,
      icon: CheckCircle2,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
    {
      label: "ANCHORAGE",
      value: atAnchorage,
      icon: Anchor,
      color: atAnchorage > 5 ? "text-amber-400 bg-amber-500/15 border-amber-500/40" : "text-amber-300 bg-amber-500/10 border-amber-500/30",
    },
    {
      label: "EXPECTED",
      value: expected,
      icon: Clock,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    },
    {
      label: "DATA QUALITY",
      value: 100,
      icon: ShieldCheck,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      suffix: "%",
    },
  ];

  return (
    <motion.div
      className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full py-1"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {statItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            variants={statItem}
            whileHover={{ scale: 1.05, y: -2 }}
            className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 font-mono text-xs shadow-sm shrink-0 cursor-default ${item.color}`}
          >
            <Icon className="w-3.5 h-3.5 shrink-0 opacity-90" />
            <span className="text-[10px] text-slate-400 uppercase font-semibold">{item.label}:</span>
            {isLoading ? (
              <span className="font-extrabold text-white text-sm">--</span>
            ) : (
              <AnimatedCounter
                value={item.value}
                suffix={item.suffix || ""}
                className="font-extrabold text-white text-sm"
                duration={600}
              />
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export const StatsBar = memo(StatsBarInner);
