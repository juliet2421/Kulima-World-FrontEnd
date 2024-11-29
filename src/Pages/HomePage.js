import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../components/data/Data";
import ProductListing from "../components/Home/ProductListing";
import Cartigory from "../components/Home/Cartigory";
import Header from "../components/header/Header";


export default function HomePage() {
  const location = useLocation();
  const searchTermFromState = location.state?.term || "";
  const queryParams = new URLSearchParams(location.search);
  const searchTermFromQuery = queryParams.get("query");

  // Local state for search term
  const [searchTerm, setSearchTerm] = useState(
    searchTermFromQuery || searchTermFromState || ""
  );

  // Filter the product list based on search term
  const filteredList = products.filter(item =>
    item.name &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex justify-center  items-center flex-col min-h-screen p-8'> 
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 px-4 py-2 border rounded-lg shadow-sm w-80"
      />
      <Cartigory/>
      <ProductListing lists={filteredList} searchTerm={searchTerm} />
    </div>
  );
}
