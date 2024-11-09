import React from 'react';
import PropertyCard from './PropertyCard';

export function PropertyList({ properties, columns = 4 }) {
  return (
    <div className={`grid gap-6 ${
      columns === 1 
        ? 'grid-cols-1' 
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
    }`}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}