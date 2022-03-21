import React,{useCallback} from "react";
import Image from "next/image";
import YenIcon from "../../public/image/static/YenIcon.svg";
import Link from "next/link";
import { useCartContext } from "../../store/cart-context";

interface ICartDropProps {
  cartDropMenuHandler: {
    mouseEnter: () => void;
    mouseLeave: () => void;
  };
}




const CartDropMenu = ({ cartDropMenuHandler}: ICartDropProps) => {
  const { cart, cartOrder } = useCartContext();

  const totalPriceCalculator = useCallback((): number => {
    if (cart.length < 1) return 0;
    const orderPriceArray = cart.flatMap((item) => {
      return cartOrder.map((order) => {
        if (order.id === item.id) {
          return (+item.price) * (+order.option[1]);
        } else return 0;
      });
    });
    const totalPrice = orderPriceArray.reduce(
      (prev, current) => prev + current,
      0
    );
    return totalPrice;
  }, [cartOrder, cart]);
  

  return (
    <div
      className="flex absolute flex-col right-0 top-4 h-80"
      onMouseEnter={cartDropMenuHandler.mouseEnter}
      onMouseLeave={cartDropMenuHandler.mouseLeave}
    >
      <div className="h-8"></div>
      {cart.length > 0 && (
        <div className="flex flex-col justify-between mt-2 px-2 h-full text-black bg-white overflow-y-auto  overscroll-none scroll-smooth shadow-lg border-solid border-2  scrollbar ">
          {cart.map((item, i) => {
            const order = cartOrder.find(order=>order.id===item.id)
            
            return (
              <Link href="/product/[id]" as={`/product/${item.id}`} key={i}>
                <a href="">
                  <div
                    className="relative flex w-full justify-evenly items-center py-4 px-4 border-b-2 border-solid border-b-slate-200 cursor-pointer"
                    key={i}
                  >
                  <div className="absolute top-0 left-0 text-white font-semibold bg-red-500 rounded-full h-6 w-6 flex justify-center items-center mt-2 z-10 ">{order?.option[1]}</div>
                    <div className="h-24 w-24 relative">
                      <Image
                        src={item.imageURL}
                        alt="name"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center center"
                        quality={100}
                      />
                    </div>
                    <div className="ml-4">
                      <strong>{item.brand}</strong>
                      <h4 className="text-sm overflow-hidden text-ellipsis">
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
              {totalPriceCalculator()}
            </span>
          </div>
          <Link href="/cart">
            <a>
              <button className="block h-11 w-full mb-2 -mt-2 button_orange focus:bg-blue-700">
                バスケットを見る
              </button>
            </a>
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
