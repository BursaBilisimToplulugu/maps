import { PropsWithChildren } from 'react';

type Props = {} & PropsWithChildren;

const AdminLayout = async ({ children }: Props) => {
  return <>{children}</>;
};

export default AdminLayout;
