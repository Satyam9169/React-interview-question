import React from "react";

const CarouselItem = ({ src, caption, active }) => {
  return (
    <div className={`carousel-image ${active ? "active" : ""}`}>
      <img src={src} alt={caption} className="carousel-image" />
      <div className="caption">{caption}</div>
    </div>
  );
};

export default CarouselItem;
