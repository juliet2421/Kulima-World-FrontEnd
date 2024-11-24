import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import home1 from "./home1.jpg";
import home2 from "./home2.webp";
import home3 from "./home3.jpg";
import home4 from "./home4.jpg";

const bannerImages = [home1, home2, home3, home4];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000); // Rotate banner images every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Full-Screen Rotating Banner */}
      <div className="relative h-screen bg-white overflow-hidden">
        <img
          src={bannerImages[currentImageIndex]}
          alt="Farmer Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center text-center">
          <p className="text-4xl md:text-5xl text-white font-bold">
            WELCOME TO KULIMA WORLD YOUR ONLINE
          </p>
          <p className="text-4xl md:text-5xl text-white font-bold">
            MARKETPLACE FOR ALL THINGS AGRICULTURE
          </p>

          {/* Buttons Section */}
          <div className="mt-8 space-y-4">
            {/* Get Started Button */}
            <Link 
              to="/SignInPage" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Get Started
            </Link>

            {/* Learn More About Us Button */}
            <Link 
              to="/AboutUs" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
