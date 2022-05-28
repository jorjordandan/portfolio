import create from 'zustand';

interface State {
  //show text to type
  text: string[];
  setText: (text: string[]) => void;

  // button for below text
  button: IButton | undefined;
  setButton: (button: IButton | undefined) => void;
  hideButton: () => void;

  desk: { power: boolean; up: boolean };
  powerOnDesk: () => void;
  moveDeskDown: () => void;
  moveDeskUp: () => void;

  //3d printer
  printer: { power: boolean };
  powerOnPrinter: () => void;

  // 3d printer screen
  screen: {
    visible: boolean;
    handleLoaded: boolean;
    keyInserted: boolean;
    keyLoaded: boolean;
  };
  showScreen: () => void;
  hideScreen: () => void;

  computerScreen: {
    visible: boolean;
    // handleLoaded: boolean;
    // keyInserted: boolean;
    // keyLoaded: boolean;
  };
  showComputerScreen: () => void;
  hideComputerScreen: () => void;

  notebook: {
    visible: boolean;
  };
  showNotebook: () => void;
  hideNotebook: () => void;

  // inventory system
  inventory: {
    items: string[];
    open: boolean;
  };
  openInventory: () => void;
  closeInventory: () => void;
  addToInventory: (item: string) => void;

  //puzzle box
  puzzle: {
    inInventory: boolean;
    visible: boolean;
  };
  collectPuzzle: () => void;

  ringOne: { installed: boolean };
  installRingOne: () => void;
  ringTwo: { installed: boolean };
  installRingTwo: () => void;

  // 3d printable airplan
  airplane: {
    printed: boolean;
    inInventory: boolean;
  };
  printAirplane: () => void;
  collectAirplane: () => void;

  dragging: { inProgress: boolean; item: string };
  startDragging: (item: string) => void;
  stopDragging: () => void;
}

interface IButton {
  text: string;
  click: () => void;
  afterClick: () => void;
  hideButton: () => void;
}

export const useStore = create<State>((set) => ({
  dragging: { inProgress: false, item: 'none' },
  startDragging: (item: string) =>
    set((state) => ({ dragging: { inProgress: true, item: item } })),
  stopDragging: () =>
    set((state) => ({ dragging: { inProgress: false, item: 'none' } })),

  desk: { power: false, up: false },
  powerOnDesk: () => set((state) => ({ desk: { ...state.desk, power: true } })),
  moveDeskUp: () => set((state) => ({ desk: { ...state.desk, up: true } })),
  moveDeskDown: () => set((state) => ({ desk: { ...state.desk, up: false } })),

  printer: { power: false },
  powerOnPrinter: () =>
    set((state) => ({ printer: { ...state.printer, power: true } })),

  text: ['Welcome to my ~point and cli~ office :)'],
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

  computerScreen: {
    visible: false,
  },
  showComputerScreen: () =>
    set((state) => ({
      computerScreen: { ...state.computerScreen, visible: true },
    })),
  hideComputerScreen: () =>
    set((state) => ({
      computerScreen: { ...state.computerScreen, visible: false },
    })),

  notebook: {
    visible: false,
  },

  showNotebook: () => set((state) => ({ notebook: { visible: true } })),

  hideNotebook: () => set((state) => ({ notebook: { visible: false } })),

  inventory: {
    items: [],
    open: false,
  },
  openInventory: () =>
    set((state) => ({ inventory: { ...state.inventory, open: true } })),
  closeInventory: () =>
    set((state) => ({ inventory: { ...state.inventory, open: false } })),
  addToInventory: (item: string) => {
    set((state) => ({
      inventory: {
        ...state.inventory,
        items: [...state.inventory.items, item],
      },
    }));
  },
  puzzle: {
    inInventory: false,
    visible: true,
  },
  collectPuzzle: () =>
    set((state) => ({ puzzle: { inInventory: true, visible: false } })),

  ringOne: { installed: false },
  installRingOne: () => set((state) => ({ ringOne: { installed: true } })),

  ringTwo: { installed: false },
  installRingTwo: () => set((state) => ({ ringTwo: { installed: true } })),

  airplane: {
    printed: false,
    inInventory: false,
  },

  collectAirplane: () => {
    set((state) => ({ airplane: { ...state.airplane, inInventory: true } }));
  },
  printAirplane: () =>
    set((state) => ({ airplane: { ...state.airplane, printed: true } })),
}));
