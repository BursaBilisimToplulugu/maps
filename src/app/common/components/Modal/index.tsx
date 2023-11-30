'use client';
import {
  ModalProps,
  ServerModalProps,
} from '@/app/(routes)/(main)/@auth/login/types';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { LuX } from 'react-icons/lu';
import { BottomSheet } from 'react-spring-bottom-sheet';

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
  const [isOpenState, setisOpenState] = useState(false);

  const closeModal = () => {
    setisOpenState(false);
    setTimeout(() => {
      dialog.current?.close();
      if (goBackOnClose) {
        if (window.history.length > 2) {
          router.back();
        } else {
          const { backHref } = props as ServerModalProps;
          router.push(backHref || '/');
        }
      }
    }, 300);
  };

  useEffect(() => {
    if (isDefaultOpen) {
      setisOpenState(true);
      dialog.current?.showModal();
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
          closeModal();
        }
      });
    }
  }, [dialog, isDefaultOpen, router, goBackOnClose, onClose]);
  if (typeof window !== 'undefined' && window.innerWidth > 768)
    return (
      <dialog
        className={classNames(
          'backdrop:bg-neutrals-dark backdrop:bg-opacity-30 backdrop:transition-all open:backdrop:animate-fade-in',
          'bg-transparent outline-none border-none shadow-none',
          'overflow-visible'
        )}
        ref={dialog}
      >
        <AnimatePresence>
          {isOpenState && (
            <motion.div
              className={classNames(
                'rounded-2xl shadow-[0px_64px_64px_-48px_rgba(15, 15, 15, 0.08)] bg-white',
                'px-24 py-[72px] relative',
                className
              )}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="absolute -top-4 -right-4 bg-white rounded-full shadow-sm p-1"
                onClick={() => {
                  closeModal();
                }}
              >
                <LuX size={24} color={'#777E90'} />
              </button>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </dialog>
    );
  return (
    <BottomSheet
      onDismiss={() => {
        setisOpenState(false);
        router.back();
      }}
      scrollLocking
      open={isOpenState}
      className="!bg-red-200"
    >
      {children}
    </BottomSheet>
  );
};

export default Modal;
