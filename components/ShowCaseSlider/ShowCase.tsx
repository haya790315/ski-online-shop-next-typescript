import React, { useRef, useState, useEffect } from "react";
import ShowCaseCard from "./ShowCaseCard";
import { PopularItemList } from "./CardItemData";

const ShowCase = () => {
  const showCaseElementRef = useRef<HTMLDivElement>(null);

  const [slideX, setSlideX] = useState({ scrollX: 0, startX: 0 });
  const [isDrag, setIsDrag] = useState(false);

  const [toggle,setToggle] =useState("");

  const onDragHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    event.preventDefault();
    if (!isDrag) {
      return;
    }
    const showCaseElement = showCaseElementRef.current;
    let x = event.pageX - showCaseElement!.offsetLeft;
    const { scrollX, startX } = slideX;
    const scroll = startX - x;
    showCaseElement!.scrollLeft = scrollX + scroll;
  };

  const onDragStartHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setIsDrag(true);
    const showCaseElement = showCaseElementRef.current;
    let startX = event.pageX - showCaseElement!.offsetLeft;
    let scrollX = showCaseElement!.scrollLeft;
    setSlideX({ scrollX, startX });
  };

  const onDragEndHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setIsDrag(false);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-start my-12 mx-2 w-screen ">
        <big className="my-5 font-semibold">人気商品</big>
        <big className="my-5 font-semibold" onClick={()=>setToggle("new")}>人気商品</big>
        <div data-aos="slide-left" className="w-full">
          <div
            className={
              !isDrag
                ? " w-full overflow-x-hidden snap-mandatory snap-x  scroll-smooth cursor-grab"
                : " w-full overflow-x-hidden snap-mandatory snap-x  scroll-smooth cursor-grabbing"
            }
            ref={showCaseElementRef}
            onMouseDown={(e) => {
              onDragStartHandler(e);
            }}
            onMouseMove={(e) => {
              onDragHandler(e);
            }}
            onMouseUp={(e) => {
              onDragEndHandler(e);
            }}
            onMouseLeave={(e) => {
              isDrag && setIsDrag(false);
            }}
          >
            {toggle===""&&<div className="flex flex-row items-center w-max">
              {PopularItemList.map((item, index) => {
                return <ShowCaseCard item={item} key={index} />;
              })}
            </div>}
            {toggle==="new"&&<div className="flex flex-row items-center w-max">
              {PopularItemList.map((item, index) => {
                return <ShowCaseCard item={{
                  id: 8,
                  brand: "Burton",
                  name: " スノーボードバインディング",
                  model: "Lexa",
                  price: "26152",
                  imageURL:
                    "https://www.snowinn.com/h/13827/138272402/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A5%B3%E6%80%A7-lexa.jpg",
                }} key={index} />;
              })}
            </div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCase;
