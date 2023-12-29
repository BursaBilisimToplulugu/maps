import { LocationContext } from '@/app/core/providers/Location.provider';
import { useContext } from 'react';

export const useMap = () => {
  const { center, zoom, setCenter, setZoom } = useContext(LocationContext);
  return { center, zoom, setCenter, setZoom };
};
