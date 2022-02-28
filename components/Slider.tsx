import React, { useState, useEffect } from "react";
import Styles from "./Slider.module.css";
import Image from "next/image";

const Slider = () => {
  const imgData = [
    {
      id: 1,
      imgUrl: "/image/slide/slide1.jpg",
      post1: "浮遊感と爽快感",
    },
    {
      id: 2,
      imgUrl: "/image/slide/slide2.jpg",
      post2: "初級者から上級者までが楽しめる",
    },
    {
      id: 3,
      imgUrl: "/image/slide/slide3.jpg",
      post1: "いつからも",
      post2: "遅くはない",
    },
    {
      id: 4,
      imgUrl: "/image/slide/slide4.jpg",
      post3: "今すぐ、チャンスを掴めよう",
    },
    {
      id: 5,
      imgUrl: "/image/slide/slide5.jpg",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  const [shown, setIsShown] = useState(false);

  useEffect(() => {
    const slideTimeout = setTimeout(() => {
      setSlideIndex((prev) => (prev !== imgData.length ? prev + 1 : 1));
    }, 4000);
    return () => clearTimeout(slideTimeout);
  }, [slideIndex, imgData.length]);

  useEffect(() => {
    const slidePostTimeout = setTimeout(() => {
      setIsShown(true);
      return () => clearTimeout(slidePostTimeout);
    }, 30);
  }, []);

  const moveDot = (index: number) => {
    setSlideIndex(index + 1);
  };

  let slide = slideIndex <= imgData.length ? slideIndex - 1 : 0;

  const className = (index: number) => {
    if (slide === index) {
      return Styles.slide_active;
    }
    if (index === slide - 1 || (index === imgData.length - 1 && slide === 0)) {
      return Styles.slide_inactive;
    }
    return Styles.slide;
  };
  return (
    <div className={Styles.sliderContainer}>
      {!shown
        ? ""
        : imgData.map((item, index) => {
            return (
              <div key={index} className="absolute h-full w-full">
                <div
                  className={
                    index === slide && shown ? Styles.description : "hidden"
                  }
                >
                  <span>{imgData[slide].post1}</span>
                  <h1>{imgData[slide].post2}</h1>
                  <h2>{imgData[slide].post3}</h2>
                  {slide === imgData.length - 1 && (
                    <button className={Styles.button}>
                      コレクションを見る
                    </button>
                  )}
                </div>
                <div className="relative h-full">
                  <Image
                    className={className(index)}
                    layout="fill"
                    src={item.imgUrl}
                    quality={100}
                    priority={true}
                    objectFit="fill"
                    objectPosition="center center"
                    alt="slide.jpg"
                    key={item.id}
                  />
                </div>
              </div>
            );
          })}
      <div className={Styles.dotsContainer}>
        {imgData.map((__, index) => {
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
                  index === slide && shown
                    ? Styles.dot_active
                    : Styles.dot_inactive
                }
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
