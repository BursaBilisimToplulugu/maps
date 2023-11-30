'use client';
import Alert from '@/app/common/components/Alert';
import Button from '@/app/common/components/Button';
import Input from '@/app/common/components/Input';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LoginFormValues } from '../types/login';

type Props = {};

const LoginForm = (props: Props) => {
  const [error, seterror] = useState<string | null>(null);
  const router = useRouter();
  const { handleSubmit, getFieldProps, errors } = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, { setFieldError }) => {
      const res = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (res?.error) {
        const errorObject = JSON.parse(res.error);
        if (errorObject.type === 'text') seterror(errorObject.message);
        else {
          errorObject.fields.forEach((error: any) => {
            setFieldError(error.field, error.message);
          });
        }
      } else router.push('/dashboard/profile');
    },
  });
  return (
    <form onSubmit={handleSubmit} className="w-full py-4 md:py-0">
      <div className="flex flex-col gap-y-8 w-full md:gap-y-6 lg:min-w-[300px] 2xl:min-w-[350px] px-4 md:px-0 md:max-w-[350px]">
        <h2 className="md:text-xl text-2xl text-center">Giriş Yap</h2>
        <span className="text-xs text-center">
          Yeni Kullanıcı mısın?{' '}
          <Link
            className="text-primary-navyBlue font-semibold"
            href="/register"
          >
            Hesap Oluştur
          </Link>
        </span>
        {error && <Alert type="error">{error}</Alert>}
        <Input
          error={errors.email}
          label="E-posta"
          placeholder="E-postanızı giriniz"
          {...getFieldProps('email')}
        />
        <Input
          error={errors.password}
          label="Şifre"
          placeholder="Şifrenizi giriniz"
          type="password"
          {...getFieldProps('password')}
        />
        <span className="flex items center justify-end">
          <Link
            className="text-primary-navyBlue text-xs font-semibold"
            href="/forgot-password"
          >
            Şifremi Unuttum
          </Link>
        </span>
        <Button type="submit">Giriş Yap</Button>
      </div>
    </form>
  );
};

export default LoginForm;
