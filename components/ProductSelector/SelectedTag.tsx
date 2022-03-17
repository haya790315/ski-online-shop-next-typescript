import React, { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { SelectedTagContext } from "../../store/selector-context";
import { ACTION_TYPES, ISelectedTag } from "../../store/selector-context";
import type { TOption } from "../../type/type";

const SelectedTag = () => {
  const { selectedTag, dispatch } = useContext(SelectedTagContext);

  const tag = Object.values(selectedTag).flat();

  const deleteTagHandler = (value: TOption) => {
    const filteredTag: ISelectedTag = selectedTag;
    Object.keys(filteredTag).map((key) => {
      filteredTag[key] = filteredTag[key].filter(
        (tagValue) => tagValue != value
      );
    });

    dispatch({
      type: ACTION_TYPES.DELETE_SELECTED_LIST,
      payload: { ...filteredTag },
    });
    console.log(filteredTag);
  };

  const returnedTagHtml = (tagValue: TOption) => {
    if (typeof tagValue === "object") {
      return `${tagValue[0]} - ${tagValue[1]}cm`;
    } else if (typeof tagValue === "number") {
      return `JP${tagValue}`;
    } else return tagValue;
  };

  return (
    <section className=" w-full relative h-auto  flex flex-row justify-start items-center flex-wrap">
      {tag.length > 0 ? (
        tag.map((tag, i) => {
          return (
            <div
              key={i}
              className=" h-max  text-black text-l py-1 px-2 rounded-2xl bg-gray-200 my-6 mr-2 font-weight hover:bg-gray-300 "
            >
              <span className="mx-2">{returnedTagHtml(tag)}</span>
              <IoIosClose
                className="inline-block ml-1 cursor-pointer"
                onClick={() => deleteTagHandler(tag)}
              />
            </div>
          );
        })
      ) : (
        <div className="h-20 w-full"></div>
      )}
    </section>
  );
};

export default SelectedTag;
