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
  };
  addToInventory: (item: string) => void;


  //puzzle box
  puzzle: {
    inInventory: boolean;
    visible: boolean;
  };
  collectPuzzle: () => void;

  // 3d printable airplan
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
  },
  addToInventory: (item: string) => {
    set((state) => ({
      inventory: {
        items: [...state.inventory.items, item],
      },
    }));
  },
  puzzle: {
  inInventory: false,
  visible: true,
  },
  collectPuzzle: () => set((state) => ({ puzzle: { inInventory: true, visible: false } })),
  
  
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
