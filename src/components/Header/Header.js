import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black text-white">
    <ul className="flex flex-row p-5 justify-between">
        <li className=" cursor-pointer hover:text-green-500"><Link to = 'LoginPage'>login</Link></li>
        <li className=" cursor-pointer hover:text-green-500"><Link to = 'ProductListing'>ProductListing</Link></li>
        <li className=" cursor-pointer hover:text-green-500"><Link to = 'DashBoard'>DashBoard</Link></li>
        <li className=" cursor-pointer hover:text-green-500"><Link to = 'Categories'>Categories</Link></li>
    </ul>
    </div>
  );
}

export default Header;
