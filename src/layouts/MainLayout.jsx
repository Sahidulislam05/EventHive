import React from "react";
import Navbar from "../componets/Shared/Navbar";
import Footer from "../componets/Shared/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
