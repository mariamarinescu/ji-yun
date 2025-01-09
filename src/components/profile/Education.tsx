import { GrMapLocation } from 'react-icons/gr';
import universityLogo from '../../assets/Musabi.png';

export const Education = () => {
  return (
    <div className="flex w-full flex-col">
      <h5 className="mt-2 text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
        Education
      </h5>
      <div className="flex items-center gap-2 py-2">
        <img src={universityLogo} width="30%" height="" alt="" />
        <div className="gap flex-col items-start">
          <p className="font-semibold text-black">Musashino Art University</p>
          <div className="gap flex items-center gap-2">
            <GrMapLocation size="30" />
            <p className="font-semibold text-black">Tokyo, Japan</p>
          </div>
        </div>
      </div>
    </div>
  );
};
