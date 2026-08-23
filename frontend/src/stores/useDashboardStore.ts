import { create } from "zustand";
import { DEFAULT_PORTS } from "../api/client";
import { Port } from "../types";

export type DashboardTab = "all" | "berth" | "anchorage" | "expected" | "ocr" | "summary" | "health";

interface DashboardState {
  ports: Port[];
  selectedPort: Port;
  selectedPortSlug: string;
  isPortSheetOpen: boolean;
  activeTab: DashboardTab;
  isCopilotOpen: boolean;
  searchQuery: string;
  isSyncingTelemetry: boolean;
  syncSuccessMessage: string | null;

  // Actions
  setPorts: (ports: Port[]) => void;
  selectPort: (port: Port) => void;
  selectPortBySlug: (slug: string) => void;
  openPortSheet: () => void;
  closePortSheet: () => void;
  togglePortSheet: () => void;
  setActiveTab: (tab: DashboardTab) => void;
  setCopilotOpen: (open: boolean) => void;
  toggleCopilot: () => void;
  setSearchQuery: (query: string) => void;
  setIsSyncingTelemetry: (syncing: boolean) => void;
  setSyncSuccessMessage: (msg: string | null) => void;
}

function getSlug(port: Port): string {
  if (port.unlocode === "INNSA") return "jnpa";
  if (port.unlocode === "INMUN") return "mundra";
  if (port.unlocode === "GBFXT") return "felixstowe";
  if (port.unlocode === "INKAN" || port.unlocode === "INIXY") return "kandla";
  return port.name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  ports: DEFAULT_PORTS,
  selectedPort: DEFAULT_PORTS[0],
  selectedPortSlug: "jnpt",
  isPortSheetOpen: false,
  activeTab: "all",
  isCopilotOpen: false,
  searchQuery: "",
  isSyncingTelemetry: false,
  syncSuccessMessage: null,

  setPorts: (ports) => set({ ports }),

  selectPort: (port) => {
    const slug = getSlug(port);
    set({
      selectedPort: port,
      selectedPortSlug: slug,
      isPortSheetOpen: true,
    });
  },

  selectPortBySlug: (slug) => {
    const port = get().ports.find(
      (p) => getSlug(p) === slug.toLowerCase() || p.unlocode.toLowerCase() === slug.toLowerCase()
    ) || get().ports[0];
    set({
      selectedPort: port,
      selectedPortSlug: getSlug(port),
      isPortSheetOpen: true,
    });
  },

  openPortSheet: () => set({ isPortSheetOpen: true }),
  closePortSheet: () => set({ isPortSheetOpen: false }),
  togglePortSheet: () => set((s) => ({ isPortSheetOpen: !s.isPortSheetOpen })),
  setActiveTab: (activeTab) => set({ activeTab }),
  setCopilotOpen: (isCopilotOpen) => set({ isCopilotOpen }),
  toggleCopilot: () => set((s) => ({ isCopilotOpen: !s.isCopilotOpen })),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setIsSyncingTelemetry: (isSyncingTelemetry) => set({ isSyncingTelemetry }),
  setSyncSuccessMessage: (syncSuccessMessage) => set({ syncSuccessMessage }),
}));
