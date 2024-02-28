import { atom } from 'recoil';

export const selectedColorState = atom({
    key: 'color',
    default: 0,
  });