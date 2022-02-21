import React, { useEffect } from "react";
import Image from "next/image";
import { ListData } from "./CategoriesData";
import BrandLinks from "./BrandLinks";


const CategoriesCard = () => {


  return (
    <div
      className="relative w-full h-auto"
      data-aos="fade-in"
      data-aos-offset="50"
    >
      <BrandLinks />

      <div  className="grid grid-cols-1 gap-1 relative h-full w-full md:grid-cols-6 md:gap-4">
        {ListData.categories.map((category, index) => {
          return (
            <div
              data-aos="fade-up"
              key={index}
              className={
                index < 2
                  ? "h-36 w-auto relative md:h-80 md:col-span-3"
                  : "h-36 w-auto relative md:h-80 md:col-span-2"
              }
            >
              <div className="flex justify-center cursor-pointer md:hover:opacity-75 ">
                <Image
                  data-aos="zoom-in"
                  key={index}
                  layout="fill"
                  src={category.imgURL}
                  alt={category.title}
                  objectFit="cover"
                  priority
                  objectPosition="center center"
                  quality={100}
                  className="filter blur-sm hover:filter-none	md:filter-none"
                ></Image>
                <span className="absolute bottom-2/4 text-xl md:bottom-8 md:text-3xl font-medium text-white ">
                  {category.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesCard;
