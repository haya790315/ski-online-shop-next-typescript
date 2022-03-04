import React, { useContext, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import Selector from "./Selector";
import { SelectedTagContext, ACTION_TYPES } from "../../store/selector-context";

const initialSelectorNumbers = 3;

const SelectorComponent = () => {
  const [openMore, setOpenMore] = useState(false);
  const [selectorNumbers, setSelectorNumbers] = useState(
    initialSelectorNumbers
  );
  const { dispatch } = useContext(SelectedTagContext);

  const opeMenuHandler = () => {
    setOpenMore(!openMore);
    if (openMore) {
      setSelectorNumbers(initialSelectorNumbers);
    }
  };

  const extendMenuHandler = () => {
    setSelectorNumbers(selectorNumbers + 3);
  };

  const clearTagHandler = () => {
    dispatch({
      type: ACTION_TYPES.DELETE_SELECTED_LIST,
      payload: [],
    });
  };

  const newA = [
    "Burton",
    "Nidecker",
    "Rossignol",
    "Flow",
    "Ride",
    "Nitro",
    "Arbor",
    "Bolle",
    "Oakley",
    "Black Diamond",
  ];

  return (
    <section className="relative w-60 bg-gray-200 flex flex-col content-around px-4 h-full">
      <div className="flex flex-row justify-between items-center  font-semibold py-4">
        <h1>フィルター</h1>
        <BsFilterLeft className="inline-block text-xl" />
      </div>
      <div className="flex flex-col mb-4 border-t border-zinc-400 border-solid">
        <div
          className="flex flex-row justify-between items-center  font-semibold cursor-pointer  py-3"
          onClick={opeMenuHandler}
        >
          <h3>ブランドから探す</h3>
          {openMore ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
        {openMore && (
          <>
            <ul className="flex flex-col justify-center mb-2">
              {newA.slice(0, selectorNumbers).map((item, i) => {
                return <Selector key={i} value={item} />;
              })}
            </ul>
            {selectorNumbers < newA.length ? (
              <small
                className="text-green-700 cursor-pointer font-bold"
                onClick={extendMenuHandler}
              >
                続きを見る...
              </small>
            ) : (
              <small
                className="text-green-700 cursor-pointer font-bold"
                onClick={clearTagHandler}
              >
                クリア
              </small>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SelectorComponent;
