'use client';
import { User } from '@/app/(routes)/dashboard/profile/types/user';
import AuthProvider from '@/app/common/providers/Auth.provider';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = { token?: string; session?: User } & PropsWithChildren;

const Providers = ({ children, token, session }: Props) => {
  return (
    <AuthProvider token={token} session={session}>
      <ToastContainer />
      {children}
    </AuthProvider>
  );
};

export default Providers;
