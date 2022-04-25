import { calculateTotal } from "lib/util/util";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useCartContext } from "store/cart-context";
import { loadScript } from "@paypal/paypal-js";
import { IProductData } from "@type/ProductType";
import { useRouter } from "next/router";

const Paypal = () => {
  const paypalRef = useRef<HTMLElement>();
  const { cartOrder, cart } = useCartContext();
  const router = useRouter();
  useEffect(() => {
    loadScript({
      "client-id": process.env.NEXT_PUBLIC_PAYPAL_ID,
      currency: "JPY",
    }).then((paypal) => {
      if (!(paypal && paypal.Buttons))
        throw new Error("paypal is not loaded");
      paypal
        .Buttons({
          style: {
            layout: "vertical",
            color: "gold",
            shape: "pill",
            label: "pay",
          },
          // Sets up the transaction when a payment button is clicked
          createOrder: async (_, actions) => {
            if (!cartOrder.length) {
              throw new Error("カートの中に商品はございません");
            } else
              return actions.order.create({
                purchase_units: [
                  {
                    items: cartOrder.map((item) => {
                      const product = cart.find(
                        (pro) => pro._id === item.id
                      ) as IProductData;
                      return {
                        name:
                          "SKI-JAPAN---" +
                          product.brand +
                          product.model /* Shows within upper-right dropdown during payment approval */,
                        unit_amount: {
                          currency_code: "JPY",
                          value: product.price.toString(),
                        },
                        quantity: item.option[1]!.toString(),
                        description: `${
                          product.brand + product.model
                        }ご購入、ありがとうございます。`,
                      };
                    }),
                    amount: {
                      currency_code: "JPY",
                      value: calculateTotal(cart, cartOrder).toString(),
                      breakdown: {
                        item_total: {
                          /* Required when including the `items` array */
                          currency_code: "JPY",
                          value: calculateTotal(cart, cartOrder).toString(),
                        },
                      },
                    },
                  },
                ],
              });
          },
          onApprove: async (_, actions) => {
            await actions.order?.capture().then((orderData) => {
              if (orderData.status === "COMPLETED") {
                toast.success("ご購入ありがとうございます", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
                router.replace("/");
                console.log(
                  "Capture result",
                  orderData,
                  JSON.stringify(orderData, null, 2)
                );
              } else {
                throw new Error("交易失敗");
              }
            });
          },
          onError: function (err) {
            toast.error(err.message as string, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            router.replace("/");
          },
        })
        .render(paypalRef.current as HTMLElement);
    });
    return ()=>paypalRef.current?.remove()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, cartOrder]);

  return <>{<div ref={(v) => v && (paypalRef.current = v)} />}</>;
};

export default Paypal;
