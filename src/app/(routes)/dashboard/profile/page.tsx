import { getSession } from '@/app/common/utils/getSession';
import ProfileForm from './components/ProfileForm';

type Props = {};

export const dynamic = 'force-dynamic';

const ProfilePage = async (props: Props) => {
  const { user } = await getSession();
  return (
    <div className="">
      <h2 className="text-3xl mb-10">Profil</h2>
      <ProfileForm user={user} />
    </div>
  );
};

export default ProfilePage;
