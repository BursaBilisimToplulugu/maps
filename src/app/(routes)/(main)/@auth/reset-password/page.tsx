import Button from '@/app/common/components/Button';
import Input from '@/app/common/components/Input';
import AuthModal from '@/app/common/components/Modal/variants/AuthModal';

type Props = {};

const ResetPassword = (props: Props) => {
  return (
    <AuthModal isDefaultOpen goBackOnClose backHref="/">
      <div className="flex flex-col gap-y-8 md:gap-y-6 lg:min-w-[300px] 2xl:min-w-[350px] max-w-[350px]">
        <h2 className="md:text-xl text-2xl text-center">Şifre Sıfırlama</h2>
        <span className="text-base text-center text-neutrals-navyGrey">
          Yeni oluşturacağınız şifreyi aşağıda yer alan kısma girebilirsiniz
        </span>
        <Input label="Yeni Şifre" placeholder="Şifrenizi giriniz" />
        <Input
          label="Yeni Şifre Tekrar"
          placeholder="Şifrenizi tekrar giriniz"
        />
        <Button>Yeni Şifreyi Kaydet</Button>
      </div>
    </AuthModal>
  );
};

export default ResetPassword;
