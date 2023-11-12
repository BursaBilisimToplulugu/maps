import Link from 'next/link';
import Map from '.';
import Button from '../../components/Button';

type Props = {};

const MapSection = (props: Props) => {
  return (
    <div className="w-full relative">
      <div className="absolute px-3 z-10 flex items-center justify-between w-full py-8">
        <span>search input here</span>
        <Link href={'/login'}>
          <Button className="!font-normal">Giriş Yap</Button>
        </Link>
      </div>
      <Map />
    </div>
  );
};

export default MapSection;
