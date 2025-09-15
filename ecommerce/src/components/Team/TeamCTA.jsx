import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa6';

export default function TeamCTA() {
  return (
    <div className="font-montserrat flex flex-col items-center gap-5 text-center font-bold">
      <h2 className="text-text-color text-4xl">
        Start your <br /> 14 days free trial
      </h2>
      <p className="text-second-text-color text-sm font-normal">
        Met minim Mollie non desert Alamo est sit <br />
        cliquey dolor do met sent. RELIT official <br /> consequent.
      </p>
      <button className="btn btn-lg bg-primary-color w-max text-sm font-bold text-white">
        Try it free now
      </button>
      <div className="flex gap-3">
        <FaTwitter size={25} className="text-primary-color" />
        <FaFacebook size={25} className="text-primary-color" />
        <FaInstagram size={25} className="text-black" />
        <FaLinkedin size={25} className="text-primary-color" />
      </div>
    </div>
  );
}
