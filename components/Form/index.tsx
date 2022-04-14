import CustomPortalProvider from "components/CustomPortal";
import React from "react";
import FormComp from "./FormComp";

interface IFormPortal {
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}




const FormPortal = ({ showLogin, setShowLogin }: IFormPortal) => {
  return (
    <CustomPortalProvider showPortal={showLogin} setShowPortal={setShowLogin}>
      <FormComp />
    </CustomPortalProvider>
  );
};

export default FormPortal;
