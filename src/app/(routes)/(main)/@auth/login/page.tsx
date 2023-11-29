import AuthModal from '@/app/common/components/Modal/variants/AuthModal';

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <AuthModal
      className="flex flex-col gap-y-8"
      isDefaultOpen
      goBackOnClose
      backHref="/"
    >
      <h2 className="text-2xl text-center">Giriş Yap</h2>
      <span className="text-xs font-semibold">
        Yeni Kullanıcı mısın? Hesap Oluştur
      </span>
    </AuthModal>
  );
};

export default LoginPage;
