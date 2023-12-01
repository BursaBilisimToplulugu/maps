import AuthModal from '@/app/common/components/Modal/variants/AuthModal';
import LoginForm from './components/LoginForm';

type Props = {};

const LoginPage = async (props: Props) => {
  // let shouldRedirect = false;
  // const headersList = headers();
  // const pathname = headersList.get('x-pathname');
  // const session = await getServerSession(authOptions);
  // if (pathname?.includes('/login') && session?.user) {
  //   shouldRedirect = true;
  //   redirect('/');
  // }

  return (
    <AuthModal isDefaultOpen goBackOnClose backHref="/">
      <LoginForm />
    </AuthModal>
  );
};

export default LoginPage;
