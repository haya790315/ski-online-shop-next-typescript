import React from "react";

const OrderForm = () => {
  return (
    <form
      className="
      grid
      relative
      grid-col-1
      gap-8
      p-6
      w-full
      bg-white
      rounded-lg
      transition
      ease-in-out
      duration-200
      md:grid-cols-2"
    >
      <div className="relative">
        <input
          type="text"
          id="first-name"
          className="peer w-full border-b-2 border-zinc-300 text-left space-x-1 border-solid text-neutral-700 font-medium focus:outline-none placeholder-transparent"
          autoComplete="family-name"
          placeholder="姓"
        />
        <span className="absolute bottom-0 left-0 h-[2px] w-full scale-0 origin-left transition-all ease-in  duration-200 peer-focus:bg-blue-300  peer-focus:scale-100"></span>
        <label
          htmlFor="post-first-name"
          className="
    absolute
    -top-4
    peer-placeholder-shown:top-1/2
    peer-focus:-top-4
    left-2
    peer-placeholder-shown:left-0
    peer-focus:left-2
    text-sm
    font-semibold
    text-blue-400
    peer-placeholder-shown:text-zinc-400
    peer-focus:text-blue-400
    transition-all
      linear
      duration-300
    -translate-y-1/2 "
        >
          姓
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          id="last-name"
          className="peer w-full border-b-2 border-zinc-300 text-left space-x-1 border-solid text-neutral-700 font-medium focus:outline-none placeholder-transparent"
          autoComplete="given-name"
          placeholder="名"
        />
        <span className="absolute bottom-0 left-0 h-[2px] w-full scale-0 origin-left transition-all ease-in  duration-200 peer-focus:bg-blue-300  peer-focus:scale-100"></span>
        <label
          htmlFor="last-name"
          className="text-blue-400 text-sm font-semibold  absolute  -top-4  left-2  -translate-y-1/2 transition-all
          linear
          duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-1/2
    peer-placeholder-shown:text-zinc-400
    peer-focus:-top-4
    peer-focus:left-2
    peer-focus:text-blue-400"
        >
          名
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          id="post-code"
          className="peer w-full border-b-2 border-zinc-300 text-left space-x-1 border-solid text-neutral-700 font-medium focus:outline-none placeholder-transparent"
          autoComplete="off"
          placeholder="郵便番号"
        />
        <span className="absolute bottom-0 left-0 h-[2px] w-full scale-0 origin-left transition-all ease-in  duration-200 peer-focus:bg-blue-300  peer-focus:scale-100"></span>
        <label
          htmlFor="post-code"
          className="
    absolute
    -top-4
    peer-placeholder-shown:top-1/2
    peer-focus:-top-4
    left-2
    peer-placeholder-shown:left-0
    peer-focus:left-2
    text-sm
    font-semibold
    text-blue-400
    peer-placeholder-shown:text-zinc-400
    peer-focus:text-blue-400
    transition-all
      linear
      duration-300
    -translate-y-1/2 "
        >
          郵便番号
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          id="address"
          className="peer w-full border-b-2 border-zinc-300 text-left space-x-1 border-solid text-neutral-700 font-medium focus:outline-none placeholder-transparent"
          autoComplete="street-address"
          placeholder="住所 (道路名と住宅番号)"
        />
        <span className="absolute bottom-0 left-0 h-[2px] w-full scale-0 origin-left transition-all ease-in  duration-200 peer-focus:bg-blue-300  peer-focus:scale-100"></span>
        <label
          htmlFor="address"
          className="text-blue-400 text-sm font-semibold  absolute  -top-4  left-2  -translate-y-1/2 transition-all
          linear
          duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-1/2
    peer-placeholder-shown:text-zinc-400
    peer-focus:-top-4
    peer-focus:left-2
    peer-focus:text-blue-400"
        >
          住所 (道路名と住宅番号)
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          id="Province"
          className="peer w-full border-b-2 border-zinc-300 text-left space-x-1 border-solid text-neutral-700 font-medium focus:outline-none placeholder-transparent"
          autoComplete="address-level1"
          placeholder="都道府県"
        />
        <span className="absolute bottom-0 left-0 h-[2px] w-full scale-0 origin-left transition-all ease-in  duration-200 peer-focus:bg-blue-300  peer-focus:scale-100"></span>
        <label
          htmlFor="Province"
          className="
    text-blue-400
    text-sm
    font-semibold
    absolute
    -top-4
    left-2
    -translate-y-1/2
    transition-all
      linear
      duration-300
    peer-placeholder-shown:left-0
    peer-placeholder-shown:top-1/2
    peer-placeholder-shown:text-zinc-400
    peer-focus:-top-4
    peer-focus:left-2
    peer-focus:text-blue-400"
        >
          都道府県
        </label>
      </div>
      <div className="relative">
        <input
          type="text"
          id="ward"
          className="peer w-full border-b-2 border-zinc-300 text-left space-x-1 border-solid text-neutral-700 font-medium focus:outline-none placeholder-transparent"
          autoComplete="address-level2"
          placeholder="市町村"
        />
        <span className="absolute bottom-0 left-0 h-[2px] w-full scale-0 origin-left transition-all ease-in  duration-200 peer-focus:bg-blue-300  peer-focus:scale-100"></span>
        <label
          htmlFor="ward"
          className="
    text-blue-400
    text-sm
    font-semibold
    absolute
    -top-4
    left-2
    -translate-y-1/2
    transition-all
      linear
      duration-300
    peer-placeholder-shown:left-0
    peer-placeholder-shown:top-1/2
    peer-placeholder-shown:text-zinc-400
    peer-focus:-top-4
    peer-focus:left-2
    peer-focus:text-blue-400"
        >
          市町村
        </label>
      </div>
    </form>
  );
};

export default OrderForm;
