'use server';
import { instance } from '@/app/core/services/axios';
import { cookies } from 'next/headers';

export const loginAction = async (values: any) => {
  try {
    const { data } = await instance.post('/auth/login', values);
    const cookieStore = cookies();
    console.log('data: ', data.data.access_token);
    cookieStore.set('token', data.data.access_token, {
      httpOnly: true,
      secure: true,
    });
    cookieStore.set('refresh_token', data.data.refresh_token, {
      httpOnly: true,
      secure: true,
    });

    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
