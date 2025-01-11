import { Project as ProjectType } from 'interfaces';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { projectsData } from 'src/data';
import { Project } from 'src/pages/Project';
import { ProjectCard } from './ProjectCard';

const ProjectList = () => {
  const [projects] = useState(projectsData);
  const [openProjectDetailsModal, setProjectDetailsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);
  const { projectId } = useParams();
  const navigate = useNavigate();

  const setUpNewProject = useCallback(() => {
    if (projectId) {
      const activeProjectData = projectsData.find(
        (project) => project.id === projectId
      );
      if (activeProjectData) {
        setActiveProject(activeProjectData as ProjectType);
      }
    }
  }, [projectId]);

  useEffect(() => setUpNewProject(), [setUpNewProject]);

  useEffect(() => {
    if (activeProject) {
      setProjectDetailsModalOpen(true);
    }
  }, [activeProject]);

  const closeProjectDetailsModal = () => {
    setProjectDetailsModalOpen(false);
    navigate('/projects', { replace: true });
  };

  return (
    <>
      {openProjectDetailsModal ? (
        <Project
          activeProject={activeProject}
          setProjectDetailsModalOpen={closeProjectDetailsModal}
          projectDetailsModalOpen={openProjectDetailsModal}
        />
      ) : null}
      <section className="w-full py-5 sm:py-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              project={project as ProjectType}
              key={project.id}
              setProjectDetailsModalOpen={setProjectDetailsModalOpen}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectList;
