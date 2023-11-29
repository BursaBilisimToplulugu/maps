import { DetailedHTMLProps, DialogHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
> & {
  isDefaultOpen?: boolean;
  onClose?: () => void;
};

export type ServerModalProps = Props & {
  goBackOnClose?: true;
  backHref: string;
};

export type ClientModalProps = Props & {
  goBackOnClose?: false;
};

export type ModalProps = ServerModalProps | ClientModalProps;
