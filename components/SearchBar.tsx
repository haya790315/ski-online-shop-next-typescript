import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
const SearchBar = () => {
  return (
    <div className="px-2 relative flex items-center w-96 h-12 bg-white rounded-md">
      <BiSearchAlt2 className=" mx-2 text-3xl text-gray-300" />
      <input
        type="text"
        placeholder="捜索"
        className="  container text-xl outline-none"
      />
    </div>
  );
};

export default SearchBar;
