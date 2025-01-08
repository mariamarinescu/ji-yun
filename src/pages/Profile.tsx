import {
  AdobeIllustratorIcon,
  AdobePhotoshopIcon,
  MicrosoftOfficeIcon,
  MotionLayoutWrapper,
} from 'components';
import profileImg from '../assets/profile.jpeg';

const Profile = () => {
  return (
    <MotionLayoutWrapper>
      <div className="relative isolate overflow-hidden bg-white px-6 py-8 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="mt-6 text-center text-xl/8 text-gray-700">
                  <span className="text-3xl/10 font-bold text-gray-900">
                    „{' '}
                  </span>
                  As a berlin-based brand designer, with a multicultural
                  background and I blend organization and analytical thinking to
                  craft impactful, culturally resonant brand strategies with a
                  focus on “diversity”. My work highlights identity, heritage
                  and unity delivering meaningful brand experiences.
                  <span className="text-3xl/10 font-bold text-gray-900">
                    {' '}
                    ”
                  </span>
                </p>
              </div>
            </div>
            <div className="pt-8 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
              <div className="">
                <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                  <ul role="list" className="space-y-4 text-gray-600">
                    <li className="flex gap-x-3">
                      <svg
                        className="mt-1 size-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="#4f46e5"
                        aria-hidden="true"
                        data-slot="icon"
                        height="20px"
                        width="20px"
                      >
                        <g>
                          <path
                            d="M26.4,21.1c-0.9-0.4-1.5-1.3-1.5-2.3l0-4.9c0-2.4-0.9-4.6-2.7-6.2C20.5,5.9,18.1,5,15.6,5c-4.9,0.1-8.9,4.3-8.9,9.2
		c0,4-1,8.1-2.9,11.7l-0.5,1c-0.3,0.5-0.1,1.1,0.4,1.3c0.1,0.1,0.3,0.1,0.5,0.1c0.4,0,0.7-0.2,0.9-0.5l0.5-1c2-3.9,3.1-8.2,3.1-12.6
		c0-3.8,3.1-7.1,6.9-7.2c2-0.1,3.9,0.7,5.3,2c1.3,1.3,2.1,3,2.1,4.8l0,4.9c0,1.8,1,3.3,2.6,4.1c0.5,0.2,1.1,0,1.3-0.4
		C27.1,22,26.9,21.4,26.4,21.1z"
                          />
                          <path
                            d="M15.9,1c-7.2,0-13,6.1-13,13.6c0,0.6,0.4,1,1,1s1-0.4,1-1c0-6.4,5-11.6,11-11.6s11,5.2,11,11.6V18c0,0.6,0.4,1,1,1
		s1-0.4,1-1v-3.4C28.9,7.1,23.1,1,15.9,1z"
                          />
                          <path
                            d="M19.3,10.3C18.3,9.4,17,8.9,15.6,9c-2.5,0.1-4.4,2.1-4.4,4.5c0,5.5-1.6,10.9-4.6,15.7l-0.1,0.2c-0.3,0.5-0.2,1.1,0.3,1.4
		C6.9,31,7.1,31,7.3,31c0.3,0,0.7-0.2,0.8-0.5l0.1-0.2c3.2-5.1,4.9-10.9,4.9-16.8c0-1.3,1.1-2.5,2.5-2.5c0.8-0.1,1.6,0.2,2.1,0.8
		c0.5,0.4,0.7,1,0.7,1.6c0.4,7.3-3.7,16-3.8,16.1c-0.2,0.5,0,1.1,0.5,1.3c0.5,0.2,1.1,0,1.3-0.5c0.2-0.4,4.4-9.3,4-17
		C20.6,12.2,20.1,11.1,19.3,10.3z"
                          />
                          <path
                            d="M17,14.1c0.1-0.5-0.3-1-0.9-1.1c-0.5-0.1-1,0.3-1.1,0.9l-0.2,1.4c-0.5,4.9-1.8,9.7-3.8,14.3c-0.2,0.5,0,1.1,0.5,1.3
		C11.7,31,11.9,31,12,31c0.4,0,0.8-0.2,0.9-0.6c2-4.7,3.3-9.7,3.9-14.9L17,14.1z"
                          />
                        </g>
                      </svg>
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Identity.
                        </strong>{' '}
                        Cohesive visual and conceptual elements that define and
                        communicate a brand's unique persona and values.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="mt-1 size-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        data-slot="icon"
                        width="12px"
                        height="12px"
                      >
                        <path
                          d="M4 7.9966C3.83599 7.99236 3.7169 7.98287 3.60982 7.96157C2.81644 7.80376 2.19624 7.18356 2.03843 6.39018C2 6.19698 2 5.96466 2 5.5C2 5.03534 2 4.80302 2.03843 4.60982C2.19624 3.81644 2.81644 3.19624 3.60982 3.03843C3.80302 3 4.03534 3 4.5 3H19.5C19.9647 3 20.197 3 20.3902 3.03843C21.1836 3.19624 21.8038 3.81644 21.9616 4.60982C22 4.80302 22 5.03534 22 5.5C22 5.96466 22 6.19698 21.9616 6.39018C21.8038 7.18356 21.1836 7.80376 20.3902 7.96157C20.2831 7.98287 20.164 7.99236 20 7.9966M10 13H14M4 8H20V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V8Z"
                          stroke="#4f46e5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Heritage.
                        </strong>{' '}
                        Rich history, legacy, and cultural significance of a
                        brand, which informs its identity and values, connecting
                        past traditions with present and future brand
                        expressions.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="mt-0.5 size-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        width="26px"
                        height="26px"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.3636 5.25C12.2716 5.25 11.3864 6.13525 11.3864 7.22727V7.97727L7.97727 7.97727L7.97727 11.3864H7.22727C6.13526 11.3864 5.25 12.2716 5.25 13.3636C5.25 14.4557 6.13526 15.3409 7.22727 15.3409H7.97727L7.97727 18.75L18.75 18.75V16.7598C17.1901 16.4169 16.0227 15.0266 16.0227 13.3636C16.0227 11.7007 17.1901 10.3104 18.75 9.96745V7.97727L15.3409 7.97727V7.22727C15.3409 6.13526 14.4557 5.25 13.3636 5.25ZM9.96745 6.47727C10.3104 4.91733 11.7007 3.75 13.3636 3.75C15.0266 3.75 16.4169 4.91733 16.7598 6.47727L20.25 6.47727V11.3864L19.5 11.3864C18.408 11.3864 17.5227 12.2716 17.5227 13.3636C17.5227 14.4557 18.408 15.3409 19.5 15.3409H20.25V20.25L6.47727 20.25L6.47727 16.7598C4.91733 16.4169 3.75 15.0266 3.75 13.3636C3.75 11.7007 4.91733 10.3104 6.47727 9.96745L6.47727 6.47727L9.96745 6.47727Z"
                          fill="#4f46e5"
                        />
                      </svg>
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Unity.
                        </strong>{' '}
                        Harmonious integration of all brand elements—such as
                        logo, typography, color palette, and messaging—creating
                        a cohesive and consistent visual and experiential
                        identity across all touchpoints.
                      </span>
                    </li>
                  </ul>
                  <div className="flex gap-6 p-8">
                    <MicrosoftOfficeIcon />
                    <AdobeIllustratorIcon />
                    <AdobePhotoshopIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={profileImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </MotionLayoutWrapper>
  );
};

export default Profile;
