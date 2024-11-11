import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
       <div>
       <header className="bg-gray-800 p-4 flex justify-between items-center">
       <img src="/logo.png" alt="Kulima World Logo" className="w-32" />
       <nav className="space-x-4">
         <Link to="/" className="text-gray-300 hover:text-white">HOME</Link>
         <Link to="Categories" className="text-gray-300 hover:text-white">CATEGORIES</Link>
         <Link to="About" className="text-gray-300 hover:text-white">ABOUT</Link>
         <Link to="ProductListing" className="text-gray-300 hover:text-white">PRODUCTLISTING</Link>
       </nav>
       <Link to= "LoginPage"> <button className="bg-green-500 text-white py-2 px-4 rounded">LOGIN</button></Link>
     </header>
     </div>

  );
}

export default Header;
