import React, { useState, useEffect } from "react";
import styles from "styles/Slider.module.css";
import Link from "next/link"
import Image from "next/image";

const Slider = () => {
  const sliderStatic = [
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
      setSlideIndex((prev) => (prev !== sliderStatic.length ? prev + 1 : 1));
    }, 4000);
    return () => clearTimeout(slideTimeout);
  }, [slideIndex, sliderStatic.length]);

  useEffect(() => {
    const slidePostTimeout = setTimeout(() => {
      setIsShown(true);
      return () => clearTimeout(slidePostTimeout);
    }, 30);
  }, []);

  const moveDot = (index: number) => {
    setSlideIndex(index + 1);
  };

  const slide = slideIndex <= sliderStatic.length ? slideIndex - 1 : 0;

  const className = (index: number) => {
    if (slide === index) {
      return styles.slide_active;
    }
    if (
      index === slide - 1 ||
      (index === sliderStatic.length - 1 && slide === 0)
    ) {
      return styles.slide_inactive;
    }
    return styles.slide;
  };
  return (
    <div className={styles.sliderContainer}>
      {!shown
        ? ""
        : sliderStatic.map((item, index) => {
            return (
              <div key={index} className="absolute h-full w-full">
                <div
                  className={
                    index === slide && shown ? styles.description : "hidden"
                  }
                >
                  <span>{sliderStatic[slide].post1}</span>
                  <h1>{sliderStatic[slide].post2}</h1>
                  <h2>{sliderStatic[slide].post3}</h2>
                  {slide === sliderStatic.length - 1 && (
                    <Link href="/product">
                      <a >
                        <button className={styles.button}>
                          コレクションを見る
                        </button>
                      </a>
                    </Link>
                  )}
                </div>
                <div className="relative h-full">
                  <Image
                    className={className(index)}
                    layout="fill"
                    src={item.imgUrl}
                    quality={100}
                    priority
                    objectFit="fill"
                    objectPosition="center center"
                    alt="slide.jpg"
                    key={item.id}
                  />
                </div>
              </div>
            );
          })}
      <div className={styles.dotsContainer}>
        {sliderStatic.map((__, index) => {
          return (
            <div
              className={styles.dots}
              key={index}
              onClick={() => {
                moveDot(index);
              }}
            >
              <div
                className={
                  index === slide && shown
                    ? styles.dot_active
                    : styles.dot_inactive
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
