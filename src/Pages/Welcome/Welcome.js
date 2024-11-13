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
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Banner */}
      <div className="relative bg-white rounded-lg overflow-hidden">
        <img
          src={bannerImages[currentImageIndex]}
          alt="Farmer Banner"
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute top-0 p-10 m-5">
          <p className="text-3xl text-white font-bold">WELCOME TO KULIMA WORLD YOUR ONLINE</p>
          <p className="text-3xl text-white font-bold">MARKETPLACE FOR ALL THINGS AGRICULTURE</p>
        </div>
      </div>

      {/* Link to About Us Page */}
      <div className="text-center mt-8">
        <Link 
          to="/AboutUs" 
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Learn More About Us
        </Link>
      </div>

      {/* Top Products Section */}
      <section className="py-10">
        <h2 className="text-center text-xl font-semibold mb-6">TOP PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <div className="bg-gray-700 p-4 rounded text-center">
            <img src="/sheep.jpg" alt="Fresh Tomatoes" className="w-full h-32 object-cover rounded mb-2" />
            <p>Fresh Tomatoes</p>
            <p>MK2000/kg</p>
            <p>Lilongwe, mitundu</p>
          </div>
          <div className="bg-gray-700 p-4 rounded text-center">
            <img src="/sheep.jpg" alt="Sheep" className="w-full h-32 object-cover rounded mb-2" />
            <p>Sheep</p>
            <p>MK32,000</p>
            <p>Chikwawa, Dyeratu</p>
          </div>
          <div className="bg-gray-700 p-4 rounded text-center">
            <img src="/seeds.jpg" alt="Seeds" className="w-full h-32 object-cover rounded mb-2" />
            <p>Seeds</p>
            <p>MK20,000/5kg</p>
            <p>Kulima Agro Dealers</p>
          </div>
          <div className="bg-gray-700 p-4 rounded text-center">
            <img src="/tractor.jpg" alt="Petrol Tractor" className="w-full h-32 object-cover rounded mb-2" />
            <p>Petrol Tractor</p>
            <p>MK6,257,000</p>
            <p>Farm Machines Company</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
