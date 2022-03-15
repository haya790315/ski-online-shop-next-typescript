import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  brand: string;
  name: string;
  model: string;
  price: string;
  option: string[];
  gender: string;
  imageURL: string;
  picture: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      id: "2123123",
      brand: "Nidecker",
      name: "スノーボード",
      model: "Merc",
      price: "36502",
      option: ["140", "145", "150", "154"],
      gender: "M",
      imageURL:
        "https://www.snowinn.com/f/13800/138004934/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-merc.jpg",
      picture: [
        "https://www.snowinn.com/f/13800/138004934_2/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-merc.jpg",
        "https://www.snowinn.com/f/13800/138004934_3/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-merc.jpg",
        "https://www.snowinn.com/f/13800/138004934_4/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-merc.jpg",
        "https://www.snowinn.com/f/13800/138004934_5/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-merc.jpg",
        "https://www.snowinn.com/f/13800/138004934_6/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-merc.jpg",
      ],
    },
    {
      id: "58383954",
      brand: "Rossignol",
      name: "スノーボード",
      model: "B&W RSK13WP",
      price: "36269",
      option: ["147", "149", "155", "158"],
      gender: "F",
      imageURL:
        "https://www.snowinn.com/f/13830/138302858/rossignol-%E3%82%B5%E3%83%BC%E3%82%AD%E3%83%83%E3%83%88%E3%83%AF%E3%82%A4%E3%83%89-%E3%83%90%E3%83%88%E3%83%AB-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-b-w-rsk13wp.jpg",
      picture: [
        "https://www.snowinn.com/f/13830/138302858_2/rossignol-%E3%82%B5%E3%83%BC%E3%82%AD%E3%83%83%E3%83%88%E3%83%AF%E3%82%A4%E3%83%89-%E3%83%90%E3%83%88%E3%83%AB-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-b-w-rsk13wp.jpg",
        "https://www.snowinn.com/f/13830/138302858_3/rossignol-%E3%82%B5%E3%83%BC%E3%82%AD%E3%83%83%E3%83%88%E3%83%AF%E3%82%A4%E3%83%89-%E3%83%90%E3%83%88%E3%83%AB-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-b-w-rsk13wp.jpg",
        "https://www.snowinn.com/f/13830/138302858_4/rossignol-%E3%82%B5%E3%83%BC%E3%82%AD%E3%83%83%E3%83%88%E3%83%AF%E3%82%A4%E3%83%89-%E3%83%90%E3%83%88%E3%83%AB-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-b-w-rsk13wp.jpg",
        "https://www.snowinn.com/f/13830/138302858_5/rossignol-%E3%82%B5%E3%83%BC%E3%82%AD%E3%83%83%E3%83%88%E3%83%AF%E3%82%A4%E3%83%89-%E3%83%90%E3%83%88%E3%83%AB-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-b-w-rsk13wp.jpg",
      ],
    },
    {
      id: "3812010",
      brand: "Nidecker",
      name: "スノーボード",
      model: "Alpha",
      price: "40117",
      option: ["140", "144", "148", "150", "156"],
      gender: "M",
      imageURL:
        "https://www.snowinn.com/f/13800/138004946/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-alpha.jpg",
      picture: [
        "https://www.snowinn.com/f/13800/138004946/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-alpha.jpg",
        "https://www.snowinn.com/f/13800/138004946_4/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-alpha.jpg",
        "https://www.snowinn.com/f/13800/138004946_2/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-alpha.jpg",
        "https://www.snowinn.com/f/13800/138004946_3/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-alpha.jpg",
        "https://www.snowinn.com/f/13800/138004946_7/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-alpha.jpg",
      ],
    },
    {
      id: "3912323592",
      brand: "Nitro",
      name: "スノーボード",
      model: "Cheap Trills",
      price: "40745",
      option: ["142", "145", "146", "152"],
      gender: "M",
      imageURL:
        "https://www.snowinn.com/f/13836/138368259/nitro-%E3%83%AF%E3%82%A4%E3%83%89%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-cheap-trills.jpg",
      picture: [
        "https://www.snowinn.com/f/13836/138368259/nitro-%E3%83%AF%E3%82%A4%E3%83%89%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-cheap-trills.jpg",
        "https://www.snowinn.com/f/13836/138368259_5/nitro-%E3%83%AF%E3%82%A4%E3%83%89%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-cheap-trills.jpg",
        "https://www.snowinn.com/f/13836/138368259_2/nitro-%E3%83%AF%E3%82%A4%E3%83%89%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-cheap-trills.jpg",
        "https://www.snowinn.com/f/13836/138368259_3/nitro-%E3%83%AF%E3%82%A4%E3%83%89%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-cheap-trills.jpg",
        "https://www.snowinn.com/f/13836/138368259_4/nitro-%E3%83%AF%E3%82%A4%E3%83%89%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-cheap-trills.jpg",
      ],
    },
  ]);
}
