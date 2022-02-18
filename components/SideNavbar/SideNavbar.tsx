import React from "react";
import Styles from "./SideNavbar.module.css";
import ShopIcon from "../../public/image/static/ShopIcon.svg";
import YenIcon from "../../public/image/static/YenIcon.svg";
import Categories from "./Categories";
import { sideMenuData } from "./sideMenuData";

const SideNavbar = () => {
  return (
    <div className="w-full h-16 bg-gray-700 relative flex justify-between text-l">
      <ul className="flex flex-row text-white justify-left py-4 ml-8 items-center">
        {Object.keys(sideMenuData).map((itemKey, index) => {
          return (
            <Categories itemName={sideMenuData[itemKey].name} key={index} />
          );
        })}
      </ul>
      <div className="flex flex-row cursor-default text-white absolute right-12 p-2 group hover:text-orange-300 ">
        <div className="p-2 flex  items-center">
          <span>
            <YenIcon />
          </span>
          <span className="text-l  px-1 text-inherit ">4000</span>
        </div>
        <div className="relative  hover:opacity-90 cursor-pointer ">
          <span className="px-4">
            <ShopIcon className=" absolute top-1 h-8 w-8 fill-current text-inherit" />
          </span>
          <div className={Styles.bagAnimation}>
            <span className="top-2.5 left-3 absolute text-l text-orange-300 group-hover:text-white">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
