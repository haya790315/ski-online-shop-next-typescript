import OrderForm from "components/Form/OrderForm/OrderForm";
import PaymentForm from "components/Form/OrderForm/PaymentForm";
import Navbar from "components/Navbar";
import React from "react";

const Order = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center my-10">
        <div className="bg-orange-500 relative h-8 w-8 p-1 rounded-full text-center text-white">
          <b>1</b>
          <span className="absolute mt-2 left-0 block text-orange-300 w-max text-xs md:text-sm">
            バスケット
          </span>
        </div>

        <div className="bg-orange-500 h-[2px] w-1/4 md:w-1/3"></div>
        <div className="bg-orange-500 relative h-8 w-8 p-1 rounded-full text-center text-white">
          <b> 2</b>
          <span className="absolute mt-2 left-0 block text-orange-300 w-max text-xs md:text-sm">
            出荷情報
          </span>
        </div>
        <div className="bg-zinc-400 h-[2px]  w-1/4 md:w-1/3"></div>
        <div className="bg-zinc-600 relative h-8 w-8 p-1 rounded-full text-center text-white">
          <b> 3 </b>
          <span className="absolute mt-2 left-0 block text-zinc-400 w-max text-xs md:text-sm">
            注文の確認
          </span>
        </div>
      </div>

      <section className="w-11/12  h-max relative mx-auto my-5 bg-white shadow-xl rounded-xl py-6">
        <h1 className="py-4 ml-4 font-semibold">出荷情報</h1>
        <OrderForm />
      </section>
      <section className="w-11/12  h-max relative mx-auto my-10 bg-white shadow-xl rounded-xl">
        <h1 className="py-4 ml-4 font-semibold">お支払方法</h1>
        <PaymentForm />
      </section>

      <button className="block h-11 w-11/12 mb-2 mx-auto -mt-2 button_orange focus:bg-blue-700">支払う</button>
    </>
  );
};

Order.getLayout = (page: React.ReactNode) => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600">

      {page}
      </div>
    </>
  );
};

export default Order;
