'use client';
import Link from 'next/link';
import { useState } from 'react';
import Map from '.';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Hamburger from '../Navbar/sub-components/Hamburger';
import { Place } from './types/Place';

type Props = {
  places: Place[];
};

const MapSection = ({ places }: Props) => {
  const [searchValue, setsearchValue] = useState<string>('');
  const [isActive, setisActive] = useState(false);
  return (
    <div className="w-full relative flex-1">
      <div className="absolute px-3 z-10 flex items-center justify-between w-full py-4 md:py-8 space-x-4 md:space-x-0">
        <button
          onClick={() => setisActive((prev) => !prev)}
          className="block md:hidden bg-white rounded-full backdrop-filter backdrop-blur-sm bg-opacity-50 p-1"
        >
          <Hamburger isActive={isActive} />
        </button>
        <Input.Search
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
          className="md:w-[311px] w-full"
          clearAble
          onClear={() => {
            setsearchValue('');
          }}
        />
        <Link className="hidden md:inline-block" href={'/login'}>
          <Button className="!font-normal">Giriş Yap</Button>
        </Link>
      </div>
      <Map places={places} />
    </div>
  );
};

export default MapSection;
