import { MotionLayoutWrapper } from 'components/layouts';
import { Education, ProfileDescription, SkillSet } from 'components/profile';
import profileImg from '../assets/profile.jpeg';

const Profile = () => {
  return (
    <MotionLayoutWrapper>
      <div className="relative isolate overflow-hidden bg-white px-6 py-8 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <ProfileDescription />
              </div>
            </div>
            <div className="pt-4 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
              <div className="">
                <div className="flex max-w-xl flex-col gap-4 text-base/7 text-gray-700 lg:max-w-lg">
                  <Education />
                  <SkillSet />
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-12 pt-7 lg:sticky lg:top-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden 2xl:ml-0">
            <img
              className="h-auto w-full transform rounded-sm bg-gray-900 object-contain shadow-xl ring-1 ring-gray-400/10 transition-transform hover:scale-105"
              src={profileImg}
              alt="Profile Image"
              loading="lazy" // Lazy load for better performance
              // width="100%" // Ensure the image takes up full width of the container
              // height="auto" // Maintain aspect ratio automatically
            />
          </div>
        </div>
      </div>
    </MotionLayoutWrapper>
    // <MotionLayoutWrapper>
    //   <div className="flex h-full w-full flex-col gap-1 p-4 lg:flex-row">
    //     <div className="flex w-full flex-col pt-4 lg:w-3/4">
    //       <ProfileDescription />
    //       <div className="flex flex-col gap-2 text-base/7 text-gray-700">
    //         <Education />
    //         <SkillSet />
    //       </div>
    //     </div>
    //     <div className="flex h-full w-full content-center items-start pt-0 lg:w-1/4 lg:pt-10 xl:w-2/4">
    //       <img
    //         className="mx-auto h-fit w-fit transform rounded-none bg-gray-900 object-contain shadow-xl ring-1 ring-gray-400/10 transition-transform hover:scale-105 md:w-full"
    //         src={profileImg}
    //         alt="Profile Image"
    //         loading="lazy" // Lazy load for better performance
    //         width="100%" // Ensure the image takes up full width of the container
    //         height="auto" // Maintain aspect ratio automatically
    //       />
    //     </div>
    //   </div>
    // </MotionLayoutWrapper>
  );
};

export default Profile;
