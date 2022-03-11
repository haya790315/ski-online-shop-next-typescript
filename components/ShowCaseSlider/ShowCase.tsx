import React, { useRef, useState } from "react";
import ShowCard from "../ShowCard/ShowCard";
import {TItem} from "./showCaseItemListData"


interface IShowCaseProps {
  itemList: TItem[];
  listTitle: string;
}

const ShowCase = ({ itemList, listTitle }: IShowCaseProps) => {
  const showCaseElementRef = useRef<HTMLDivElement>(null);

  const [slideX, setSlideX] = useState({ scrollX: 0, startX: 0 });
  const [isDrag, setIsDrag] = useState(false);
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
        <big className="my-5 font-semibold">{listTitle}</big>
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
            <div className="flex flex-row items-center w-max h-max">
              {itemList.map((item, index) => {
                return <ShowCard item={item} hoverEffect="none" key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCase;
