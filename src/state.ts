import create from 'zustand';

interface State {
  desk: { power: boolean; up: boolean };
  printer: { power: boolean };
  text: string[];
  setText: (text: string[]) => void;
  powerOnDesk: () => void;
  moveDeskDown: () => void;
  moveDeskUp: () => void;
  powerOnPrinter: () => void;
  button: IButton | undefined;
  setButton: (button: IButton | undefined) => void;
  hideButton: () => void;
  screen: {
    visible: boolean;
    handleLoaded: boolean;
    keyInserted: boolean;
    keyLoaded: boolean;
  };
  inventory: {
    items: string[],
  };
  addToInventory: (item: string) => void;
  showScreen: () => void;
  hideScreen: () => void;
  airplane: {
    printed: boolean;
    inInventory: boolean;
  };
  printAirplane: () => void;
  collectAirplane: () => void;
}

interface IButton {
  text: string;
  click: () => void;
  afterClick: () => void;
  hideButton: () => void;
}



export const useStore = create<State>((set) => ({
  desk: { power: false, up: false },
  powerOnDesk: () => set((state) => ({ desk: { ...state.desk, power: true } })),
  moveDeskUp: () => set((state) => ({ desk: { ...state.desk, up: true } })),
  moveDeskDown: () => set((state) => ({ desk: { ...state.desk, up: false } })),

  printer: { power: false },
  powerOnPrinter: () =>
    set((state) => ({ printer: { ...state.printer, power: true } })),

  text: ['Welcome to my ~point and cli~ normal office :)'],
  setText: (text: string[]) => set({ text }),

  button: undefined,
  setButton: (button: IButton | undefined) => set({ button }),
  hideButton: () => set({ button: undefined }),

  screen: {
    visible: false,
    keyInserted: false,
    keyLoaded: false,
    handleLoaded: false,
  },
  showScreen: () =>
    set((state) => ({ screen: { ...state.screen, visible: true } })),
  hideScreen: () =>
    set((state) => ({ screen: { ...state.screen, visible: false } })),

  airplane: {
    printed: false,
    inInventory: false,
  },
  inventory: {
    items: [],
  },
  addToInventory: (item: string) => {
    set((state) => ({
      inventory: {
        items: [...state.inventory.items, item],
      },
    }));
  },
  collectAirplane: () => {
    set((state) => ({airplane: { ...state.airplane, inInventory: true }}));
  },
  printAirplane: () =>
    set((state) => ({ airplane: { ...state.airplane, printed: true } })),
}));
