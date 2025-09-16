import { useState } from 'react';
import ShopMenu from './ShopMenu';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';

export default function NavBar() {
  const [shopMenu, setShopMenu] = useState(false);

  const toggleShop = () => {
    setShopMenu((prev) => !prev);
  };
  return (
    <div className="font-montserrat relative font-bold">
      <div className="text-second-text-color flex flex-row gap-5">
        <Link to={'/'}>Home</Link>
        <div className="dropdown dropdown-hover">
          <div className="text-text-color flex">
            <Link to={'/shop'}>Shop</Link>
            <ChevronDown />
          </div>
          <div className="dropdown-content">
            <ShopMenu />
          </div>
        </div>
        <h2>Blog</h2>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/team'}>Team</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </div>
  );
}
