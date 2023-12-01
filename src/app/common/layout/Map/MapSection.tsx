import { authOptions } from '@/app/api/auth/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import Map from '.';
import Button from '../../components/Button';
import ClientHeader from './sub-components/ClientHeader';
import ProfileButton from './sub-components/ProfileButton';
import { Place } from './types/Place';

type Props = {
  places: Place[];
};

const MapSection = async ({ places }: Props) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="w-full relative flex-1">
      <div className="absolute px-3 z-10 flex items-center justify-between w-full py-4 md:py-8 space-x-4 md:space-x-0">
        <ClientHeader />
        {session ? (
          <ProfileButton />
        ) : (
          <Link prefetch className="hidden md:inline-block" href={'/login'}>
            <Button className="!font-normal">Giriş Yap</Button>
          </Link>
        )}
      </div>
      <Map places={places} />
    </div>
  );
};

export default MapSection;
