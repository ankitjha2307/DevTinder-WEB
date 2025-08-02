import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet /> {/* Dynamically loads Home, Login, Feed */}
      <Footer />
    </div>
  );
};

export default Body;
