import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";

const MainLayout = ({ childern }) => {
  return (
    <>
      <Navbar />
      <div >
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
