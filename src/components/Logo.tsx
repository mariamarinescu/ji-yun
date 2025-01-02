import { Link } from 'gestalt';

export const Logo = () => (
  <Link
    href="/"
    tapStyle="compress"
    underline="hover"
    accessibilityLabel="Navigate to home page."
  >
    <p className="text-2xl font-bold text-gray-800">
      {/* <p className="flex h-10 items-center px-10 font-bold uppercase italic text-black hover:opacity-90"> */}
      Ji Yun Pahk
    </p>
  </Link>
);
