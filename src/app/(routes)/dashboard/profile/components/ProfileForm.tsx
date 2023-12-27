'use client';
import Input from '@/app/common/components/Input';
import { useFormik } from 'formik';
import { User } from '../types/user';
import ProfileDropZone from './ProfileDropZone';

type Props = {
  user: User;
};

interface FormValues {
  full_name: string;
  email: string;
  picture_url: string;
}

const ProfileForm = ({ user }: Props) => {
  // console.log({ user });
  const { handleSubmit, getFieldProps } = useFormik<FormValues>({
    initialValues: {
      full_name: user.full_name,
      email: user.email,
      picture_url: user.picture_url,
    },
    onSubmit: async (values) => {
      console.log({ values });
    },
  });
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-3 gap-4">
        <Input label={'Ad - Soyad'} disabled {...getFieldProps('full_name')} />
        <Input label={'Email'} disabled {...getFieldProps('email')} />
      </div>
      <ProfileDropZone />
    </form>
  );
};

export default ProfileForm;
