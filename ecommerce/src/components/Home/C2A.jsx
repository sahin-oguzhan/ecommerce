export default function C2A() {
  return (
    <div className="flex h-screen items-center max-md:flex-col md:justify-center">
      <div className="flex-1 max-md:hidden">
        <img src="/images/c2a.png" alt="" />
      </div>
      <div className="font-montserrat flex flex-1 flex-col justify-end gap-7 pt-10 text-center md:text-left">
        <h5 className="text-muted-color text-base font-bold">SUMMER 2020</h5>
        <h1 className="text-text-color text-4xl font-bold">
          Part of the <br className="md:hidden" /> Neural <br /> Universe
        </h1>
        <p className="text-second-text-color text-xl font-normal">
          We know how large <br className="md:hidden" /> objects will act,{' '}
          <br className="max-md:hidden" /> but <br className="md:hidden" />
          things on a small scale.
        </p>
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <button className="btn bg-primary-color md:bg-success text-light-text-color w-[132px] text-base">
            BUY NOW
          </button>
          <button className="btn text-primary-color w-max bg-white text-base">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-end md:hidden">
        <img src="/images/c2a.png" alt="" className="" />
      </div>
    </div>
  );
}
