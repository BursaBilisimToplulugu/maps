'use client';
import { User } from '@/app/(routes)/dashboard/profile/types/user';
import React, { PropsWithChildren, useEffect, useState } from 'react';

type Props = { token?: string; session?: User } & PropsWithChildren;

export const AuthContext = React.createContext<{
  authenticated: boolean;
  session: User | null;
}>({
  authenticated: false,
  session: null,
});

const AuthProvider = ({ children, token, session }: Props) => {
  const [authenticated, setauthenticated] = useState(false);
  useEffect(() => {
    setauthenticated(!!token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ authenticated, session: session || null }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
