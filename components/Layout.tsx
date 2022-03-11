import React from "react";
import Navbar from "./Navbar";
import SideNavbar from "./SideNavbar";

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
