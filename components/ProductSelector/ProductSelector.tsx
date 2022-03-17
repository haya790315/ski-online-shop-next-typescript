import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import SelectorPanel from "./SelectorPanel";
import { filterIndex } from "../../Data/filterIndex";
import { TId } from "../../Data/filterIndex";
//set the number to extend at beginning
interface IProductSelector {
  collection: TId[];
}

const ProductSelector = ({ collection }: IProductSelector) => {
  return (
    <section className="relative w-48 bg-gray-200 flex flex-col content-around px-4 h-full shrink-0">
      <div className="flex flex-row justify-between items-center  font-semibold py-4">
        <h1>フィルター</h1>
        <BsFilterLeft className="inline-block text-xl" />
      </div>
      <div className="flex flex-col mb-4 border-t border-zinc-400 border-solid">
        {filterIndex
          .filter((option) => collection.includes(option.id))
          .map((optionList, i) => (
            <SelectorPanel key={i} optionList={optionList} />
          ))}
      </div>
    </section>
  );
};

export default ProductSelector;
