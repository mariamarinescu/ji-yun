import { atom } from 'recoil';
import { Project } from 'src/interfaces/Project';

export const activeProjectAtom = atom<Project | null>({
  key: 'projects/activeProject',
  default: null,
});
