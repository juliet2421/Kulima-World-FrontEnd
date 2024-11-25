import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PaySummary from "./PaySummary";
import ContactPage from "./ContactPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/">Payment Summary</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PaySummary />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
