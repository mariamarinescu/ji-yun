import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { NavLink } from 'react-router';
import { Logo } from './Logo';

const basePath = '/ji-yun';
const baseNavItemId = 'nav-menu-item';
const navLinkLabelDefaultClassName = 'block hover:text-blue-600';

const getNavLinkClassName = (isActive: boolean) =>
  isActive ? 'text-blue-600' : 'text-black';

export const getNavLinkCollection = (
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>,
  textClassName?: string,
  id = 'base'
) => [
  <li key={`${id}-${baseNavItemId}-about`}>
    <NavLink
      to={`${basePath}/about`}
      className={({ isActive }) => getNavLinkClassName(isActive)}
      id={`${id}-${baseNavItemId}-about`}
      aria-label="About Me"
      onClick={() => (setShowMenu ? setShowMenu(false) : undefined)}
    >
      <p className={clsx(textClassName, navLinkLabelDefaultClassName)}>About</p>
    </NavLink>
  </li>,
  <li key={`${id}-${baseNavItemId}-profile`}>
    <NavLink
      to={`${basePath}/profile`}
      className={({ isActive }) => getNavLinkClassName(isActive)}
      id={`${id}-${baseNavItemId}-profile`}
      aria-label="My Profile"
      onClick={() => (setShowMenu ? setShowMenu(false) : undefined)}
    >
      <p className={clsx(textClassName, navLinkLabelDefaultClassName)}>
        Profile
      </p>
    </NavLink>
  </li>,
  <li key={`${id}-${baseNavItemId}-projects`}>
    <NavLink
      to={`${basePath}/projects`}
      id={`${id}-${baseNavItemId}-projects`}
      aria-label="Projects"
      className={({ isActive }) => getNavLinkClassName(isActive)}
      onClick={() => (setShowMenu ? setShowMenu(false) : undefined)}
    >
      <p className={clsx(textClassName, navLinkLabelDefaultClassName)}>
        Projects
      </p>
    </NavLink>
  </li>,
  <li key={`${id}-${baseNavItemId}-contact`}>
    <NavLink
      to={`${basePath}/contact`}
      id={`${id}-${baseNavItemId}-contact`}
      aria-label="Contact me"
      className={({ isActive }) => getNavLinkClassName(isActive)}
      onClick={() => (setShowMenu ? setShowMenu(false) : undefined)}
    >
      <p className={clsx(textClassName, navLinkLabelDefaultClassName)}>
        Contact
      </p>
    </NavLink>
  </li>,
];

interface DefaultProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
}

const HamburgerMenuButton: React.FC<DefaultProps> = ({
  setShowMenu,
  showMenu,
}) => (
  <button
    className="m-0 md:hidden"
    aria-label="Toggle mobile menu."
    onClick={() => setShowMenu(!showMenu)}
  >
    {showMenu ? <GrClose /> : <GiHamburgerMenu />}
  </button>
);

const MobileNavigationMenu: React.FC<DefaultProps> = ({
  setShowMenu,
  showMenu,
}) => {
  const mobileNavLinkCollection = getNavLinkCollection(
    setShowMenu,
    undefined,
    'mobile'
  );

  return (
    <ul
      className={clsx(
        'absolute left-0 z-50 mx-auto flex h-fit w-full flex-col gap-7 bg-white p-8 text-2xl shadow-lg transition-all duration-700 md:hidden',
        showMenu ? 'top-20' : 'top-[-400px]'
      )}
    >
      {mobileNavLinkCollection.map((link) => link)}
    </ul>
  );
};

const DesktopNavigationMenu: React.FC<{ showMenu: boolean }> = ({
  showMenu,
}) => {
  const navLinkCollection = getNavLinkCollection(undefined, 'px-4');

  return (
    <ul
      className={clsx(
        'hidden w-full bg-white p-4 transition-all md:relative md:flex md:w-auto md:gap-6 md:bg-transparent md:p-0 md:shadow-none',
        showMenu ? 'top-16' : 'top-0'
      )}
    >
      {navLinkCollection.map((link) => link)}
    </ul>
  );
};

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="w-full sm:container sm:mx-auto"
    >
      <nav className="w-full">
        <div className="flex w-full lg:w-[1024px]">
          <div className="flex w-full items-center justify-between">
            <Logo />
            <HamburgerMenuButton
              setShowMenu={setShowMenu}
              showMenu={showMenu}
            />
          </div>
          <MobileNavigationMenu showMenu={showMenu} setShowMenu={setShowMenu} />
          <DesktopNavigationMenu showMenu={showMenu} />
        </div>
      </nav>
    </motion.nav>
  );
};
