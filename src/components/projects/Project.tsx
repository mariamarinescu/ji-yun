import { motion } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ProjectProps {
  title?: string;
  category?: string;
  id?: string;
  image?: any;
}

export const Project: FC<ProjectProps> = ({ id, title, category, image }) => {
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
              src={image}
              className="rounded-t-xl border-none"
              alt="Single Project"
            />
          </div>
          <div className="px-4 py-6 text-center">
            <p className="font-general-medium text-ternary-dark dark:text-ternary-light mb-2 text-lg md:text-xl">
              {title}
            </p>
            <span className="text-ternary-dark dark:text-ternary-light text-lg">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
