import { Link } from 'react-router';
import ShopMenu from './ShopMenu';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function MobileNavBar() {
  const [toggleShop, setToggleShop] = useState(false);
  return (
    <>
      <div className="font-montserrat text-second-text-color flex w-screen flex-col items-center gap-5 text-center text-3xl">
        <div className="flex flex-row gap-1">
          <Link to={'/login'}>Login</Link>/<Link to={'/signup'}>Register</Link>
        </div>
        <Link to={'/'} className="text-text-color">
          Home
        </Link>
        <div className="flex flex-row items-center gap-2">
          <Link to={'/shop'}>Shop</Link>
          <button onClick={() => setToggleShop((prev) => !prev)}>
            <ChevronDown size={40} className="text-text-color" />
          </button>
        </div>

        {toggleShop && <ShopMenu />}
        <h2>Product</h2>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/team'}>Team</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </>
  );
}
