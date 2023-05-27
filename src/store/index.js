import { create } from "zustand";

export const useMainStore = create((set) => ({
  veterinaria: {},
  setVeterinaria: (veterinaria) => set({ veterinaria }),
  especies: [],
  setEspecies: (especies) => set({ especies }),
}));
