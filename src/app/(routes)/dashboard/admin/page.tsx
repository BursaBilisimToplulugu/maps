import { Place, User } from '@/app/common/layout/Map/types/Place';
import { instance } from '@/app/core/services/axios';
import TabView from './components/TabView';

const AdminPage = async () => {
  const { data: usersData } = await instance.get<User[]>('/users');
  const { data: placesData } = await instance.get<Place[]>('/places');
  return (
    <div>
      <TabView users={usersData} places={placesData} />
    </div>
  );
};

export default AdminPage;
