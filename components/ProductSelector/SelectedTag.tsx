import React, { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { SelectedTagContext } from "../../store/selector-context";
import { ACTION_TYPES } from "../../store/selector-context";

const SelectedTag = () => {
  const { selectedTag, dispatch } = useContext(SelectedTagContext);

  const deleteTagHandler = (value: string) => {
    const newSelectedTag = selectedTag.filter((tag) => value !== tag);

    dispatch({
      type: ACTION_TYPES.DELETE_SELECTED_LIST,
      payload: newSelectedTag,
    });
  };

  return (
    <section className=" w-full relative h-auto flex flex-row justify-start items-center flex-wrap">
      {selectedTag.length > 0 &&
        selectedTag.map((tag, i) => {
          return (
            <div
              key={i}
              className=" h-max  text-black text-l py-1 px-2 rounded-2xl bg-gray-200 my-6 mr-2 font-weight hover:bg-gray-300 "
            >
              <span className="mx-2">{tag}</span>
              <IoIosClose
                className="inline-block ml-1 cursor-pointer"
                onClick={() => deleteTagHandler(tag)}
              />
            </div>
          );
        })}
    </section>
  );
};

export default SelectedTag;
