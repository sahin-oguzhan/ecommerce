import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSlider() {
  return (
    <div className="relative h-screen w-screen">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        className="customNav h-full w-full"
      >
        <SwiperSlide>
          <div className="font-montserrat text-light-text-color flex h-full w-screen flex-col items-center justify-center gap-6 bg-[url('/images/header.jpg')] bg-center text-center font-bold max-md:bg-cover md:items-start md:pl-80 md:text-left">
            <h5 className="text-base">SUMMER 2020</h5>
            <h2 className="text-4xl font-bold md:text-5xl">
              NEW <br className="md:hidden" /> COLLECTION
            </h2>
            <h4 className="max-w-md text-lg md:text-xl">
              We know how large objects <br className="md:hidden" /> will act,
              <br className="max-md:hidden" /> but things on a{' '}
              <br className="md:hidden" /> small scale.
            </h4>
            <button className="bg-success text-light-text-color mt-4 h-14 w-60 text-lg md:text-2xl">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="font-montserrat text-light-text-color flex h-full w-full flex-col items-center justify-center gap-6 bg-[url('/images/header.jpg')] bg-center text-center font-bold max-md:bg-cover md:items-start md:pl-80 md:text-left">
            <h5 className="text-base">SUMMER 2020</h5>
            <h2 className="text-4xl font-bold md:text-5xl">
              NEW <br className="md:hidden" /> COLLECTION
            </h2>
            <h4 className="max-w-md text-lg md:text-xl">
              We know how large objects <br className="md:hidden" /> will act,
              <br className="max-md:hidden" /> but things on a{' '}
              <br className="md:hidden" /> small scale.
            </h4>
            <button className="bg-success text-light-text-color mt-4 h-14 w-60 text-lg md:text-2xl">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
