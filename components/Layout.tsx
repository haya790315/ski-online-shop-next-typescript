import React from "react";
import Navbar from "../components/Navbar";
import SideNavbar from "../components/SideNavbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <SideNavbar />
      </div>
      {children}
    </>
  );
};

export default Layout;
