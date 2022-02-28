import React from "react";
import Image from "next/image";
import YenIcon from "../../public/image/static/YenIcon.svg";






interface ICartDropProps {
  cartDropMenuHandler: {
    mouseEnter: () => void;
    mouseLeave: () => void;
  };
}

const cartMenu = [
  {
    id: 1,
    brand: "Burton ",
    name: "スノーボード",
    model: "Family Tree 3D Big-Mountain",
    price: "62643",
    imageURL:
      "https://www.snowinn.com/h/13827/138272144/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-family-tree-3d-big-mountain.jpg",
  }, {
      id: 3,
      brand: "Black Diamond",
      name: "ジーンズ",
      model: "Recon Stretch",
      price: "49213",
      imageURL:
        "https://www.snowinn.com/h/13720/137209140/black-diamond-%E3%82%B8%E3%83%BC%E3%83%B3%E3%82%BA-recon-stretch.jpg",
    },
    {
      id: 4,
      brand: "Oakley",
      name: "スキー用のゴーグル  ",
      model: "Flight Deck L Prizm Snow",
      price: "18601",
      imageURL:
        "https://www.snowinn.com/h/13768/137689281/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-flight-deck-l-prizm-snow.jpg",
    },
    {
      id: 5,
      brand: "Burton",
      name: "ミトン",
      model: "Park",
      price: "5391",
      imageURL:
        "https://www.snowinn.com/h/13873/138731322/burton-%E3%83%9F%E3%83%88%E3%83%B3-park.jpg",
    },  
  
  
  
  
];

const CartDropMenu = ({ cartDropMenuHandler }: ICartDropProps) => {
  const totalPrice = cartMenu.map(item=>Number(item.price)).reduce((previousValue, currentValue) => previousValue+currentValue,0)
  
  
  
  return (
    <div
      className="flex absolute flex-col right-0 top-8 h-80 "
      onMouseEnter={cartDropMenuHandler.mouseEnter}
      onMouseLeave={cartDropMenuHandler.mouseLeave}
    >
      <div className="h-8"></div>

      <div className="mt-2 h-full  text-black bg-white  overflow-y-auto  overscroll-none scroll-smooth shadow-lg border-solid border-2  scrollbar px-2">
        {cartMenu.map((item, i) => {
          return (
            <div
              className=" relative  flex  w-full justify-evenly items-center py-4 px-4 border-b-2 border-solid border-b-slate-200 cursor-pointer"
              key={i}
            >
              <div className="h-24 w-24 relative flex-shrink-0">
                <Image
                  src={item.imageURL}
                  alt="name"
                  layout='fill'
                  objectFit="contain"
                  priority
                  objectPosition="center center"
                  quality={100}
                />
              </div>
              <div className=" ml-4">
                <strong>{item.brand}</strong>
                <h4 className="text-sm overflow-hidden text-ellipsis">
                  {item.model}
                </h4>
                <span><YenIcon className="fill-current inline-block mb-1"/>{item.price}</span>
              </div>
            </div>
          );
        })}
      <div className="p-4 text-left text-slate-700 font-semibold">
        <span>小計 : </span>
        <span><YenIcon className="fill-current inline-block mb-1"/>{totalPrice}</span>
      </div>
      <button className="block bg-blue-500 w-10/12 h-12 mx-4 mb-2 -mt-2 text-stone-100 text-xl hover:bg-blue-700">
        カート
      </button>
      </div>
    </div>
  );
};

export default CartDropMenu;
