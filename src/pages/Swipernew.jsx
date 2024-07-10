import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import box from '/tokenbox.png';
import leftBox from '/leftTokenbox.png';
import rightBox from '/rightTokenbox.png';

function Swipernew() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src={leftBox}
          alt='tokenbox'
          className='w-[190px] h-[205px] sm:w-[250px] sm:h-[268px] lg:w-[387px] lg:h-[418px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={box}
          alt='tokenbox'
          className='w-[190px] h-[205px] sm:w-[250px] sm:h-[268px] lg:w-[387px] lg:h-[418px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={rightBox}
          alt='tokenbox'
          className='w-[190px] h-[205px] sm:w-[250px] sm:h-[268px] lg:w-[387px] lg:h-[418px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={rightBox}
          alt='tokenbox'
          className='w-[190px] h-[205px] sm:w-[250px] sm:h-[268px] lg:w-[387px] lg:h-[418px] object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={rightBox}
          alt='tokenbox'
          className='w-[190px] h-[205px] sm:w-[250px] sm:h-[268px] lg:w-[387px] lg:h-[418px] object-cover'
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Swipernew;
