interface ISideMenu {
  [key: string]: { name: string; items: string[] };
}





export const sideMenuData:ISideMenu= {
  category1: { name: "上着", items: ["1", "2", "3"] },
  category2: { name: "パンツ", items: ["1", "2", "3"] },
  category3: { name: "アクセサリ", items: ["1", "2", "3"] },
  category4: { name: "シューズ", items: ["1", "2", "3"] },
};