import { motion } from 'framer-motion';
import { Project as ProjectType } from 'interfaces';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { activeProjectAtom } from '../../store/projects/activeProjectAtom';

/**
 * Project component displays a single project with its details.
 * It uses Framer Motion for animations and Recoil for state management.
 *
 * @param {Object} props - Component props
 * @param {ProjectType} [props.project] - The project data to display
 *
 * @returns {JSX.Element} The rendered component
 */
export const ProjectCard: FC<{ project?: ProjectType }> = ({ project }) => {
  const setProjectIdInStore = useSetRecoilState(activeProjectAtom);
  const navigate = useNavigate();

  // Set the project ID in the store when the component mounts
  const setProjectId = () => {
    if (project?.id) {
      setProjectIdInStore(project);
    }
  };

  // // Reset the project ID in the store when the component unmounts
  // useEffect(() => {
  //   return () => {
  //     setProjectIdInStore(null);
  //   };
  // }, [setProjectId]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link
        to={`/ji-yun/projects/${project?.id}`}
        aria-label="Single Project"
        onClick={setProjectId}
      >
        <div className="bg-secondary-light dark:bg-ternary-dark mb-10 cursor-pointer rounded-xl shadow-lg hover:shadow-xl sm:mb-0">
          <div>
            <img
              src={project?.img}
              className="rounded-t-xl border-none"
              alt="Single Project"
            />
          </div>
          <div className="px-4 py-6 text-center">
            <p className="font-general-medium text-ternary-dark dark:text-ternary-light mb-2 text-lg md:text-xl">
              {project?.client}
            </p>
            <span className="text-ternary-dark dark:text-ternary-light text-lg">
              {[project?.tags || []].map((tag) => tag).join(', ')}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
