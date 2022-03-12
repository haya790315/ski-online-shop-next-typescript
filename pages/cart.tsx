import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import CustomerSelect from "../components/CustomerSelect";
import { IoIosClose } from "react-icons/io";

const size = ["S", "M", "L", "XL"];
const quantity = ["1", "2", "3", "4", "5"];

const Cart: NextPage = () => {
  return (
    <div className="bg-stone-900 h-max w-full relative text-white text-center ">
      <h1 className="text-7xl font-semibold py-20">カート</h1>
      <div className="flex flex-row w-container">
        <div className="flex flex-col flex-1 justify-between border-t border-solid border-slate-700">
          <div className="relative flex flex-row justify-between p-6  border-b border-solid border-slate-700">
            <Image
              src="https://www.snowinn.com/f/13769/137692714/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-flight-tracker-xm-prizm-snow.jpg"
              alt={""}
              height={200}
              width={200}
              objectFit="contain"
              priority
              objectPosition="center center"
              quality={100}
            />
            <div className="flex flex-row items-start justify-between">
              <div className="text-left ml-4 text-xl">
                <h1>Oakley スキー用のゴーグル Flight Tracker XM</h1>
                <div className="text-lg text-slate-300 mt-5">
                  <span className="block text-zinc-400">
                    サイズ:<strong className="ml-2">S</strong>
                  </span>
                  <span className="block text-zinc-400">
                    数量:<strong className="ml-2">5</strong>
                  </span>
                </div>
              </div>
              <span className="text-2xl flex-1">¥17,600</span>
            </div>
            <div className="absolute flex justify-center items-center h-16 bottom-0 right-0 w-1/2">
              <CustomerSelect option={size} label="サイズ" />
              <CustomerSelect option={quantity} label="数量" />
              <div className="flex shrink items-center justify-center text-4xl h-full w-20 outline-1 outline  outline-slate-700">
                <IoIosClose />
              </div>
            </div>
          </div>

          <button className=" h-24 w-full  bg-zinc-700 text-xl font-medium mt-40 bottom-0 hover:opacity-80">
            ショッピングを続ける
          </button>
        </div>
        <div className=" flex flex-col justify-between flex-1  border-l border-t border-solid border-slate-700">
          <div className="flex flex-col  p-6 border-b border-solid border-slate-700">
            <h2 className="text-3xl pb-20">概要</h2>
            <div className="flex flex-row justify-between item-center py-2 border-b border-solid border-slate-700">
              <span>小計</span>
              <span>￥140502</span>
            </div>
            <div className="flex flex-row justify-between item-center py-2 border-b border-solid border-slate-700">
              <span>内消費税</span>
              <span>￥14050</span>
            </div>
            <div className="flex flex-row justify-between item-center py-2 border-b border-solid border-slate-700">
              <span>配送金額</span>
              <span className="text-slate-400">注文手続き時に算出されます</span>
            </div>

            <div className="flex flex-row justify-between item-center pt-20  border-solid border-slate-700">
              <span>合計</span>
              <span className="text-stone-200 text-4xl">￥140502</span>
            </div>
          </div>
          <button className="block h-24 w-full  bg-slate-50 text-stone-900 text-xl  font-medium mt-40 hover:opacity-90">
            注文手続きへ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
