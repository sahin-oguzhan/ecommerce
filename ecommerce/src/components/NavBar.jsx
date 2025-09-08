import {} from 'lucide-react';
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
        <div className="relative">
          <button
            onClick={toggleShop}
            className="text-text-color flex font-medium"
          >
            Shop
            <ChevronDown />
          </button>
          {shopMenu && (
            <div className="absolute top-full z-20 w-max shadow-lg">
              <ShopMenu />
            </div>
          )}
        </div>
        <h2>About</h2>
        <h2>Blog</h2>
        <h2>Contact</h2>
        <h2>Pages</h2>
      </div>
    </div>
  );
}
