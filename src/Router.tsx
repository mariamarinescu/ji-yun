import { Project } from 'components/projects/Project';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorElement, Layout } from './components';
import { About, Contact, Home, Projects } from './pages';

const basePath = '/ji-yun';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: basePath,
        element: <Home />,
      },

      {
        path: `${basePath}/projects`,
        element: <Projects />,
      },

      {
        path: `${basePath}/projects/:projectId`,
        element: <Project />,
      },

      {
        path: `${basePath}/about`,
        element: <About />,
      },

      {
        path: `${basePath}/contact`,
        element: <Contact />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
