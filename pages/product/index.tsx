import React from "react";
import type { NextPage } from "next";
import ProductSelector from "../../components/ProductSelector";
import SelectedTag from "../../components/ProductSelector/SelectedTag";
import SelectedTagProvider from "../../store/selector-context";

const Product: NextPage = () => {
  return (
    <>
      <section>
        <SelectedTagProvider>
          <SelectedTag />
          <ProductSelector />
        </SelectedTagProvider>
      </section>
    </>
  );
};

export default Product;
