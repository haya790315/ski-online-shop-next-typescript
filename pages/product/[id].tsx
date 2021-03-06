import React, { useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Feature from "components/Feature/Feature";
import Image from "next/image";
import YenIcon from "public/image/static/YenIcon.svg";
import type { IProductData } from "@type/ProductType";
import { useCartContext } from "store/cart-context";
import { formatTexts } from "lib/util/util";
import { fetchMongoDbCollection } from "lib/fetcher/fetchMongoDbCollection";
import LoadingSpin from "components/UI/LoadingSpin";

interface IProductProps {
  product: IProductData;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const collection = await fetchMongoDbCollection();
  const dataList = (await collection
    .find({})
    .toArray()
    .then((data) => JSON.parse(JSON.stringify(data)))) as IProductData[];

  const paths = dataList.map((item) => {
    return {
      params: {
        id: item._id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (staticProps) => {
  const { params } = staticProps;
  const collection = await fetchMongoDbCollection();
  const dataList = (await collection
    .find({})
    .toArray()
    .then((data) => JSON.parse(JSON.stringify(data)))) as IProductData[];

  const product = dataList.find((item) => item._id === params?.id);

  return {
    props: {
      product,
    },
  };
};

const ProductDetail: NextPage<IProductProps> = ({ product }) => {
  const { setCartOrder, cartOrder, setCart, cart } = useCartContext();
  const router = useRouter();
  const quantitySelectRef = useRef<HTMLInputElement>(null);
  const sizeSelectRef = useRef<HTMLSelectElement>(null);
  if (router.isFallback) {
    return <LoadingSpin />;
  }

  const deliverDate = () => {
    const newDate = new Date();

    const twoDays = new Date(
      newDate.getFullYear(),
      newDate.getMonth(),
      newDate.getDate() + 2
    );
    const threeDays = new Date(
      newDate.getFullYear(),
      newDate.getMonth(),
      newDate.getDate() + 3
    );
    const dayOfWeek = ["???", "???", "???", "???", "???", "???", "???"];

    return `${twoDays.getMonth() + 1}???${twoDays.getDate()}??? ${
      dayOfWeek[twoDays.getDay()]
    }?????? - ${threeDays.getMonth() + 1}???${threeDays.getDate()}??? ${
      dayOfWeek[threeDays.getDay()]
    }??????`;
  };

  const logoImgPath = `/image/BrandLogo/${product.brand}Logo.jpg`;

  const putInCartHandler = () => {
    //set Order into cartOrder
    const size =
      sizeSelectRef.current?.value && JSON.parse(sizeSelectRef.current.value);
    const quantity =
      quantitySelectRef.current && +quantitySelectRef.current.value;
    const optionArray = [size, quantity];

    const newOrder = { id: product._id, option: optionArray };
    if (cartOrder.length) {
      const filterCartOrder = cartOrder.filter(
        (item) => item.id !== product._id
      );
      setCartOrder([newOrder, ...filterCartOrder]);
    } else {
      setCartOrder([newOrder, ...cartOrder]);
    }
    //set Item into Cart
    if (cart.length) {
      const filterCart = cart.filter((item) => item._id !== product._id);
      setCart([product, ...filterCart]);
    } else {
      setCart([...cart, product]);
    }
    router.push("/cart");
  };
  return (
    <>
      <Head>
        <title>
          {product.brand} {product.model}
        </title>
      </Head>
      <div className="relative h-auto flex flex-col items-center mt-20 px-4  lg:pl-8 lg:flex-row">
        <div>
          <Feature picture={product.picture} />
        </div>
        <div className="flex flex-col w-full lg:absolute lg:w-1/3 lg:items-start lg:top-0 lg:right-10">
          <div className="flex flex-col items-start w-full font-extrabold">
            <Image
              src={logoImgPath}
              alt="logo"
              height={100}
              width={100}
              objectFit="contain"
              quality={100}
            />
            <div className="flex  flex-col  text-2xl">
              <div className="flex justify-start items-center mb-2 ">
                <h1 className="mr-4">{product.brand}</h1>
                <h2>{product.name}</h2>
              </div>
              <h2>{product.model}</h2>
            </div>
            <p className="text-2xl  flex items-end my-6">
              <YenIcon className="w-6 h-6 fill-current " /> {product.price}
            </p>
          </div>
          <div className="flex flex-col w-full lg:flex-row lg:justify-between">
            <div className="flex flex-col font-semibold lg:w-3/5">
              {product.option.length ? (
                <>
                  {" "}
                  <label htmlFor="size">?????????</label>
                  <select
                    id="size"
                    ref={sizeSelectRef}
                    name="item-size"
                    className="h-10 my-2 select_arrow_none  border-2 border-solid rounded text-center  text-sky-500 font-semibold focus:border_blue"
                    defaultValue={JSON.stringify(product.option[0])}
                  >
                    {product.option.map((opt, i) => (
                      <option key={i} value={JSON.stringify(opt)}>
                        {formatTexts(opt, "cm")}
                      </option>
                    ))}
                  </select>
                </>
              ) : (
                <p className="text-zinc-500  border-b-2 text-center absolute text-2xl">
                  ???????????????
                </p>
              )}
            </div>
            <p className="flex flex-col items-start font-semibold lg:w-1/4 relative">
              <label htmlFor="quantity">??????</label>
              <input
                ref={quantitySelectRef}
                type="number"
                id="quantity"
                name="item-quantity"
                min="1"
                max="5"
                step="1"
                required
                defaultValue="1"
                className="h-10 w-full my-2 text-center font-semibold  input_button_lg border-2 border-solid rounded-sm  focus:border_blue"
              />
            </p>
          </div>
          <span className="text-green-500 font-medium my-2">????????????</span>
          <button
            className="h-11 w-full mb-4 button_orange focus:outline-none "
            onClick={putInCartHandler}
          >
            ?????????????????????
          </button>
          <p>
            ???????????????????????????????????????????????????????????????
            <br />
            <strong className="text-blue-500">{deliverDate()}</strong>
            ???????????????
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
