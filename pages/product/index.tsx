import React from "react";
import type { NextPage, GetStaticProps } from "next";
import {
  ProductSelector,
  SelectedTag,
  ProductList,
} from "components/ProductLayout";
import { SelectedTagProvider } from "store/selector-context";
import { IProductData } from "type/ProductType";
import { fetchMongoDbCollection } from "lib/fetcher/fetchMongoDbCollection";

interface IProduct {
  productList: IProductData[];
}

const Product: NextPage<IProduct> = ({ productList }) => {
  return (
    <>
      <section className="px-6">
        <SelectedTagProvider>
          <SelectedTag />
          <div className="flex flex-row">
            <ProductSelector collection={[1, 2, 3, 4, 5, 6]} />
            <ProductList list={productList} />
          </div>
        </SelectedTagProvider>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const collection = await fetchMongoDbCollection();

  // get random doc by aggregate
  const response = await collection
    .aggregate([
      {
        $sample: {
          size: 24,
        },
      },
    ])
    .toArray();
  const dataList = JSON.parse(JSON.stringify(response));

  return {
    revalidate: 30,
    props: { productList: dataList },
  };
};

export default Product;
