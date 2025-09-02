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
} from 'lucide-react';

import { ChartNoAxesColumnIncreasing } from 'lucide-react';

export default function NavBar() {
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
          <div className="flex gap-10">
            <h1 className="text-text-color font-montserrat text-2xl font-bold">
              Bandage
            </h1>
            <div className="flex flex-row gap-6 max-md:hidden">
              <h2>Home</h2>
              <h2>Shop</h2>
              <h2>About</h2>
              <h2>Blog</h2>
              <h2>Contact</h2>
              <h2>Pages</h2>
            </div>
          </div>
          <div className="max-md:gap3 flex gap-3">
            <User className="text-secondary-color-2" />
            <p className="block max-md:hidden">Login / Register</p>
            <Search className="text-text-color" />
            <ShoppingCart className="text-text-color" />
            <ChartNoAxesColumnIncreasing className="text-text-color rotate-270" />
          </div>
        </div>
        <div className="font-montserrat text-second-text-color flex flex-col gap-3 text-center md:hidden">
          <h2 className="font-normal">Home</h2>
          <h2>Product</h2>
          <h2>Pricing</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
}
