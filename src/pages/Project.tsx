import { ProjectSlider } from 'components/projects';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { projectsData } from '../data/projects';
import { activeProjectAtom } from '../store/projects/activeProjectAtom';

const Project = () => {
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
    <div className="flex h-full w-full flex-col">
      <p className="font-general-regular text-secondary-dark dark:text-secondary-light mt-2 text-start text-3xl font-semibold">
        {activeStoredProject?.client}
      </p>
      <div className="mt-14 block gap-0 sm:flex sm:gap-10">
        <div className="w-full text-left sm:w-1/3">
          {/* Single project client details */}

          {/* Single project objectives */}
          <div className="mb-7">
            <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-2 text-2xl font-semibold">
              Description
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {activeStoredProject?.headline}
            </p>
          </div>
          {/* <div className="mb-7">
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            </p>
          </div> */}

          {activeStoredProject?.referenceWebsite ? (
            <div className="mb-7">
              <p className="font-general-regular text-ternary-dark dark:text-ternary-light">
                <span className="font-semibold">Website: </span>
                <a
                  href={activeStoredProject.referenceWebsite}
                  className="cursor-pointer duration-300 hover:text-indigo-500 hover:underline dark:hover:text-indigo-400"
                  aria-label="Project Website"
                >
                  {activeStoredProject.referenceWebsite}
                </a>
              </p>
            </div>
          ) : null}

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
        <div className="mt-10 w-full flex-col gap-4 text-left sm:mt-0 sm:flex sm:w-2/3">
          <div className="flex h-fit w-full justify-center bg-transparent">
            <ProjectSlider />
          </div>
          <div className="w-full">{activeStoredProject?.description}</div>

          {/* })} */}
        </div>
      </div>
    </div>
  );
};

export default Project;
