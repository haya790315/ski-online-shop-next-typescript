import React from "react";
import Navbar from "../components/Navbar";
import SideNavbar from "../components/SideNavbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <section className="flex flex-col ">
        <Navbar />
        <SideNavbar />
      </section>
      {children}
    </>
  );
};

export default Layout;
