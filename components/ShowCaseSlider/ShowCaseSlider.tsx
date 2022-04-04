import React, { useEffect, useRef, useState } from "react";
import ShowCase from "./ShowCase";
import { fetchApiData } from "lib/fetcher/fetchApiData";
import LoadingSpin from "components/LoadingSpin";

const ShowCaseSlider = () => {
  const popularItemList = useRef([]);
  const onSaleItemList = useRef([]);
  const rankingItemList = useRef([]);
  const limitedItemList = useRef([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRandomData = async () => {
      setIsLoading(true);

      popularItemList.current = await fetchApiData(`api/randomProduct`);
      onSaleItemList.current = await fetchApiData(`api/randomProduct`);
      rankingItemList.current = await fetchApiData(`api/randomProduct`);
      limitedItemList.current = await fetchApiData(`api/randomProduct`);
      setIsLoading(false);
    };

    fetchRandomData();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpin />
      ) : (
        <div>
          <ShowCase itemList={popularItemList.current} listTitle={"人気商品"} />
          <ShowCase itemList={onSaleItemList.current} listTitle={"特売商品"} />
          <ShowCase
            itemList={rankingItemList.current}
            listTitle={"ランキング"}
          />
          <ShowCase itemList={limitedItemList.current} listTitle={"限定商品"} />
        </div>
      )}
    </>
  );
};

export default ShowCaseSlider;
