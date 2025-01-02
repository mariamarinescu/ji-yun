import clsx from 'clsx';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { NavLink } from 'react-router';
import { Logo } from './Logo';
import { footerAndHeaderSharedClassName } from './utils';

const basePath = '/ji-yun';
const baseNavItemId = 'nav-menu-item';

type GetNavLinkCollectionParams = {
  id?: string;
  className?: string;
};
export const getNavLinkCollection = ({
  id = 'base',
  className = 'block px-4 py- text-black',
}: GetNavLinkCollectionParams = {}) => [
  <li key={`${id}-${baseNavItemId}-home`}>
    <NavLink
      to={basePath}
      id={`${id}-${baseNavItemId}-home`}
      aria-label="Navigate to home page."
    >
      <p className={clsx(className, 'hover:text-blue-600')}>Home</p>
    </NavLink>
  </li>,
  <li key={`${id}-${baseNavItemId}-projects`}>
    <NavLink
      to={`${basePath}/projects`}
      id={`${id}-${baseNavItemId}-projects`}
      aria-label="Navigate to project list page."
    >
      <p className={clsx(className, 'hover:text-blue-600')}>Projects</p>
    </NavLink>
  </li>,
  <li key={`${id}-${baseNavItemId}-about`}>
    <NavLink
      to={`${basePath}/about`}
      id={`${id}-${baseNavItemId}-about`}
      aria-label="Navigate to 'about me' page and find out more details about me."
    >
      <p className={clsx(className, 'hover:text-blue-600')}>About</p>
    </NavLink>
  </li>,
  <li key={`${id}-${baseNavItemId}-contact`}>
    <NavLink
      to={`${basePath}/contact`}
      id={`${id}-${baseNavItemId}-contact`}
      aria-label="Navigate to contact page and send me an email."
    >
      <p className={clsx(className, 'hover:text-blue-600')}>Contact</p>
    </NavLink>
  </li>,
];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const headerNavLinkCollection = getNavLinkCollection();

  return (
    <header className={footerAndHeaderSharedClassName}>
      <nav className="flex w-full max-w-screen-lg justify-between">
        <div className="flex w-full items-center justify-between">
          <Logo />
          {/* Mobile Hamburger Menu */}
          <button
            className="m-0 md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <GrClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <ul
          className={clsx(
            'absolute w-10/12 bg-white p-4 text-black shadow-md transition-all md:hidden md:w-auto md:gap-6 md:bg-transparent md:p-0',
            showMenu ? 'top-16' : 'top-[-400px]'
          )}
        >
          {headerNavLinkCollection.map((link) => link)}
        </ul>

        <ul
          className={clsx(
            'hidden w-full bg-white p-4 transition-all md:relative md:flex md:w-auto md:gap-6 md:bg-transparent md:p-0 md:shadow-none',
            showMenu ? 'top-16' : 'top-0'
          )}
        >
          {headerNavLinkCollection.map((link) => link)}
        </ul>
      </nav>
    </header>
  );
};
