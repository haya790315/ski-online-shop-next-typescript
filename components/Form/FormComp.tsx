import React from "react";

interface IFormComp {
  children: React.ReactNode;
  loginFormActive: boolean;
  setLoginFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
}

const FormComp = ({
  loginFormActive,
  setLoginFormActive,
  children,
  darkMode,
}: IFormComp) => {
  console.log(darkMode);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div
        className={`w-80 h-96 relative mt-10 bg-white opacity-100 z-400 shadow-inner rounded-xl overflow-hidden dark:bg-[rgb(55,55,71)] dark:text-white`}
      >
        <div className="absolute flex flex-row top-0 h-12 w-full text-center  bg-stone-500 text-zinc-700 dark:bg-[rgb(55,55,71)]">
          <h3
            onClick={() => setLoginFormActive(true)}
            className={` w-1/2 h-full pt-3 cursor-pointer dark:text-white ${
              loginFormActive && "bg-white font-semibold dark:bg-[#84248B]"
            }`}
          >
            ログイン
          </h3>
          <h3
            onClick={() => setLoginFormActive(false)}
            className={` w-1/2 h-full pt-3 cursor-pointer dark:text-white ${
              !loginFormActive && "bg-white font-semibold dark:bg-[#84248B]"
            }`}
          >
            アカウントを作成
          </h3>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FormComp;
