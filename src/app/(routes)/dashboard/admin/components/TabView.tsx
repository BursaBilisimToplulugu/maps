'use client';
import { Place, User } from '@/app/common/layout/Map/types/Place';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PlacesTable from './PlacesTable';
import UsersTable from './UsersTable';

type Props = {
  users: User[];
  places: Place[];
};

const TabView = ({ users, places }: Props) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Kullanıcılar ({users.length})</Tab>
        <Tab>Mekanlar ({places.length})</Tab>
      </TabList>

      <TabPanel>
        <UsersTable data={users} />
      </TabPanel>
      <TabPanel>
        <PlacesTable data={places} />
      </TabPanel>
    </Tabs>
  );
};

export default TabView;
