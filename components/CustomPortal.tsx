import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import BackDropLayout from "./UI/BackDropLayout";

interface ICustomPortal {
  children: React.ReactNode;
  showPortal: boolean;
}

const CustomPortal = ({ children, showPortal }: ICustomPortal) => {
  const [portalCreated, setPortalCreated] = useState(false);

  const portalMemo = useMemo<Element | undefined>(() => {
    if (showPortal && portalCreated) {
      return document.getElementById("form_portal") as Element;
    }
  }, [showPortal, portalCreated]);

  useEffect(() => {
    setPortalCreated(false);
    const newPortal = document.createElement("div");
    const rootDiv = document.getElementById("__next");
    document.body.insertBefore(newPortal, rootDiv);
    newPortal.setAttribute("id", "form_portal");
    newPortal.setAttribute(
      "class",
      "fixed flex h-screen w-screen justify-center items-center z-300"
    );
    setPortalCreated(true);

    return () => newPortal.remove();
  }, []);

  return (
    (showPortal &&
      portalMemo &&
      ReactDOM.createPortal(children, portalMemo)) || <></>
  );
};

export { CustomPortal };

interface ICustomPortalProvider extends ICustomPortal {
  setShowPortal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomPortalProvider = ({
  children,
  showPortal,
  setShowPortal,
}: ICustomPortalProvider) => {
  return (
    <CustomPortal showPortal={showPortal}>
      <div
        onClick={() => setShowPortal(false)}
        className="absolute h-screen w-screen opacity-90 bg-zinc-200"
      ></div>
      {children}
    </CustomPortal>
  );
};

export default CustomPortalProvider;
