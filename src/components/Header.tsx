import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { NavLink } from 'react-router';
import { Logo } from './Logo';

const basePath = '/ji-yun';
const baseNavItemId = 'nav-menu-item';

export const navLinkCollection = [
  <li key={`base-${baseNavItemId}-about`}>
    <NavLink
      to={`${basePath}/about`}
      className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
      id={`base-${baseNavItemId}-about`}
      aria-label="About Me"
    >
      <p className="block px-4 hover:text-blue-600">About</p>
    </NavLink>
  </li>,
  <li key={`base-${baseNavItemId}-profile`}>
    <NavLink
      to={`${basePath}/profile`}
      className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
      id={`base-${baseNavItemId}-profile`}
      aria-label="My Profile"
    >
      <p className="block px-4 hover:text-blue-600">Profile</p>
    </NavLink>
  </li>,
  <li key={`base-${baseNavItemId}-projects`}>
    <NavLink
      to={`${basePath}/projects`}
      id={`base-${baseNavItemId}-projects`}
      aria-label="Projects"
      className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
    >
      <p className="block px-4 hover:text-blue-600">Projects</p>
    </NavLink>
  </li>,
  <li key={`base-${baseNavItemId}-contact`}>
    <NavLink
      to={`${basePath}/contact`}
      id={`base-${baseNavItemId}-contact`}
      aria-label="Contact me"
      className={({ isActive }) => (isActive ? 'text-blue-600' : 'text-black')}
    >
      <p className="block px-4 hover:text-blue-600">Contact</p>
    </NavLink>
  </li>,
];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <nav className="flex w-full max-w-screen-lg justify-between lg:w-[1024px]">
        <div className="flex w-full items-center justify-between">
          <Logo />
          {/* Mobile Hamburger Menu */}
          <button
            className="m-0 md:hidden"
            aria-label="Toggle mobile menu."
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <GrClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          className={clsx(
            'absolute w-10/12 bg-white p-4 shadow-lg transition-all md:hidden md:w-auto md:gap-6 md:bg-transparent md:p-0',
            showMenu ? 'top-16' : 'top-[-400px]'
          )}
        >
          {navLinkCollection.map((link) => link)}
        </ul>

        {/* Desktop Menu */}
        <ul
          className={clsx(
            'hidden w-full bg-white p-4 transition-all md:relative md:flex md:w-auto md:gap-6 md:bg-transparent md:p-0 md:shadow-none',
            showMenu ? 'top-16' : 'top-0'
          )}
        >
          {navLinkCollection.map((link) => link)}
        </ul>
      </nav>
    </motion.nav>
  );
};
