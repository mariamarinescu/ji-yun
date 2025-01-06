import { selector } from 'recoil';

export const projectIdSelector = selector<string | undefined>({
  key: 'projectIdSelector',
  get: () => {
    throw new Error(
      'useProjectIdSelector can only be used in a React component'
    );
  },
});
