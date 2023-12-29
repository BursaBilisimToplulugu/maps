import { getSession } from '@/app/common/utils/getSession';
import ProfileForm from './components/ProfileForm';

export const dynamic = 'force-dynamic';

const ProfilePage = async () => {
  const { user } = await getSession();
  if (user) {
    return (
      <div className="">
        <h2 className="text-3xl mb-10">Profil</h2>
        <ProfileForm user={user} />
      </div>
    );
  }
  return null;
};

export default ProfilePage;
