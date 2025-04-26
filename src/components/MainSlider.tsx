import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { MainSliderImages } from '@/constant/config';
import NextImage from '@/components/NextImage';

const MainSlider = () => {
  return (
    <Swiper
      className='main-swiper'
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {MainSliderImages.map((item: any, i: number) => (
        <SwiperSlide key={i}>
          <img alt={item.title} src={item.url} width={1240} height={500} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
