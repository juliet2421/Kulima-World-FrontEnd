import React from "react";
import ProductCard from "./ProductCard";

const ProductListing = ({ lists = [], searchTerm = "" }) => {
  return (

      <div className="container mx-auto">
        <ProductCard lists={lists} searchTerm={searchTerm} />
      </div>

  );
};

export default ProductListing;
