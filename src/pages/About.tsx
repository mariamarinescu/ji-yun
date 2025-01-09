import { MotionLayoutWrapper } from 'components';
import aboutImg from '../assets/about.jpeg';

const About = () => {
  return (
    <MotionLayoutWrapper>
      <div className="relative isolate overflow-hidden bg-white px-6 py-8 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  A bit about me...
                </h1>
                <p className="mt-6 text-xl/8 text-gray-700">
                  As a berlin-based brand designer, with a multicultural
                  background and I blend organization and analytical thinking to
                  craft impactful, culturally resonant brand strategies with a
                  focus on “diversity”. My work highlights identity, heritage
                  and unity delivering meaningful brand experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 pt-16 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={aboutImg}
              alt=""
            />
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8"></div>
        </div>
      </div>
    </MotionLayoutWrapper>
  );
};

export default About;
