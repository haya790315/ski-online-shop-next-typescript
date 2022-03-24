import React, { createContext, useState, useContext, useEffect } from "react";
import {IProductData} from "../type/type"
import {TOption} from "../type/type"

const itemList = require("../Data/itemList.json") as IProductData[];

export type TCartOrder = {
  id: string;
  option: (TOption|undefined)[];
};

interface IContext {
  cart: IProductData[];
  cartOrder: TCartOrder[];
  setCartOrder: React.Dispatch<React.SetStateAction<TCartOrder[]>>;
}

const CartContext = createContext({} as IContext);

export const CartContextProvider: React.FC = ({ children }) => {
  const [cartOrder, setCartOrder] = useState<TCartOrder[]>([]);
  const [cart, setCart] = useState<IProductData[]>([]);

  useEffect(() => {
    if (cartOrder.length > 0) {
      const idsArray = cartOrder.map((order) => order.id);
      const cartItems = itemList.filter((item) =>idsArray.includes(item.id));
      setCart([...cartItems]);
    } else setCart([]);
  }, [cartOrder]);

  return (
    <CartContext.Provider value={{ cart, cartOrder, setCartOrder }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  if (CartContext === undefined) {
    throw new Error("This is not in the provider");
  }
  return useContext(CartContext);
};
