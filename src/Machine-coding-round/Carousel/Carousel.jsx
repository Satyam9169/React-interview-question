import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

const Carousel = () => {
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      caption: "Speed & Style",
    },
    {
      src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
      caption: "Elegance",
    },
    {
      src: "https://images.unsplash.com/photo-1549921296-3d8c4c9b5f35",
      caption: "Performance",
    },
  ];

  const [carousel, setCaurousel] = useState(0);
  //autoplay after 3 second

  useEffect(() => {
    const interval = setInterval(() => {
      setCaurousel((pre) => pre + (1 % slides.length));
    }, 3000);
    return ()=> clearInterval(interval)
  }, []);

  return <></>;
};

export default Carousel;