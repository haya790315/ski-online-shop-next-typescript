import type { TOption } from "@type/ProductType";
export type TFilterId = 1 | 2 | 3 | 4 | 5 | 6;
export interface IFilterIndex {
  id: TFilterId;
  value: string;
  label: string;
  option: Array<TOption>;
}

export const filterIndex: IFilterIndex[] = [
  {
    id: 1,
    value: "brand",
    label: "ブランド",
    option: [
      "Burton",
      "Nidecker",
      "Rossignol",
      "Dc Shoes",
      "Ride",
      "Nitro",
      "Superdry",
      "Oakley",
      "Alpina",
      "Bolle",
    ],
  },

  {
    id: 2,
    value: "gender",
    label: "ジェンダー",
    option: ["男性", "女性", "両用"],
  },

  {
    id: 3,
    value: "snowboard",
    label: "スノーボード",
    option: [
      [140, 144],
      [145, 149],
      [150, 154],
      [155, 159],
      [160, 164],
    ],
    //option: ["140-144", "145-149", etc],
  },
  {
    id: 4,
    value: "helmet",
    label: "ヘルメット",
    option: [
      [46, 48],
      [49, 51],
      [52, 54],
      [55, 57],
      [58, 60],
      [61, 63],
    ],
    // option: ["46-48", "49-51", "52-54",etc],
  },
  {
    id: 5,
    value: "snowboard_boots",
    label: "スノーボードブーツ",
    option: [22, 23, 24, 25, 26, 27, 28, 29, 30],
  },
  {
    id: 6,
    value: "binding",
    label: "バインディング",
    option: ["S", "M", "L", "XL", "2XL"],
  },
];
