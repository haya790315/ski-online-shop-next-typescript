import React from "react";
import Image from "next/image";
import { ListData } from "./CategoriesData";
import brand from "../../Data/brandList.json"

const BrandLinks = () => {
  return (
    <div className="flex relative w-full h-auto bg-white justify-around items-center md:justify-evenly">
      {brand.map((brandData, index) => {
        return (
          <div key={index}>
            <Image
              key={brandData.id}
              height={60}
              width={60}
              src={brandData.brandLogo}
              alt={brandData.brandName}
              objectFit="contain"
              priority
              objectPosition="center left"
              quality={100}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BrandLinks;
