





interface IShowCaseItemList{
  [key: string]: { id: number; brand: string; name: string; model: string; price: string; imageURL: string; }[]
}

export const listTitle =[
  "人気商品","特売商品","ランキング商品","限定商品"
]


export const showCaseItemList:IShowCaseItemList = {
  

  popularItemList: [
    {
      id: 1,
      brand: "Burton ",
      name: "スノーボード",
      model: "Family Tree 3D Big-Mountain",
      price: "62643",
      imageURL:
        "https://www.snowinn.com/h/13827/138272144/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-family-tree-3d-big-mountain.jpg",
    },

    {
      id: 2,
      brand: "Burton",
      name: "スノーボードブーツ",
      model: "DriverX",
      price: "19978",
      imageURL:
        "https://www.snowinn.com/h/13774/137745659/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-driver-x.jpg",
    },
    {
      id: 3,
      brand: "Black Diamond",
      name: "ジーンズ",
      model: "Recon Stretch",
      price: "49213",
      imageURL:
        "https://www.snowinn.com/h/13720/137209140/black-diamond-%E3%82%B8%E3%83%BC%E3%83%B3%E3%82%BA-recon-stretch.jpg",
    },
    {
      id: 4,
      brand: "Oakley",
      name: "スキー用のゴーグル  ",
      model: "Flight Deck L Prizm Snow",
      price: "18601",
      imageURL:
        "https://www.snowinn.com/h/13768/137689281/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-flight-deck-l-prizm-snow.jpg",
    },
    {
      id: 5,
      brand: "Burton",
      name: "ミトン",
      model: "Park",
      price: "5391",
      imageURL:
        "https://www.snowinn.com/h/13873/138731322/burton-%E3%83%9F%E3%83%88%E3%83%B3-park.jpg",
    },
    {
      id: 6,
      brand: "Oakley",
      name: "ヘルメット",
      model: "Mod 1",
      price: "9287",
      imageURL:
        "https://www.snowinn.com/h/13728/137283447/oakley-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-mod-1.jpg",
    },
    {
      id: 7,
      brand: "Bolle",
      name: "ヘルメット",
      model: "Might Visor Premium MIPS",
      price: "18260",
      imageURL:
        "https://www.snowinn.com/h/13843/138437151/bolle-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-might-visor-premium-mips.jpg",
    },
    {
      id: 8,
      brand: "Burton",
      name: " スノーボードバインディング",
      model: "Lexa",
      price: "26152",
      imageURL:
        "https://www.snowinn.com/h/13827/138272402/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A5%B3%E6%80%A7-lexa.jpg",
    },
    {
      id: 9,
      brand: "Burton ",
      name: "スノーボード",
      model: "Instigator",
      price: "41792",
      imageURL:
        "https://www.snowinn.com/h/13827/138272328/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-instigator.jpg",
    },
    {
      id: 10,
      brand: "Oakley",
      name: "パンツ",
      model: "TNP Lined",
      price: "16545",
      imageURL:
        "https://www.snowinn.com/h/13772/137723726/oakley-%E3%83%91%E3%83%B3%E3%83%84-tnp-lined.jpg",
    },
  ],
  onSaleItemList: [
    {
      id: 1,
      brand: "Burton ",
      name: "スノーボード ",
      model: "Family Tree 3D Big-Mountain",
      price: "62643",
      imageURL:
        "https://www.snowinn.com/h/13827/138272144/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-family-tree-3d-big-mountain.jpg",
    },

    {
      id: 2,
      brand: "Burton",
      name: "スノーボードブーツ",
      model: "DriverX",
      price: "19978",
      imageURL:
        "https://www.snowinn.com/h/13774/137745659/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-driver-x.jpg",
    },
    {
      id: 3,
      brand: "Black Diamond",
      name: "ジーンズ",
      model: "Recon Stretch",
      price: "49213",
      imageURL:
        "https://www.snowinn.com/h/13720/137209140/black-diamond-%E3%82%B8%E3%83%BC%E3%83%B3%E3%82%BA-recon-stretch.jpg",
    },
    {
      id: 4,
      brand: "Oakley",
      name: "スキー用のゴーグル  ",
      model: "Flight Deck L Prizm Snow",
      price: "18601",
      imageURL:
        "https://www.snowinn.com/h/13768/137689281/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-flight-deck-l-prizm-snow.jpg",
    },
    {
      id: 5,
      brand: "Burton",
      name: "ミトン",
      model: "Park",
      price: "5391",
      imageURL:
        "https://www.snowinn.com/h/13873/138731322/burton-%E3%83%9F%E3%83%88%E3%83%B3-park.jpg",
    },
    {
      id: 6,
      brand: "Oakley",
      name: "ヘルメット",
      model: "Mod 1",
      price: "9287",
      imageURL:
        "https://www.snowinn.com/h/13728/137283447/oakley-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-mod-1.jpg",
    },
    {
      id: 7,
      brand: "Bolle",
      name: "ヘルメット",
      model: "Might Visor Premium MIPS",
      price: "18260",
      imageURL:
        "https://www.snowinn.com/h/13843/138437151/bolle-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-might-visor-premium-mips.jpg",
    },
    {
      id: 8,
      brand: "Burton",
      name: " スノーボードバインディング",
      model: "Lexa",
      price: "26152",
      imageURL:
        "https://www.snowinn.com/h/13827/138272402/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A5%B3%E6%80%A7-lexa.jpg",
    },
    {
      id: 9,
      brand: "Burton ",
      name: "スノーボード",
      model: "Instigator",
      price: "41792",
      imageURL:
        "https://www.snowinn.com/h/13827/138272328/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-instigator.jpg",
    },
    {
      id: 10,
      brand: "Oakley",
      name: "パンツ",
      model: "TNP Lined",
      price: "16545",
      imageURL:
        "https://www.snowinn.com/h/13772/137723726/oakley-%E3%83%91%E3%83%B3%E3%83%84-tnp-lined.jpg",
    },
  ],
  rankingItemList: [
    {
      id: 1,
      brand: "Burton ",
      name: "スノーボード",
      model: "Family Tree 3D Big-Mountain",
      price: "62643",
      imageURL:
        "https://www.snowinn.com/h/13827/138272144/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-family-tree-3d-big-mountain.jpg",
    },

    {
      id: 2,
      brand: "Burton",
      name: "スノーボードブーツ",
      model: "DriverX",
      price: "19978",
      imageURL:
        "https://www.snowinn.com/h/13774/137745659/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-driver-x.jpg",
    },
    {
      id: 3,
      brand: "Black Diamond",
      name: "ジーンズ",
      model: "Recon Stretch",
      price: "49213",
      imageURL:
        "https://www.snowinn.com/h/13720/137209140/black-diamond-%E3%82%B8%E3%83%BC%E3%83%B3%E3%82%BA-recon-stretch.jpg",
    },
    {
      id: 4,
      brand: "Oakley",
      name: "スキー用のゴーグル  ",
      model: "Flight Deck L Prizm Snow",
      price: "18601",
      imageURL:
        "https://www.snowinn.com/h/13768/137689281/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-flight-deck-l-prizm-snow.jpg",
    },
    {
      id: 5,
      brand: "Burton",
      name: "ミトン",
      model: "Park",
      price: "5391",
      imageURL:
        "https://www.snowinn.com/h/13873/138731322/burton-%E3%83%9F%E3%83%88%E3%83%B3-park.jpg",
    },
    {
      id: 6,
      brand: "Oakley",
      name: "ヘルメット",
      model: "Mod 1",
      price: "9287",
      imageURL:
        "https://www.snowinn.com/h/13728/137283447/oakley-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-mod-1.jpg",
    },
    {
      id: 7,
      brand: "Bolle",
      name: "ヘルメット",
      model: "Might Visor Premium MIPS",
      price: "18260",
      imageURL:
        "https://www.snowinn.com/h/13843/138437151/bolle-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-might-visor-premium-mips.jpg",
    },
    {
      id: 8,
      brand: "Burton",
      name: " スノーボードバインディング",
      model: "Lexa",
      price: "26152",
      imageURL:
        "https://www.snowinn.com/h/13827/138272402/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A5%B3%E6%80%A7-lexa.jpg",
    },
    {
      id: 9,
      brand: "Burton ",
      name: "スノーボード",
      model: "Instigator",
      price: "41792",
      imageURL:
        "https://www.snowinn.com/h/13827/138272328/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-instigator.jpg",
    },
    {
      id: 10,
      brand: "Oakley",
      name: "パンツ",
      model: "TNP Lined",
      price: "16545",
      imageURL:
        "https://www.snowinn.com/h/13772/137723726/oakley-%E3%83%91%E3%83%B3%E3%83%84-tnp-lined.jpg",
    },
  ],
  limitedItemList: [
    {
      id: 1,
      brand: "Burton ",
      name: "スノーボード ",
      model: "Family Tree 3D Big-Mountain",
      price: "62643",
      imageURL:
        "https://www.snowinn.com/h/13827/138272144/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-family-tree-3d-big-mountain.jpg",
    },

    {
      id: 2,
      brand: "Burton",
      name: "スノーボードブーツ",
      model: "DriverX",
      price: "19978",
      imageURL:
        "https://www.snowinn.com/h/13774/137745659/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%96%E3%83%BC%E3%83%84-driver-x.jpg",
    },
    {
      id: 3,
      brand: "Black Diamond",
      name: "ジーンズ",
      model: "Recon Stretch",
      price: "49213",
      imageURL:
        "https://www.snowinn.com/h/13720/137209140/black-diamond-%E3%82%B8%E3%83%BC%E3%83%B3%E3%82%BA-recon-stretch.jpg",
    },
    {
      id: 4,
      brand: "Oakley",
      name: "スキー用のゴーグル  ",
      model: "Flight Deck L Prizm Snow",
      price: "18601",
      imageURL:
        "https://www.snowinn.com/h/13768/137689281/oakley-%E3%82%B9%E3%82%AD%E3%83%BC%E7%94%A8%E3%81%AE%E3%82%B4%E3%83%BC%E3%82%B0%E3%83%AB-flight-deck-l-prizm-snow.jpg",
    },
    {
      id: 5,
      brand: "Burton",
      name: "ミトン",
      model: "Park",
      price: "5391",
      imageURL:
        "https://www.snowinn.com/h/13873/138731322/burton-%E3%83%9F%E3%83%88%E3%83%B3-park.jpg",
    },
    {
      id: 6,
      brand: "Oakley",
      name: "ヘルメット",
      model: "Mod 1",
      price: "9287",
      imageURL:
        "https://www.snowinn.com/h/13728/137283447/oakley-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-mod-1.jpg",
    },
    {
      id: 7,
      brand: "Bolle",
      name: "ヘルメット",
      model: "Might Visor Premium MIPS",
      price: "18260",
      imageURL:
        "https://www.snowinn.com/h/13843/138437151/bolle-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-might-visor-premium-mips.jpg",
    },
    {
      id: 8,
      brand: "Burton",
      name: " スノーボードバインディング",
      model: "Lexa",
      price: "26152",
      imageURL:
        "https://www.snowinn.com/h/13827/138272402/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A5%B3%E6%80%A7-lexa.jpg",
    },
    {
      id: 9,
      brand: "Burton ",
      name: "スノーボード",
      model: "Instigator",
      price: "41792",
      imageURL:
        "https://www.snowinn.com/h/13827/138272328/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-instigator.jpg",
    },
    {
      id: 10,
      brand: "Oakley",
      name: "パンツ",
      model: "TNP Lined",
      price: "16545",
      imageURL:
        "https://www.snowinn.com/h/13772/137723726/oakley-%E3%83%91%E3%83%B3%E3%83%84-tnp-lined.jpg",
    },
  ],
};
