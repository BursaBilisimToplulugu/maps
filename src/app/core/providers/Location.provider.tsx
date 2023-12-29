'use client';
import { smoothZoom } from '@/app/common/layout/Map/utils/smoothZoom';
import React, { PropsWithChildren, useState } from 'react';

type LocationProviderProps = {
  center: { lat: number; lng: number };
  zoom: number;
  setCenter: (center: { lat: number; lng: number }) => void;
  setZoom: (zoom: number) => void;
};

interface Props extends PropsWithChildren {}

export const LocationContext = React.createContext<LocationProviderProps>({
  center: {
    lat: 40.1885,
    lng: 29.061,
  },
  zoom: 12,
  setCenter: function (center: { lat: number; lng: number }) {
    this.center = center;
    smoothZoom(this.zoom, 16, (zoom: number) => (this.zoom = zoom));
  },
  setZoom: function (zoom: number) {
    this.zoom = zoom;
  },
});

const LocationProvider = ({ children }: Props) => {
  const [zoom, setzoom] = useState(12);
  const [center, setcenter] = useState({ lat: 40.1885, lng: 29.061 });
  return (
    <LocationContext.Provider
      value={{
        center,
        zoom,
        setCenter: (center) => {
          setcenter(center);
          smoothZoom(zoom, 16, (zoom: number) => setzoom(zoom));
        },
        setZoom: (toZoom) => {
          smoothZoom(zoom, toZoom, (zoom: number) => setzoom(zoom));
        },
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
