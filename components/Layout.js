import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
