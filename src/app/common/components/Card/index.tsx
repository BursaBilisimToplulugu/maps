import Line from '@/../public/icons/Route/Line.svg';

import Campus from '@/../public/campus.png';

import Image from 'next/image';

import Rating from '@/common/components/Rating';

import Divider from '@/common/components/Divider';

function Card() {
  return (
    <div className="w-[544px] overflow-hidden h-[225px] bg-gray-50  border rounded-[16px] border-[#E6E8EC] inline-flex">
      <div className="flex ">
        <div className="w-[256px]  relative">
          <Image alt="campus" className="bg-cover" src={Campus} />

          <div className="h-8 px-2 py-1.5 left-[16px] top-[16px] absolute bg-gradient-to-r from-gray-50 to-gray-50 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-zinc-800 text-xs font-bold uppercase leading-3">
              Popüler
            </div>
          </div>
        </div>

        <div className="px-4 py-8 w-[288px] flex-col inline-flex justify-start">
          <div className="flex w-[240px] h-[42px] justify-between items-center">
            <h2 className="whitespace-nowrap text-md text-[#141416]">
              Campus Plus
            </h2>

            <Rating score={4.6} ratingCount={278} />
          </div>

          <div className="flex py-4 w-[240px] items-start gap-[10px] relative">
            <Image alt="line" src={Line} />

            <p className="grow shrink font-normal text-[#777E90] leading-tight text-xs ">
              NİLTİM Üçevler Mah. Ersan Sokak. 8A Kat:1A İbrahim Yazıcı Plaza 2,
              16120 Nilüfer/Bursa
            </p>
          </div>

          <Divider size={'normal'} variant={'horizontal'} />

          <div className="flex py-4 gap-[10px] w-[240px] text-sm items-start">
            <h2 className="relative w-fit text-[#58C27D]">Açık</h2>

            <p className="text-gray-500 w-fit">Kapanış saati: 23:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
