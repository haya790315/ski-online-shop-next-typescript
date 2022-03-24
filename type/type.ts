type TGender = "男性" | "女性" | "両用";
type TProductType =
  | "snowboard"
  | "snowboard_boots"
  | "helmet"
  | "binding"|"googles";

export type TOption = string | number | number[];

type TGoogles = {
  value: "googles";
  option?: Array<TOption>;
  id: string;
  brand: string;
  name: string;
  model: string;
  price: string;
  gender: TGender;
  imageURL: string;
  picture: string[];
};

type TExceptGoogles = {
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


// export type  IProductData =TGoogles|TExceptGoogles


