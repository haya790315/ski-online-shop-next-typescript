import React from "react";
import { GiSquare, GiCheckMark } from "react-icons/gi";
import { useSelectedTagContext, ACTION_TYPES } from "store/selector-context";
import type { TOption } from "@type/ProductType";

interface ISelectorProps {
  value: TOption;
  label: string;
  id: number;
}


const Selector = ({ value, label, id }: ISelectorProps) => {
  const { selectedTag, selectedTagDispatch } = useSelectedTagContext();

  const checkHandler = (id: number, value: TOption) => {
    const thisTypeTag = selectedTag[id];

    if (thisTypeTag.some((t) => t.toString() === value.toString())) {
      selectedTagDispatch({
        type: ACTION_TYPES.DELETE_SELECTED_LIST,
        payload: {
          id,
          value,
        },
      });
    }
    if (!thisTypeTag.some((t) => t.toString() === value.toString())) {
      selectedTagDispatch({
        type: ACTION_TYPES.ADD_SELECTED_LIST,
        payload: {
          id,
          value,
        },
      });
    }
  };

  const checkList = (value: TOption) => {
    return Object.values(selectedTag)
      .flat()
      .some((t) => t.toString() === value.toString());
  };

  const returnedHtml = () => {
    if (
      (label === "snowboard" || label === "helmet") &&
      typeof value === "object"
    ) {
      return `${value[0]} - ${value[1]} cm`;
    } else if (label === "snowboard_boots") {
      return `JP${value}`;
    } else return value;
  };

  return (
    <li
      className="hover:font-semibold cursor-pointer"
      onClick={() => checkHandler(id, value)}
    >
      {checkList(value) ? (
        <GiCheckMark className="inline-block mr-2 text-blue-300 text-l" />
      ) : (
        <GiSquare className="inline-block mr-2 text-blue-300 text-l" />
      )}{" "}
      {returnedHtml()}
    </li>
  );
};

export default Selector;
