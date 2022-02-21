import React, { useEffect } from "react";
import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import SideNavbar from "../components/SideNavbar/SideNavbar";
import Slider from "../components/Slider";
import CategoriesCard from "../components/CategoriesCard/CategoriesCard";
import ShowCase from "../components/ShowCaseSlider/ShowCase";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      offset: 250,
      delay: 0,
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <SideNavbar />
      <Slider />
      <CategoriesCard />
      <ShowCase />
    </>
  );
};

export default Home;
