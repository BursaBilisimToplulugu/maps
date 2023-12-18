import { ModalProps } from '@/app/(routes)/(main)/@auth/login/types';
import classNames from 'classnames';
import Modal from '..';

type Props = ModalProps & {};

const AuthModal = ({ children, className, ...props }: Props) => {
  return (
    <Modal className={classNames(className)} {...props}>
      {children}
    </Modal>
  );
};

export default AuthModal;
