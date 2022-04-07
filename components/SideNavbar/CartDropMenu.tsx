import React, { useCallback } from "react";
import Image from "next/image";
import YenIcon from "public/image/static/YenIcon.svg";
import Link from "next/link";
import { useCartContext } from "store/cart-context";
import { calculateTotal } from "lib/util/util";

interface ICartDropProps {
  cartDropMenuHandler: {
    mouseEnter: () => void;
    mouseLeave: () => void;
  };
}

const CartDropMenu = ({ cartDropMenuHandler }: ICartDropProps) => {
  const { cart, cartOrder } = useCartContext();

  const autoPriceCalculator = useCallback((): number => {
    if (!cart.length) return 0;
    return calculateTotal(cart, cartOrder);
  }, [cartOrder, cart]);

  return (
    <div
      className="flex absolute flex-col right-0 top-3 h-80"
      onMouseEnter={cartDropMenuHandler.mouseEnter}
      onMouseLeave={cartDropMenuHandler.mouseLeave}
    >
      <div className="h-8"></div>
      {cart.length > 0 && (
        <div className="flex flex-col justify-between mt-2 px-2 h-full text-black bg-white overflow-y-auto  overscroll-none scroll-smooth shadow-lg border-solid border-2  scrollbar ">
          {cart.map((item, i) => {
            const order = cartOrder.find((order) => order.id === item._id);

            return (
              <Link href="/product/[id]" as={`/product/${item._id}`} key={i}>
                <a href="">
                  <div
                    className="relative flex flex-row w-full  p-4 border-b-2 border-solid border-b-slate-200 cursor-pointer"
                    key={i}
                  >
                    <div className="absolute top-0 left-0 text-white font-semibold bg-red-500 rounded-full h-6 w-6 flex justify-center items-center mt-2 z-10 ">
                      {order && order.option[1]}
                    </div>
                    <div className="h-24 w-24 relative shrink-0">
                      <Image
                        src={item.imageURL}
                        alt="name"
                        height={120}
                        width={120}
                        objectFit="contain"
                        objectPosition="center center"
                        quality={100}
                      />
                    </div>
                    <div className="ml-5">
                      <strong>{item.brand}</strong>
                      <h4 className="text-sm my-1 overflow-hidden text-ellipsis">
                        {item.model}
                      </h4>
                      <span>
                        <YenIcon className="fill-current h-4 w-4 inline-block mb-1" />
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
              {autoPriceCalculator()}
            </span>
          </div>
          <Link href="/cart" passHref>
            <button className="block h-11 w-full mb-2 -mt-2 button_orange focus:bg-blue-700">
              <a>バスケットを見る</a>
            </button>
          </Link>
        </div>
      )}
      {cart.length === 0 && (
        <div className="flex place-items-center mt-2 px-2 h-full w-max font-semibold text-zinc-400 bg-white drop-shadow-md border-solid border-2">
          何も入ってありません
        </div>
      )}
    </div>
  );
};

export default CartDropMenu;
