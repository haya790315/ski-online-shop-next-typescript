import React, { ChangeEvent, useEffect, useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import validator from "validator";
import axios from "axios";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

interface ILoginForm {
  display: boolean;
}

const LoginForm = ({ display }: ILoginForm) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [validation, setValidation] = useState(false);
  const [loginFailMessage, setLoginFailMessage] = useState("");
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { email, password } = inputValue;

  const inputOnChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setInputValue({ ...inputValue, [type]: event.target.value });
  };

  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
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
    // check if user is registered
    // const response = await axios({
    //   method: "post",
    //   url: `${process.env.NEXT_PUBLIC_URI_DOMAIN}/api/auth/login`,
    //   data: inputValue,
    // });

    // if (response.data.success) {
    //   console.log(response.data.message);
    //   router.replace("/");
    // } else {
    //   setLoginFailMessage(response.data.message);
    // }
    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!response.ok) {
      console.log(response);
    } else {
      router.push("/");
      console.log(response);
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
        <button
          disabled={!validation}
          type="submit"
          className={`inline-block h-11 w-10/12  button_orange focus:bg-blue-700 ${
            !validation && "bg-zinc-600 opacity-50 cursor-pointer"
          }`}
        >
          ログイン
        </button>
        {loginFailMessage && (
          <p className="text-red-600 text-base text-center p-5 absolute bottom-0">
            {loginFailMessage}
          </p>
        )}
      </form>
    </>
  );
};

export default LoginForm;
