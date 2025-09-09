import { useState } from 'react';
import ShopMenu from './ShopMenu';
import { ChevronDown } from 'lucide-react';

export default function NavBar() {
  const [shopMenu, setShopMenu] = useState(false);

  const toggleShop = () => {
    setShopMenu((prev) => !prev);
  };
  return (
    <div className="font-montserrat relative font-bold">
      <div className="text-second-text-color flex flex-row gap-5">
        <h2>Home</h2>
        <div className="dropdown dropdown-hover">
          <div className="text-text-color flex">
            Shop
            <ChevronDown />
          </div>
          <div className="dropdown-content">
            <ShopMenu />
          </div>
        </div>
        <h2>About</h2>
        <h2>Blog</h2>
        <h2>Contact</h2>
        <h2>Pages</h2>
      </div>
    </div>
  );
}
