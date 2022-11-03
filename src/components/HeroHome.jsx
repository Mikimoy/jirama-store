import { Container } from "react-bootstrap";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import {EffectFade, Autoplay, Mousewheel, Pagination, Navigation } from "swiper";
import slide from '../assets/herohome.webp';
import slide2 from '../assets/herohome2.webp';
import slide3 from '../assets/herohome3.webp';
import slide4 from '../assets/herohome4.webp';

import "../styles/herohome.css";

const HeroHome = () => {
  return (
    <div>
        <Container>
            <Swiper
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            mousewheel={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            dynamicBullets: true,
            }}
            navigation={true}
            modules={[EffectFade, Autoplay, Mousewheel, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img src={slide} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
            </Swiper>
        </Container>
    </div>
  )
}

export default HeroHome