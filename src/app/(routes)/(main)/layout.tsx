import { instance } from '@/app/core/services/axios';
import { Metadata } from 'next';
import MapSection from '../../common/layout/Map/MapSection';
import Navbar from '../../common/layout/Navbar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  const { data } = await instance.get('/places');
  return (
    <div className="flex items-stretch min-h-screen">
      <Navbar />
      <MapSection places={data} />
      {auth && auth}
    </div>
  );
}
