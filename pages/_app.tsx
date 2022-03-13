import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
import { CartContextProvider } from "../store/cart-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JapanSki</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </>
  );
}

export default MyApp;
