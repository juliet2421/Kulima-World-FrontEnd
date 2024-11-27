import React from "react";

function Header() {
    return (
        <header className="bg-green-600 text-white shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/" className="text-2xl font-bold">Kulima World</a>
      </div>

      {/* Navigation */}
      <div className="flex space-x-8">
        <a href="/" className="text-lg hover:text-green-200">Home</a>
        <a href="/dashboard" className="text-lg hover:text-green-200">Dashboard</a>
      </div>

      {/* User Profile Link (optional) */}
      <div className="flex items-center space-x-4">
        <a href="/profile" className="text-lg hover:text-green-200">Profile</a>
      </div>
    </div>
  </div>
</header>

    );
};

export default Header;