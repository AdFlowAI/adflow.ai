import { createReportableStore } from "../middleware";

interface GlobalStore {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

const useGlobalStore = createReportableStore<GlobalStore>((set) => ({
  isSidebarOpen: true,
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
}));

export { useGlobalStore };
