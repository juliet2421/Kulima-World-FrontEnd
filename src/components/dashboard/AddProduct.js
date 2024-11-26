import React, { useState } from "react";

export default function AddProduct() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  // Handle file input for image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({
      ...productData,
      image: file,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the form data to an API or database
    console.log("Form submitted with data:", productData);
    // Reset form after submission
    setProductData({
      name: "",
      description: "",
      price: "",
      category: "",
      image: null,
    });
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen w-screen mb-4">
      <h2 className="text-2xl font-semibold mb-4">Add Farm Product</h2>
      <div className="bg-gray-50 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:border-green-500"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:border-green-500"
              required
            >
              <option value="">Select Category</option>
              <option value="vegetable">Vegetable</option>
              <option value="fruit">Fruit</option>
              <option value="grain">Grain</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              accept="image/*"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
