'use server';
import { User } from '@/app/(routes)/dashboard/profile/types/user';
import { instance } from '@/app/core/services/axios';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { cookies } from 'next/headers';

interface JwtProps extends JwtPayload {
  id: string;
}

export const getSession = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get('token')?.value;
  if (token) {
    const decodedToken = jwtDecode(token) as JwtProps;
    const { data: userData } = await instance.get<User>(
      `/users/${decodedToken.id}`
    );
    return {
      user: userData,
      token,
    };
  }
  return { token, user: null };
};
