import React from "react";
import type { NextPage, GetStaticProps } from "next";

import { ProductSelector, SelectedTag } from "components/ProductSelector";
import { SelectedTagProvider } from "store/selector-context";
import ProductList from "components/ProductLayout/ProductList";
import clientPromise from "lib/mongodb/mongodb";
import { IProductData } from "type/type";

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
  const client = await clientPromise;
  const db = await client.db(process.env.MONGODB_NAME);

  // get random doc by aggregate
  const response = await db
    .collection(process.env.MONGODB_COLLECTION as string)
    .aggregate([
      {
        $sample: {
          size: 24,
        },
      },
    ])
    .toArray();
  const data = JSON.parse(JSON.stringify(response));

  return {
    revalidate:30,
    props: { productList: data },
  };
};

export default Product;
