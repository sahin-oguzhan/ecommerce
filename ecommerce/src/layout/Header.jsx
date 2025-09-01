import { User } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { ChartNoAxesColumnIncreasing } from 'lucide-react';
export default function Header() {
  return (
    <div className="mt-3 flex flex-col gap-10">
      <div className="flex flex-row justify-between gap-40">
        <div className="flex gap-10">
          <h1 className="text-text-color font-montserrat text-2xl font-bold">
            Bandage
          </h1>
          <div className="flex flex-row gap-3 max-md:hidden">
            <h2>Home</h2>
            <h2>Shop</h2>
            <h2>About</h2>
            <h2>Blog</h2>
            <h2>Contact</h2>
            <h2>Pages</h2>
          </div>
        </div>
        <div className="flex max-sm:gap-3">
          <User className="text-secondary-color-2" />
          <Search className="text-text-color" />
          <ShoppingCart className="text-text-color" />
          <ChartNoAxesColumnIncreasing className="text-text-color rotate-270" />
        </div>
      </div>
      <div className="font-montserrat text-second-text-color flex flex-col gap-3 text-center md:hidden">
        <h1 className="font-normal">Home</h1>
        <h1>Product</h1>
        <h1>Pricing</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
}
