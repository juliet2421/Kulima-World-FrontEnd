import React from "react";

function HomePage() {
  return (
    <div>
     import React from 'react';


    <div className="bg-gray-900 text-white font-sans">
     
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <img src="/logo.png" alt="Kulima World Logo" className="w-32" />
        <nav className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">HOME</a>
          <a href="#" className="text-gray-300 hover:text-white">CATEGORIES</a>
          <a href="#" className="text-gray-300 hover:text-white">ABOUT</a>
          <a href="#" className="text-gray-300 hover:text-white">PRODUCTLISTING</a>
        </nav>
        <button className="bg-green-500 text-white py-2 px-4 rounded">LOGIN</button>
      </header>

      
      <section className="relative text-center bg-cover bg-no-repeat py-20" style={{ backgroundImage: `url('/path-to-background.jpg')` }}>
        <div className="bg-black bg-opacity-50 p-10">
          <h1 className="text-3xl font-bold">WELCOME TO KULIMA WORLD YOUR ONLINE MARKETPLACE FOR ALL THINGS AGRICULTURE</h1>
        </div>
      </section>

      
      <section className="py-10">
        <h2 className="text-center text-xl font-semibold mb-6">TOP PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <div className="bg-gray-700 p-4 rounded text-center">
            <img src="/tomato.jpg" alt="Fresh Tomatoes" className="w-full h-32 object-cover rounded mb-2" />
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
        <div className="text-center mt-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded">View More</button>
        </div>
      </section>

     
      <footer className="bg-gray-800 p-6 mt-10 text-gray-400">
        <div className="flex flex-wrap justify-around">
          <div>
            <h3 className="text-white font-semibold mb-2">MENU</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Categories</a></li>
              <li><a href="#" className="hover:text-white">E-Market</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">ABOUT</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Our People</a></li>
              <li><a href="#" className="hover:text-white">FAQ's</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">LEGAL</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">CONTACT US</h3>
            <p>+265 897 356 777</p>
            <p>kulimaworld@gmail.com</p>
            <div className="flex space-x-2 mt-2">
              <a href="#"><i className="fa fa-facebook text-gray-400 hover:text-white"></i></a>
              <a href="#"><i className="fa fa-twitter text-gray-400 hover:text-white"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>


export default HomePage;

    
    </div>
  );
}

export default HomePage;