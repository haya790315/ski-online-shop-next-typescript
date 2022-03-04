import React from "react";
import Featured from "../../components/Feature/Feature";
import Image from "next/image";
import logo from "../../public/image/BrandLogo/BurtonLogo.jpg";
import YenIcon from "../../public/image/static/YenIcon.svg";

const ProductDetail = () => {
  return (
    <>
      <div className="relative h-auto flex flex-col items-center mt-20 px-4  lg:pl-8 lg:flex-row">
        <div>
          <Featured />
        </div>
        <div className="flex flex-col w-full lg:absolute lg:w-1/3 lg:items-start lg:top-0 lg:right-10">
          <div className="flex flex-col items-start w-full font-extrabold">
            <Image
              src={logo}
              alt="logo"
              height={100}
              width={100}
              objectFit="contain"
              quality={100}
            />
            <div className="flex  flex-col  text-3xl ">
              <div className="flex justify-start items-center mb-2 ">
                <h1 className="mr-4">Burton</h1>
                <h2>スノーボード</h2>
              </div>
              <h2>Family Tree 3D Big-Mountain</h2>
            </div>
            <p className="text-4xl  flex items-end my-6">
              <YenIcon className="w-10 h-10 fill-current " /> 62643
            </p>
          </div>
          <div className="flex flex-col w-full lg:flex-row lg:justify-between ">
            <p className="flex flex-col font-semibold lg:w-3/5">
              <label htmlFor="size">サイズ</label>
              <select
                id="size"
                name="item-size"
                className="h-10 my-2  border-2 border-solid rounded text-center  text-sky-500 font-semibold focus:border_blue"
              >
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </p>
            <p className="flex flex-col items-start font-semibold lg:w-1/4">
              <label htmlFor="quantity">数量</label>
              <input
                type="number"
                id="quantity"
                name="item-quantity"
                min="1"
                max="10"
                step="1"
                required
                className="h-10 w-full my-2 text-center font-semibold  input_button_lg border-2 border-solid rounded-sm  focus:border_blue"
              />
            </p>
          </div>
          <span className="text-green-500 font-medium my-2">在庫あり</span>
          <button className="h-11 w-full mb-4 button_orange focus:outline-none ">
            カートに入れる
          </button>
          <p>
            今すぐご注文した場合、商品のお届け予定日は 火曜日 8 3月 - 水曜日 9
            3月 となります
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
