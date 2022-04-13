import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";

interface IFormPortal {
  children: React.ReactNode;
  showPortal: boolean;
}

const FormPortal = ({ children, showPortal }: IFormPortal) => {
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
    newPortal.setAttribute("class", "fixed flex h-screen w-screen justify-center items-center z-300");
    setPortalCreated(true);

    return () => newPortal.remove();
  }, []);

  return (
    (showPortal &&
      portalMemo &&
      ReactDOM.createPortal(children, portalMemo)) || <></>
  );
};

export default FormPortal;
