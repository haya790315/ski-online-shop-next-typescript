import React, { useEffect, useState } from "react";
import { SessionProvider} from "next-auth/react";
import "styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import Head from "next/head";
import { CartContextProvider } from "store/cart-context";
import { useRouter } from "next/router";
import LoadingSpin from "components/UI/LoadingSpin";
import SideNavbar from "components/SideNavbar";
import Navbar from "components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormPortal from "components/Form";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {isLoading && <LoadingSpin />}

      <SessionProvider
        session={session}
        refetchInterval={5 * 60}
        refetchOnWindowFocus={false}
      >
        <CartContextProvider>
          <Layout>
            <ToastContainer limit={1} />
            <Navbar setShowLogin={setShowLogin} />
            <SideNavbar />
            <Component {...pageProps} />
          </Layout>
          {showLogin && (
            <FormPortal showLogin={showLogin} setShowLogin={setShowLogin} />
          )}
        </CartContextProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
