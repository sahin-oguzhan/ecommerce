export default function Testimonials() {
  return (
    <div className="flex">
      <div className="bg-hover-color flex flex-1 justify-center">
        <div className="text-light-text-color font-montserrat flex h-130 flex-col items-center justify-center gap-10 text-center font-bold md:h-160 md:items-start md:text-left">
          <h5 className="text-base">WORK WITH US</h5>
          <h2 className="text-4xl">
            Now Let's <br className="md:hidden" /> grow Yours
          </h2>
          <p className="text-sm font-normal">
            The gradual accumulation of <br className="md:hidden" /> information
            about atomic and <br />
            small-scale behavior during the <br className="md:hidden" />
            first quarter of the 20th
          </p>
          <button className="btn bg-hover-color w-30 text-sm text-white">
            Button
          </button>
        </div>
      </div>
      <div className="flex h-160 w-147 bg-[url(images/abouttestimonials.jpg)] bg-cover bg-center max-md:hidden"></div>
    </div>
  );
}
