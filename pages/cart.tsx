import React, { useEffect, useState, useCallback } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import CustomerSelect from "../components/CustomerSelect";
import { IoIosClose } from "react-icons/io";
import { useCartContext } from "../store/cart-context";
import { calculateTax, currencyFormat } from "../util/util";

const size = ["S", "M", "L", "XL"];
const quantity = ["1", "2", "3", "4", "5"];

export interface IOption {
  size: string;
  quantity: string;
}

const Cart: NextPage = () => {
  const { cart, setCartOrder, cartOrder } = useCartContext();
  const [id, setId] = useState<string>("");
  const [option, setOption] = useState<IOption>({
    size: "",
    quantity: "",
  } as IOption);

  const changeCartOrderHandler = useCallback(() => {
    const optionArray = Object.values(option);

    const newOrder = { id, option: optionArray };
    const idsArray = cartOrder.map((item) => item.id);
    if (cartOrder.length > 0 && idsArray.includes(id)) {
      const newCartOrder = cartOrder.map((item) => {
        if (item.id === id) {
          return { ...item, option: optionArray };
        } else {
          return item;
        }
      });
      setCartOrder([...newCartOrder]);
    } else {
      setCartOrder([...cartOrder, newOrder]);
    }
  }, [option, id]);

  const totalPriceCalculator = useCallback((): number => {
    if (cart.length < 1) return 0;
    const orderPriceArray = cart.flatMap((item) => {
      return cartOrder.map((order) => {
        if (order.id === item.id) {
          return Number(item.price) * Number(order.option[1]);
        } else return 0;
      });
    });
    const totalPrice = orderPriceArray.reduce(
      (prev, current) => prev + current,
      0
    );
    return totalPrice;
  }, [cartOrder, cart]);

  const deleteCartHandler = (id: string) => {
    const newOrderList = cartOrder.filter((order) => order.id !== id);
    setCartOrder([...newOrderList]);
  };

  useEffect(() => {
    if (Object.keys(option).length > 0) {
      changeCartOrderHandler();
    }
  }, [changeCartOrderHandler, option]);

  return (
    <div className="bg-stone-900 h-max w-full relative text-white text-center ">
      <h1 className="text-7xl font-semibold py-20">カート</h1>
      <div className="flex flex-col lg:flex-row  w-container">
        <div className="flex flex-col flex-1 justify-between border-t border-solid border-slate-700">
          {cart.length > 0 &&
            cart.map((item, i) => {
              const order = cartOrder.find((order) => order.id === item.id);
              return (
                <div
                  key={i}
                  className="relative flex flex-row  items-start p-8  border-b border-solid border-slate-700"
                >
                  <Link href="/product/[id]" as={`/product/${item.id}`}>
                    <a>
                      <Image
                        src={item.imageURL}
                        alt={""}
                        height={200}
                        width={200}
                        objectFit="contain"
                        priority
                        objectPosition="center center"
                        quality={100}
                      />
                    </a>
                  </Link>

                  <div className="flex flex-col flex-1 ml-16 items-start text-left text-xl">
                    <Link href="/product/[id]" as={`/product/${item.id}`}>
                      <a>
                        {" "}
                        <h1>{item.brand + " " + item.model}</h1>
                      </a>
                    </Link>
                    <div className="text-lg pt-5">
                      <span className="text-2xl py-5">¥{item.price}</span>
                      <span className="block text-zinc-400">
                        サイズ:
                        <strong className="ml-2">{order?.option[0]}</strong>
                      </span>
                      <span className="block text-zinc-400">
                        数量:
                        <strong className="ml-2">{order?.option[1]}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="absolute flex  h-16 bottom-0 right-0 w-1/2">
                    <CustomerSelect
                      option={size}
                      setOption={setOption}
                      setId={setId}
                      label="サイズ"
                      id={item.id}
                    />
                    <CustomerSelect
                      option={quantity}
                      setOption={setOption}
                      setId={setId}
                      label="数量"
                      id={item.id}
                    />
                    <div
                      className="flex shrink items-center justify-center text-4xl h-full w-20 outline-1 outline  outline-slate-700 hover:text-gray-400"
                      onClick={() => deleteCartHandler(item.id)}
                    >
                      <IoIosClose />
                    </div>
                  </div>
                </div>
              );
            })}

          <button className="display-none lg:block h-24 w-full  bg-zinc-700 text-xl font-medium mt-40 bottom-0 hover:opacity-80 ">
            ショッピングを続ける
          </button>
        </div>
        <div className=" flex flex-col justify-between flex-1   lg:border-l border-t border-solid border-slate-700">
          <div className="flex flex-col  p-6 border-b border-solid border-slate-700 mb-40">
            <h2 className="text-3xl pb-20">概要</h2>
            <div className="flex flex-row justify-between item-center py-2 border-b border-solid border-slate-700">
              <span>小計</span>
              <span>{currencyFormat(totalPriceCalculator())}</span>
            </div>
            <div className="flex flex-row justify-between item-center py-2 border-b border-solid border-slate-700">
              <span>内消費税</span>
              <span>￥{calculateTax(totalPriceCalculator())}</span>
            </div>
            <div className="flex flex-row justify-between item-center py-2 border-b border-solid border-slate-700">
              <span>配送金額</span>
              <span className="text-slate-400">注文手続き時に算出されます</span>
            </div>

            <div className="flex flex-row justify-between item-center pt-20  border-solid border-slate-700">
              <span className="text-3xl">合計</span>
              <span className="text-stone-200 text-4xl">
                {currencyFormat(totalPriceCalculator())}
              </span>
            </div>
          </div>
          <button className="block lg:display-none h-24 w-full  bg-zinc-700 text-xl font-medium  bottom-0 hover:opacity-80 ">
            ショッピングを続ける
          </button>
          <button className="block h-24 w-full  bg-slate-50 text-stone-900 text-xl  font-medium  hover:opacity-90">
            注文手続きへ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
