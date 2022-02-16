import React, { useState } from "react";
import Styles from "./Categories.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/Io";

interface IProps {
  itemName: string;
}

const Categories = ({ itemName }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li className="flex cursor-pointer">
        <span
          className={Styles.underlineAnimation}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {itemName}
        </span>{" "}
        <span className=" text-2xl">
          {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </span>
      </li>
    </>
  );
};

export default Categories;
