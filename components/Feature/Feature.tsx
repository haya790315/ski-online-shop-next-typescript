import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Featured = () => {
  const imageUrl = {
    picture: [
      "https://www.snowinn.com/f/13776/137766696/rossignol-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-alta-impacts.jpg",
      "https://www.snowinn.com/f/13776/137766696_2/rossignol-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-alta-impacts.jpg",
      "https://www.snowinn.com/f/13776/137766696_3/rossignol-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-alta-impacts.jpg",
      "https://www.snowinn.com/f/13776/137766696_4/rossignol-%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-alta-impacts.jpg",
    ],
    // picture: [
    //   "https://www.snowinn.com/f/13827/138272406/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A5%B3%E6%80%A7-lexa-x-est-.jpg",
    //   "https://www.snowinn.com/f/13827/138272406_2/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A5%B3%E6%80%A7-lexa-x-est-.jpg",
    //   "https://www.snowinn.com/f/13827/138272406_3/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A5%B3%E6%80%A7-lexa-x-est-.jpg",
    //   "https://www.snowinn.com/f/13827/138272406_4/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A5%B3%E6%80%A7-lexa-x-est-.jpg",
    //   "https://www.snowinn.com/f/13827/138272406_5/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A5%B3%E6%80%A7-lexa-x-est-.jpg",
    //   "https://www.snowinn.com/f/13827/138272406_6/burton-%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%83%90%E3%82%A4%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E5%A5%B3%E6%80%A7-lexa-x-est-.jpg",
    // ],
  };

  const [pictureIndex, setPictureIndex] = useState<number>(0);

  const mainImgRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const containerRef = useRef<HTMLElement | null>(null);

  const blockRef = useRef<HTMLDivElement | null>(null);

  const magnifiedRef = useRef<HTMLDivElement | null>(null);

  const block_width = 125;
  const block_height = 125;
  const containerElement_width = 550;
  const containerElement_height = 550;

  const containerElementStyle = (): React.CSSProperties => ({
    position: "relative",
    marginLeft: "0.8rem",
    
  });

  const magnifyElementStyle = (pictureIndex: number): React.CSSProperties => ({
    display: "none",
    position: "relative",
    zIndex:"20",
    backgroundImage: `url(${imageUrl.picture[pictureIndex]})`,
    backgroundColor:"white",
    backgroundRepeat: "no-repeat",
    backgroundSize: "350%",
    marginLeft: "0.5rem",
    width: "500px",
    height: "500px",
    objectFit: "cover",
    border: "1px solid #eee",
    filter: "contrast(110%) brightness(105%)",
    boxShadow: `-4px 4px 10px 2px #747474`,
    transition: `all 0s linear`,
  });

  const blockElementStyle = (): React.CSSProperties => ({
    position: `absolute`,
    display: `none`,
    width: `${block_width}px`,
    height: `${block_height}px`,
    filter: `blur(2px) brightness(120%)`,
    border: `2px solid #eee`,
    background: `rgb(221, 166, 166)`,
    opacity: `0.8`,
    transition: `all 0s ease`,
  });

  useEffect(() => {
    mainImgRefs.current["0"]!.classList.remove("hidden");
    mainImgRefs.current["0"]!.classList.add("block");
  }, []);

  useEffect(() => {
    if (!blockRef || !containerRef || !magnifiedRef) return;

    const blockElement = blockRef.current!;
    const containerElement = containerRef.current!;
    const magnifiedElement = magnifiedRef.current!;

    const controlBlockHandler = (event: MouseEvent) => {
      if (window.innerWidth < 1024) return;

      const target_rect = containerElement.getBoundingClientRect();
      const target_top = target_rect.top + window.pageYOffset;

      let x = event.pageX - target_rect.left;
      let y = event.pageY - target_top;

      if (event.offsetY < block_width / 2) {
        y = block_width / 2;
      } else if (event.offsetY > containerElement_width - block_width / 2) {
        y = containerElement_width - block_width / 2;
      }
      if (event.offsetX < block_height / 2) {
        x = block_height / 2;
      } else if (event.offsetX > containerElement_height - block_height / 2) {
        x = containerElement_height - block_height / 2;
      }

      blockElement.style.left = `${x - block_width / 2}px`;
      blockElement.style.top = `${y - block_height / 2}px`;
      blockElement.style.display = "block";
    };

    const magnifiedElementHandler = (event: MouseEvent) => {
      if(window.innerWidth<768) return
      magnifiedElement.style.backgroundPosition = `-${
        (event.offsetX - block_width / 2) * 3
      }px -${(event.offsetY - block_height / 2) * 3}px`;
      magnifiedElement.style.display = `block`;
    };

    containerElement.addEventListener("mouseenter", (event) => {
      controlBlockHandler(event);
    });

    containerElement.addEventListener("mousemove", (event) => {
      controlBlockHandler(event);
      magnifiedElementHandler(event);
    });

    containerElement.addEventListener("mouseleave", (event) => {
      blockElement.style.display = "none";
      magnifiedElement.style.display = "none";
    });
  }, []);

  const onMouseShowPictureHandler = (index: number) => {
    for (const key in mainImgRefs.current) {
      mainImgRefs.current[key]!.classList.remove("block");
      mainImgRefs.current[key]!.classList.add("hidden");
    }
    mainImgRefs.current[index]?.classList.remove("hidden");
    mainImgRefs.current[index]?.classList.add("block");

    setPictureIndex(index);
  };

  return (
    <>
      <div className="flex flex-row  items-start relative">
        <div className="flex flex-col ">
          {imageUrl.picture.map((item, i) => {
            return (
              <div
                key={i}
                className="border-solid border-x border-y border-neutral-300 mb-4 p-1 cursor-pointer hover:gold-shadow "
                onMouseEnter={() => onMouseShowPictureHandler(i)}
              >
                <Image
                  src={item}
                  alt="p1"
                  height={50}
                  width={50}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={70}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
        <div
          ref={(elm) => (containerRef.current = elm)}
          style={containerElementStyle()}
        >
          {imageUrl.picture.map((item, i) => {
            return (
              <div
                key={i}
                className=" hidden"
                ref={(elm) => (mainImgRefs.current[i] = elm)}
              >
                <Image
                  src={item}
                  alt="no"
                  height={550}
                  width={550}
                  objectFit="cover"
                  priority
                  objectPosition="center center"
                  quality={100}
                />
              </div>
            );
          })}

          <div
            ref={(elm) => (blockRef.current = elm)}
            style={blockElementStyle()}
          />
          <div className="h-full w-full absolute top-0 left-0 md:cursor-zoom-in lg:cursor-grab"></div>
        </div>
        <div
          ref={(elm) => (magnifiedRef.current = elm)}
          style={magnifyElementStyle(pictureIndex)}
        />
      </div>
    </>
  );
};

export default Featured;
