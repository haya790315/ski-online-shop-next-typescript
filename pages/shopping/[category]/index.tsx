import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import {
  SortButton,
  ProductSelector,
  SelectedTag,
} from "components/ProductLayout";
import type { IProductData } from "@type/ProductType";
import type { TFilterId } from "localData/filterIndex";
import { fetchApiData } from "lib/fetcher/fetchApiData";
import ProductList from "components/ProductLayout/ProductList";
import { SelectedTagProvider } from "store/selector-context";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, query, res } = context;
  res.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate");
  let uri = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/shopping/${params?.category}`;

  if (query.sort) uri += `?sort=${query.sort}`;

  const data = await fetchApiData(uri);

  return {
    props: {
      product: data,
    },
  };
};

interface IShoppingProps {
  product: IProductData[];
}

const Shopping: NextPage<IShoppingProps> = ({ product }) => {
  const router = useRouter();
  const query = router.query;

  const filterCollection = (): TFilterId[] => {
    if (query.category === "snowboard") return [1, 2, 3];
    if (query.category === "helmet") return [1, 2, 4];
    if (query.category === "snowboard_boots") return [1, 2, 5];
    if (query.category === "binding") return [1, 2, 6];
    if (query.category === "googles") return [1, 2];
    return [1, 2, 3, 4, 5, 6];
  };
  return (
    <>
      <SelectedTagProvider>
        <section className="px-6 ">
          <div className="flex flex-row">
            <SelectedTag />
            <SortButton />
          </div>
          <div className="flex flex-row">
            <ProductSelector collection={filterCollection()} />
            <ProductList list={product} />
          </div>
        </section>
      </SelectedTagProvider>
    </>
  );
};

export default Shopping;
