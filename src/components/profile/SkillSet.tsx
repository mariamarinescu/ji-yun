import {
  AdobeIllustratorIcon,
  AdobeInDesignIcon,
  AdobePhotoshopIcon,
  MicrosoftOfficeIcon,
} from '../icons';

const iconContainerClassName = 'flex items-center gap-2';
const skillTitleClassName =
  'text-pretty text-lg font-semibold tracking-tight text-gray-900 sm:text-base';
const iconSize = 30;

const skillIconDictionary: Record<string, JSX.Element> = {
  'Microsoft Office': (
    <MicrosoftOfficeIcon width={iconSize} height={iconSize} />
  ),
  'Adobe Illustrator': (
    <AdobeIllustratorIcon width={iconSize} height={iconSize} />
  ),
  'Adobe Photoshop': <AdobePhotoshopIcon width={iconSize} height={iconSize} />,
  'Adobe InDesign': <AdobeInDesignIcon width={iconSize} height={iconSize} />,
};

const skillSetNameList = [
  'Microsoft Office',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Adobe InDesign',
];

export const SkillSet = () => {
  return (
    <div className="flex w-full flex-col">
      <h5 className="mt-2 text-pretty text-xl font-semibold tracking-tight text-gray-900">
        Skillset
      </h5>
      <div className="grid grid-cols-1 gap-6 py-6 xs:grid-cols-2">
        {skillSetNameList.map((skillName) => (
          <div className={iconContainerClassName} key={skillName}>
            {skillIconDictionary[skillName]}
            <h6 className={skillTitleClassName}>{skillName}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};
