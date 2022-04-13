import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";
import AccountIcon from "public/image/static/AccountIcon.svg";
import CheckoutIcon from "public/image/static/CheckoutIcon.svg";
import ContactIcon from "public/image/static/ContactIcon.svg";
import styles from "styles/Navbar.module.css";

interface INavbar {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setShowLogin }: INavbar) => {
  const router = useRouter();

  return (
    <div className="relative h-32 w-full top-0 left-0 bg-gray-900 flex flex-row justify-around items-center">
      <div className="relative cursor-pointer">
        <Image
          src="/image/BrandLogo/SkiJapanLogo.png"
          alt="logo"
          height={56}
          width={208}
          objectFit="cover"
          priority
          objectPosition="center center"
          quality={70}
          onClick={() => router.push("/")}
        />
      </div>

      <SearchBar />
      <ul className="text-white flex flex-row flex-grow-0 text-center">
        <div
          onClick={() => setShowLogin(true)}
          className="px-8 relative cursor-pointer group"
        >
          <div>
            <AccountIcon className="ml-2 group-hover:translate-y-1 transition-transform duration-300 ease-in-out" />
          </div>
          <li className="text-sm font-semibold text-md group-hover:translate-y-1 transition-transform duration-300 ease-in-out">
            ログイン
          </li>
          <div className={styles.line}></div>
        </div>
        <div className="px-8 relative cursor-pointer group">
          <div>
            <CheckoutIcon className="ml-1 group-hover:translate-y-1 transition-transform duration-300 ease-in-out" />
          </div>
          <li className="text-md font-semibold group-hover:translate-y-1 transition-transform duration-300 ease-in-out">
            レジ
          </li>
          <div className={styles.line}></div>
        </div>
        <div className=" px-8 relative cursor-pointer group">
          <ContactIcon className="group-hover:translate-y-1 transition-transform duration-300 ease-in-out" />
          <li className="text-md font-semibold text-justify group-hover:translate-y-1 transition-transform duration-300 ease-in-out">
            SNS
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
