import clsx from 'clsx';
import { Link } from 'gestalt';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
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
    <Link
      href="/"
      tapStyle="compress"
      underline="hover"
      accessibilityLabel="Navigate to home page."
      dataTestId={`${id}-${baseNavItemId}-home`}
    >
      <p className={clsx(className, 'hover:text-blue-600')}>Home</p>
    </Link>
  </li>,
  <li key={`${id}-${baseNavItemId}-projects`}>
    <Link
      href={`${basePath}/projects`}
      tapStyle="compress"
      underline="hover"
      accessibilityLabel="Navigate to project list page."
      dataTestId={`${id}-${baseNavItemId}-projects`}
    >
      <p className={clsx(className, 'hover:text-blue-600')}>Projects</p>
    </Link>
  </li>,
  <li key={`${id}-${baseNavItemId}-about`}>
    <Link
      href={`${basePath}/about`}
      tapStyle="compress"
      underline="hover"
      accessibilityLabel="Navigate to 'about me' page and find out more details about me."
      dataTestId={`${id}-${baseNavItemId}-about`}
    >
      <p className={clsx(className, 'hover:text-blue-600')}>About</p>
    </Link>
  </li>,
  <li key={`${id}-${baseNavItemId}-contact`}>
    <Link
      href={`${basePath}/contact`}
      tapStyle="compress"
      underline="hover"
      accessibilityLabel="Navigate to contact page and send me an email."
      dataTestId={`${id}-${baseNavItemId}-contact`}
    >
      <p className={clsx(className, 'hover:text-blue-600')}>Contact</p>
    </Link>
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
