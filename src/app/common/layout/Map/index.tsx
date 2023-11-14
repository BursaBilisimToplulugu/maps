'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { memo, useEffect, useState } from 'react';

type Props = {};

//deployment stage

const Map = (props: Props) => {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
  const [center, setCenter] = useState<{ lat: number; lng: number }>({
    lat: 40.222568,
    lng: 28.820867,
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
    setzoom(16);
  };
  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-full min-safe-h-screen"
      center={center}
      zoom={zoom}
      options={{
        mapTypeControl: false,
        fullscreenControl: true,
        zoomControl: false,
        streetViewControl: false,
        gestureHandling: 'greedy',
        disableDefaultUI: true,
      }}
    >
      <Marker
        position={{ lat: 40.222568, lng: 28.820867 }}
        onClick={(e) => {
          console.log(e.latLng?.toJSON());
        }}
      />
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
      <button onClick={locateMe} className="absolute bottom-5 right-5 bg-white">
        click me
      </button>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
