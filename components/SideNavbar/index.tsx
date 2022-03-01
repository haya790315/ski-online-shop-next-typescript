import React, { useEffect, useRef, useState } from "react";
import Styles from "./index.module.css";
import ShopIcon from "../../public/image/static/ShopIcon.svg";
import YenIcon from "../../public/image/static/YenIcon.svg";
import Categories from "./Categories";
import { sideMenuData } from "./sideMenuData";
import CartDropMenu from "./CartDropMenu";

const SideNavbar = () => {
  const sideNavbarRef = useRef<HTMLDivElement>(null);
  const [cartDropMenuOpen, setCartDropMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollEvent = (e: Event) => {
      if (window.outerWidth < 768) return;

      e.preventDefault();
      const sideNavbarOffsetTop = sideNavbarRef.current!.offsetTop;
      const scrollY = window.scrollY;

      if (scrollY > sideNavbarOffsetTop) {
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
    mouseEnter : () => {
      if (window.outerWidth < 768) return;
      setCartDropMenuOpen(true);
    },
    mouseLeave: () => {
      if (window.outerWidth < 768) return;
      setCartDropMenuOpen(false);
    },
  };

  return (
    <>
      <div
        className="w-full h-16 bg-gray-700 flex z-50  justify-between text-l relative"
        ref={sideNavbarRef}
      >
        <ul className="flex flex-row text-white justify-left py-4 ml-8 items-center">
          {Object.keys(sideMenuData).map((itemKey, index) => {
            return (
              <Categories itemName={sideMenuData[itemKey].name} key={index} />
            );
          })}
        </ul>

        <div className="flex flex-row cursor-default relative text-white  right-16 p-2 group hover:text-orange-300 ">
          <div className="p-2 flex  items-center">
            <span>
              <YenIcon className="fill-current mt-1" />
            </span>
            <span className="text-l  px-1 text-inherit ">4000</span>
          </div>
          <div
            className="relative  hover:opacity-90 cursor-pointer "
            onMouseLeave={cartDropMenuHandler.mouseLeave}
            onMouseEnter={cartDropMenuHandler.mouseEnter}
          >
            <span className="px-4 ">
              <ShopIcon className=" absolute top-1 h-8 w-8 fill-current text-inherit" />
            </span>
            <div className={Styles.bagAnimation}>
              <span className="top-2.5 left-3 absolute text-l text-orange-300 group-hover:text-white">
                0
              </span>
            </div>
          </div>
          {cartDropMenuOpen && (
            <CartDropMenu cartDropMenuHandler={cartDropMenuHandler} />
          )}
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
