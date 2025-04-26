import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import ProductCard from '@/components/ProductCard';
import { productData } from '@/constant/config';

const NewArrivalSlider = () => {
  return (
    <Swiper
      breakpoints={{
        641: {
          // width: 576,
          slidesPerView: 2,
        },
        768: {
          // width: 768,
          slidesPerView: 3,
        },
        1240: {
          slidesPerView: 4,
        },
      }}
      // slidesPerView={4}
      spaceBetween={30}
      scrollbar={{
        hide: false,
      }}
      modules={[Scrollbar]}
      className='scroll-swiper'
    >
      {productData.map((item: any, i: number) => (
        <SwiperSlide key={i}>
          <ProductCard
            name={item.name}
            image={item.image}
            url={'#'}
            price={item.price}
            priceBefore={item.priceBefore}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewArrivalSlider;
