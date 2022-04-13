import React from "react";

interface IB {
  setShowPortal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BackDropLayout = ({ setShowPortal }: IB) => {
  return (
    <div
      onClick={() => setShowPortal(false)}
      className="absolute h-screen w-screen opacity-90 backdrop-blur-md  bg-neutral-900"
    ></div>
  );
};

export default BackDropLayout;
