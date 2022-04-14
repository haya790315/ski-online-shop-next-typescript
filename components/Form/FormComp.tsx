import React, { FC, useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import SingUpForm from "./SingUpForm/SingUpForm";

const FormComp: FC = () => {
  const [loginFormActive, setLoginFormActive] = useState(true);

  return (
    <div className="w-80 h-96 relative bg-white opacity-100 z-400 shadow-inner rounded-xl overflow-hidden">
      <div className="absolute flex flex-row top-0 h-12 w-full text-center  bg-stone-500 text-zinc-700">
        <h3
          onClick={() => setLoginFormActive(true)}
          className={` w-1/2 h-full pt-3 cursor-pointer ${
            loginFormActive && "bg-white font-semibold "
          }`}
        >
          ログイン
        </h3>
        <h3
          onClick={() => setLoginFormActive(false)}
          className={` w-1/2 h-full pt-3 cursor-pointer ${
            !loginFormActive && "bg-white font-semibold"
          }`}
        >
          アカウントを作成
        </h3>
      </div>
      <LoginForm display={loginFormActive}/>
      <SingUpForm display={!loginFormActive}/>
    </div>
  );
};

export default FormComp;
