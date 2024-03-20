import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img3 from "./img-Swiper/3.jpeg";

const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        // className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="img">
            <img src={img3} alt="imagen1"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={img3} alt="imagen2"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={img3} alt="imagen1"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={img3} alt="imagen1"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={img3} alt="imagen1"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={img3} alt="imagen1"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
