import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { Map } from '../components/Map';

export function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <Link to="/" className="text-blue-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Listings
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="h-[500px] rounded-lg overflow-hidden mb-6">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {property.title}
              </h1>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                {property.type}
              </span>
            </div>
            
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              {property.price}
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-lg font-semibold">{property.beds}</p>
                <p className="text-gray-600 dark:text-gray-300">Bedrooms</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-lg font-semibold">{property.baths}</p>
                <p className="text-gray-600 dark:text-gray-300">Bathrooms</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-lg font-semibold">{property.size}</p>
                <p className="text-gray-600 dark:text-gray-300">Floor Area</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Location</h2>
              <p className="text-gray-600 dark:text-gray-300">{property.location}</p>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Contact Agent
            </button>
          </div>
        </div>
        
        <div className="h-[calc(100vh-2rem)] sticky top-24">
          <Map properties={[property]} />
        </div>
      </div>
    </div>
  );
}