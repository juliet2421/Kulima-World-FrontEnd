import React from 'react';
import npaImage from './npa.png';
import airtelImage from './airtel.png';

const Payment = () => {
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
          <img
            src={airtelImage}
            alt="Airtel Money"
            className="w-10 h-10 mr-4"
          />
          <h1 className="text-2xl font-semibold">Airtel Money</h1>
        </div>
        <form>
          {/* Phone Number Input */}
          <div className="mb-4">
            <label
              htmlFor="PhoneNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="PhoneNumber"
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your Airtel Phone Number"
            />
          </div>

          {/* Amount Input */}
          <div className="mb-4">
            <label
              htmlFor="Amount"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Amount
            </label>
            <input
              type="text"
              id="Amount"
              value="50"
              readOnly
              className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>

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

export default Payment;
