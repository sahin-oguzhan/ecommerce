import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider() {
  return (
    <div className="relative h-screen w-screen">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        className="bg-secondary-color-1 customNav h-full w-full"
      >
        <SwiperSlide>
          <div className="flex h-full w-full flex-col md:flex-row">
            <div className="font-montserrat flex flex-1 flex-col justify-center gap-5 text-center text-white max-md:h-1/2 max-md:w-full md:ml-40 md:text-left">
              <h2 className="text-xl">SUMMER 2020</h2>
              <h1 className="text-4xl font-bold md:text-6xl">
                Vita Classic <br /> Product
              </h1>
              <p className="text-xl">
                We know how large objects <br className="md:hidden" /> will act,
                but things on a <br className="md:hidden" />
                small scale.
              </p>
              <div className="flex items-center justify-center gap-5 max-md:flex-col max-md:gap-2 md:justify-start">
                <p className="text-2xl font-bold">$16.48</p>
                <button className="btn btn-success w-[180px] text-sm font-bold">
                  ADD TO CART
                </button>
              </div>
            </div>

            <div className="flex flex-1 max-md:h-1/2 md:mt-20 md:mr-40">
              <img
                src="/images/slider.png"
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex h-full w-full flex-col md:flex-row">
            <div className="font-montserrat flex flex-1 flex-col justify-center gap-5 text-center text-white max-md:h-1/2 max-md:w-full md:ml-40 md:text-left">
              <h2 className="text-xl">SUMMER 2020</h2>
              <h1 className="text-4xl font-bold md:text-6xl">
                Vita Classic <br /> Product
              </h1>
              <p className="text-xl">
                We know how large objects <br className="md:hidden" /> will act,
                but things on a <br className="md:hidden" />
                small scale.
              </p>
              <div className="flex items-center justify-center gap-5 max-md:flex-col max-md:gap-2 md:justify-start">
                <p className="text-2xl font-bold">$16.48</p>
                <button className="btn btn-success w-[180px] text-sm font-bold">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="flex flex-1 max-md:h-1/2 md:mt-20 md:mr-40">
              <img
                src="/images/slider.png"
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
