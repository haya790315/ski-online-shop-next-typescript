// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
      id: "12312455",
      brand: "Burton",
      name: "スノーボードブーツ",
      model: "Moto",
      price: "18051",
      option: ["24", "25", "26", "27", "28"],
      gender: "F",
      imageURL:
        "https://www.snowinn.com/f/13827/138272570/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-moto.jpg",
      picture: [
        "https://www.snowinn.com/f/13827/138272570/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-moto.jpg",
        "https://www.snowinn.com/f/13827/138272570_2/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-moto.jpg",
        "https://www.snowinn.com/f/13827/138272570_3/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-moto.jpg",
        "https://www.snowinn.com/f/13827/138272570_4/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-moto.jpg",
        "https://www.snowinn.com/f/13827/138272570_5/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-moto.jpg",
      ],
    },
    {
      id: "1231455",
      brand: "Nidecker",
      name: "スノーボードブーツ",
      model: "Micron Mini",
      price: "11602",
      option: ["24", "25", "26", "27", "28"],
      gender: "M",
      imageURL:
        "https://www.snowinn.com/f/13776/137769786/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-micron-mini.jpg",
      picture: [
        "https://www.snowinn.com/f/13776/137769786/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-micron-mini.jpg",
        "https://www.snowinn.com/f/13776/137769786_2/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-micron-mini.jpg",
        "https://www.snowinn.com/f/13776/137769786_3/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-micron-mini.jpg",
        "https://www.snowinn.com/f/13776/137769786_5/nidecker-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-micron-mini.jpg",
      ],
    },
    {
      id: "39230503",
      brand: "Ride",
      name: "スノーボードブーツ",
      model: "SnowBoard Lasso",
      price: "32692",
      option: ["23", "24", "26", "28", "29"],
      gender: "M",
      imageURL:
        "https://www.snowinn.com/f/13774/137740990/ride-%E3%83%96%E3%83%BC%E3%83%84-snowboard-lasso-%E3%83%97%E3%83%AD.jpg",
      picture: [
        "https://www.snowinn.com/f/13774/137740990/ride-%E3%83%96%E3%83%BC%E3%83%84-snowboard-lasso-%E3%83%97%E3%83%AD.jpg",
        "https://www.snowinn.com/f/13774/137740990_2/ride-%E3%83%96%E3%83%BC%E3%83%84-snowboard-lasso-%E3%83%97%E3%83%AD.jpg",
        "https://www.snowinn.com/f/13774/137740990_3/ride-%E3%83%96%E3%83%BC%E3%83%84-snowboard-lasso-%E3%83%97%E3%83%AD.jpg",
      ],
    },
    {
      id: "398898592",
      brand: "Nitro",
      name: "スノーボードブーツ",
      model: "Skylab TLS",
      price: "35782",
      option: ["22", "25", "26", "28", "29"],
      gender: "F",
      imageURL:
        "https://www.snowinn.com/f/13836/138368519/nitro-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-skylab-tls.jpg",
      picture: [
        "https://www.snowinn.com/f/13836/138368519/nitro-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-skylab-tls.jpg",
        "https://www.snowinn.com/f/13836/138368519_2/nitro-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-skylab-tls.jpg",
        "https://www.snowinn.com/f/13836/138368519_3/nitro-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-skylab-tls.jpg",
      ],
    },
    {
      id: "398823592",
      brand: "Dc Shoes",
      name: "スノーボードブーツ",
      model: "Phase",
      price: "13956",
      option: ["23", "24", "26", "29"],
      gender: "M",
      imageURL:
        "https://www.snowinn.com/f/13815/138153231/dc-shoes-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-phase.jpg",
      picture: [
        "https://www.snowinn.com/f/13815/138153231/dc-shoes-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-phase.jpg",
        "https://www.snowinn.com/f/13815/138153231_2/dc-shoes-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-phase.jpg",
        "https://www.snowinn.com/f/13815/138153231_3/dc-shoes-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-phase.jpg",
        "https://www.snowinn.com/f/13815/138153231_4/dc-shoes-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-phase.jpg",
        "https://www.snowinn.com/f/13815/138153231_6/dc-shoes-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-phase.jpg",
      ],
    },
  ]);
}
