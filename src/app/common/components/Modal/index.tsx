'use client';
import { ModalProps } from '@/app/(routes)/@auth/login/types';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const Modal = ({
  children,
  className,
  onClose,
  isDefaultOpen,
  goBackOnClose = false,
  ...props
}: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [isOpenState, setisOpenState] = useState(isDefaultOpen);

  useEffect(() => {
    if (isDefaultOpen) {
      dialog.current?.showModal();
      setisOpenState(true);
    }
    if (dialog.current && dialog.current.open) {
      dialog.current.addEventListener('click', function (event) {
        var rect = dialog.current?.getBoundingClientRect();
        if (!rect) return;
        var isInDialog =
          rect?.top <= event.clientY &&
          event.clientY <= rect?.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (!isInDialog) {
          onClose?.();
          setisOpenState(false);
          setTimeout(() => {
            dialog.current?.close();
            if (goBackOnClose) {
              router.back();
            }
          }, 300);
        }
      });
    }
  }, [dialog, isDefaultOpen, router, goBackOnClose, onClose]);
  return (
    <dialog
      className={classNames(
        'backdrop:bg-neutrals-dark backdrop:bg-opacity-30 backdrop:transition-all open:backdrop:animate-fade-in',
        'bg-transparent outline-none border-none shadow-none'
      )}
      ref={dialog}
    >
      <AnimatePresence>
        {isOpenState && (
          <motion.div
            className={classNames(className)}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  );
};

export default Modal;
