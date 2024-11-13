import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-8">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-4xl">
        
        {/* Back to Home Button */}
        <div className="mb-6">
          <Link to="/" className="text-green-500 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
          About Us
        </h1>
        
        <p className="text-gray-700 text-lg mb-4">
          Welcome to Kulima World!!, the agricultural marketplace designed to empower farmers and connect them with buyers directly. We believe in fostering a community where quality produce and sustainable agricultural practices thrive.
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to bridge the gap between farmers and consumers by providing a platform where fresh, locally sourced agricultural products can be accessed by everyone. We aim to support sustainable farming practices and empower small farmers by helping them expand their reach and grow their businesses.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We envision a future where quality produce is easily accessible to all, and where farmers can directly benefit from their hard work without unnecessary intermediaries. Our goal is to create a transparent, fair, and environmentally friendly agricultural marketplace that drives positive change within the industry.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Direct buying and selling of agricultural products</li>
            <li>Wide variety of produce, from fresh fruits and vegetables to organic goods</li>
            <li>Fair pricing to support sustainable agriculture</li>
            <li>Community-driven approach to promote local farmers</li>
          </ul>
        </section>

        <p className="text-center text-gray-600 mt-8">
          Join us on our mission to create a better, greener, and more sustainable future for all!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
