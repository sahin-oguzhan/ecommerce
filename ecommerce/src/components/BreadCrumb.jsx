import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export default function BreadCrumb({ text, to, tab }) {
  const navigate = useNavigate();
  return (
    <div className="font-montserrat text-text-color flex flex-col items-center gap-10 font-bold md:flex-row md:justify-around">
      <div className="flex items-center gap-5">
        <button onClick={() => navigate('/shop')}>
          <ChevronLeft size={35} />
        </button>

        <h3 className="text-2xl">{tab}</h3>
      </div>

      <div className="flex items-center text-sm">
        <Link to={to}>{text}</Link>
        <ChevronRight size={40} />
        <h6 className="text-second-text-color">{tab}</h6>
      </div>
    </div>
  );
}
