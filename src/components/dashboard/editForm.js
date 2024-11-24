import React, { useState } from "react";

export default function EditForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    price: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data (e.g., update the product)
    console.log("Form data submitted:", formData);
  };

  return (
    <div className='flex justify-center items-center flex-col min-h-screen w-screen mb-4'>
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <div className="bg-gray-50 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:border-green-500"
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
            Product Description
          </label>
          <textarea
            id="productDescription"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:border-green-500"
            placeholder="Enter product description"
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:border-green-500"
            placeholder="Enter price"
          />
        </div>

        <button
          type="submit"
         className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Save Changes
        </button>
      </form>
      </div>
    </div>
  );
}
