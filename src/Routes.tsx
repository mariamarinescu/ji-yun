import { lazy } from 'react';
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';
import { ErrorElement, Layout } from './components';
import { Project } from './pages';
import Projects from './pages/Projects';

const About = lazy(() => import('./pages/About'));
const Profile = lazy(() => import('./pages/Profile'));
const Contact = lazy(() => import('./pages/Contact'));

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/" element={<Layout />} errorElement={<ErrorElement />}>
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="projects" element={<Projects />}>
          <Route path=":projectId" element={<Project />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
    </RouterRoutes>
  );
};
