'use client';
import Input from '@/app/common/components/Input';
import { useState } from 'react';
import Hamburger from '../../Navbar/sub-components/Hamburger';

type Props = {};

const ClientHeader = (props: Props) => {
  const [searchValue, setsearchValue] = useState<string>('');
  const [isActive, setisActive] = useState(false);
  return (
    <>
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
    </>
  );
};

export default ClientHeader;
