import {TOption} from "../type/type"


export const calculateTax = (total: number) => (total - total / 1.1).toFixed(0);

export const currencyFormat = (amount: number | string) =>
  Number(amount).toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });



  export type formateTexts<T> = (arg0:T,arg1?:string)=>string

export const  formateTexts:formateTexts<TOption> = (data,unit="") => {
  if (typeof data === "number") {
    return data + unit;
  } else if (typeof data === "object") {
    return `${data[0]}-${data[1]}${unit}`;
  } else return data;
  };


