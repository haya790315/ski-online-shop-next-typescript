import { TOption } from "@type/ProductType";
import { IProductData } from "@type/ProductType";
import { TCartOrder } from "store/cart-context";

type TFormatParams = string | number | Array<string | number>;
type TFormatTexts<T extends TFormatParams> = (
  needToBeFormat: T,
  unitAdd?: string
) => string;

export const formatTexts: TFormatTexts<TOption> = (data, unit = "") => {
  if (typeof data === "number") {
    return data + unit;
  } else if (typeof data === "object") {
    return `${data[0]}-${data[1]}${unit}`;
  } else return data;
};

export const calculateTax = (amount: number) =>
  Math.floor(amount - amount / 1.1);

export const currencyFormat = (amount: number | string) =>
  Number(amount).toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });

export const calculateTotal = (
  cartItem: IProductData[],
  cartOrder: TCartOrder[]
): number => {
  const orderPriceArray = cartItem.flatMap((item) => {
    return cartOrder.map((order) => {
      if (order.id === item._id) {
        return Number(item.price) * Number(order.option[1]);
      } else return 0;
    });
  });
  const totalPrice = orderPriceArray.reduce((acc, cur) => acc + cur, 0);
  return totalPrice;
};
