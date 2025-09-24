import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { useSelector } from 'react-redux';

export default function ProductDetailSlider({ product }) {
  const { fetchState } = useSelector((state) => state.product);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col gap-10">
      <Swiper
        modules={[Thumbs, Navigation]}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        thumbs={{ swiper: thumbsSwiper }}
        className="h-69 w-87 md:h-112.5 md:w-126.5"
      >
        {product?.images.map((image) => {
          return (
            <SwiperSlide key={image.index}>
              <img src={image.url} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="w-87 md:w-126.5"
      >
        {product?.images.map((image, index) => {
          return (
            <SwiperSlide key={image.index} className="relative">
              <img
                src={image.url}
                alt=""
                className="h-19 w-25 object-cover object-center"
              />
              <div
                className={`absolute inset-0 bg-white ${activeIndex !== index ? 'opacity-0' : 'opacity-30'}`}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
