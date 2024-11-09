import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export function FeaturedCarousel({ properties }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredProperties = properties.slice(0, 4);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredProperties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredProperties.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const property = featuredProperties[currentIndex];

  return (
    <div className="relative h-[500px] mb-8 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm mb-3">
            Featured Property
          </span>
          <h2 className="text-3xl font-bold mb-2">
            {property.title}
          </h2>
          <p className="text-xl mb-2">{property.price}</p>
          <p className="text-gray-200 mb-4">
            {property.beds} beds • {property.baths} baths • {property.size}
          </p>
          <Link
            to={`/property/${property.id}`}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredProperties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}