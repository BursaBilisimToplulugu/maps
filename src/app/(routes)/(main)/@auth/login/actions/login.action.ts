'use server';

import { signIn } from 'next-auth/react';
import { LoginFormValues } from '../types/login';

interface LoginActionProps {
  values: LoginFormValues;
}

export const loginAction = async ({ values }: LoginActionProps) => {
  await signIn('credentials', {
    email: values.email,
    password: values.password,
    redirect: false,
  });
};
