import { Link } from 'gestalt';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface SocialMediaContactRowProps {
  className?: string;
  baseId?: string;
}

export const SocialMediaContactRow = ({
  baseId = 'base',
  className = 'text-5xl',
}: SocialMediaContactRowProps) => {
  return (
    <ul className="flex gap-4">
      <li key={`${baseId}-facebook-icon-redirect`}>
        <Link
          href="https://www.facebook.com/jiyun.pahk"
          target="blank"
          tapStyle="compress"
          underline="hover"
          accessibilityLabel="Navigate to my facebook profile."
          dataTestId={`${baseId}-facebook-icon-redirect`}
        >
          <FaFacebook className={className} />
        </Link>
      </li>
      <li key={`${baseId}-instagram-icon-redirect`}>
        <Link
          href="https://www.instagram.com/nuyijkhap"
          target="blank"
          tapStyle="compress"
          underline="hover"
          accessibilityLabel="Navigate to my facebook profile."
          dataTestId={`${baseId}-facebook-icon-redirect`}
        >
          <FaInstagram
            className={className}
            target="blank"
            to="https://www.instagram.com/nuyijkhap"
          />
        </Link>
      </li>
      <li key={`${baseId}-linkedin-icon-redirect`}>
        <Link
          href="https://www.linkedin.com/in/jiyunpahk"
          target="blank"
          tapStyle="compress"
          underline="hover"
          accessibilityLabel="Navigate to my facebook profile."
          dataTestId={`${baseId}-facebook-icon-redirect`}
        >
          <FaLinkedin className={className} />
        </Link>
      </li>
    </ul>
  );
};
