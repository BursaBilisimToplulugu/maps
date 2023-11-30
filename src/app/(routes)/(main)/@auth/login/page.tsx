import AuthModal from '@/app/common/components/Modal/variants/AuthModal';
import LoginForm from './components/LoginForm';

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <AuthModal isDefaultOpen goBackOnClose backHref="/">
      <LoginForm />
    </AuthModal>
  );
};

export default LoginPage;
