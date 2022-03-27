import React, { useState } from "react";
import styles from "styles/Categories.module.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface IProps {
  type: string;
}

const Categories = ({ type }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSwitch = () => {
    setIsOpen(!isOpen);
  };

  return (
    
      <li className="flex cursor-pointer" onClick={handleSwitch}>
        <span className={styles.underlineAnimation}>{type}</span>{" "}
        <span className=" text-2xl">
          {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </span>
      </li>
  
  );
};

export default Categories;
