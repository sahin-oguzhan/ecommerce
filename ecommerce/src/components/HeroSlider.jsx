import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function HeroSlider() {
  return (
    <div className="carousel carousel-start h-screen w-screen">
      <div
        id="slide1"
        className="carousel-item relative flex items-center bg-[url(images/header.jpg)] bg-cover max-md:bg-position-[center_left_53rem]"
      >
        <div className="font-montserrat text-light-text-color flex h-max w-screen flex-col items-center gap-10 text-center font-bold md:items-start md:pl-80 md:text-left">
          <h5 className="text-base">SUMMER 2020</h5>
          <h2 className="text-4xl">
            NEW <br /> COLLECTION
          </h2>
          <h4 className="text-xl">
            We know how large objects <br /> will act, but things on a <br />{' '}
            small scale.
          </h4>
          <button className="bg-success text-light-text-color h-18 w-60 text-2xl">
            SHOP NOW
          </button>
        </div>
        <div className="absolute top-1/2 right-1 left-1 flex transform justify-between">
          <a href="#slide2" className="text-white">
            <ChevronLeft size={80} />
          </a>
          <a href="#slide2" className="text-white">
            <ChevronRight size={80} />
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative flex items-center bg-[url(images/header.jpg)] bg-cover max-md:bg-position-[center_left_53rem]"
      >
        <div className="font-montserrat text-light-text-color flex h-max w-screen flex-col items-center gap-10 text-center font-bold md:items-start md:pl-80 md:text-left">
          <h5 className="text-base">SUMMER 2020</h5>
          <h2 className="text-4xl">
            NEW <br /> COLLECTION
          </h2>
          <h4 className="text-xl">
            We know how large objects <br /> will act, but things on a <br />{' '}
            small scale.
          </h4>
          <button className="bg-success text-light-text-color h-18 w-60 text-2xl">
            SHOP NOW
          </button>
        </div>
        <div className="absolute top-1/2 right-1 left-1 flex transform justify-between">
          <a href="#slide1" className="text-white">
            <ChevronLeft size={80} />
          </a>
          <a href="#slide1" className="text-white">
            <ChevronRight size={80} />
          </a>
        </div>
      </div>
    </div>
  );
}
