import React from "react";

function Header() {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="text-3xl font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400 tracking-wide"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Kulima World
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-grow justify-evenly">
            <a href="/Home" className="text-lg hover:text-green-200">Home</a>
            <a href="/dashboard" className="text-lg hover:text-green-200">Dashboard</a>
            <a href="/ContactPage" className="text-lg hover:text-green-200">FarmAssist</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
