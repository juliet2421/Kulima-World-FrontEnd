import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Buying from "./components/Buying/Buying";
import Notification from "./components/Notification/Notification";
import Header from "./components/Header/Header";
import Posting from "./components/Posting/Posting";
import MessagingSystem from "./components/MessagingSystem/MessagingSystem";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="Buying" element={<Buying />} />
            <Route path="Posting" element={<Posting />} />
            <Route path="Notification" element={<Notification />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
