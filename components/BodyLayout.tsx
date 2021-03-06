import { useSession } from "next-auth/react";
import React, { FC, useEffect} from "react";
import { toast } from "react-toastify";

const BodyLayout: FC = ({ children }) => {
  const { data, status } = useSession();
  useEffect(() => {
    if (data && status === "authenticated") {
      toast.success(`ハーロー\r${data.user.name}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
    }
  }, [data, status]);
  // console.log(data, status);

  return (
    <>
      <div className="flex flex-col relative overflow-hidden">{children}</div>
    </>
  );
};

export default BodyLayout;
