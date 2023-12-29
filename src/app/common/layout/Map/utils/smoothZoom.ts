import { Dispatch, SetStateAction } from 'react';

export const smoothZoom = (
  from: number,
  to: number,
  setZoom: Dispatch<SetStateAction<number>> | ((value: number) => void)
) => {
  if (from === to) return;
  let current = from;
  const increment = to > from ? 1 : -1;
  const stepTime = Math.abs(Math.floor(1000 / (to - from)));
  const timer = setInterval(() => {
    current += increment;
    setZoom(current);
    if (current === to) {
      clearInterval(timer);
    }
  }, stepTime);
};
