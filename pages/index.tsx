import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import SideNavbar from "../components/SideNavbar/SideNavbar"
import Slider from "../components/Slider";
import CategoriesCard from "../components/CategoriesCard/CategoriesCard"



const Home: NextPage = () => {

  


  return (
    <>
      <Navbar />
      <SideNavbar/>
      <Slider/>
      <CategoriesCard/>
    </>
  );
};

export default Home;
