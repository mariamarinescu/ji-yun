import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '..';

export const Layout = () => {
  const footerAndHeaderSharedStyle =
    'w-full mx-auto flex items-center bg-none text-black p-4 h-16';

  return (
    <div className="min-w-screen flex min-h-screen w-full flex-col">
      <div className="w-full shadow-bottom-md">
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
      <div className="w-full shadow-top-md">
        <footer className={footerAndHeaderSharedStyle}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
