import { Modal } from 'components/Modal';
import { ProjectSlider } from 'components/projects';

interface Project {
  id: string;
  client: string;
  description: string;
  headline: string;
  img: string;
  year: string;
  location: string;
  tags: string[];
  referenceWebsite?: string;
}
interface ProjectProps {
  setProjectDetailsModalOpen?: () => void;
  projectDetailsModalOpen?: boolean;
  activeProject?: Project | null;
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
      <div className="h-10/12 mx-auto flex w-10/12 flex-col bg-white">
        <p className="font-general-regular text-secondary-dark dark:text-secondary-light mt-2 text-start text-3xl font-semibold">
          {activeProject?.client}
        </p>
        <div className="mt-14 block gap-0 sm:flex sm:gap-10">
          <div className="w-full text-left sm:w-1/3">
            <div className="mb-7">
              <p className="font-general-regular text-ternary-dark dark:text-ternary-light mb-2 text-2xl font-semibold">
                Description
              </p>
              <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                {activeProject?.headline}
              </p>
            </div>

            {activeProject?.referenceWebsite ? (
              <div className="mb-7">
                <p className="font-general-regular text-ternary-dark dark:text-ternary-light">
                  <span className="font-semibold">Website: </span>
                  <a
                    href={activeProject.referenceWebsite}
                    className="cursor-pointer duration-300 hover:text-indigo-500 hover:underline dark:hover:text-indigo-400"
                    aria-label="Project Website"
                  >
                    {activeProject.referenceWebsite}
                  </a>
                </p>
              </div>
            ) : null}
          </div>

          <div className="mt-10 w-full flex-col gap-4 text-left sm:mt-0 sm:flex sm:w-2/3">
            <div className="flex h-fit w-full justify-center bg-transparent">
              <ProjectSlider />
            </div>
            <div className="w-full">{activeProject?.description}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
