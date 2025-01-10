import 'react-responsive-modal/styles.css';

import { RiCloseLargeLine } from 'react-icons/ri';
import { Modal as ResponsiveModal } from 'react-responsive-modal';

import { ModalProps as ResponsiveModalProps } from 'react-responsive-modal';

export interface ModalProps extends ResponsiveModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  classNames,
  styles,
  children,
}) => {
  return (
    <ResponsiveModal
      open={open}
      onClose={onClose}
      classNames={classNames}
      styles={styles}
      closeIcon={
        <RiCloseLargeLine size={22} className="text-black dark:text-white" />
      }
      data-testid="modal"
    >
      {children}
    </ResponsiveModal>
  );
};
