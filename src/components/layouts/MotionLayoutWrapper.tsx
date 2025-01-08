import { motion } from 'framer-motion';

interface MotionLayoutWrapperProps {
  children: React.ReactNode;
}

export const MotionLayoutWrapper: React.FC<MotionLayoutWrapperProps> = ({
  children,
}) => {
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
      {children}
    </motion.div>
  );
};
