import React from "react";
import Image from "next/image";
import YenIcon from "../../public/image/static/YenIcon.svg";
import Link from "next/link";
interface ICartDropProps {
  cartDropMenuHandler: {
    mouseEnter: () => void;
    mouseLeave: () => void;
  };
}

const cartMenu = [
  {
    id: "398823592",
    brand: "Dc Shoes",
    name: "スノーボードブーツ",
    model: "Phase",
    price: "13956",
    imageURL:
      "https://www.snowinn.com/f/13815/138153231/dc-shoes-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-phase.jpg",
    picture: [
      "https://www.snowinn.com/f/13815/138153231/dc-shoes-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-phase.jpg",
      "https://www.snowinn.com/f/13815/138153231_2/dc-shoes-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-phase.jpg",
      "https://www.snowinn.com/f/13815/138153231_3/dc-shoes-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-phase.jpg",
      "https://www.snowinn.com/f/13815/138153231_4/dc-shoes-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-phase.jpg",
      "https://www.snowinn.com/f/13815/138153231_6/dc-shoes-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-phase.jpg",
    ],
  },
  {
    id: "3912323592",
    brand: "Nitro",
    name: "スノーボード",
    model: "Cheap Trills",
    price: "40745",
    imageURL:
      "https://www.snowinn.com/f/13836/138368259/nitro-%E3%83%AF%E3%82%A4%E3%83%89%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-cheap-trills.jpg",
    picture: [
      "https://www.snowinn.com/f/13836/138368259/nitro-%E3%83%AF%E3%82%A4%E3%83%89%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-cheap-trills.jpg",
      "https://www.snowinn.com/f/13836/138368259_5/nitro-%E3%83%AF%E3%82%A4%E3%83%89%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-cheap-trills.jpg",
      "https://www.snowinn.com/f/13836/138368259_2/nitro-%E3%83%AF%E3%82%A4%E3%83%89%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-cheap-trills.jpg",
      "https://www.snowinn.com/f/13836/138368259_3/nitro-%E3%83%AF%E3%82%A4%E3%83%89%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-cheap-trills.jpg",
      "https://www.snowinn.com/f/13836/138368259_4/nitro-%E3%83%AF%E3%82%A4%E3%83%89%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-cheap-trills.jpg",
    ],
  },
  {
    id: "3885010",
    brand: "Oakley",
    name: "スキー用のゴーグル",
    model: "Fall Line XM",
    price: "15843",
    imageURL:
      "https://www.snowinn.com/f/13728/137283202/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-fall-line-xm-prizm-snow.jpg",
    picture: [
      "https://www.snowinn.com/f/13728/137283202/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-fall-line-xm-prizm-snow.jpg",
      "https://www.snowinn.com/f/13728/137283202_2/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-fall-line-xm-prizm-snow.jpg",
      "https://www.snowinn.com/f/13728/137283202_3/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-fall-line-xm-prizm-snow.jpg",
      "https://www.snowinn.com/f/13728/137283202_4/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-fall-line-xm-prizm-snow.jpg",
    ],
  },
  {
    id: "39490503",
    brand: "Oakley",
    name: "スキー用のゴーグル",
    model: "Flight Tracker XM",
    price: "13387",
    imageURL:
      "https://www.snowinn.com/f/13769/137692714/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-flight-tracker-xm-prizm-snow.jpg",
    picture: [
      "https://www.snowinn.com/f/13769/137692714/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-flight-tracker-xm-prizm-snow.jpg",
      "https://www.snowinn.com/f/13769/137692714_2/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-flight-tracker-xm-prizm-snow.jpg",
      "https://www.snowinn.com/f/13769/137692714_3/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-flight-tracker-xm-prizm-snow.jpg",
      "https://www.snowinn.com/f/13769/137692714_6/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-flight-tracker-xm-prizm-snow.jpg",
    ],
  },
];

const CartDropMenu = ({ cartDropMenuHandler }: ICartDropProps) => {
  const totalPrice = cartMenu
    .map((item) => Number(item.price))
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  return (
    <div
      className="flex absolute flex-col right-0 top-8 h-80 "
      onMouseEnter={cartDropMenuHandler.mouseEnter}
      onMouseLeave={cartDropMenuHandler.mouseLeave}
    >
      <div className="h-8"></div>

      <div className="mt-2 pl-3 h-full  text-black bg-white  overflow-y-auto  overscroll-none scroll-smooth shadow-lg border-solid border-2  scrollbar ">
        {cartMenu.map((item, i) => {
          return (
          <Link href="/product/[id]" as={`/product/${item.id}`} key={i}>
          <a href="">
            <div
              className=" relative  flex  w-full justify-evenly items-center py-4 px-4 border-b-2 border-solid border-b-slate-200 cursor-pointer"
              key={i}
              >
              <div className="h-24 w-24 relative flex-shrink-0">
                <Image
                  src={item.imageURL}
                  alt="name"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center center"
                  quality={100}
                />
              </div>
              <div className=" ml-4">
                <strong>{item.brand}</strong>
                <h4 className="text-sm overflow-hidden text-ellipsis">
                  {item.model}
                </h4>
                <span>
                  <YenIcon className="fill-current inline-block mb-1" />
                  {item.price}
                </span>
              </div>
            </div>
                  </a>
                </Link>
          );
        })}
        <div className="p-4 text-left text-slate-700 font-semibold">
          <span>小計 : </span>
          <span>
            <YenIcon className="fill-current inline-block mb-1" />
            {totalPrice}
          </span>
        </div>
        <button className="block h-11 w-full mb-2 -mt-2 button_orange focus:bg-blue-700">
          バスケットを見る
        </button>
      </div>
    </div>
  );
};

export default CartDropMenu;
