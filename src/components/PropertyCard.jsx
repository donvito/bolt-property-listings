import React from 'react';
import { Link } from 'react-router-dom';

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-64 relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
          {property.type}
        </div>
      </div>
      <div className="p-4">
        <div className="h-[4rem] mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
            {property.title}
          </h3>
        </div>
        <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">
          {property.price}
        </p>
        <div className="flex items-center text-gray-600 dark:text-gray-300 space-x-4 text-sm mb-2">
          <span>{property.beds} beds</span>
          <span>•</span>
          <span>{property.baths} baths</span>
          <span>•</span>
          <span>{property.size}</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
          {property.location}
        </p>
        <Link 
          to={`/property/${property.id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}