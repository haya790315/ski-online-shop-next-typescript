import CustomPortalProvider from "components/CustomPortal";
import React, { useState } from "react";
import FormComp from "./FormComp";
import LoginForm from "./LoginForm/LoginForm";
import SingUpForm from "./SingUpForm/SingUpForm";

interface IFormPortal {
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormPortal = ({ showLogin, setShowLogin }: IFormPortal) => {
  const [loginFormActive, setLoginFormActive] = useState(true);
  return (
    <CustomPortalProvider showPortal={showLogin} setShowPortal={setShowLogin}>
      <FormComp setLoginFormActive={setLoginFormActive} loginFormActive={loginFormActive}>
        <LoginForm display={loginFormActive} setShowLogin={setShowLogin} />
        <SingUpForm display={!loginFormActive} setShowLogin={setShowLogin} />
      </FormComp>
    </CustomPortalProvider>
  );
};




export default FormPortal;
