import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import '../css/swiper.css';

// import required modules
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';

import Cursor from '../../../Cursor'

export default function Carousal() {
  return (
    <>
        <Cursor />
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        autoplay={{
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false, // Keeps autoplay running even after user interaction
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='hover-target' src={image1} alt="Nature 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hover-target' src={image2} alt="Nature 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hover-target' src={image3} alt="Nature 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='hover-target' src={image4} alt="Nature 4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
