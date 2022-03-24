import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {formateTexts} from "../util/util"
import type { TCartOrder } from "../store/cart-context";
import type { IOption } from "../pages/cart";
import type { TOption } from "../type/type";

interface ISelectorProps {
  option: TOption[];
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
  const [innerText, setInnerText] = useState<TOption>();

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
  

  const changOptionHandler = (value: TOption) => {
    const text = formateTexts(value);

    setInnerText(text);

    setNewOrder({
      id: order.id,
      size: order.option[0],
      quantity: order.option[1],
      [name]: value,
    });
  };

  return (
    <>
      {option.length>0 && (
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
              onClick={() => changOptionHandler(value)}
              className="hover:text-gray-400"
            >
              {formateTexts(value)}
            </li>
          ))}
          <IoMdArrowDropdown />
        </ul>
      )}
    </>
  );
};

export default CustomerSelect;
