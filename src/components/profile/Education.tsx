import { GrMapLocation } from 'react-icons/gr';
import universityLogo from '../../assets/Musabi.png';

export const Education = () => {
  return (
    <div className="flex w-fit flex-col">
      <h5 className="mt-2 text-pretty text-xl font-semibold tracking-tight text-gray-900">
        Education
      </h5>
      <div className="flex flex-wrap items-center gap-2 py-3">
        <img src={universityLogo} width="10%" height="" alt="University logo" />
        <div className="flex h-full flex-col">
          <p className="text-sm font-semibold text-black">
            Musashino Art University
          </p>
          <div className="gap flex items-center gap-2">
            <GrMapLocation size="20" />
            <p className="text-sm font-semibold text-black">Tokyo, Japan</p>
          </div>
        </div>
      </div>
    </div>
  );
};
