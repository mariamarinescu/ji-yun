import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { ErrorElement, Layout } from './components';
import { About, Contact, Profile, Project, Projects } from './pages';

const basePath = '/ji-yun';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: `${basePath}/about`,
        element: <About />,
      },
      {
        path: basePath,
        element: <Navigate to={`${basePath}/about`} replace />,
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
        path: `${basePath}/profile`,
        element: <Profile />,
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
