import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import SideNavbar from "../components/SideNavbar"



const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <SideNavbar/>
    </>
  );
};

export default Home;
