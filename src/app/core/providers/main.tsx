'use client';
import { User } from '@/app/(routes)/dashboard/profile/types/user';
import AuthProvider from '@/app/common/providers/Auth.provider';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocationProvider from './Location.provider';

type Props = { token?: string; session?: User } & PropsWithChildren;

const Providers = ({ children, token, session }: Props) => {
  return (
    <AuthProvider token={token} session={session}>
      <LocationProvider>
        <ToastContainer />
        {children}
      </LocationProvider>
    </AuthProvider>
  );
};

export default Providers;
