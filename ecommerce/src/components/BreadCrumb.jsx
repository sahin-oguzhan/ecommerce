import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export default function BreadCrumb({ text, to, tab }) {
  return (
    <div className="font-montserrat text-text-color flex flex-col items-center gap-10 font-bold md:flex-row md:justify-around">
      <h3 className="text-2xl">{tab}</h3>
      <div className="flex items-center text-sm">
        <Link to={to}>{text}</Link>
        <ChevronRight size={40} />
        <h6 className="text-second-text-color">{tab}</h6>
      </div>
    </div>
  );
}
