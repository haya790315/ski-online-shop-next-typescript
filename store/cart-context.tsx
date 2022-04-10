import React, { createContext, useState, useContext } from "react";
import { IProductData } from "@type/ProductType";
import { TOption } from "@type/ProductType";

export type TCartOrder = {
  id: string;
  option: (TOption | undefined)[];
};

interface IContext {
  cart: IProductData[];
  cartOrder: TCartOrder[];
  setCartOrder: React.Dispatch<React.SetStateAction<TCartOrder[]>>;
  setCart: React.Dispatch<React.SetStateAction<IProductData[]>>;
}

const CartContext = createContext({} as IContext);

export const CartContextProvider: React.FC = ({ children }) => {
  const [cartOrder, setCartOrder] = useState<TCartOrder[]>([]);
  const [cart, setCart] = useState<IProductData[]>([]);

  return (
    <CartContext.Provider value={{ cart, cartOrder, setCartOrder, setCart }}>
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
