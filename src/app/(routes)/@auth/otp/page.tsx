import AuthModal from '@/app/common/components/Modal/variants/AuthModal';

type Props = {};

const Otp = (props: Props) => {
  return (
    <AuthModal isDefaultOpen goBackOnClose backHref="/">
      <div className="flex flex-col gap-y-8 md:gap-y-6 lg:min-w-[300px] 2xl:min-w-[350px] max-w-[350px]">
        <h2 className="md:text-xl text-2xl text-center">
          Güvenlik Kodunu Giriniz
        </h2>
        <span className="text-base text-center">
          Güvenlik kodunuzu{' '}
          <span className="text-primary-navyBlue">etortuk@gmail.com</span>{' '}
          adresine gönderdik.
        </span>
      </div>
    </AuthModal>
  );
};

export default Otp;
