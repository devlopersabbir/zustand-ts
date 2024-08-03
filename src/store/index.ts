import { create } from "zustand";

type CountState = {
  count: number;
};
type CountAction = {
  inc: () => void;
  dec: () => void;
  getCurrentCount: () => number;
  reset: () => void;
};

const initialState: CountState = {
  count: 0,
};

export const useCountStore = create<CountState & CountAction>((set, get) => ({
  ...initialState,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () =>
    set((state) => {
      return state.count > 0 ? { count: state.count - 1 } : state;
    }),
  reset: () => set(() => ({ count: 0 })),

  getCurrentCount: () => get().count,
  resets: () => set(initialState),
}));
