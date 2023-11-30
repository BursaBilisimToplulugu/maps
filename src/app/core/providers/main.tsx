'use client';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = { session: Session | null } & PropsWithChildren;

const Providers = ({ children, session }: Props) => {
  return (
    <SessionProvider session={session}>
      <ToastContainer />
      {children}
    </SessionProvider>
  );
};

export default Providers;
