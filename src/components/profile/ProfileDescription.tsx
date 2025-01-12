const textClassName = 'text-xs lg:text-base pl-1 text-gray-500';
// const quotesClassName = 'text-xl/10 lg:text-3xl/10 font-bold text-gray-900';
export const ProfileDescription = () => {
  return (
    <>
      <p className="lgtext-xl/8 mt-2 text-start text-base/8 text-gray-700">
        {/* <span className={quotesClassName}>”</span> */}
        As a berlin-based brand designer, with a multicultural background and I
        blend organization and analytical thinking to craft impactful,
        culturally resonant brand strategies with a focus on “diversity”. My
        work highlights identity, heritage and unity delivering meaningful brand
        experiences.
        {/* <span className={quotesClassName}>”</span> */}
      </p>
      <div className="flex h-fit w-full flex-col gap-4 py-4">
        <p className="ml-2 font-caveat text-3xl font-bold lg:text-4xl">
          Ji Yun Pahk
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            {/* <ProfileIcon /> */}
            <div className="flex w-fit flex-wrap">
              <p className={textClassName}>Brand designer</p>
              &nbsp;
              <p className={textClassName}>|</p>&nbsp;
              <p className={textClassName}>Graphic designer</p>
              &nbsp;
              <p className={textClassName}>|</p>&nbsp;
              <p className={textClassName}>Illustrator</p>
              &nbsp;
            </div>
          </div>
          <div className="flex items-center justify-start gap-2">
            {/* <LocationIcon /> */}
            <p className={textClassName}>Berlin, Germany</p>
          </div>
        </div>
      </div>
    </>
  );
};
