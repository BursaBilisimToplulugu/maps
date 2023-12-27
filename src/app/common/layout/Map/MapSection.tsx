'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Map from '.';
import Button from '../../components/Button';
import { useSession } from '../../hooks/useSession';
import ClientHeader from './sub-components/ClientHeader';
import ProfileButton from './sub-components/ProfileButton';
import { Place } from './types/Place';

type Props = {
  places: Place[];
};

const MapSection = ({ places }: Props) => {
  const { authenticated } = useSession();
  return (
    <div className="w-full relative flex-1">
      <div className="absolute px-3 z-10 flex items-center justify-between w-full py-4 md:py-8 space-x-4 md:space-x-0">
        <ClientHeader />
        <AnimatePresence>
          {authenticated ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProfileButton />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Link prefetch className="hidden md:inline-block" href={'/login'}>
                <Button className="!font-normal">Giriş Yap</Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Map places={places} />
    </div>
  );
};

export default MapSection;
