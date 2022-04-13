import React, {
  ChangeEvent,
  useEffect,
  useState,
} from "react";
import { BsEyeSlash } from "react-icons/bs";
import validator from "validator";

interface IInput {
  [key: string]: string;
  EMAIL: string;
  PASSWORD: string;
}

const LoginForm = ({display}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailOnFocus, setEmailOnFocus] = useState(false);
  const [passwordOnFocus, setPasswordOnFocus] = useState(false);
  const [validation, setValidation] = useState(false);

  // const validation = useRef(false);

  const [inputValue, setInputValue] = useState<IInput>({
    EMAIL: "",
    PASSWORD: "",
  });

  const inputOnChangeHandler = (
    event: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setInputValue({ ...inputValue, [type]: event.target.value });
  };

  useEffect(() => {
    if (!(passwordOnFocus && emailOnFocus)) return;
    for (const k in inputValue) {
      if (inputValue[k] === "") {
        // validation.current = false;
        setValidation(false);
      } else if (!validator.isEmail(inputValue["EMAIL"])) {
        // validation.current = false;
        setValidation(false);
      } else if (inputValue["PASSWORD"].length < 6) {
        // validation.current = false;
        setValidation(false);
      } else setValidation(true);
    }
  }, [inputValue, passwordOnFocus, emailOnFocus]);
  console.count();

  return (
    <>
      <form
        action="login"
        className={`flex flex-col h-full w-full justify-evenly items-center ${!display&& "display-none"}`}
      >
        <div className="flex flex-col items-center h-1/4 w-10/12">
          <input
            name="email"
            type="email"
            placeholder="メールアドレス"
            id="email_login"
            className="h-10  w-full mb-4 border-2 border-zinc-300 text-center space-x-1 border-solid rounded  text-sky-500 font-semibold focus:border_blue"
            value={inputValue.EMAIL}
            onFocus={() => setEmailOnFocus(true)}
            onChange={(event) => inputOnChangeHandler(event, "EMAIL")}
          ></input>

          <input
            name="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="パスワード"
            id="password"
            className="h-10 w-full mb-4 border-2 border-zinc-300 text-center  border-solid rounded  text-sky-500 font-semibold focus:border_blue"
            value={inputValue.PASSWORD}
            onFocus={() => setPasswordOnFocus(true)}
            onChange={(event) => inputOnChangeHandler(event, "PASSWORD")}
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
          className={`inline-block h-11 w-10/12  button_orange focus:bg-blue-700 ${
            !validation && "bg-zinc-600 opacity-50 cursor-pointer" 
          }`}
        >
          ログイン
        </button>
      </form>
      {
        <p className="text-red-600 text-base text-center p-5 absolute bottom-0">
          メールアドレスとパスワードをもう一度ご確認ください。
        </p>
      }
    </>
  );
};

export default LoginForm;
