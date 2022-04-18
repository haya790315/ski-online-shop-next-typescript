import React, { ChangeEvent, useEffect, useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import validator from "validator";
import style from "styles/LoadingSpin.module.css";
import { signIn, useSession } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";

interface ILoginForm {
  display: boolean;
}

const LoginForm = ({ display }: ILoginForm) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [validation, setValidation] = useState(false);
  const [loginFailMessage, setLoginFailMessage] = useState("");
  const [login, setIsLogin] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const inputOnChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setInputValue({ ...inputValue, [type]: event.target.value });
  };

  const { data: session } = useSession();

  useEffect(() => {
    setLoginFailMessage("");
    if (
      validator.isEmpty(email, { ignore_whitespace: true }) ||
      validator.isEmpty(password, { ignore_whitespace: true })
    ) {
      setValidation(false);
      return;
    }
    if (!validator.isEmail(email)) {
      setValidation(false);
    } else if (password.length < 6) {
      setValidation(false);
    } else return setValidation(true);
  }, [email, password, session]);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLogin(true);
    const response = await signIn<any>("credentials", {
      redirect: false,
      email,
      password,
    });
    setIsLogin(false);
    if (response?.ok) {
      console.log("login");
    } else {
      setLoginFailMessage(
        "メールアドレス、もしくはパスワードが間違っています。"
      );
    }
    console.log(response);
  };

  return (
    <>
      <form
        className={`flex flex-col h-full w-full justify-evenly items-center ${
          !display && "display-none"
        }`}
        onSubmit={(event) => submitHandler(event)}
      >
        <div className="flex flex-col items-center h-1/4 w-10/12">
          <input
            name="email"
            type="email"
            placeholder="メールアドレス"
            id="email_login"
            className="h-10 w-full mb-4 border-2 border-zinc-300 text-center  border-solid rounded  text-sky-500 font-semibold focus:border_blue"
            value={inputValue.email}
            onChange={(event) => inputOnChangeHandler(event, "email")}
          ></input>
          <input
            name="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="パスワード"
            id="password_login"
            className="h-10 w-full mb-4 border-2 border-zinc-300 text-center  border-solid rounded  text-sky-500 font-semibold focus:border_blue"
            value={inputValue.password}
            onChange={(event) => inputOnChangeHandler(event, "password")}
          ></input>
        </div>
        <span
          onClick={() => setPasswordVisible(!passwordVisible)}
          className={`absolute right-10 mb-10 cursor-pointer ${
            passwordVisible && "text-gray-500"
          }`}
        >
          <BsEyeSlash />
        </span>
        <p className="inline-block text-sm absolute">
          パスワードをお忘れですか？
        </p>
        <div className="absolute bottom-2 mt-8 flex flex-row justify-between items-center">
          <button
            type="button"
            onClick={() => signIn("github")}
            className="h-6 w-6 flex justify-center items-center rounded-full button_orange focus:bg-blue-700 mr-5"
          >
            <span>
              <AiFillGithub />
            </span>
          </button>
          <button
            type="button"
            onClick={() => signIn("google")}
            className="h-6 w-6 flex justify-center items-center rounded-full button_orange focus:bg-blue-700 mr-5"
          >
            <span>
              <FcGoogle />
            </span>
          </button>
        </div>

        <button
          disabled={!validation}
          type="submit"
          className={`relative flex justify-center items-center h-11 w-10/12 mb-5 button_orange focus:bg-blue-700 ${
            !validation && "bg-zinc-600 opacity-50 cursor-pointer"
          }`}
        >
          {login ? <div className={style.loader}></div> : "ログイン"}
        </button>

        {loginFailMessage && (
          <p className="text-red-600 text-base text-center mb-5 p-5 absolute bottom-0">
            {loginFailMessage}
          </p>
        )}
      </form>
    </>
  );
};

export default LoginForm;
