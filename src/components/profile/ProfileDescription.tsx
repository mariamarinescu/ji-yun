import { LocationIcon, ProfileIcon } from '../icons';

export const ProfileDescription = () => {
  return (
    <>
      <p className="mt-2 text-start text-xl/8 text-gray-700">
        <span className="text-3xl/10 font-bold text-gray-900">„ </span>
        As a berlin-based brand designer, with a multicultural background and I
        blend organization and analytical thinking to craft impactful,
        culturally resonant brand strategies with a focus on “diversity”. My
        work highlights identity, heritage and unity delivering meaningful brand
        experiences.
        <span className="text-3xl/10 font-bold text-gray-900"> ”</span>
      </p>
      <div className="flex h-fit w-full flex-col gap-4 py-4">
        <p className="font-caveat text-4xl font-bold">Ji Yun Pahk</p>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <ProfileIcon />
            <div className="flex w-fit flex-wrap">
              <p className="text-lg text-gray-500">Brand designer</p>
              &nbsp;
              <p className="text-lg text-gray-500">|</p>&nbsp;
              <p className="text-lg text-gray-500">Graphic designer</p>
              &nbsp;
              <p className="text-lg text-gray-500">|</p>&nbsp;
              <p className="text-lg text-gray-500">Illustrator</p>
              &nbsp;
            </div>
          </div>
          <div className="flex items-center justify-start gap-2">
            <LocationIcon />
            <p className="text-lg text-gray-500">Berlin, Germany</p>
          </div>
        </div>
      </div>
    </>
  );
};
