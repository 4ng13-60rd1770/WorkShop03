import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  {
    url: "https://res.cloudinary.com/dxvzsg7fa/image/upload/v1652715061/workshop3/Captura_de_pantalla_2018-02-14_a_las_18.35.32-original_x1lqmy.webp",
  },
  {
    url: "https://res.cloudinary.com/dxvzsg7fa/image/upload/v1652715059/workshop3/banner-4_zn8kyj.jpg",
  },
  {
    url: "https://res.cloudinary.com/dxvzsg7fa/image/upload/v1652715057/workshop3/Captura_de_pantalla_2018-02-14_a_las_18.35.22-original_c8dlml.webp",
  },
];

const Carousel = () => {
  return (
    <div className="container">
      <AliceCarousel
        mouseTracking
        items={items.map((item) => (
          <img
            src={item.url}
            onDragStart={handleDragStart}
            role="presentation"
            alt=""
          />
        ))}
        controlsStrategy="alternate"
        autoPlay={true}
        disableButtonsControls={true}
        infinite={true}
        animationDuration={5000}
      />
    </div>
  );
};

export default Carousel;
