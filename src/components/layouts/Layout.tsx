import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '..';

export const Layout = () => {
  const footerAndHeaderSharedStyle =
    'w-full xl:max-w-screen-lg mx-auto flex items-center justify-between bg-none text-black p-4 h-16';
  return (
    <div className="flex min-h-screen w-screen flex-col">
      <div className="shadow-bottom-md w-screen">
        <header className={footerAndHeaderSharedStyle}>
          <Header />
        </header>
      </div>
      <main
        className={clsx(
          'flex-1 items-start',
          'mx-auto flex w-full p-4 text-black xl:max-w-screen-lg'
        )}
      >
        <Outlet />
      </main>
      <div className="shadow-top-md w-screen">
        <footer className={footerAndHeaderSharedStyle}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
