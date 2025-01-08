import { Link } from 'gestalt';

export const Logo = () => (
  <Link
    href="/"
    tapStyle="compress"
    underline="hover"
    accessibilityLabel="Navigate to home page."
  >
    <p className="text-2xl font-bold text-gray-800">Ji Yun Pahk</p>
  </Link>
);
