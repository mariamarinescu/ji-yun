import { ProjectSlider } from 'components/projects/project/ProjectSlider';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { projectsData } from '../../data/projects';
import { activeProjectAtom } from '../../store/projects/activeProjectAtom';

export const Project = () => {
  const [activeStoredProject, setActiveProject] =
    useRecoilState(activeProjectAtom);
  const { projectId } = useParams();

  useEffect(() => {
    if (!activeStoredProject) {
      const activeProject = projectsData.find(
        (project) => project.id === projectId
      );
      if (activeProject) setActiveProject(activeProject);
    }
  }, [activeStoredProject]);

  return (
    <div className="mt-14 block gap-0 sm:flex sm:gap-10">
      <div className="w-full text-left sm:w-1/3">
        {/* Single project client details */}
        <div className="mb-7">
          <p className="font-general-regular text-secondary-dark dark:text-secondary-light mb-2 text-2xl font-semibold">
            {activeStoredProject?.client}
          </p>
          {activeStoredProject?.referenceWebsite ? (
            <p className="font-general-regular text-ternary-dark dark:text-ternary-light">
              <span>Website: </span>
              <a
                href={activeStoredProject.referenceWebsite}
                className="cursor-pointer duration-300 hover:text-indigo-500 hover:underline dark:hover:text-indigo-400"
                aria-label="Project Website"
              >
                {activeStoredProject.referenceWebsite}
              </a>
            </p>
          ) : null}
        </div>

        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {activeStoredProject?.headline}
          </p>
        </div>

        {/* Single project technologies */}
        {/* <div className="mb-7">
          <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-2 text-2xl font-semibold">
            {singleProjectData.ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData.ProjectInfo.Technologies[0].techs.join(', ')}
          </p>
        </div> */}

        {/* Single project social sharing */}
        {/* <div>
          <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-2 text-2xl font-semibold">
            {singleProjectData.ProjectInfo.SocialSharingHeading}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {singleProjectData.ProjectInfo.SocialSharing.map((social) => {
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="__blank"
                  aria-label="Share Project"
                  className="bg-ternary-light dark:bg-ternary-dark hover:text-primary-dark dark:hover:text-primary-light rounded-lg p-2 text-gray-400 shadow-sm duration-500"
                >
                  <span className="text-lg lg:text-2xl">{social.icon}</span>
                </a>
              );
            })}
          </div>
        </div> */}
      </div>

      {/*  Single project right section */}
      <div className="mt-10 w-full text-left sm:mt-0 sm:w-2/3">
        <div className="h-[100px] w-[300px]">
          <ProjectSlider />
        </div>
        {/* {singleProjectData.ProjectInfo.ProjectDetails.map((details) => { */}
        <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-5 text-lg">
          {activeStoredProject?.description}
        </p>
        {/* })} */}
      </div>
    </div>
  );
};
