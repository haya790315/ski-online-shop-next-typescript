import React, { useState, useEffect } from "react";
import Styles from "./Slider.module.css";
import Image from "next/image";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const imgData = [
    {
      id: 1,
      imgUrl: "/slide/slide1.jpg",
      des1: "浮遊感と爽快感",
    },
    {
      id: 2,
      imgUrl: "/slide/slide2.jpg",
      des2: "初級者から上級者までが楽しめる",
    },
    // {
    //   id: 3,
    //   imgUrl: "/slide/slide3.jpg",
    //   des1:"123",
    //   des2:"1231243"
    // },
    // {
    //   id: 4,
    //   imgUrl: "/slide/slide4.jpg",
    //   des1:"123",
    //   des2:"12321"
    // },
    // {
    //   id: 5,
    //   imgUrl: "/slide/slide5.jpg",
    //   des1:"123",
    //   des2:"12321"
    // },
  ];

  // useEffect(() => {
  //   const slideTimeout = setTimeout(() => {
  //     setSlideIndex((prev) => (prev !== imgData.length ? prev + 1 : 1));
  //   }, 4000);
  //   return () => clearTimeout(slideTimeout);
  // }, [slideIndex, imgData.length]);

  const nextSlide = () => {
    if (slideIndex !== imgData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imgData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(imgData.length);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index + 1);
  };

  let slide = slideIndex <= imgData.length ? slideIndex - 1 : 0;
  const className = (index: number) => {
    if (slide === index) {
      return Styles.active;
    }
    if (index === slide - 1 || (index === imgData.length - 1 && slide === 0)) {
      return Styles.disable;
    }
    return Styles.slide;
  };
  return (
    <div className={Styles.sliderContainer}>
      {imgData.map((item, index) => {
        return (
          <div key={index}>
            <div className={index===slide?Styles.description:""}>
              <span>{imgData[slide].des1}</span>
              <h1>{imgData[slide].des2}</h1>
            </div>
            <Image
              className={className(index)}
              layout="fill"
              src={item.imgUrl}
              quality={100}
              priority={true}
              objectFit="fill"
              objectPosition="center center"
              alt=""
              key={item.id}
            />
          </div>
        );
      })}
      <div className={Styles.dotsContainer}>
        {imgData.map((obj, index) => {
          return (
            <div
              className={Styles.dots}
              key={index}
              onClick={() => {
                moveDot(index);
              }}
            >
              <div
                className={
                  index === slide ? Styles.dot_active : Styles.dot_origin
                }
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
