import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
       <div>
       <header className="bg-green-800 p-4 flex justify-between items-center">
       <img src="/logo.png" alt="Kulima World Logo" className="w-32" />
       <nav className="space-x-12">
         <Link to="/" className="text-gray-300 hover:text-white">WELCOME</Link>
         
         <Link to="AboutUs" className="text-gray-300 hover:text-white">ABOUT US</Link>
         
       </nav>
       <Link to= "LoginPage"> <button className="bg-green-500 text-white py-2 px-4 rounded">LOGIN</button></Link>
     </header>
     </div>

  );
}

export default Header;
