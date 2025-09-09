import {
  FaLyft,
  FaHooli,
  FaPiedPiperHat,
  FaStripe,
  FaAws,
  FaRedditAlien,
} from 'react-icons/fa6';

export default function Clients() {
  return (
    <div className="text-second-text-color flex flex-col items-center justify-center max-md:h-screen md:my-30 md:flex-row md:gap-15">
      <FaHooli size={125} />
      <FaLyft size={125} />
      <FaPiedPiperHat size={125} />
      <FaStripe size={125} />
      <FaAws size={125} />
      <FaRedditAlien size={125} />
    </div>
  );
}
