import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router';

interface SocialMediaContactRowProps {
  className?: string;
  baseId?: string;
}

export const SocialMediaContactRow = ({
  baseId = 'base',
  className = 'text-5xl',
}: SocialMediaContactRowProps) => {
  return (
    <ul className="flex w-fit gap-4">
      <li key={`${baseId}-instagram-icon-redirect`}>
        <NavLink
          to="https://www.instagram.com/nuyijkhap"
          target="blank"
          aria-label="Navigate to my facebook profile."
          id={`${baseId}-facebook-icon-redirect`}
        >
          <FaInstagram
            className={className}
            target="blank"
            to="https://www.instagram.com/nuyijkhap"
          />
        </NavLink>
      </li>
      <li key={`${baseId}-linkedin-icon-redirect`}>
        <NavLink
          to="https://www.linkedin.com/in/jiyunpahk"
          target="blank"
          aria-label="Navigate to my facebook profile."
          id={`${baseId}-facebook-icon-redirect`}
        >
          <FaLinkedin className={className} />
        </NavLink>
      </li>
    </ul>
  );
};
