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
  LogOut,
} from 'lucide-react';
import NavBar from '../components/NavBar/NavBar';
import MobileNavBar from '../components/NavBar/MobileNavBar';
import { useState } from 'react';
import { Link } from 'react-router';
import Gravatar from 'react-gravatar';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../redux/actions/clientActions';

export default function Header() {
  const user = useSelector((state) => state.client.user);
  const dispatch = useDispatch();

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobile = () => {
    setMobileMenu((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.clear('authToken');
    console.log('ÇIKIŞ');
  };

  return (
    <div className="w-screen flex-col">
      <div className="bg-dark-background-color font-montserrat text-light-text-color flex flex-row justify-between px-5 max-md:hidden md:py-5">
        <p className="flex flex-row gap-2">
          <Phone />
          (225) 555-0118
        </p>
        <p className="flex flex-row gap-2">
          <Mail />
          michelle.rivera@example.com
        </p>
        <p className="font-bold">Follow Us and get a chance to wind 80% off</p>
        <p className="flex flex-row items-center gap-2 font-bold">
          Follow Us:
          <Instagram size={25} />
          <Youtube size={25} />
          <Facebook size={25} />
          <Twitter size={25} />
        </p>
      </div>
      <div className="flex flex-col gap-5 px-5 py-5 md:gap-10">
        <div className="flex flex-row items-center justify-between py-1 max-md:justify-around max-md:gap-10">
          <h1 className="text-text-color font-montserrat text-2xl font-bold">
            Bandage
          </h1>
          <div className="max-md:hidden">
            <NavBar />
          </div>
          <div className="max-md:gap3 flex items-center gap-5 md:gap-10">
            <div className="flex gap-3">
              {localStorage.getItem('authToken') || user?.token ? (
                <div className="font-montserrat flex items-center gap-2 text-sm font-bold">
                  <Gravatar
                    email={user?.email}
                    size={40}
                    default="identicon"
                    className="rounded-full"
                  />
                  <p>{user?.name}</p>
                </div>
              ) : (
                <>
                  <User className="text-secondary-color-2 md:text-primary-color" />
                  <div className="text-text-color md:text-primary-color flex gap-3 max-md:hidden">
                    <Link to={'/login'}>Login</Link>/
                    <Link to={'/signup'}>Register</Link>
                  </div>
                </>
              )}
            </div>
            <Search className="text-text-color md:text-primary-color" />
            <ShoppingCart className="text-text-color md:text-primary-color" />
            <button onClick={toggleMobile} className="md:hidden">
              <ChartNoAxesColumnIncreasing className="text-text-color rotate-270" />
            </button>
            <Heart className="md:text-primary-color max-md:hidden" />
            {user?.token && (
              <button onClick={handleLogout}>
                <LogOut className="text-primary-color" />
              </button>
            )}
          </div>
        </div>
        {mobileMenu && (
          <div className="flex md:hidden">
            <MobileNavBar />
          </div>
        )}
      </div>
    </div>
  );
}
