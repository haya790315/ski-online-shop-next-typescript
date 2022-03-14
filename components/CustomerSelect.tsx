import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface ISelectorProps {
  option: string[];
  label: string;
  setOption: React.Dispatch<
    React.SetStateAction<{
      size: string;
      quantity: string;
    }>
  >;
  setId: React.Dispatch<React.SetStateAction<string>>;
  id: string;
}

const CustomerSelect = ({
  option,
  label,
  setOption,
  setId,
  id,
}: ISelectorProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [innerText, setInnerText] = useState<string>();

  const liStyle = (order: number): React.CSSProperties => ({
    position: "absolute",
    opacity: `${openMenu ? "1" : "0"}`,
    zIndex: `${openMenu ? "5" : "-1"}`,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    outline: "1px solid rgba(51,65,85)",
    transform: `${
      openMenu ? `translateY(${order * 65}px)` : "translateY(65px)"
    }`,
    backgroundColor: "rgb(28,25,23,1)",
    textAlign: "center",
    lineHeight: "60px",
    top: "0",
    bottom: "0",
    transition: "all 0.2s ease-in-out",
  });

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };

  const changOptionHandler = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    setInnerText(target.innerHTML);
    setId(id);

    switch (label) {
      case "サイズ":
        {
          setOption((prev) => ({
            ...prev,
            size: target.innerHTML,
          }));
        
        }
        break;
      case "数量":
        {
          setOption((prev) => ({
            ...prev,
            quantity: target.innerHTML,
          }));
        }
        break;
      default:
        throw new Error("unknown label");
    }
  };
  
  
  return (
    <>
      <ul
        className="relative flex flex-row justify-evenly items-center flex-1 outline-1 outline  h-full  outline-slate-700 "
        onClick={openMenuHandler}
      >
        <span>{label}</span>
        {innerText}
        {option.map((value, i) => (
          <li
            style={liStyle(i + 1)}
            key={i}
            onClick={changOptionHandler.bind(this)}
            className="hover:text-gray-400"
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
