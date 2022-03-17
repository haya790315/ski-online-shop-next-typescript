import React, { useEffect } from "react";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import {
  ProductSelector,
  SelectedTag,
} from "../../../components/ProductSelector";
import SelectedTagProvider from "../../../store/selector-context";
import ProductList from "../../../components/ProductLayout/ProductList";

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = list.map((item) => {
  //   return {
  //     params: {
  //       type: item.id,
  //     },
  //   };
  // });

  return {
    paths: [
      { params: { type: "snowboard" } },
      { params: { type: "snowboard_boots" } },
    ],

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (staticProps) => {
  const { params } = staticProps;
  
  const fetcher = async () => {
    const res = await fetch(`http://localhost:3000/api/shopping/${params!.type}`);
    const data = await res.json();

    if (res.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  };

  const product = await fetcher();

  return {
    props: {
      product,
    },
  };
};

interface IShoppingProps {
  product: {
    id: string;
    brand: string;
    name: string;
    model: string;
    price: string;
    imageURL: string;
    picture: string[];
  };
}

const Shopping: NextPage <IShoppingProps>= ({ product }) => {
  return (
    <>
      <section className="px-6">
        <SelectedTagProvider>
          <SelectedTag />
          <div className="flex flex-row">
            <ProductSelector />
            <ProductList list={product}/>
          </div>
        </SelectedTagProvider>
      </section>
    </>
  );
};

export default Shopping;
