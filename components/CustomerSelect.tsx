import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface ISelectorProps {
  option: string[];
  label: string;
}

const CustomerSelect = ({ option, label }: ISelectorProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [innerText, setInnerText] = useState<string>();

  const liStyle = (order: number): React.CSSProperties => ({
    position: "absolute",
    opacity: `${openMenu ? "1" : "0"}`,
    zIndex: `${openMenu ? "0" : "-1"}`,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    outline: "1px solid rgba(51,65,85)",
    transform: `${
      openMenu ? `translateY(${order * 65}px)` : "translateY(65px)"
    }`,
    backgroundColor: "rgb(28,25,23)",
    textAlign: "center",
    top: "0",
    bottom: "0",
    transition: "all 0.2s ease-out;",
  });

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };

  const setInnerTextHandler = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    setInnerText(target.innerHTML);
  };

  return (
    <>
      <ul
        className="relative flex flex-row justify-evenly items-center flex-1 outline-1 outline  h-full  outline-slate-700"
        onClick={openMenuHandler}
      >
        <span>{label}</span>
        {innerText}
        {option.map((value, i) => (
          <li
            style={liStyle(i + 1)}
            key={i}
            onClick={(e) => setInnerTextHandler(e)}
          >
            {value}
          </li>
        ))}
        <IoMdArrowDropdown />
      </ul>
    </>
  );
};

export default CustomerSelect;
