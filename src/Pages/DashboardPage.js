import React from "react";
import DashBoard from "../components/dashboard/DashBoard";
import SideBar from "../components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import Manage from "../components/dashboard/Manage.js";
import { useLocation } from "react-router-dom";

export default function DashboardPage() {
  const location = useLocation();
  const noSideBar = ['/editProduct', '/addProduct']; // Hide Sidebar on these routes
  const hideSideBar = noSideBar.some((path) => location.pathname.startsWith(path));

  return (
    <div className="flex h-screen">
      {!hideSideBar && <SideBar />}
      
      <div className="flex-1 flex justify-center bg-gray-100">
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/manage" element={<Manage />}>
          </Route>
        </Routes>
      </div>
    </div>
  );
}
