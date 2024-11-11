import React from "react";

function HomePage() {
  return (
    <div>



    <div className="bg-gray-900 text-white font-sans">
  
      
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

     
    </div>




    
    </div>
  );
}

export default HomePage;