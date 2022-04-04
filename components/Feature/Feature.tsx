import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
interface IFeatureProps {
  picture: string[];
}

const Feature = ({ picture }: IFeatureProps) => {
  const [pictureIndex, setPictureIndex] = useState<number>(0);

  const mainImgRefs = useRef<{ [key: string]: HTMLElement }>({});
  const containerRef = useRef({} as HTMLElement);

  const blockRef = useRef({} as HTMLDivElement);

  const magnifiedRef = useRef({} as HTMLDivElement);

  const block_width = useRef(125).current;
  const block_height = useRef(125).current;
  const mainImg_width = useRef(500).current;
  const mainImg_height = useRef(500).current;

  const mainImgElementStyle = (): React.CSSProperties => ({
    position: "relative",
    marginLeft: "0.1rem",
    marginRight: "0.3rem",
  });

  const magnifyElementStyle = (pictureIndex: number): React.CSSProperties => ({
    display: "none",
    position: "relative",
    zIndex: "20",
    backgroundImage: `url(${picture[pictureIndex]})`,
    backgroundColor: "white",
    backgroundRepeat: "no-repeat",
    backgroundSize: "350%",
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
    mainImgRefs.current[0].classList.remove("hidden");
    mainImgRefs.current[0].classList.add("block");
  }, []);

  useEffect(() => {
    const blockElement = blockRef.current;
    const containerElement = containerRef.current;
    const magnifiedElement = magnifiedRef.current;

    const controlBlockHandler = (event: MouseEvent) => {
      if (window.innerWidth < 1024) return;

      const target_rect = containerElement.getBoundingClientRect();
      const target_top = target_rect.top + window.pageYOffset;

      let x = event.pageX - target_rect.left;
      let y = event.pageY - target_top;

      if (event.offsetY < block_width / 2) {
        y = block_width / 2;
      } else if (event.offsetY > mainImg_width - block_width / 2) {
        y = mainImg_width - block_width / 2;
      }
      if (event.offsetX < block_height / 2) {
        x = block_height / 2;
      } else if (event.offsetX > mainImg_height - block_height / 2) {
        x = mainImg_height - block_height / 2;
      }

      blockElement.style.left = `${x - block_width / 2}px`;
      blockElement.style.top = `${y - block_height / 2}px`;
      blockElement.style.display = "block";
    };

    const magnifiedElementHandler = (event: MouseEvent) => {
      if (window.innerWidth < 768) return;
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

    containerElement.addEventListener("mouseleave", () => {
      blockElement.style.display = "none";
      magnifiedElement.style.display = "none";
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onMouseShowPictureHandler = (index: number) => {
    for (const key in mainImgRefs.current) {
      mainImgRefs.current[key]?.classList.remove("block");
      mainImgRefs.current[key]?.classList.add("hidden");
    }
    mainImgRefs.current[index]?.classList.remove("hidden");
    mainImgRefs.current[index]?.classList.add("block");

    setPictureIndex(index);
  };

  return (
    <>
      <div className="flex flex-row  items-start relative">
        <div className="flex flex-col ">
          {picture.map((item, i) => {
            return (
              <div
                key={i}
                className="flex-none mb-4 p-1 border-solid border-x border-y border-neutral-300 cursor-pointer hover:gold-shadow"
                onMouseEnter={() => onMouseShowPictureHandler(i)}
              >
                <Image
                  src={item}
                  alt={"preview"}
                  height={50}
                  width={50}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={70}
                />
              </div>
            );
          })}
        </div>
        <div
          ref={(elm) =>elm && (containerRef.current = elm)}
          style={mainImgElementStyle()}
        >
          {picture.map((url, i) => {
            return (
              <div
                key={i}
                className="hidden"
                ref={(elm) =>elm && (mainImgRefs.current[i] = elm)}
              >
                <Image
                  src={url}
                  alt="main"
                  height={500}
                  width={500}
                  objectFit="cover"
                  objectPosition="center center"
                  quality={70}
                  priority={true}
                  placeholder="blur"
                  blurDataURL={url}
                />
              </div>
            );
          })}

          <div
            ref={(elm) =>elm && (blockRef.current = elm)}
            style={blockElementStyle()}
          />
          <div className="h-full w-full absolute top-0 left-0 md:cursor-zoom-in lg:cursor-grab"></div>
        </div>
        <div
          ref={(elm) =>elm && (magnifiedRef.current = elm)}
          style={magnifyElementStyle(pictureIndex)}
        />
      </div>
    </>
  );
};

export default Feature;
