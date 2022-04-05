import React, { useEffect, useState } from "react";
import "styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import Head from "next/head";
import { CartContextProvider } from "store/cart-context";
import { useRouter } from "next/router";
import LoadingSpin from "components/LoadingSpin";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
    };

    const handleRouteComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", handleRouteComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>SKI JAPAN</title>
      </Head>
      {isLoading && <LoadingSpin />}

      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </>
  );
}

export default MyApp;
