import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export default function InnerBreadCrumb({ to, text, tab }) {
  return (
    <div className="flex items-center font-bold">
      <Link to={to} className="text-text-color text-sm">
        {text}
      </Link>
      <ChevronRight size={30} className="text-muted-color" />
      <h6 className="text-second-text-color text-sm">{tab}</h6>
    </div>
  );
}
