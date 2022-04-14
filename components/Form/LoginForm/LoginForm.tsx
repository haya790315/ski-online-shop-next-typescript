import React, { ChangeEvent, useEffect, useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import validator from "validator";
import axios from "axios";
import { useRouter } from "next/router";

interface IInput {
  [key: string]: string;
  email: string;
  password: string;
}

interface ILoginForm {
  display: boolean;
}

const LoginForm = ({ display }: ILoginForm) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [validation, setValidation] = useState(false);
  const [loginFailMessage, setLoginFailMessage] = useState("");
  const [inputValue, setInputValue] = useState<IInput>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const inputOnChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setInputValue({ ...inputValue, [type]: event.target.value });
  };

  useEffect(() => {
    if (
      validator.isEmpty(inputValue["email"], { ignore_whitespace: true }) ||
      validator.isEmpty(inputValue["password"], { ignore_whitespace: true })
    )
      return;
    if (!validator.isEmail(inputValue["email"])) {
      setValidation(false);
    } else if (inputValue["password"].length < 6) {
      setValidation(false);
    } else return setValidation(true);
  }, [inputValue]);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const response = await axios.get(
    //   `${process.env.NEXT_PUBLIC_URI_DOMAIN}/api/auth/user?email=${inputValue["email"]}&password=${inputValue["password"]}`
    // );

    const response = await axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_URI_DOMAIN}/api/auth/user?email=${inputValue["email"]}&password=${inputValue["password"]}`,
    });

    if (response.data.success) {
      console.log("login");
      router.replace("/");
    } else {
      setLoginFailMessage(response.data.message);
    }
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
            className="h-10  w-full mb-4 border-2 border-zinc-300 text-center space-x-1 border-solid rounded  text-sky-500 font-semibold focus:border_blue"
            value={inputValue.email}
            onChange={(event) => inputOnChangeHandler(event, "email")}
          ></input>
          <input
            name="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="パスワード"
            id="password"
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
        <button
          disabled={!validation}
          type="submit"
          className={`inline-block h-11 w-10/12  button_orange focus:bg-blue-700 ${
            !validation && "bg-zinc-600 opacity-50 cursor-pointer"
          }`}
        >
          ログイン
        </button>
      </form>
      {loginFailMessage && (
        <p className="text-red-600 text-base text-center p-5 absolute bottom-0">
          {loginFailMessage}
        </p>
      )}
    </>
  );
};

export default LoginForm;
