import React, { useState } from 'react';
import npaImage from './npa.png';
import airtelImage from './airtel.png';
import axios from 'axios';

const PaymentGateway = () => {
  const [formData, setFormData] = useState({
    phone: '',
    amount: '50', // Default amount is 50
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { phone, amount } = formData;
      const response = await axios.post(
        'http://localhost:3000/api/aitel-access/mobile/pay',
        formData,
       //{ withCredentials: true } // Include credentials if required
      );

      if (response.status === 200) {
        alert("Payment Processing...!");
      }
    } catch (err) {
      console.error("Payment error:", err.response?.data || err.message);
      setFormData({
        ...formData,
        error: err.response?.data?.msg || "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 h-full w-1/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${npaImage})` }}
      ></div>

      {/* Form Container */}
      <div className="relative z-10 bg-gray-50 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">Pay Securely with</h1>
        <div className="flex items-center justify-center mb-6">
          <img src={airtelImage} alt="Airtel Money" className="w-10 h-10 mr-4" />
          <h1 className="text-2xl font-semibold">Airtel Money</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Phone Input */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your Airtel Phone Number"
              required
            />
          </div>

          {/* Amount Input */}
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.amount}
              readOnly
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Error Message */}
          {formData.error && <p className="text-red-500 text-sm mb-4">{formData.error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold text-lg rounded hover:bg-blue-600 transition"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentGateway;
