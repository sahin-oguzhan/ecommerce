import { FaPhone, FaLocationDot, FaPaperPlane } from 'react-icons/fa6';
import { BiPhone } from 'react-icons/bi';

export default function Contact() {
  return (
    <div className="font-montserrat my-20 flex flex-col items-center font-bold md:gap-30">
      <div className="text-text-color flex flex-col text-center md:gap-10">
        <h6 className="text-sm">VISIT OUR OFFICE</h6>
        <h2 className="text-4xl">
          We help small <br className="md:hidden" /> businesses <br /> with big
          ideas
        </h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="text-text-color flex h-83 w-82 flex-col items-center justify-center gap-5 text-sm md:h-86">
          <BiPhone size={72} className="text-primary-color" />
          <div className="text-center">
            <h6>georgia.young@example.com</h6>
            <h6>georgia.young@ple.com</h6>
          </div>
          <h5 className="text-base">Get Support</h5>
          <button className="btn text-primary-color border-primary-color">
            Submit Request
          </button>
        </div>
        <div className="text-light-text-color bg-dark-background-color flex h-98 w-82 flex-col items-center justify-center gap-5 text-sm md:h-101">
          <FaLocationDot size={72} className="fill-primary-color" />
          <div className="text-center">
            <h6>georgia.young@example.com</h6>
            <h6>georgia.young@ple.com</h6>
          </div>
          <h5 className="text-base">Get Support</h5>
          <button className="btn text-primary-color border-primary-color bg-dark-background-color">
            Submit Request
          </button>
        </div>
        <div className="text-text-color flex h-83 w-82 flex-col items-center justify-center gap-5 text-sm md:h-86">
          <FaPaperPlane size={72} className="text-primary-color" />
          <div className="text-center">
            <h6>georgia.young@example.com</h6>
            <h6>georgia.young@ple.com</h6>
          </div>
          <h5 className="text-base">Get Support</h5>
          <button className="btn text-primary-color border-primary-color">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
