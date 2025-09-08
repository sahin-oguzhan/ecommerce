import {
  User,
  Search,
  ShoppingCart,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  ChartNoAxesColumnIncreasing,
  Heart,
} from 'lucide-react';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col">
      <div className="bg-dark-background-color font-montserrat text-light-text-color flex flex-row justify-between max-md:hidden md:py-5">
        <p className="flex flex-row gap-2">
          <Phone />
          (225) 555-0118
        </p>
        <p className="flex flex-row gap-2">
          <Mail />
          michelle.rivera@example.com
        </p>
        <p className="font-bold">Follow Us and get a chance to wind 80% off</p>
        <p className="flex flex-row gap-2 font-bold">
          Follow Us:
          <Instagram />
          <Youtube />
          <Facebook />
          <Twitter />
        </p>
      </div>
      <div className="flex flex-col gap-5 px-5 py-5 md:gap-10">
        <div className="flex flex-row justify-between py-1 max-md:justify-around max-md:gap-10">
          <div className="flex gap-50">
            <h1 className="text-text-color font-montserrat text-2xl font-bold">
              Bandage
            </h1>
            <div className="flex flex-row gap-10 max-md:hidden">
              <NavBar />
            </div>
          </div>
          <div className="max-md:gap3 flex items-center gap-5 md:gap-10">
            <div className="flex gap-3">
              <User className="text-secondary-color-2 md:text-primary-color" />
              <p className="text-text-color md:text-primary-color block max-md:hidden">
                Login / Register
              </p>
            </div>
            <Search className="text-text-color md:text-primary-color" />
            <ShoppingCart className="text-text-color md:text-primary-color" />
            <button onClick={toggleMenu} className="md:hidden">
              <ChartNoAxesColumnIncreasing className="text-text-color rotate-270" />
            </button>
            <Heart className="md:text-primary-color max-md:hidden" />
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <MobileNavBar />
          </div>
        )}
      </div>
    </div>
  );
}
