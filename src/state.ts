import create from 'zustand'

interface State {
	desk: {power: boolean, up: boolean},
	printer: {power: boolean},
	text: string[],
	setText: (text: string[]) => void, 
	powerOnDesk: () => void,
	moveDeskDown: () => void,
	moveDeskUp: () => void,
	powerOnPrinter: () => void,
	button: IButton | undefined,
	setButton: (button: IButton | undefined) => void,
	hideButton: () => void,
	screen: {visible: boolean},
	showScreen: () => void,
	hideScreen: () => void,
}

interface IButton {
  text: string;
  click: () => void;
  afterClick: () => void; 
	hideButton: () => void;
}

export const useStore = create<State>(set => ({

  desk: {power: false, up: false},
	powerOnDesk: () => set(state => ({ desk: {...state.desk, power: true}})),
	moveDeskUp: () => set(state => ({ desk: {...state.desk, up: true}})),
	moveDeskDown: () => set(state => ({ desk: {...state.desk, up: false}})),

	printer: {power: false, },
	powerOnPrinter: () => set(state => ({ printer: {...state.printer, power: true}})),

	text: ["Welcome to my office :)"],
	setText: (text: string[]) => set({ text }),

	button: undefined,
	setButton: (button: IButton | undefined ) => set({ button }),
	hideButton: ( ) => set({ button: undefined }),

	screen: {visible: false},
	showScreen: () => set(state => ({ screen: {...state.screen, visible: true}})),
	hideScreen: () => set(state => ({ screen: {...state.screen, visible: false}})),
	
}))