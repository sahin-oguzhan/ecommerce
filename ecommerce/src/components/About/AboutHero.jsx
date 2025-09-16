export default function AboutHero() {
  return (
    <div className="flex flex-col items-center max-md:my-15 md:flex-row md:justify-center md:gap-60">
      <div className="font-montserrat flex flex-col items-center gap-10 text-center font-bold md:items-start md:text-left">
        <h2 className="text-text-color text-4xl">ABOUT US</h2>
        <h4 className="text-second-text-color text-xl font-normal">
          We know how large <br className="md:hidden" /> objects will act,{' '}
          <br className="max-md:hidden" /> but things{' '}
          <br className="md:hidden" />
          on a small scale just do <br className="md:hidden" />
          not act that way.
        </h4>
        <button className="btn bg-primary-color h-12 w-45 text-white">
          Get Quote Now
        </button>
      </div>
      <div className="relative flex h-120 w-100 max-md:mx-auto md:h-206 md:w-143">
        <img
          src="images/abouthero.png"
          alt=""
          className="z-10 object-cover object-center"
        />
        <div className="absolute top-8 left-8 h-12.5 w-12.5 rounded-full bg-[#FFE9EA] md:h-19 md:w-19"></div>
        <div className="absolute top-8 left-12 h-74 w-74 rounded-full bg-[#FFE9EA] md:h-121 md:w-121"></div>
        <div className="absolute top-50 right-9 h-4.5 w-4.5 rounded-full bg-[#FFE9EA] md:right-3 md:h-7.5 md:w-7.5"></div>
        <div className="absolute bottom-39 left-5 h-2.5 w-2.5 rounded-full bg-[#977DF4] md:h-3.75 md:w-3.75"></div>
        <div className="absolute top-30 right-5 h-2.5 w-2.5 rounded-full bg-[#977DF4] md:h-3.75 md:w-3.75"></div>
      </div>
    </div>
  );
}
