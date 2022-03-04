import React, { useContext } from "react";
import ShowCaseCard from "../ShowCaseSlider/ShowCaseCard";
import { SelectedTagContext } from "../../store/selector-context";

const list = [
  {
    id:Math.floor(Math.random() * 100),
    brand: "Burton ",
    name: "スノーボード",
    model: "Family Tree 3D Big-Mountain",
    price: "62643",
    imageURL:
      "https://www.snowinn.com/h/13827/138272144/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-family-tree-3d-big-mountain.jpg",
  },

  {
    id:Math.floor(Math.random() * 100),
    brand: "Burton",
    name: "スノーボードブーツ",
    model: "DriverX",
    price: "19978",
    imageURL:
      "https://www.snowinn.com/h/13774/137745659/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-driver-x.jpg",
  },
  {
    id:Math.floor(Math.random() * 100),
    brand: "Black Diamond",
    name: "ジーンズ",
    model: "Recon Stretch",
    price: "49213",
    imageURL:
      "https://www.snowinn.com/h/13720/137209140/black-diamond-%E3%82%B8%E3%83%BC%E3%83%B3%E3%82%BA-recon-stretch.jpg",
  },
  {
    id:Math.floor(Math.random() * 100),
    brand: "Oakley",
    name: "スキー用のゴーグル  ",
    model: "Flight Deck L Prizm Snow",
    price: "18601",
    imageURL:
      "https://www.snowinn.com/h/13768/137689281/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-flight-deck-l-prizm-snow.jpg",
  },
  {
    id:Math.floor(Math.random() * 100),
    brand: "Burton",
    name: "ミトン",
    model: "Park",
    price: "5391",
    imageURL:
      "https://www.snowinn.com/h/13873/138731322/burton-%E3%83%9F%E3%83%88%E3%83%B3-park.jpg",
  },
  {
    id:Math.floor(Math.random() * 100),
    brand: "Oakley",
    name: "ヘルメット",
    model: "Mod 1",
    price: "9287",
    imageURL:
      "https://www.snowinn.com/h/13728/137283447/oakley-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-mod-1.jpg",
  },
  {
    id:Math.floor(Math.random() * 100),
    brand: "Bolle",
    name: "ヘルメット",
    model: "Might Visor Premium MIPS",
    price: "18260",
    imageURL:
      "https://www.snowinn.com/h/13843/138437151/bolle-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-might-visor-premium-mips.jpg",
  },
  {
    id:Math.floor(Math.random() * 100),
    brand: "Burton",
    name: " スノーボードバインディング",
    model: "Lexa",
    price: "26152",
    imageURL:
      "https://www.snowinn.com/h/13827/138272402/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A5%B3%E6%80%A7-lexa.jpg",
  },
  {
    id:Math.floor(Math.random() * 100),
    brand: "Burton",
    name: "スノーボード",
    model: "Instigator",
    price: "41792",
    imageURL:
      "https://www.snowinn.com/h/13827/138272328/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-instigator.jpg",
  },
  {
    id:Math.floor(Math.random() * 100),
    brand: "Oakley",
    name: "パンツ",
    model: "TNP Lined",
    price: "16545",
    imageURL:
      "https://www.snowinn.com/h/13772/137723726/oakley-%E3%83%91%E3%83%B3%E3%83%84-tnp-lined.jpg",
  },
];

const ProductList = () => {
  const { selectedTag } = useContext(SelectedTagContext);

  const filteredItem = list
    .filter((item) => {
      return selectedTag.includes(item.brand);
    })
    .map((pro) => {
      return <ShowCaseCard key={pro.id} item={pro} />;
    });

  const allItem = list.map((pro,i) => {
    return <ShowCaseCard key={i} item={pro} />;
  });

  return (
    <div className="grid grid-cols-2 px-6 mb-20 mt-5 ml-5 gap-6 md:grid-cols-4 ">
      {selectedTag.length > 0 ? filteredItem : allItem}
    </div>
  );
};

export default ProductList;
