import React from "react";
import Image from "next/image";
import { brandList } from "../../localDatabase/brandList";

const BrandLinks = () => {
  return (
    <div className="flex relative w-full h-auto bg-white justify-around items-center md:justify-evenly">
      {brandList.map((brandData) => {
        return (
          <div key={brandData.id}>
            <Image
              height={60}
              width={60}
              src={brandData.brandLogo}
              alt={brandData.brandName}
              objectFit="contain"
              objectPosition="center left"
            />
          </div>
        );
      })}
    </div>
  );
};

export default BrandLinks;
