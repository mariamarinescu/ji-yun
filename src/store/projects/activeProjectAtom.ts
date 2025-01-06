import { atom } from 'recoil';
import { Project } from 'src/interfaces';

export const activeProjectAtom = atom<Project | null>({
  key: 'projects/activeProjectAtom',
  default: null,
});
