import { authOptions } from '@/app/api/auth/authOptions';
import { instance } from '@/app/core/services/axios';
import { getServerSession } from 'next-auth';
import { CustomSession } from '../layout';
import ProfileForm from './components/ProfileForm';
import { User } from './types/user';

type Props = {};

const ProfilePage = async (props: Props) => {
  const session: CustomSession | null = await getServerSession(authOptions);
  const userId = session?.user.id;
  const { data } = await instance.get<User>(`/users/${userId}`);
  console.log({ data });
  return (
    <div className="">
      <h2 className="text-3xl mb-10">Profil</h2>
      <ProfileForm user={data} />
    </div>
  );
};

export default ProfilePage;
