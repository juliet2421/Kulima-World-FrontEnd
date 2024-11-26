import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/Data";

const ProductCard = ({ lists = [], searchTerm = "" }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const filteredItems = useMemo(() => {
    return lists.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [lists, searchTerm]);

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const displayedItems = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPaymnet = (props) => {
    navigate("/details", { state: { Room: props } });
  };

  return (
    <div className=" container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((val, index) => {
          const { image, price, discription,name } = val;
          return (
            <div
              className="bg-white shadow-md rounded-lg"
              key={index}
              style={{ maxWidth: "300px" }}
            >
              <img
                src={image}
                alt="Product"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
              <h4 className='text-base font-medium text-gray-800'>{name}</h4>
                <p className="text-gray-600 text-sm">{discription}</p>
               
              </div>
              <div className="border-t border-gray-200 p-3 flex justify-between items-center">
              <button className="bg-gray-600 text-white py-1 px-3 rounded opacity-80 mt-1 text-sm">
                  MK{price}
                </button>
                <button
                  className="bg-green-600 text-white py-1 px-4 rounded-full mt-auto text-sm  transition duration-500 hover:scale-95"
                  onClick={() => goToPaymnet(val)}
                >
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`px-3 py-1 mx-1 ${
              index === currentPage ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
