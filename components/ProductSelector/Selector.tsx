import React, { useContext } from "react";
import { GiSquare, GiCheckMark } from "react-icons/gi";
import { SelectedTagContext, ACTION_TYPES } from "../../store/selector-context";
import type { TOption } from "../../type/type";

interface ISelectorProps {
  value: TOption;
  label: string;
  id: number;
}

const Selector = ({ value, label, id }: ISelectorProps) => {
  const { selectedTag, dispatch } = useContext(SelectedTagContext);
  const checkHandler = () => {
    const thisTypeTag = selectedTag[id];

    if (thisTypeTag?.some((t) => t.toString() === value.toString())) {
      const newSelectedTag = thisTypeTag.filter(
        (item) => item.toString() !== value.toString()
      );

      dispatch({
        type: ACTION_TYPES.DELETE_SELECTED_LIST,
        payload: {
          ...selectedTag,
          [id]: newSelectedTag,
        },
      });
    }
    if (!thisTypeTag?.some((t) => t.toString() === value.toString())) {
      dispatch({
        type: ACTION_TYPES.ADD_SELECTED_LIST,
        payload: {
          ...selectedTag,
          [id]: [...thisTypeTag, value],
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
    if (label === "helmet") {
      return `${value} cm`;
    } else if (label === "snowboard" && typeof value === "object") {
      return `${value[0]} - ${value[1]} cm`;
    }else if (label === "snowboard_boots"){
      return `JP${value}`
    }else return value;
  };

  return (
    <li className="hover:font-semibold cursor-pointer" onClick={checkHandler}>
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
