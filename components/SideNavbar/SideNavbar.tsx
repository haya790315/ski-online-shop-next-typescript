import React, { useEffect, useRef, useState } from "react";
import styles from "styles/SideNavbar.module.css";
import { useRouter } from "next/router";
import ShopIcon from "public/image/static/ShopIcon.svg";
import Categories from "./CategoryDropMenu";
import { useCartContext } from "store/cart-context";
import { sideMenuData } from "localDatabase/sideMenuData";
import CartDropMenu from "./CartDropMenu";

const SideNavbar = () => {
  const sideNavbarRef = useRef<HTMLDivElement>(null);
  const [cartDropMenuOpen, setCartDropMenuOpen] = useState(false);
  const router = useRouter();

  const { cart } = useCartContext();

  // console.log({ cart, cartOrder });

  useEffect(() => {
    const handleScrollEvent = (e: Event) => {
      if (window.matchMedia("(max-width: 768px)").matches) return;
      e.preventDefault();
      const scrollY = window.scrollY;
      if (scrollY > 135) {
        sideNavbarRef.current!.classList.remove("relative");
        sideNavbarRef.current!.classList.add("fixed");
      } else {
        sideNavbarRef.current!.classList.add("relative");
        sideNavbarRef.current!.classList.remove("fixed");
      }
    };
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const cartDropMenuHandler = {
    mouseEnter: () => {
      if (window.matchMedia("(max-width: 768px)").matches) return;
      setCartDropMenuOpen(true);
    },
    mouseLeave: () => {
      if (window.matchMedia("(max-width: 768px)").matches) return;
      setCartDropMenuOpen(false);
    },
  };

  const cartIconMenu = (
    <>
      <div
        className="relative mr-20 mt-4 hover:text-orange-300 "
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
          return <Categories type={category.type} key={index} />;
        })}
      </ul>

      <div className="flex flex-row cursor-default relative text-white ">
        {router.pathname === "/cart" ? (
          <button className="block  h-16 ml-4 w-48 bg-slate-50 text-stone-900 text-xl  font-medium  hover:opacity-90">
            注文手続きへ
          </button>
        ) : (
          cartIconMenu
        )}
      </div>
    </div>
  );
};

export default SideNavbar;
