import { Button } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

export const ErrorElement = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col items-center justify-start pt-20">
      <div className="mb-4 text-8xl">😢</div>
      <h1 className="mb-2 text-6xl font-bold">Oops!</h1>
      <p className="mb-2 text-3xl">Something went wrong!</p>
      <div className="flex gap-2 text-xl">
        <Button
          className="rounded bg-sky-600 px-4 py-2 text-sm text-white data-[active]:bg-sky-700 data-[hover]:bg-sky-500"
          onClick={() => window.location.reload()}
        >
          Refresh
        </Button>

        <Button
          className="rounded bg-sky-600 px-4 py-2 text-sm text-white data-[active]:bg-sky-700 data-[hover]:bg-sky-500"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};
