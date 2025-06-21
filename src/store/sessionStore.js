import { create } from 'zustand';

// Zustand store for managing global session state, like the current mode.
export const useSessionStore = create((set) => ({
  mode: 'Creative', // Default mode
  availableModes: ['Creative', 'Debugging', 'Strategic', 'Analysis'],
  setMode: (newMode) => set({ mode: newMode }),
  
  // Example of tracking assumptions
  assumptions: [],
  addAssumption: (assumption) => set((state) => ({ assumptions: [...state.assumptions, assumption] })),
}));
