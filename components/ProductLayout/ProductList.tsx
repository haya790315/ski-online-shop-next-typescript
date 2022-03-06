import React, { useContext } from "react";
import ShowCard from "../ShowCard/ShowCard";
import { SelectedTagContext } from "../../store/selector-context";
import list from "../../Data/itemList.json"


const ProductList = () => {
  const { selectedTag } = useContext(SelectedTagContext);

  const filteredItem = list
    .filter((item) => {
      return selectedTag.includes(item.brand);
    })
    .map((pro) => {
      return <ShowCard key={pro.id} item={pro} hoverEffect="auto"/>;
    });

  const allItem = list.map((pro,i) => {
    return <ShowCard key={i} item={pro} hoverEffect="auto" />;
  });

  return (
    <div className="grid grid-cols-2 px-6 mb-20 mt-5 ml-5 gap-6 md:grid-cols-4 ">
      {selectedTag.length > 0 ? filteredItem : allItem}
    </div>
  );
};

export default ProductList;
