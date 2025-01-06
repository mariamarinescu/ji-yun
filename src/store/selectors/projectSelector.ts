import { selector } from 'recoil';

// Define a type for the params
interface RouteParams {
  projectId?: string; // Optional, as it might not exist
}

// Create a selector to expose the projectId
export const projectIdSelector = selector<string | undefined>({
  key: 'projectIdSelector',
  get: ({ get }) => {
    // This part will be accessed only when used in components
    throw new Error(
      'useProjectIdSelector can only be used in a React component'
    );
  },
});
