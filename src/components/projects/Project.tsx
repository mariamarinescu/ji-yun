import { motion } from 'framer-motion';
import { Project as ProjectType } from 'interfaces';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Project: FC<{ project: ProjectType }> = ({ project }) => {
  const { id, client, img, tags } = project;
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
      <Link to={`/ji-yun/projects/${id}`} aria-label="Single Project">
        <div className="bg-secondary-light dark:bg-ternary-dark mb-10 cursor-pointer rounded-xl shadow-lg hover:shadow-xl sm:mb-0">
          <div>
            <img
              src={img}
              className="rounded-t-xl border-none"
              alt="Single Project"
            />
          </div>
          <div className="px-4 py-6 text-center">
            <p className="font-general-medium text-ternary-dark dark:text-ternary-light mb-2 text-lg md:text-xl">
              {client}
            </p>
            <span className="text-ternary-dark dark:text-ternary-light text-lg">
              {tags.map((tag) => tag).join(', ')}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
