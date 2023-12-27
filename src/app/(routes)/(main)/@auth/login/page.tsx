import AuthModal from '@/app/common/components/Modal/variants/AuthModal';
import { getSession } from '@/app/common/utils/getSession';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginForm from './components/LoginForm';

type Props = {};

const LoginPage = async (props: Props) => {
  const headersList = headers();
  const pathname = headersList.get('x-pathname');
  const { user } = await getSession();
  if (pathname?.includes('/login') && user) {
    redirect('/');
  }

  return (
    <AuthModal isDefaultOpen goBackOnClose backHref="/">
      <LoginForm />
    </AuthModal>
  );
};

export default LoginPage;
