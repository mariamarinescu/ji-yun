import clsx from 'clsx';

export const Loader: React.FC<{ className?: string }> = ({
  className = 'h-20 w-20 border-gray-300 border-t-blue-600',
}) => (
  <div className="flex h-screen w-screen content-center items-center justify-center">
    <div className={clsx(className, 'animate-spin rounded-full border-8')} />
  </div>
);
