import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa6';
import { BiLogoFacebookSquare } from 'react-icons/bi';

export default function ContactHero() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-60">
      <div className="font-montserrat text-text-color flex flex-col items-center gap-7 text-center font-bold">
        <h5 className="text-base">CONTACT US</h5>
        <h1 className="text-4xl">
          Get in touch <br /> today!
        </h1>
        <h4 className="text-second-text-color text-xl font-normal">
          We know how large <br /> objects witll act, but things <br /> on a
          small scale just do <br /> not act that way.
        </h4>
        <h3 className="text-2xl">Phone : +451 215 215</h3>
        <h3 className="text-2xl">Fax : +451 215 215</h3>
        <div className="flex gap-5">
          <FaTwitter size={30} />
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaLinkedin size={30} />
        </div>
      </div>
      <div className="relative flex h-120 w-100 max-md:mx-auto md:h-206 md:w-143">
        <img
          src="images/contact.png"
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
