import React from "react";
import type { NextPage } from "next";
import ProductSelector from "../../components/ProductSelector";
import SelectedTag from "../../components/ProductSelector/Tag";
import SelectedTagProvider from "../../store/selector-context";
import ProductList from "../../components/ProductLayout/ProductList";

const Product: NextPage = () => {
  return (
    <>
      <section className="px-6">
        <SelectedTagProvider>
          <SelectedTag />
          <div className="flex flex-row">
            <ProductSelector />
            <ProductList />
          </div>
        </SelectedTagProvider>
      </section>
    </>
  );
};

export default Product;
