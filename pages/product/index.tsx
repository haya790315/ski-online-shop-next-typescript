import React from "react";
import { NextPage } from "next";
import {ProductSelector,SelectedTag} from "../../components/ProductSelector";
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
