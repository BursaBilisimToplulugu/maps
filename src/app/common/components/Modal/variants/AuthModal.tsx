import { ModalProps } from '@/app/(routes)/(main)/@auth/login/types';
import classNames from 'classnames';
import Modal from '..';

type Props = ModalProps & {};

const AuthModal = ({ children, className, ...props }: Props) => {
  return (
    <Modal
      className={classNames(
        'rounded-2xl shadow-[0px_64px_64px_-48px_rgba(15, 15, 15, 0.08)] bg-white',
        'px-24 py-[72px]',
        className
      )}
      {...props}
    >
      {children}
    </Modal>
  );
};

export default AuthModal;
