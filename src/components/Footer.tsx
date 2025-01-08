export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="mx-auto flex h-full items-center justify-center py-2">
        <p className="text-md custom-prose dark:text-gray-light-1 font-sans text-gray-800">
          &copy; {currentYear} Ji Yun Pahk. All rights reserved.
        </p>
      </div>
    </>
  );
};
