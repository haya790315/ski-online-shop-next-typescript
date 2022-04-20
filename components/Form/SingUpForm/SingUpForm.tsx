import React, { useEffect, useState } from "react";
import validator from "validator";
import axios from "axios";
import { toast } from "react-toastify";
import styles from "styles/LoadingSpin.module.css"

interface ISingUpForm {
  display: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SingUpForm = ({ display, setShowLogin }: ISingUpForm) => {
  const [nameOnFocus, setUserNameOnFocus] = useState(false);
  const [emailOnFocus, setEmailOnFocus] = useState(false);
  const [passwordOnFocus, setPasswordOnFocus] = useState(false);
  const [validation, setValidation] = useState(false);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [errorNumber, setErrorNumber] = useState(0);
  const [emailDuplicated, setEmailDuplicated] = useState(false);
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [emailDuplicatedMessage, setEmailDuplicatedMessage] = useState("");
  const checkEmailDuplicated = async () => {
    if (!validator.isEmail(email)) return setEmailOnFocus(true);

    setIsCheckingEmail(true);
    const response = await axios.get(`api/auth/register?apikey=${process.env.NEXT_PUBLIC_API_KEY}&email=${email}`);
    if (response.data.success) {
      setEmailDuplicated(true);
      setEmailDuplicatedMessage(response.data.message);
    } else {
      setEmailDuplicated(false);
      setEmailDuplicatedMessage(response.data.message);
    }
    setIsCheckingEmail(false);
    return setEmailOnFocus(true);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await axios({
      method: "post",
      headers:{ authorization: process.env.NEXT_PUBLIC_API_TOKEN },
      url: `api/auth/register`,
      data: {
        name,
        email,
        password,
      },
    });

    if (response.data.success) {
      // console.log("created");
      toast.success("アカウントを作成しました。", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
      setShowLogin(false);
    }
  };

  useEffect(() => {
    setValidationMessage("");
    setErrorNumber(0);
    if (
      nameOnFocus &&
      (!validator.isLength(name, { min: 6, max: 10 }) ||
        validator.isEmpty(name, { ignore_whitespace: true }))
    ) {
      setValidationMessage("「ユーザーネーム」:半角英数6文字以上10文字以内");
      setErrorNumber(1);
      setValidation(false);
      return;
    } else if (emailOnFocus && !validator.isEmail(email)) {
      setValidationMessage("メールアドレスが正しくありません");
      setErrorNumber(2);
      setValidation(false);
      return;
    } else if (
      passwordOnFocus &&
      (!validator.isLength(password, { min: 6, max: undefined }) ||
        validator.isEmpty(password, { ignore_whitespace: true }))
    ) {
      setValidationMessage("「パスワード」:半角英数6文字以上");
      setErrorNumber(3);
      setValidation(false);
      return;
    } else if (
      passwordConfirm &&
      !validator.equals(passwordConfirm, password)
    ) {
      setValidationMessage("パスワードが一致していません.");
      setValidation(false);
      return;
    } else if (
      !(name && email && password && passwordConfirm && !emailDuplicated)
    ) {
      setValidation(false);
      return;
    } else return setValidation(true);
  }, [
    name,
    email,
    password,
    nameOnFocus,
    emailOnFocus,
    passwordOnFocus,
    passwordConfirm,
    emailDuplicated,
  ]);

  return (
    <>
      {" "}
      <form
        className={`flex flex-col h-full w-full mt-4 justify-center items-center ${
          !display && "display-none"
        }`}
        onSubmit={(event) => submitHandler(event)}
      >
        <div className="w-10/12">
          <input
            name="name"
            type="text"
            placeholder="ユーザーネーム"
            id="name"
            className="h-8  w-full border-2 border-zinc-300 text-center space-x-1 border-solid rounded  text-sky-500 font-semibold focus:border_blue"
            style={{ borderColor: errorNumber === 1 ? "#D25050" : "" }}
            value={name}
            onBlur={() => setUserNameOnFocus(true)}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <p className="text-xs text-neutral-400 mb-2">*半角英数6文字以上</p>
          <input
            name="email"
            type="email"
            placeholder="メールアドレス"
            id="email"
            className="h-8  w-full  border-2 border-zinc-300 text-center space-x-1 border-solid rounded  text-sky-500 font-semibold focus:border_blue"
            style={{ borderColor: errorNumber === 2 ? "#D25050" : "" }}
            value={email}
            onBlur={() => checkEmailDuplicated()}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <div
            className={`text-xs h-4  mb-2 ${
              emailDuplicated ? "text-red-600" : "text-green-400"
            }`}
          >
            {isCheckingEmail?( <div className={styles.loader_checkEmail}></div>):emailDuplicatedMessage}
          </div>
          <input
            name="password"
            type="password"
            placeholder="パスワード"
            id="password"
            className="h-8  w-full  border-2 border-zinc-300 text-center space-x-1 border-solid rounded  text-sky-500 font-semibold focus:border_blue"
            style={{ borderColor: errorNumber === 3 ? "#D25050" : "" }}
            value={password}
            onBlur={() => setPasswordOnFocus(true)}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p className="text-xs text-neutral-400 mb-2">*半角英数6文字以上</p>
          <input
            name="password_confirm"
            placeholder="パスワード確認"
            type="password"
            id="password_confirm"
            className="h-8 w-full border-2 border-zinc-300 text-center  border-solid rounded  text-sky-500 font-semibold focus:border_blue"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          ></input>
        </div>
        <button
          disabled={!validation}
          type="submit"
          className={`inline-block h-11 w-10/12 mt-4 button_orange focus:bg-blue-700 ${
            !validation && "bg-zinc-600 opacity-50 cursor-pointer"
          }`}
        >
          アカウントを作成
        </button>
        <p className="text-red-600 text-xs leading-4 text-center p-5 absolute bottom-0">
          {validationMessage}
        </p>
      </form>
    </>
  );
};

export default SingUpForm;
