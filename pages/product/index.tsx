import React from "react";
import type { NextPage } from "next";
import { ProductSelector, SelectedTag } from "../../components/ProductSelector";
import {SelectedTagProvider} from "../../store/selector-context";
import ProductList from "../../components/ProductLayout/ProductList";
import { IProductData } from "../../type/type";
import {useRouter} from "next/router";
const Product: NextPage = () => {
  const list = require("../../Data/itemList.json") as IProductData[];
  const router = useRouter();
  console.log({router});
  return (
    <>
      <section className="px-6">
        <SelectedTagProvider>
          <SelectedTag />
          <div className="flex flex-row">
            <ProductSelector collection={[1, 2, 3, 4, 5, 6]} />
            <ProductList list={list} />
          </div>
        </SelectedTagProvider>
      </section>
    </>
  );
};

export default Product;
