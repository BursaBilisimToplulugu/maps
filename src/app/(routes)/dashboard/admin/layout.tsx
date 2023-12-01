import { authOptions } from '@/app/api/auth/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { CustomSession } from '../layout';

type Props = {} & PropsWithChildren;

const AdminLayout = async ({ children }: Props) => {
  const session: CustomSession | null = await getServerSession(authOptions);
  if (session?.user?.['role'] !== 'admin') redirect('/dashboard/profile');
  return <>{children}</>;
};

export default AdminLayout;
