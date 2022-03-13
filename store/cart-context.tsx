import React, { createContext, useState, useContext, useEffect } from "react";
import itemList from "../Data/itemList.json";

interface IItemList {
  id: string;
  brand: string;
  name: string;
  model: string;
  price: string;
  imageURL: string;
  picture: string[];
}

type TCartOrder = {
  id: string;
  option: string[];
};

interface IContext {
  cart: IItemList[];
  cartOrder: TCartOrder[];
  setCartOrder: React.Dispatch<React.SetStateAction<TCartOrder[]>>;
}

const CartContext = createContext<IContext>({} as IContext);

export const CartContextProvider: React.FC = ({ children }) => {
  const [cartOrder, setCartOrder] = useState<TCartOrder[]>([] as TCartOrder[]);
  const [cart, setCart] = useState<IItemList[]>([]);

  useEffect(() => {
    if (cartOrder.length > 0) {
      const idsArray = cartOrder.map((order) => order.id);
      const cartItems = itemList.filter((item) =>idsArray.includes(item.id)) as IItemList[];
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
  return useContext(CartContext);
};
