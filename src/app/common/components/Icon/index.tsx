import CheckMark from '@/app/common/assets/icons/CheckMark';
import OneTwoThree from '@/app/common/assets/icons/OneTwoThree';
import Star from '@/app/common/assets/icons/Star';
import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {}

const Icon = {
  OneTwoThree: OneTwoThree,
  Star,
  CheckMark,
};

export default Icon;
