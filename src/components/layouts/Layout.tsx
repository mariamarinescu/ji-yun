import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '..';

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        className={clsx(
          'flex-1 items-start bg-gray-100 p-4',
          'mx-auto flex w-full bg-white p-4 text-black xl:max-w-screen-lg'
        )}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
