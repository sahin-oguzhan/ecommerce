import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

export default function ProductDetailSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="flex w-screen flex-col gap-10">
      <Swiper
        modules={[Thumbs, Navigation]}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="h-69 w-87"
      >
        <SwiperSlide>
          <img
            src="images/productdetail-1.jpg"
            alt=""
            className="object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/productdetail-2.jpg"
            alt=""
            className="h-69 w-87 object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="w-87"
      >
        <SwiperSlide>
          <img
            src="images/productdetail-1.jpg"
            alt=""
            className="h-19 w-25 object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/productdetail-2.jpg"
            alt=""
            className="h-19 w-25 object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
