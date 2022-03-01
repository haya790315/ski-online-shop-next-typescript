import React, { useEffect } from "react";
import type { NextPage } from "next";
import Slider from "../components/Slider";
import CategoriesCard from "../components/CategoriesCard/CategoriesCard";
import ShowCaseGroup from "../components/ShowCaseSlider/ShowCaseGroup";
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
      <Slider />
      <CategoriesCard />
      <ShowCaseGroup />
    </>
  );
};

export default Home;
