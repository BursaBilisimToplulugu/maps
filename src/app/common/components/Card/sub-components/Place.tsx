import { Place as PlaceType } from '@/app/(routes)/dashboard/profile/types/user';
import Image from 'next/image';
import { RiRouteFill } from 'react-icons/ri';
import Rating from '../../Rating';

interface PlaceCardProps {
  place: PlaceType;
}

const Place = ({ place }: PlaceCardProps) => {
  return (
    <div className="flex items-stretch border rounded-2xl overflow-hidden">
      {/* {place.photos ? (
        <Image src={place.photos[0].url} fill alt={`${place.name} image`} />
      ) : (
        <FaPlaceOfWorship size={144} color="black" />
      )} */}
      <Image
        className="w-auto h-auto"
        src={'https://placehold.co/600x400.png'}
        width={400}
        height={300}
        alt={`${place.name} image`}
      />
      <div className="flex flex-col justify-between p-6">
        <div className="space-y-4 w-full">
          <div className="flex items-center justify-between space-x-8 font-[500]">
            <span>{place.name}</span>
            <Rating
              score={place.rating || 0}
              ratingCount={place.comments?.length || 0}
            />
          </div>
          <div className="flex items-start space-x-2">
            <div className="py-0.5">
              <RiRouteFill size={16} className="fill-neutrals-gray" />
            </div>
            <p className="text-neutrals-navyGrey text-xs break-words">
              {/* {place.open_address} */}
              NİLTİM Üçevler Mah. Ersan Sokak. 8A Kat:1A İbrahim Yazıcı Plaza 2,
              16120 Nilüfer/Bursa
            </p>
          </div>
        </div>

        <div className="border-t border-t-neutrals-navyWhite pt-4 text-xs text-left">
          <span className="text-primary-green font-semibold">Açık</span>
          <span className="text-neutrals-navyGrey ml-2 font-[500]">
            Kapanış Saati: -
          </span>
        </div>
      </div>
    </div>
  );
};

export default Place;
