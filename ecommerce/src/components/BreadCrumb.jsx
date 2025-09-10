import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export default function BreadCrumb() {
  return (
    <div className="font-montserrat text-text-color flex flex-col items-center gap-10 font-bold md:flex-row md:justify-around">
      <h3 className="text-2xl">Shop</h3>
      <div className="flex items-center text-sm">
        <Link to="/">Home</Link>
        <ChevronRight size={40} />
        <h6 className="text-second-text-color">Shop</h6>
      </div>
    </div>
  );
}
