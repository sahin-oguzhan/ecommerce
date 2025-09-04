export default function Slider() {
  return (
    <div className="carousel bg-secondary-color-1 h-screen">
      <div
        id="slide1"
        className="carousel-item relative flex max-md:flex-col md:w-screen"
      >
        <div className="font-montserrat flex flex-1 flex-col justify-center gap-5 text-white max-md:h-1/2 max-md:w-screen max-md:text-center md:ml-40">
          <h2 className="text-xl">SUMMER 2020</h2>
          <h1 className="font-bold max-md:text-4xl md:text-6xl">
            Vita Classic <br /> Product
          </h1>
          <p className="text-xl">
            We know how large objects <br className="md:hidden" /> will act, but
            things on a <br className="md:hidden" />
            small scale.
          </p>
          <div className="flex items-center max-md:flex-col max-md:justify-center max-md:gap-2 md:gap-5">
            <p className="text-2xl font-bold">$16.48</p>
            <button className="btn btn-success w-[180px] text-sm font-bold">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex flex-1 max-md:h-1/2 md:mt-20 md:mr-40">
          <img
            src="images/slider.png"
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="absolute top-1/2 right-10 left-5 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-ghost btn-xl text-white">
            ❮
          </a>
          <a href="#slide2" className="btn btn-ghost btn-xl text-white">
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative flex max-md:flex-col md:w-screen"
      >
        <div className="font-montserrat flex flex-1 flex-col justify-center gap-5 text-white max-md:h-1/2 max-md:w-screen max-md:text-center md:ml-40">
          <h2 className="text-xl">SUMMER 2020</h2>
          <h1 className="font-bold max-md:text-4xl md:text-6xl">
            Vita Classic <br /> Product
          </h1>
          <p className="text-xl">
            We know how large objects <br className="md:hidden" /> will act, but
            things on a <br className="md:hidden" />
            small scale.
          </p>
          <div className="flex items-center max-md:flex-col max-md:justify-center max-md:gap-2 md:gap-5">
            <p className="text-2xl font-bold">$16.48</p>
            <button className="btn btn-success w-[180px] text-sm font-bold">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex flex-1 max-md:h-1/2 md:mt-20 md:mr-40">
          <img
            src="images/slider.png"
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="absolute top-1/2 right-10 left-5 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-ghost btn-xl text-white">
            ❮
          </a>
          <a href="#slide1" className="btn btn-ghost btn-xl text-white">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
