import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import type { TOption } from "../type/type";
import { TCartOrder } from "../store/cart-context";
import { IOption } from "../pages/cart";

interface ISelectorProps {
  option: string[] | number[] | TOption[] | undefined;
  label: string;
  setNewOrder: React.Dispatch<React.SetStateAction<IOption>>;
  name: "size" | "quantity";
  order: TCartOrder;
}

const CustomerSelect = ({
  option,
  label,
  name,
  order,
  setNewOrder,
}: ISelectorProps) => {
  const [openList, setOpenList] = useState(false);
  const [innerText, setInnerText] = useState<string>();


  const liStyle = (order: number): React.CSSProperties => ({
    position: "absolute",
    opacity: `${openList ? "1" : "0"}`,
    zIndex: `${openList ? "5" : "-1"}`,
    width: "100%",
    height: "100%",
    outline: "1px solid rgba(51,65,85)",
    transform: `${
      openList ? `translateY(${order * 65}px)` : "translateY(65px)"
    }`,
    backgroundColor: "rgb(28,25,23,1)",
    textAlign: "center",
    lineHeight: "60px",
    top: "0",
    bottom: "0",
    transition: "all 0.2s ease-in-out",
  });

  const openMenuHandler = () => {
    setOpenList(!openList);
  };

  const changOptionHandler = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    setInnerText(target.innerHTML);

    setNewOrder({
      id: order.id,
      size: order.option[0],
      quantity: order.option[1],
      [name]: target.innerHTML,
    });
  };

  return (
    <>
      {option && (
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
      )}
    </>
  );
};

export default CustomerSelect;
