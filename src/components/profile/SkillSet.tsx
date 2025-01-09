import {
  AdobeIllustratorIcon,
  AdobeInDesignIcon,
  AdobePhotoshopIcon,
  MicrosoftOfficeIcon,
} from '../icons';

export const SkillSet = () => {
  return (
    <div className="flex w-full flex-col">
      <h5 className="text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
        Skillset
      </h5>
      <div className="xs:grid-cols-2 grid grid-cols-1 gap-6 py-6">
        <div className="flex items-center gap-2">
          <MicrosoftOfficeIcon />
          <h6 className="text-pretty text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
            Microsoft Office
          </h6>
        </div>

        <div className="flex items-center gap-2">
          <AdobeIllustratorIcon />
          <h6 className="text-pretty text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
            Adobe Illustrator
          </h6>
        </div>

        <div className="flex items-center gap-2">
          <AdobePhotoshopIcon />
          <h6 className="text-pretty text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
            Adobe Photoshop
          </h6>
        </div>

        <div className="flex items-center gap-2">
          <AdobeInDesignIcon />
          <h6 className="text-pretty text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
            Adobe InDesign
          </h6>
        </div>
      </div>
    </div>
  );
};
