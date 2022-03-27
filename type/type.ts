type TGender = "男性" | "女性" | "両用";
type TProductType =
  | "snowboard"
  | "snowboard_boots"
  | "helmet"
  | "binding"|"googles";

export type TOption = string | number | number[];


export type IProductData = {
  id: string;
  brand: string;
  value: TProductType;
  name: string;
  model: string;
  price: string;
  option: Array<TOption>;
  gender: TGender;
  imageURL: string;
  picture: string[];
};





