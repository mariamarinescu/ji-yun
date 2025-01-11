import { Modal } from 'components/Modal';
import { ProjectSlider } from 'components/projects';
import { Project as ProjectType } from 'interfaces';

interface ProjectProps {
  setProjectDetailsModalOpen?: () => void;
  projectDetailsModalOpen?: boolean;
  activeProject?: ProjectType | null;
}

export const Project: React.FC<ProjectProps> = ({
  setProjectDetailsModalOpen,
  projectDetailsModalOpen,
  activeProject,
}) => {
  if (!setProjectDetailsModalOpen || !activeProject || !projectDetailsModalOpen)
    return null;

  return (
    <Modal onClose={setProjectDetailsModalOpen} open={projectDetailsModalOpen}>
      <div className="h-10/12 mx-auto flex w-10/12 flex-col bg-white pb-4">
        <p className="font-general-regular text-secondary-dark dark:text-secondary-light mt-2 text-start text-3xl font-semibold">
          {activeProject?.client}
        </p>
        <div className="mt-14 flex flex-col gap-0 sm:flex sm:gap-5">
          <div className="flex flex-col gap-4">
            <div className="flex h-fit w-full justify-center bg-transparent">
              <ProjectSlider imageCollection={activeProject?.gallery} />
            </div>
            <div className="w-fit text-left">
              <div className="mb-10">
                <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-2 text-xl font-semibold">
                  Description
                </p>
                <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                  {activeProject?.headline}
                </p>
              </div>

              {activeProject?.referenceWebsite ? (
                <div>
                  <p className="font-general-regular text-ternary-dark dark:text-ternary-light">
                    <span className="font-semibold">Website: </span>
                    <a
                      href={activeProject.referenceWebsite}
                      className="cursor-pointer duration-300 hover:text-indigo-500 hover:underline dark:hover:text-indigo-400"
                      aria-label="Project Website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {activeProject.referenceWebsite}
                    </a>
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-10 w-full flex-col gap-4 text-left sm:mt-0 sm:flex">
            <div className="w-full">{activeProject?.description}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
