import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { projectsData } from 'src/data';
import { Project } from './Project';

export const ProjectList = () => {
  const [projects, setProjects] = useState(projectsData);
  const [searchProject, setSearchProject] = useState('');
  const [selectProject, setSelectProject] = useState('');

  return (
    <section className="mt-5 py-5 sm:mt-10 sm:py-10">
      <div className="mt-10 sm:mt-16">
        <h3 className="font-general-regular text-secondary-dark dark:text-ternary-light text-md mb-3 text-center sm:text-xl">
          Search projects by title or filter by category
        </h3>
        <div className="border-primary-light dark:border-secondary-dark flex justify-between gap-3 border-b pb-3">
          <div className="flex justify-between gap-2">
            <span className="bg-primary-light dark:bg-ternary-dark hidden cursor-pointer rounded-xl p-2.5 shadow-sm sm:block">
              <FiSearch className="text-ternary-dark dark:text-ternary-light h-5 w-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="font-general-medium dark:border-secondary-dark sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light rounded-lg border border-gray-200 py-2 pl-3 pr-1 text-sm sm:px-4"
              id="name"
              name="name"
              type="search"
              required
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>

          {/* <ProjectsFilter setSelectProject={setSelectProject} /> */}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {projects.map((project) => (
          <Project
            title={project.title}
            category={project.category}
            image={project.img}
            key={project.id}
            id={project.id.toString()}
          />
        ))}
      </div>
    </section>
  );
};
