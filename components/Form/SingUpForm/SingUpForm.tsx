import React, { useEffect, useState } from "react";
import validator from "validator";
import axios from "axios";

interface ISingUpForm {
  display: boolean;
}

const SingUpForm = ({ display }: ISingUpForm) => {
  const [userNameOnFocus, setUserNameOnFocus] = useState(false);
  const [emailOnFocus, setEmailOnFocus] = useState(false);
  const [passwordOnFocus, setPasswordOnFocus] = useState(false);
  const [validation, setValidation] = useState(false);
  const [emailDuplicated, setEmailDuplicated] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [emailDuplicatedMessage, setEmailDuplicatedMessage] = useState("");

  const checkEmailDuplicated = async () => {
    if (!validator.isEmail(email)) return setEmailOnFocus(true);
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URI_DOMAIN}/api/auth/register?email=${email}`
    );
    if (response.data.success) {
      setEmailDuplicated(true);
      setEmailDuplicatedMessage(response.data.message);
    } else {
      setEmailDuplicated(false);
      setEmailDuplicatedMessage(response.data.message);
    }
    return setEmailOnFocus(true);
  };

  useEffect(() => {
    setValidationMessage("");
    if (!(userName || email || password)) return;
    if (
      userNameOnFocus &&
      (!validator.isLength(userName, { min: 6, max: 16 }) ||
        validator.isEmpty(userName, { ignore_whitespace: true }))
    ) {
      setValidationMessage("「ユーザーネーム」:半角英数6文字以上16文字以内");
      setValidation(false);
      return;
    } else if (emailOnFocus && !validator.isEmail(email)) {
      setValidationMessage("メールアドレスが正しくありません");
      setValidation(false);
      return;
    } else if (
      passwordOnFocus &&
      (!validator.isLength(password, { min: 6, max: undefined }) ||
        validator.isEmpty(password, { ignore_whitespace: true }))
    ) {
      setValidationMessage("「パスワード」:半角英数6文字以上");
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
      !(userName && email && password && passwordConfirm && !emailDuplicated)
    ) {
      setValidation(false);
      return;
    } else return setValidation(true);
  }, [
    userName,
    userNameOnFocus,
    emailOnFocus,
    email,
    passwordOnFocus,
    password,
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
        // onSubmit={(event) => submitHandler(event)}
      >
        <div className="w-10/12">
          <input
            name="userName"
            type="text"
            placeholder="ユーザーネーム"
            id="email_login"
            className="h-8  w-full border-2 border-zinc-300 text-center space-x-1 border-solid rounded  text-sky-500 font-semibold focus:border_blue"
            value={userName}
            onBlur={() => setUserNameOnFocus(true)}
            onChange={(e) => setUserName(e.target.value)}
            // onChange={(event) => inputOnChangeHandler(event, "email")}
          ></input>
          <p className="text-xs text-neutral-400 mb-2">*半角英数6文字以上</p>
          <input
            name="email"
            type="email"
            placeholder="メールアドレス"
            id="email_login"
            className="h-8  w-full  border-2 border-zinc-300 text-center space-x-1 border-solid rounded  text-sky-500 font-semibold focus:border_blue"
            value={email}
            onBlur={() => checkEmailDuplicated()}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p
            className={`"text-xs h-4  mb-2 ${
              emailDuplicated ? "text-red-600" : "text-green-400"
            }`}
          >
            {emailDuplicatedMessage}
          </p>
          <input
            name="password"
            type="password"
            placeholder="パスワード"
            id="password"
            className="h-8  w-full  border-2 border-zinc-300 text-center space-x-1 border-solid rounded  text-sky-500 font-semibold focus:border_blue"
            value={password}
            onBlur={() => setPasswordOnFocus(true)}
            onChange={(e) => setPassword(e.target.value)}
            // onChange={(event) => inputOnChangeHandler(event, "password")}
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
            // onChange={(event) => inputOnChangeHandler(event, "password")}
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
