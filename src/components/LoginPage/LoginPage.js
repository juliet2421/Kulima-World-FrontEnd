import React from "react";

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
    <div classname="w-full max-w-md p-8 bg-white bg-opacity-90 rounded-lg shadow-md">
      <h2 classname="text-2xl font-semibold text-center text-gray-800 mb-6">KULIMA WORLD

      </h2>
      <form>
        <div classname="mb-4">
          <label htmlFor="email" classname="sr-only">Email</label>
          <input
            type="email"
            id="email"
            placeholder="name@gmail.com"
            classname="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
          />
        </div>
        <div classname="mb-4">
          <label htmlFor="password" classname="sr-only">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            classname="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="mr-2 leading-tight" />
            Remember me
          </label>
          <a href="#" className="text-sm text-red-600 hover:underline">Forgot password?</a>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Sign in
        </button>
      </form>
      <div className="mt-4 text-center text-gray-600">
        Don't have an account yet?{" "}
        <a href="#" className="text-blue-600 hover:underline">Sign up</a>
      </div>
    </div>
  </div>
);
}
  
export default LoginPage;
