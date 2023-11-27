import { NativeModules } from 'react-native';

const { StatusBarManager } = NativeModules;

export const getStatusBarHeight = (): number => StatusBarManager.HEIGHT;
