'use client';
import { CustomSession } from '@/app/(routes)/dashboard/layout';
import Divider from '@/app/common/components/Divider';
import { AnimatePresence, motion } from 'framer-motion';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { LuLogOut, LuUser } from 'react-icons/lu';
import { usePopper } from 'react-popper';
import MenuButton from './sub-components/MenuButton';

type Props = {};

const ProfileButton = (props: Props) => {
  const [isOpen, setisOpen] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-end',
    modifiers: [{ name: 'offset', options: { offset: [0, 5] } }],
  });
  const { data, status } = useSession();
  if (status === 'authenticated' && data.user) {
    const user: CustomSession['user'] = data.user as CustomSession['user'];
    return (
      <>
        <button onClick={() => setisOpen((prev) => !prev)}>
          <div
            ref={setReferenceElement}
            className="w-10 h-10 relative rounded-full overflow-hidden border-2 border-neutrals-navyWhite"
          >
            <Image
              priority
              className="object-contain"
              alt={user.picture_url}
              fill
              src={
                user.picture_url ||
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
              }
            />
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              style={styles.popper}
              ref={setPopperElement}
              initial={{ opacity: 0, marginTop: 5 }}
              animate={{ opacity: 1, marginTop: 0 }}
              exit={{ opacity: 0, marginTop: 5 }}
              className="bg-white rounded-md shadow-lg p-4 z-10 min-w-[200px]"
              {...attributes.popper}
            >
              <p className="text-sm">{user.full_name}</p>
              <Divider className="!bg-neutrals-grey" />
              <ul className="py-2 space-y-2">
                <MenuButton
                  icon={<LuUser size={24} />}
                  title="Profil"
                  url="/dashboard/profile"
                />
                <MenuButton
                  onClick={() => signOut()}
                  icon={<LuLogOut size={24} />}
                  className="hover:!bg-red-400"
                  title="Çıkış Yap"
                  url="/dashboard/profile"
                />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
  return null;
};

export default ProfileButton;
