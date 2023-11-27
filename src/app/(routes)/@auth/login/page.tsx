import Button from '@/app/common/components/Button';
import Input from '@/app/common/components/Input';
import AuthModal from '@/app/common/components/Modal/variants/AuthModal';
import Link from 'next/link';

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <AuthModal isDefaultOpen goBackOnClose backHref="/">
      <div className="flex flex-col gap-y-8 md:gap-y-6 lg:min-w-[300px] 2xl:min-w-[350px] max-w-[350px]">
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
        <Input label="E-posta" placeholder="E-postanızı giriniz" />
        <Input label="Şifre" placeholder="Şifrenizi giriniz" type="password" />
        <span className="flex items center justify-end">
          <Link
            className="text-primary-navyBlue text-xs font-semibold"
            href="/forgot-password"
          >
            Şifremi Unuttum
          </Link>
        </span>
        <Button>Giriş Yap</Button>
      </div>
    </AuthModal>
  );
};

export default LoginPage;
