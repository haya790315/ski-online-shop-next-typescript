import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className="flex flex-col relative">{children}</div>
    </>
  );
};

export default Layout;
