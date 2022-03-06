import React, { useContext } from "react";
import { GiSquare, GiCheckMark } from "react-icons/gi";
import { SelectedTagContext,ACTION_TYPES } from "../../store/selector-context";

interface ISelectorProps {
  value: string;
}

const Selector = ({ value }: ISelectorProps) => {
  const { selectedTag, dispatch } = useContext(SelectedTagContext);

  const checkHandler = () => {
    if (selectedTag.includes(value)) {
      const newSelectedTag = selectedTag.filter((item) => item !== value);

      dispatch({
        type: ACTION_TYPES.DELETE_SELECTED_LIST,
        payload: [...newSelectedTag],
      });
    }
    if (!selectedTag.includes(value)) {
      dispatch({
        type: ACTION_TYPES.ADD_SELECTED_LIST,
        payload: [...selectedTag, value],
      });
    }
  };

  const checkList = (value: string) => {
    return selectedTag.includes(value);
  };

  return (
    <li className="hover:font-semibold cursor-pointer" onClick={checkHandler}>
      {checkList(value) ? (
        <GiCheckMark className="inline-block mr-2 text-blue-300 text-l" />
      ) : (
        <GiSquare className="inline-block mr-2 text-blue-300 text-l" />
      )}{" "}
      {value}
    </li>
  );
};

export default Selector;
