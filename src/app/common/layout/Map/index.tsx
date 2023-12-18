'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';
import { MdOutlineMyLocation } from 'react-icons/md';
import { Place } from './types/Place';
import { smoothZoom } from './utils/smoothZoom';

type Props = {
  places: Place[];
};

const Map = ({ places }: Props) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: 40.1885,
    lng: 29.061,
  });
  const [zoom, setzoom] = useState(12);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const {
          heading,
          latitude,
          longitude,
          accuracy,
          altitudeAccuracy,
          altitude,
          speed,
        } = coords;
        setLocation({
          heading,
          latitude,
          longitude,
          accuracy,
          altitudeAccuracy,
          altitude,
          speed,
        });
      });
    }
  }, []);

  const locateMe = () => {
    setCenter({
      lat: location?.latitude || 40.222568,
      lng: location?.longitude || 28.820867,
    });
    smoothZoom(zoom, 16, setzoom);
  };
  return isLoaded ? (
    <GoogleMap
      onLoad={(map) => {
        setMap(map);
      }}
      mapContainerClassName="w-full min-safe-h-screen"
      center={center}
      zoom={zoom}
      onZoomChanged={() => {
        const zoom = map?.getZoom();
        if (map && zoom) {
          setzoom(zoom);
        }
      }}
      options={{
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false,
        streetViewControl: false,
        gestureHandling: 'greedy',
        disableDefaultUI: true,
      }}
    >
      {places.map((place) => {
        return (
          <Marker
            key={place.id}
            position={{ lat: place.latitude, lng: place.longitude }}
          />
        );
      })}
      <Marker
        position={{
          lat: location?.latitude || 40.222568,
          lng: location?.longitude || 28.820867,
        }}
        label={{
          text: 'Buradasın',
          className: '-mt-8 !text-primary-navyBlue font-bold',
        }}
      />
      {location && location?.latitude > 0 && location?.longitude > 0 && (
        <button
          onClick={locateMe}
          className={classNames(
            'absolute bottom-5 right-5 bg-white w-[50px] h-[50px]',
            'rounded-full flex items-center justify-center',
            'backdrop-filter backdrop-blur-sm bg-opacity-50'
          )}
        >
          <MdOutlineMyLocation size={32} className="text-neutrals-gray " />
        </button>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
