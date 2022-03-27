import React, { useEffect, useMemo } from "react";
import ShowCard from "../ShowCard/ShowCard";
import {
  useSelectedTagContext,
  ACTION_TYPES,
} from "store/selector-context";
import { IProductData } from "type/type";
interface IProductListProps {
  list: IProductData[];
}

const ProductList = ({ list }: IProductListProps) => {
  const { selectedTag, dispatch } = useSelectedTagContext();

  const selectedTagValue = Object.values(selectedTag).flat();
  const selectMemo = useMemo(() => {
    return JSON.stringify(selectedTag);
  }, [selectedTag]);

  useEffect(() => {
    if (!sessionStorage.getItem("tag")) {
      sessionStorage.setItem("tag", JSON.stringify([]));
    } else {
      dispatch({
        type: ACTION_TYPES.RESTORE_SELECTED_LIST,
        payload: {
          value: JSON.parse(sessionStorage.getItem("tag") as string),
        },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    sessionStorage.setItem("tag", selectMemo);
  }, [selectMemo]);

  const filterItem = () => {
    const filterByType = list.reduce((acc, item, i, list) => {
      if (
        item.value === "binding" &&
        item.option.some((e) => selectedTag[6].includes(e))
      ) {
        acc.push(item);
      } else if (
        item.value === "snowboard_boots" &&
        item.option.some((e) => selectedTag[5].includes(e))
      ) {
        acc.push(item);
      } else if (
        item.value === "snowboard" &&
        item.option.some((e) =>
          selectedTag[3].some(
            (t) => typeof t === "object" && t[0] <= e && e <= t[1]
          )
        )
      ) {
        acc.push(item);
      } else if (
        item.value === "helmet" &&
        item.option.some((e) =>
          selectedTag[4].some((t) => e.toString() === t.toString())
        )
      ) {
        acc.push(item);
      } else if (acc.length === 0 && list.length - 1 === i) {
        acc = list;
      }
      return acc;
    }, [] as IProductData[]);

    const filterByBrand =
      selectedTag[1].length > 0
        ? filterByType.filter((item) => selectedTag[1].includes(item.brand))
        : filterByType;

    const filterByGender =
      selectedTag[2].length > 0
        ? filterByBrand.filter((item) => selectedTag[2].includes(item.gender))
        : filterByBrand;
    return filterByGender;
  };

  const filteredItem =
    filterItem().length > 0 ? (
      filterItem().map((pro, i) => {
        return <ShowCard key={i} item={pro} hoverEffect="auto" />;
      })
    ) : (
      <div className="inline-grid place-items-start w-max font-semibold text-zinc-400">
        結果が見つかりません
      </div>
    );

  const allItem = list.map((pro, i) => {
    return <ShowCard key={i} item={pro} hoverEffect="auto" />;
  });

  return (
    <div className="grid grid-cols-2 px-6 mb-20 mt-5 ml-5 gap-6 md:grid-cols-4 ">
      {selectedTagValue.length > 0 ? filteredItem : allItem}
    </div>
  );
};

export default ProductList;
