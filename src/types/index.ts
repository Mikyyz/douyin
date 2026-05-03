
import { ReactNode } from 'react';
export * from './video';
export interface PageTabsType {
  key: string;
  title: string;
}

export type MenuItemType = {
  type?: 'custom' | 'submenu' | 'menu';
  key: string;
  label?: string;
  icon?: ReactNode;
  children?: MenuItemType[];
  render?: () => ReactNode;
  onClick?: () => void;
}

export type ThemeMode = 'light' | 'dark';

export interface ThemeState {
  mode: ThemeMode;
  toggleThemeMode: (mode: ThemeMode) => void;
  setMode: (mode: ThemeMode) => void;
}