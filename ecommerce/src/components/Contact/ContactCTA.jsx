import { PiArrowBendRightDownBold } from 'react-icons/pi';

export default function ContactCTA() {
  return (
    <div className="mb-20 flex flex-col items-center gap-5">
      <PiArrowBendRightDownBold size={72} className="fill-primary-color" />
      <div className="font-montserrat text-text-color flex flex-col items-center gap-5 font-bold">
        <h5 className="text-base">WE CAN'T WAIT TO MEET YOU</h5>
        <h1 className="text-6xl">Let's Talk</h1>
        <button className="btn bg-primary-color h-15 w-50 text-sm font-normal text-white">
          Try it free now
        </button>
      </div>
    </div>
  );
}
