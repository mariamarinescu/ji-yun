import { MotionLayoutWrapper } from 'components';
import { Project as ProjectType } from 'interfaces';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const projectTagListBadgeDictionary = {
  'Corporate Identity Design': '#d5e8eb',
  'Brand Identity Design': '#cdeaea',
  Illustration: '#f4d3b8',
  'Slogan Design': '#fce9b5',
  'Photo direction': '#d7cfe8',
  'Private Brand Products': '#e3f5ef',
  'Flyer Design': '#f5c6c8',
  'Package design': '#dce1e8',
  'Modeling Production': '#e8d5f2',
};
/**
 * Project component displays a single project with its details.
 * It uses Framer Motion for animations and Recoil for state management.
 *
 * @param {Object} props - Component props
 * @param {ProjectType} [props.project] - The project data to display
 *
 * @returns {JSX.Element} The rendered component
 */

export const ProjectCard: FC<{
  project?: ProjectType;
  setProjectDetailsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ project, setProjectDetailsModalOpen }) => {
  return (
    <MotionLayoutWrapper>
      <Link
        to={`/projects/${project?.id}`}
        aria-label="Single Project"
        onClick={() => setProjectDetailsModalOpen(true)}
      >
        <div className="bg-secondary-light dark:bg-ternary-dark mb-10 h-[400px] w-[320px] cursor-pointer rounded-sm shadow-lg hover:shadow-xl sm:mb-0">
          <div>
            <img
              src={project?.img}
              className="rounded-sm border-none"
              alt="Single Project"
            />
          </div>
          <div className="px-4 py-6 text-center">
            <p className="font-general-medium text-ternary-dark dark:text-ternary-light mb-2 text-lg md:text-xl">
              {project?.client}
            </p>
            <span className="text-ternary-dark dark:text-ternary-light my-auto flex h-full flex-wrap gap-2">
              {project?.tags.map((tag) => (
                <div
                  key={tag}
                  style={{
                    backgroundColor: projectTagListBadgeDictionary[tag],
                  }}
                  className="h-fit w-fit rounded-sm px-2 py-1 text-sm text-black"
                >
                  {tag}
                </div>
              ))}
            </span>
          </div>
        </div>
      </Link>
    </MotionLayoutWrapper>
  );
};
