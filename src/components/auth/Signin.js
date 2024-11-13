import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signin = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Loginpage.jpg')" }}>
      <div className="bg-gray-50 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">KULIMA WORLD</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded focus:outline-none focus:border-green-500"
              placeholder="name@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border rounded focus:outline-none focus:border-green-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-red-500 text-sm hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600 transition">Sign in</button>
          <div className="text-center mt-4">
            <p className="text-gray-700">
              Don't have an account yet? <Link to="/signup" className="text-green-500 hover:underline">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
