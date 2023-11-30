import Button from '@/app/common/components/Button';
import Input from '@/app/common/components/Input';
import AuthModal from '@/app/common/components/Modal/variants/AuthModal';
import Link from 'next/link';

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <AuthModal isDefaultOpen goBackOnClose backHref="/">
      <div className="flex flex-col gap-y-8 md:gap-y-6 lg:min-w-[300px] 2xl:min-w-[350px] max-w-[350px]">
        <h2 className="md:text-xl text-2xl text-center">Kayıt Ol</h2>
        <span className="text-xs text-center">
          Zaten bir hesabınız var mı?{' '}
          <Link className="text-primary-navyBlue font-semibold" href="/login">
            Giriş Yap
          </Link>
        </span>
        <Input label="Ad" placeholder="Ad" />
        <Input label="Soyad" placeholder="Soyad" />
        <Input label="E-posta" placeholder="E-postanızı giriniz" />
        <Input label="Şifre" placeholder="Şifrenizi giriniz" type="password" />
        <Button>Giriş Yap</Button>
      </div>
    </AuthModal>
  );
};

export default RegisterPage;
