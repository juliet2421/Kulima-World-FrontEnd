import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import home1 from "./home1.jpg";
import home2 from "./home2.webp";
import home3 from "./home3.jpg";
import home4 from "./home4.jpg";
import tomatoesImg from "../assets/tomatoesIMG.jpg";
//import sheepImg from "../assets/sheepIMG.jpg";
import seedsImg from "../assets/seedsIMG.jpg";
import tractorImg from "../assets/tractorIMG.jpg";


const bannerImages = [home1, home2, home3, home4];

const products = [
  { id: 1, name: "Fresh Tomatoes", price: "MK2000/kg", location: "Lilongwe, Mitundu", image: tomatoesImg },
  //{ id: 2, name: "Sheep", price: "MK32,000", location: "Chikwawa, Dyeratu", image: sheepImg },
  { id: 3, name: "Seeds", price: "MK20,000/5kg", location: "Kulima Agro Dealers", image: seedsImg },
  { id: 4, name: "Petrol Tractor", price: "MK6,257,000", location: "Farm Machines Company", image: tractorImg },
];

function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000); // Rotate banner images every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Rotating Banner */}
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
      //<div className="text-center mt-8">
        <Link 
          to="/AboutUs" 
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Learn More About Us
        //</Link>
      </div>

      {/* Static Top Products Section */}
      <section className="py-10">
        <h2 className="text-center text-xl font-semibold mb-6">TOP PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {products.map((product) => (
            <div key={product.id} className="bg-green-700 p-4 rounded text-center">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
