import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import Buying from "./Pages/Buying";
import Notification from "./Pages/Notification";
import Header from "./components/Header";
import Posting from "./Pages/Posting";
import MessagingSystem from "./Pages/MessagingSystem";
import DashBoard from "./Pages/DashBoard";
import SignUp from "./Pages/SignUp";
import ProductListing from "./Pages/ProductListing";
import Categories from "./Pages/Categories";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />

          <Routes>
            <Route path="LoginPage" element={<LoginPage />} />
            <Route path="Buying" element={<Buying />} />
            <Route path="Categories" element={<Categories />} />
            <Route path="Dashboard" element={<DashBoard />} />
            <Route path="/" element={<HomePage />} />
            <Route path="MessagingSystem" element={<MessagingSystem />} />
            <Route path="Notification" element={<Notification />} />
            <Route path="Posting" element={<Posting />} />
            <Route path="ProductListing" element={<ProductListing />} />
            <Route path="SignUp" element={<SignUp />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
