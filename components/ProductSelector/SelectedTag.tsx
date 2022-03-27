import React, { useContext,useMemo } from "react";
import { IoIosClose } from "react-icons/io";
import { SelectedTagContext } from "store/selector-context";
import { ACTION_TYPES } from "store/selector-context";
import {formatTexts} from "lib/util/util"
import type { TOption } from "type/type";

const SelectedTag = () => {
  const { selectedTag, dispatch } = useContext(SelectedTagContext);
  
  const tag = useMemo(()=>Object.values(selectedTag).flat(),[selectedTag])

  const deleteTagHandler = (value: TOption) => {
    Object.keys(selectedTag).map((key) => {
      dispatch({
        type: ACTION_TYPES.DELETE_SELECTED_LIST,
        payload: { id: +key, value },
      });
    });
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
              <span className="mx-2">{formatTexts(tag,"cm")}</span>
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
