import Button from '@/app/common/components/Button';
import Input from '@/app/common/components/Input';
import AuthModal from '@/app/common/components/Modal/variants/AuthModal';

type Props = {};

const ForgotPassword = (props: Props) => {
  return (
    <AuthModal isDefaultOpen goBackOnClose backHref="/">
      <div className="flex flex-col gap-y-8 md:gap-y-6 lg:min-w-[300px] 2xl:min-w-[350px] max-w-[350px]">
        <h2 className="md:text-xl text-2xl text-center">Şifre Sıfırlama</h2>
        <span className="text-xs text-center text-neutrals-navyGrey">
          Şifre sıfırlama bağlantısı aşağıya gireceğiniz e-posta adresine
          gönderilecektir.
        </span>
        <Input label="E-posta" placeholder="E-postanızı giriniz" />
        <Button>Şifre Sıfırlama Bağlantısı Gönder</Button>
        <span className="text-xs text-center text-neutrals-darkGrey">
          Bir bağlantı almadınız mı?{' '}
          <button className="text-primary-navyBlue font-semibold">
            Tekrar Gönder (50)
          </button>
        </span>
      </div>
    </AuthModal>
  );
};

export default ForgotPassword;
