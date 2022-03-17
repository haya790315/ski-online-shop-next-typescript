export type TGender = "男性"|"女性"|"両用"
export type TProductType = "snowboard"|"snowboard_boots"|"helmet"|"googles"|"binding"
export type TOption = string|number|number[]
export interface  IProductData {
  id: string;
  brand: string;
  value:TProductType;
  name: string;
  model: string;
  price: string;
  option?: Array<TOption>;
  gender: TGender;
  imageURL: string;
  picture: string[];
}
