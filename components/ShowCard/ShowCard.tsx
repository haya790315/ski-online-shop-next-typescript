import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import YenIcon from "public/image/static/YenIcon.svg";
import styles from "styles/ShowCard.module.css";
import Link from "next/link";

interface IShowCardProps {
  item: {
    id: number | string;
    brand: string;
    name: string;
    model: string;
    price: string;
    imageURL: string;
  };
  hoverEffect: "none" | "auto";
  key: number | string;
}

const ShowCard = ({ item:{id,brand, name, model, imageURL, price }, hoverEffect }: IShowCardProps) => {
  const [imageSize, setImageSize] = useState(260);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reSizeHandler = (event: UIEvent) => {
      event.preventDefault();
      const width = window.innerWidth;
      const widthCal = (width / 1280) * 260;
      setImageSize(widthCal);
    };
    window.addEventListener("resize", reSizeHandler, false);
    return () => {
      window.removeEventListener("resize", reSizeHandler);
    };
  }, []);

  return (
    <Link
      href={{
        pathname: "/product/[id]",
        query: { id },
      }}
    >
      <a style={{ cursor: "unset" }}>
        <div
          ref={(elm) => (containerRef.current = elm)}
          className={styles.container}
          style={{ pointerEvents: hoverEffect }}
        >
          <div className={styles.container_img}>
            <Image
              src={imageURL}
              alt={name + brand + model}
              height={imageSize}
              width={imageSize}
              placeholder="blur"
              blurDataURL={imageURL}
              objectFit="contain"
              priority
              objectPosition="center center"
              quality={100}
            />
          </div>
          <div className={styles.container_description_animation}>
            <div className="flex flex-col md:text-lg">
              <hr className="my-6 w-10/12" />
              <div className="text-left">
                <strong>{brand}</strong>
                <span className="lg:inline-block ml-2 text-sm display-none">{name}</span>
                <br />
                <small >{model}</small>
              </div>
              <div className="flex place-items-center  mt-2 text-sm md:text-lg">
                <span className="">
                  <YenIcon className="fill-current" />
                </span>
                {price} {"(税込)"}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ShowCard;
