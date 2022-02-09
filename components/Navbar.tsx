import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import AccountIcon from "../public/static/AccountIcon.svg";
import CheckoutIcon from "../public/static/CheckoutIcon.svg";
import ContactIcon from "../public/static/ContactIcon.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="relative h-32 w-full top-0 left-0 bg-gray-900 flex flex-row justify-around items-center">
      <div className="h-14 w-52 bg-white relative ">
        <Image
          src="/image/Supreme.jpg"
          alt="logo"
          layout="fill"
          objectFit="cover"
          priority
          objectPosition="center center"
          quality={100}
        />
      </div>
      <SearchBar />
      <ul className="text-white flex flex-row flex-grow-0 justify-center items-center text-center">
        <div className="px-8 relative cursor-pointer">
          <div>
            <AccountIcon className="ml-2" />
          </div>
          <li className="text-sm font-semibold text-md">ログイン</li>
          <div className={styles.line}></div>

        </div>
        <div className="px-8 relative cursor-pointer">
          <div>
            <CheckoutIcon className="ml-1" />
          </div>
          <li className="text-md font-semibold">レジ</li>
          <div className={styles.line}></div>
        </div>
        <div className=" px-8 relative cursor-pointer">
          <ContactIcon />
          <li className="text-md font-semibold text-justify">SNS</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
