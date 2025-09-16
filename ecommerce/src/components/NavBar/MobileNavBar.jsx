import { Link } from 'react-router';

export default function MobileNavBar() {
  return (
    <>
      <div className="font-montserrat text-second-text-color flex w-screen flex-col gap-5 text-center text-3xl">
        <Link to={'/'} className="text-text-color">
          Home
        </Link>
        <Link to={'/shop'}>Shop</Link>
        <h2>Product</h2>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/team'}>Team</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </>
  );
}
