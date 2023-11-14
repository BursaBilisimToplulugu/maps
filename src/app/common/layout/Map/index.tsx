'use client';
import { GoogleMap,Marker,useJsApiLoader } from '@react-google-maps/api'
import { memo } from 'react'

type Props = {};

//deployment stage

const Map = (props: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });
  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="w-full h-screen"
      center={{ lat: 40.222568, lng: 28.820867 }}
      zoom={12}
      options={{
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false,
        streetViewControl: false,
      }}
    >
      <Marker
        position={{ lat: 40.222568, lng: 28.820867 }}
        onClick={(e) => {
          console.log(e.latLng?.toJSON());
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
