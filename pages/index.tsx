import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import SideNavbar from "../components/SideNavbar"
import Slider from "../components/Slider";



const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <SideNavbar/>
      <Slider/>
    </>
  );
};

export default Home;
