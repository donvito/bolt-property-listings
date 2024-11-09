import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export function Map({ properties }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
      version: 'weekly'
    });

    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 14.5995, lng: 120.9842 },
        zoom: 12,
      });

      properties.forEach(property => {
        new google.maps.Marker({
          position: property.coordinates,
          map: map,
          title: property.title
        });
      });
    });
  }, [properties]);

  return (
    <div ref={mapRef} className="w-full h-full rounded-lg shadow-lg" />
  );
}