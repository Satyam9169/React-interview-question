import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const imageData = [
    {
      id: 1,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/y/4/k/-original-imahgjfwyfjp9fvg.jpeg?q=70",
      alt: "TV-IMAGE-1",
    },
    {
      id: 2,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/q/6/7/-original-imahg2cfcarjxkrg.jpeg?q=70",
      alt: "TV-IMAGE-2",
    },
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      setCarouselIndex((pre) => (pre + 1) % imageData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageData.length]);

  const gotoNext = () => {
    setCarouselIndex((pre) => (pre + 1) % imageData.length);
  };

  const gotoPrev = () => {
    setCarouselIndex((pre) => (pre - 1 + imageData.length) % imageData.length);
  };

  return (
    <>
      <div className="carousel-container">
        <button className="left-side" onClick={gotoNext}>
          Left Side
        </button>
        {imageData.map((_, index) => (
          <span key={index} onClick={() => setCarouselIndex(index)}></span>
        ))}
        <button className="right-side" onClick={gotoPrev}>
          Right Side
        </button>
      </div>
    </>
  );
};

export default Carousel;
