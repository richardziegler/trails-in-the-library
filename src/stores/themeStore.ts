import { atom } from 'nanostores';

export type ITheme = 'light' | 'dark'

export const $currentTheme = atom<ITheme>('light');