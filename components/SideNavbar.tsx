import React from "react";
import Styles from "./SideNavbar.module.css"
import {IoMdArrowDropdown} from "react-icons/Io"
const SideNavbar = () => {
  return <div className="w-full h-16 bg-gray-700 relative">
    <ul className="flex flex-row text-white justify-left py-4 ml-8 items-center">
      <li className="flex cursor-pointer"><span className={Styles.underlineAnimation}>上着</span> <span className=" text-2xl"><IoMdArrowDropdown/></span></li>
      <li className='flex cursor-pointer'><span className={Styles.underlineAnimation}>
      パンツ
        </span> <span className=" text-2xl"><IoMdArrowDropdown/></span></li>
      <li className="flex cursor-pointer">
        <span className={Styles.underlineAnimation}>アクセサリ
          </span><span className=" text-2xl"><IoMdArrowDropdown/></span></li>
      <li className="flex cursor-pointer"><span className={Styles.underlineAnimation}>シューズ
        </span> <span className=" text-2xl"><IoMdArrowDropdown/></span></li>
    </ul>

  </div>;
};

export default SideNavbar;
