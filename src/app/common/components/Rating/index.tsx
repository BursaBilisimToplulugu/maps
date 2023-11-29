import { LuStar } from 'react-icons/lu';

type Props = {
  score: number;
  ratingCount: number;
};

const Rating = ({ score, ratingCount }: Props) => {
  return (
    <div className="flex items-center space-x-2 text-xs">
      <span className="space-x-1 flex items-center">
        <LuStar fill={'#FFD166'} color="#FFD166" />
        <span className="font-semibold">{score}</span>
      </span>
      <span className="text-neutrals-navyGrey">({ratingCount})</span>
    </div>
  );
};

export default Rating;
