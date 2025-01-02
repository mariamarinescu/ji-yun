import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '..';

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={clsx('flex-1 items-start bg-gray-100 p-4')}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
