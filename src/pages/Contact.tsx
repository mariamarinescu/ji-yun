import { Button } from '@headlessui/react';
import img from '../images/11066756.jpg';
import instagram from '../images/instagram-svgrepo-com.svg';
import linkedin from '../images/linkedin-svgrepo-com.svg';
import phone from '../images/phone-svgrepo-com.svg';

const Contact = () => {
  return (
    <div className="isolate flex bg-white py-16">
      <div className="mx-auto max-w-2xl text-start">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
          Contact me
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          You can send me an email or contact via social networks.
        </p>
        <Button className="border-3 my-4 border border-gray-600 bg-none p-2">
          <a href="mailto:pahkjiyun@gmail.com">Send me an email</a>
        </Button>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex content-center items-center gap-2">
            <img src={instagram} width={30} />
            <p>nuyijkhap</p>
          </div>
          <div className="flex content-center items-center gap-2">
            <img src={linkedin} width={30} />
            <p>linkedin.com/in/jiyunpahk</p>
          </div>
          <div className="flex content-center items-center gap-2">
            <img src={phone} width={30} />
            <p>+49(0)1636174392</p>
          </div>
        </div>
      </div>
      <img src={img} width="40%" />
    </div>
  );
};

export default Contact;
