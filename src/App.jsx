import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Navbar } from './components/Navbar';
import { PropertyList } from './components/PropertyList';
import { Map } from './components/Map';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { PropertyDetails } from './pages/PropertyDetails';
import { properties as initialProperties } from './data/properties';

// Initialize GA4
ReactGA.initialize('G-XXXXXXXXXX');

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [properties] = useState(initialProperties);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <Navbar />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <Routes>
            <Route path="/" element={
              <div className="container mx-auto px-4 py-8">
                <FeaturedCarousel properties={properties} />
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setShowMap(!showMap)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {showMap ? 'Hide Map' : 'Show Map'}
                  </button>
                </div>
                <div className={`grid gap-8 ${showMap ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
                  <div className={showMap ? 'col-span-1' : 'col-span-full'}>
                    <PropertyList properties={properties} columns={showMap ? 1 : 4} />
                  </div>
                  {showMap && (
                    <div className="col-span-1 sticky top-24 h-[calc(100vh-6rem)]">
                      <Map properties={properties} />
                    </div>
                  )}
                </div>
              </div>
            } />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}