import React from "react";
import ShowCase from "./ShowCase";
import { showCaseItemList, listTitle } from "./showCaseItemListData";

const ShowCaseGroup = () => {
  return (
    <>
      {Object.keys(showCaseItemList).map((listKey, index) => {
        return (
          <div key={index}>
            {showCaseItemList[listKey].length > 0 && (
              <ShowCase
                itemList={showCaseItemList[listKey]}
                listTitle={listTitle[index]}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default ShowCaseGroup;
