import React, { memo } from "react";
import { Carousel } from "react-responsive-carousel";
import "./index.scss";
function CustomCarousel(props) {
  const { data = [] } = props;
  return (
    <Carousel
      axis="horizontal"
      autoPlay
      showArrows={false}
      showThumbs={false}
      infiniteLoop
      stopOnHover={false}
      className="carouselMainContainer"
      {...props}
    >
      {data &&
        data?.length > 0 &&
        data?.map((item, index) => (
          <div key={index} className="carouselContainer">
            <img src={item?.image} />
          </div>
        ))}
    </Carousel>
  );
}

export default memo(CustomCarousel);
