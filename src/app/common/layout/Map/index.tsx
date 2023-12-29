'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';
import { MdOutlineMyLocation } from 'react-icons/md';
import { useMap } from '../../hooks/useMap';
import { Place } from './types/Place';

type Props = {
  places: Place[];
};

const Map = ({ places }: Props) => {
  const { center, setCenter, zoom, setZoom } = useMap();
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
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
          setZoom(zoom);
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
