'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { memo, useEffect, useState } from 'react';
import { smoothZoom } from './utils/smoothZoom';

type Props = {};

const Map = (props: Props) => {
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
      {location && location?.latitude > 0 && location?.longitude > 0 && (
        <button
          onClick={locateMe}
          className="absolute bottom-5 right-5 bg-white"
        >
          click me
        </button>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
