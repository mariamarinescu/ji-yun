import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { projectsData } from 'src/data';
import { activeProjectAtom } from '../../store/projects/activeProjectAtom';
import { ProjectCard } from './ProjectCard';

const ProjectList = () => {
  const [projects] = useState(projectsData);
  const projectId = useRecoilState(activeProjectAtom);

  console.log(projectId);

  return (
    <section className="py-5 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
