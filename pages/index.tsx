import React, { useEffect } from "react";
import type { NextPage } from "next";
import Slider from "components/Slider/Slider";
import CategoriesCard from "components/CategoriesCard";
import ShowCaseGroup from "components/ShowCaseSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const session = useSession();
  console.log(session);

  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 100,
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
