import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/SideNavbar.module.css";
import { useRouter } from "next/router";
import ShopIcon from "../../public/image/static/ShopIcon.svg";
import Categories from "./Categories";
import {useCartContext} from "../../store/cart-context"
import { sideMenuData } from "./sideMenuData";
import CartDropMenu from "./CartDropMenu";

const SideNavbar = () => {
  const sideNavbarRef = useRef<HTMLDivElement | null>(null);
  const [cartDropMenuOpen, setCartDropMenuOpen] = useState(false);
  const router = useRouter();

  const {cart,cartOrder} = useCartContext();
  
  console.log({cart,cartOrder})

  useEffect(() => {
    const handleScrollEvent = (e: Event) => {
      if (screen.width < 768) return;
      e.preventDefault();
      const scrollY = window.scrollY;
      if (scrollY > 135) {
        sideNavbarRef.current?.classList.remove("relative");
        sideNavbarRef.current?.classList.add("fixed");
      } else {
        sideNavbarRef.current?.classList.add("relative");
        sideNavbarRef.current?.classList.remove("fixed");
      }
    };
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const cartDropMenuHandler = {
    mouseEnter: () => {
      if (window.outerWidth < 768) return;
      setCartDropMenuOpen(true);
    },
    mouseLeave: () => {
      if (window.outerWidth < 768) return;
      setCartDropMenuOpen(false);
    },
  };

  const cartIconMenu = (
    <>
      <div
        className="relative mr-20 mt-4 "
        onMouseLeave={cartDropMenuHandler.mouseLeave}
        onMouseEnter={cartDropMenuHandler.mouseEnter}
      >
        <span className="px-4">
          <ShopIcon className=" absolute top-1 h-8 w-8 fill-current text-inherit" />
        </span>
        <div className={styles.bagAnimation}>
          <span className="top-2.5 left-3 absolute text-l font-extrabold text-white">
            {cart.length}
          </span>
        </div>
        {cartDropMenuOpen && (
          <CartDropMenu cartDropMenuHandler={cartDropMenuHandler} />
        )}
      </div>
    </>
  );

  return (
    <div
      className="w-full h-16 bg-gray-700 flex z-50  justify-between text-l relative"
      ref={sideNavbarRef}
    >
      <ul className="flex flex-row text-white justify-left py-4 ml-8 items-center">
        {sideMenuData.map((category, index) => {
          return <Categories itemName={category.type} key={index} />;
        })}
      </ul>

      <div className="flex flex-row cursor-default relative text-white    group hover:text-orange-300 ">
        {router.pathname === "/cart" ? (
          <>
            <div className=" flex flex-row justify-between items-center">
              <span className="text-l  px-1 text-2xl ">小計</span>
              <span className="text-l  px-1 text-3xl ">￥4000</span>
              <button className="block  h-16 ml-4 w-48 bg-slate-50 text-stone-900 text-xl  font-medium  hover:opacity-90">
                注文手続きへ
              </button>
            </div>
          </>
        ) : (
          cartIconMenu
        )}
      </div>
    </div>
  );
};

export default SideNavbar;
