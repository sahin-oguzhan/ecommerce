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
      <div className="bg-dark-background-color font-montserrat text-light-text-color flex flex-row justify-center gap-30 py-2 max-md:hidden">
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
      <div className="mt-3 flex flex-col gap-10">
        <div className="flex flex-row justify-center gap-120 max-md:justify-around max-md:gap-10">
          <div className="flex gap-1">
            <h1 className="text-text-color font-montserrat text-2xl font-bold">
              Bandage
            </h1>
            <div className="flex flex-row gap-10 max-md:hidden">
              <NavBar />
            </div>
          </div>
          <div className="max-md:gap3 flex gap-3">
            <User className="text-secondary-color-2" />
            <p className="text-text-color block max-md:hidden">
              Login / Register
            </p>
            <Search className="text-text-color" />
            <ShoppingCart className="text-text-color" />
            <button onClick={toggleMenu}>
              <ChartNoAxesColumnIncreasing className="text-text-color rotate-270" />
            </button>
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
