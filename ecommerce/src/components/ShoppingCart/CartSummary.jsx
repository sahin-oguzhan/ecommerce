import { ChevronRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SummaryBox from '../SummaryBox';
export default function CartSummary() {
  const { cart } = useSelector((state) => state.shoppingCart);

  const totalPayment = cart
    .filter((c) => c.checked)
    .reduce((acc, c) => acc + c.product.price * c.count, 0);
  return (
    <div className="border-primary-color flex h-max flex-col items-center gap-5 rounded-xl border-3 p-5">
      <SummaryBox />
      <button className="font-montserrat btn btn-lg bg-primary-color font-semibold text-white">
        İNDİRİM KODU GİR
      </button>
      <Link to={'/order'}>
        <button className="bg-primary-color font-montserrat btn-lg btn flex font-semibold text-white">
          Sepeti Onayla <ChevronRight />
        </button>
      </Link>
    </div>
  );
}
