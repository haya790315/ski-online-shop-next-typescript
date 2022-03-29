type TGender = "男性" | "女性" | "両用";
type TProductType =
  | "snowboard"
  | "snowboard_boots"
  | "helmet"
  | "binding"|"googles";

export type TOption = string | number | number[];


export type IProductData = {
  _id: string;
  brand: string;
  category: TProductType;
  name: string;
  model: string;
  price: number;
  option: Array<TOption>;
  gender: TGender;
  imageURL: string;
  picture: string[];
};





