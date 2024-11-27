import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import CategoryPage from "./Pages/CategoryPage";
import DashboardPage from "./Pages/DashboardPage";
import SignUpPage from "./Pages/SignUpPage";
import SignInPage from "./Pages/SignInPage";
import WelcomPage from "./Pages/WelcomPage";
import PrivateRouter from "./components/utils/PriviteRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import EditForm from "./components/dashboard/editForm";
import AddProduct from "./components/dashboard/AddProduct";
import "font-awesome/css/font-awesome.min.css";
import PaySummary from "./components/Message/PaySummary";
import ContactPage from "./components/Message/ContactPage";
import Payment from "./components/PaymentGateway/PaymentGateway";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );

  function MainContent() {
    const location = useLocation();

    // Define the routes where the header and footer should be hidden
    const hiddenRoutes = [
      "/",
      "/signup",
      "/signin",
      "/dashboard",
      "/addProduct",
      "/editProduct",
    ];

    // Check if the current route matches any of the hidden routes
    const shouldHideHeaderFooter = hiddenRoutes.some((path) =>
      location.pathname.startsWith(path)
    );

    return (
      <div>
        {/* Routes for the application */}
        <Routes>
          <Route element={<PrivateRouter />}>
            {/* Private routes */}
            <Route path="/dashboard/*" element={<DashboardPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/category" element={<CategoryPage />} />
          </Route>
          {/* Public routes */}
          <Route path="/" element={<WelcomPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/editProduct" element={<EditForm />} />
          <Route path="/addProduct" element={<AddProduct />} />;
          <Route path="/PaySummary" element={<PaySummary />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/header" element={<Header />} />
        </Routes>

        {/* Show Footer only when not in hidden routes */}
        {!shouldHideHeaderFooter && <Footer />}
      </div>
    );
  }
}

export default App;
