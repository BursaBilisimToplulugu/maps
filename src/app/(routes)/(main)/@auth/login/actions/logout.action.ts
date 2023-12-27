'use server';
import { cookies } from 'next/headers';

export const logoutAction = () => {
  const cookieStore = cookies();
  cookieStore.delete('token');
  cookieStore.delete('refresh_token');
};
