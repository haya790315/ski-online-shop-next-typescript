import React, { useState} from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  ACTION_TYPES,
  useSelectedTagContext,
} from "../../store/selector-context";
import Selector from "./Selector";
import type { IFilterIndex } from "../../Data/filterIndex";

interface ISelectedPanelProps {
  optionList: IFilterIndex;
}

const SelectorPanel = ({ optionList }: ISelectedPanelProps) => {
  const [openMore, setOpenMore] = useState(true);
  const initialSelectorNumbers = 3;

  const [selectorNumbers, setSelectorNumbers] = useState(
    initialSelectorNumbers
  );
  const { dispatch } = useSelectedTagContext();

  const opeMenuHandler = () => {
    setOpenMore(!openMore);
    if (openMore) {
      setSelectorNumbers(initialSelectorNumbers);
    }
  };

  const extendMenuHandler = () => {
    setSelectorNumbers(selectorNumbers + 3);
  };

  const clearTagHandler = (id: number) => {
    dispatch({
      type: ACTION_TYPES.CLEAR_SELECTED_LIST,
      payload: {
        id,
      },
    });
  };

  return (
    <>
      <div
        className="flex flex-row justify-between items-center  font-semibold cursor-pointer  py-3"
        onClick={opeMenuHandler}
      >
        <h3>{optionList.label}</h3>
        {openMore ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      {openMore && (
        <>
          <ul className="flex flex-col mb-2">
            {optionList.option.slice(0, selectorNumbers).map((opt, i) => {
              return (
                <Selector
                  key={i}
                  id={optionList.id}
                  value={opt}
                  label={optionList.value}
                />
              );
            })}
          </ul>
          {selectorNumbers < optionList.option.length ? (
            <small
              className="text-green-700 cursor-pointer font-bold"
              onClick={extendMenuHandler}
            >
              続きを見る...
            </small>
          ) : (
            <small
              className="text-green-700 cursor-pointer font-bold"
              onClick={() => clearTagHandler(optionList.id)}
            >
              クリア
            </small>
          )}
        </>
      )}
    </>
  );
};

export default SelectorPanel;
