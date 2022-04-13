import React from "react";

const FormPortalLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center fixed z-300">
      {children}
    </div>
  );
};

export default FormPortalLayout;
