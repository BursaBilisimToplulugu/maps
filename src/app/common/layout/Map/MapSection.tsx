'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Map from '.';
import Button from '../../components/Button';
import Input from '../../components/Input';

type Props = {};

const MapSection = (props: Props) => {
  const [searchValue, setsearchValue] = useState<string>('');
  const ref = useRef();
  return (
    <div className="w-full relative">
      <div className="absolute px-3 z-10 flex items-center justify-between w-full py-8">
        <Input.Search
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
          className="min-w-[311px]"
          clearAble
          onClear={() => {
            setsearchValue('');
          }}
        />
        <Link href={'/login'}>
          <Button className="!font-normal">Giriş Yap</Button>
        </Link>
      </div>
      <Map />
    </div>
  );
};

export default MapSection;
