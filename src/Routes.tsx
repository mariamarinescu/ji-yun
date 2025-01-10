import { lazy } from 'react';
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';
import { ErrorElement, Layout } from './components';
import { Project } from './pages';
import Projects from './pages/Projects';

const basePath = '/ji-yun';

const About = lazy(() => import('./pages/About'));
const Profile = lazy(() => import('./pages/Profile'));
const Contact = lazy(() => import('./pages/Contact'));

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route
        path={basePath}
        element={<Layout />}
        errorElement={<ErrorElement />}
      >
        <Route path={basePath} element={<Navigate to="about" replace />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="projects"
          element={<Projects />}
          children={[<Route path=":projectId" element={<Project />} />]}
        />

        <Route path="contact" element={<Contact />} />
      </Route>
    </RouterRoutes>
  );
};
