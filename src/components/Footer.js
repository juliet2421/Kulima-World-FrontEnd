import React from "react";


function Footer() {
  return (
       <div>
     
     <footer className="bg-gray-800 p-6 mt-10 text-gray-400">
        <div className="flex flex-wrap justify-around">
          <div>
            <h3 className="text-white font-semibold mb-2">MENU</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Categories</a></li>
              <li><a href="#" className="hover:text-white">E-Market</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">ABOUT</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Our People</a></li>
              <li><a href="#" className="hover:text-white">FAQ's</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">LEGAL</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">CONTACT US</h3>
            <p>+265 897 356 777</p>
            <p>kulimaworld@gmail.com</p>
            <div className="flex space-x-2 mt-2">
              <a href="#"><i className="fa fa-facebook text-gray-400 hover:text-white"></i></a>
              <a href="#"><i className="fa fa-twitter text-gray-400 hover:text-white"></i></a>
            </div>
          </div>
        </div>
      </footer>
     </div>

  );
}

export default Footer;