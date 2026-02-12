import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content">{children}</main>
    </div>
  );
};

export default MainLayout;
